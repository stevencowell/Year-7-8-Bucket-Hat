(() => {
  const fields = [...document.querySelectorAll('[data-activity-key]')];
  fields.forEach(field => {
    const key = `buckethat:activity:${field.dataset.activityKey}`;
    const label = document.querySelector(`label[for="${field.id}"]`)?.textContent.trim() || 'Written response';
    localStorage.setItem(`buckethat:activity-meta:${field.dataset.activityKey}`, label);
    field.value = localStorage.getItem(key) || '';
    field.addEventListener('input', () => { localStorage.setItem(key, field.value); update(); });
  });
  function update() {
    let started = 0;
    document.querySelectorAll('.activity-card').forEach(card => { if ([...card.querySelectorAll('[data-activity-key]')].some(f => f.value.trim().length >= 20)) started++; });
    document.querySelector('[data-activity-count]').textContent = `${started}/10`;
    document.querySelector('[data-activity-progress]').style.width = `${started * 10}%`;
  }
  const target = location.hash && document.querySelector(location.hash);
  if (target?.tagName === 'DETAILS') { target.open = true; setTimeout(() => target.scrollIntoView({block:'start'}), 80); }
  document.querySelector('[data-print-activities]').addEventListener('click', () => window.print());
  let printStates = [];
  window.addEventListener('beforeprint', () => {
    printStates = [...document.querySelectorAll('.activity-card')].map(card => card.open);
    document.querySelectorAll('.activity-card').forEach(card => { card.open = true; });
  });
  window.addEventListener('afterprint', () => {
    document.querySelectorAll('.activity-card').forEach((card, index) => { card.open = printStates[index] ?? false; });
  });
  update();
})();
