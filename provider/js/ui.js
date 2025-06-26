export function ui() {
  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    document.querySelector('.layout')?.classList.toggle('sidebar-collapsed');
  });

  const showBtn = document.getElementById('show-widget');
  const widget = document.getElementById('url-widget');
  const closeBtn = document.getElementById('close-widget');

  showBtn?.addEventListener('click', () => widget?.classList.remove('hidden'));
  closeBtn?.addEventListener('click', () => widget?.classList.add('hidden'));

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(val).then(() => {
        btn.textContent = '✅';
        setTimeout(() => (btn.textContent = '📋'), 1000);
      });
    });
  });
}
