function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const target = id === 'blog1' || id === 'blog2' ? 'blogs' : id;
  const navEl = document.getElementById('nav-' + target);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function handleSubmit(e) {
  e.preventDefault();
  document.querySelector('form').style.display = 'none';
  document.getElementById('submitted').style.display = 'block';
}
