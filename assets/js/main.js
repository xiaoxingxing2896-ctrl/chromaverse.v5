document.addEventListener('DOMContentLoaded', function () {
  // Highlight active nav link based on URL
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    try {
      const href = a.getAttribute('href');
      if ((location.pathname.endsWith(href)) || (location.pathname.endsWith('/') && href === 'index.html')) {
        a.classList.add('active');
      }
    } catch (e) {}
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '16px';
      nav.style.background = 'white';
      nav.style.padding = '8px';
      nav.style.borderRadius = '10px';
      nav.style.boxShadow = '0 6px 18px rgba(20,20,30,0.08)';
      nav.style.zIndex = '80';
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const isNav = e.target.closest('.nav') || e.target.closest('#nav-toggle');
      if (!isNav) {
        // hide
        if (nav) nav.style.display = '';
      }
    }
  });

  // Buy button placeholder
  document.querySelectorAll('.buy-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('这是预留的购买/支持接口。部署时请替换为真实支付链接或表单。');
    });
  });
});
