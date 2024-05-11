if (typeof window !== 'undefined') {
    const navLinkEls = document.querySelectorAll('.nav_link');
    const sectionEls = document.querySelectorAll('.section');
  
    let currentSection = 'section1';
    window.addEventListener('scroll', () => {
      sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 200)) {
          currentSection = sectionEl.id;
        }
      });
    
      navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
          document.querySelector('.active').classList.remove('active');
          navLinkEl.classList.add('active');
        }
      });
    });
  }
  
  
  
  