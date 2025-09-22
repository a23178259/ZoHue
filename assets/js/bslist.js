(() => {
    const seen = { text:new Set(), bg:new Set(), border:new Set(), rounded:new Set(), shadow:new Set(), fs:new Set() };
    for (const sheet of Array.from(document.styleSheets)) {
      let rules; try { rules = sheet.cssRules; } catch { continue; }
      for (const r of Array.from(rules || [])) {
        if (!r.selectorText) continue;
        for (const sel of r.selectorText.split(',')) {
          const s = sel.trim();
          let m;
          if ((m = s.match(/\.text-([a-z0-9-]+)/)))   seen.text.add(m[1]);
          if ((m = s.match(/\.bg-([a-z0-9-]+)/)))     seen.bg.add(m[1]);
          if ((m = s.match(/\.border-([a-z0-9-]+)/))) seen.border.add(m[1]);
          if ((m = s.match(/\.rounded(?:-([a-z0-9-]+))?/))) seen.rounded.add(m[1]||'default');
          if ((m = s.match(/\.shadow(?:-([a-z0-9-]+))?/)))  seen.shadow.add(m[1]||'default');
          if ((m = s.match(/\.fs-([0-9]+)/)))         seen.fs.add(m[1]);
        }
      }
    }
    console.log('text-* :', [...seen.text].sort());
    console.log('bg-*   :', [...seen.bg].sort());
    console.log('border-*:', [...seen.border].sort());
    console.log('rounded-*:', [...seen.rounded].sort());
    console.log('shadow-* :', [...seen.shadow].sort());
    console.log('fs-*     :', [...seen.fs].sort());
  })();  