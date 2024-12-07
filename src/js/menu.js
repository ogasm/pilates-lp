// menu.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  // 要素が存在するか確認してから処理を実行
  if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          nav.classList.toggle('active');
      });

      const navLinks = document.querySelectorAll('.nav__item a');
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              nav.classList.remove('active');
          });
      });
  }

  // スクロール時のヘッダー表示/非表示
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 70) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  });

  // スムーズスクロール
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (!target) return;
        
        const headerHeight = 70; // ヘッダーの高さ
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // ハンバーガーメニューが開いている場合は閉じる
        const nav = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
  });
});