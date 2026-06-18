// ============================================
// PAGE NAVIGATION
// ============================================
(function() {
  // Get all page elements
  const pages = {
    home: document.getElementById('page-home'),
    gallery: document.getElementById('page-gallery'),
    contact: document.getElementById('page-contact')
  };
  
  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-links a');

  // Function to show a specific page
  function showPage(pageId) {
    // Hide all pages
    Object.keys(pages).forEach(key => {
      if (pages[key]) {
        pages[key].classList.remove('active');
      }
    });
    
    // Show selected page
    if (pages[pageId]) {
      pages[pageId].classList.add('active');
    }
    
    // Update nav active class
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      }
    });

    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Add click event listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      if (page) {
        showPage(page);
      }
    });
  });

  // Handle gallery CTA button click
  const galleryCtaBtn = document.querySelector('.gallery-cta-btn');
  if (galleryCtaBtn) {
    galleryCtaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      if (page) {
        showPage(page);
      }
    });
  }

  // ============================================
  // CONTACT FORM HANDLING
  // ============================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation check
      const name = this.querySelector('input[type="text"]')?.value?.trim();
      const email = this.querySelector('input[type="email"]')?.value?.trim();
      
      if (!name || !email) {
        alert('Please fill in your name and email address.');
        return;
      }
      
      // Show success message
      alert('✅ Thank you! Our team will get back to you within 24 hours.');
      this.reset();
    });
  }

  // ============================================
  // SPONSOR CAROUSEL - Pause on interaction
  // ============================================
  const sponsorTrack = document.getElementById('sponsorTrack');
  const carouselWrapper = document.querySelector('.sponsor-carousel-wrapper');
  
  if (sponsorTrack && carouselWrapper) {
    // Pause animation when user hovers over any sponsor item
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    sponsorItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        sponsorTrack.style.animationPlayState = 'paused';
      });
      item.addEventListener('mouseleave', () => {
        sponsorTrack.style.animationPlayState = 'running';
      });
    });

    // Pause when carousel wrapper is hovered
    carouselWrapper.addEventListener('mouseenter', () => {
      sponsorTrack.style.animationPlayState = 'paused';
    });
    carouselWrapper.addEventListener('mouseleave', () => {
      sponsorTrack.style.animationPlayState = 'running';
    });
  }

  // ============================================
  // SMOOTH SCROLL FOR INTERNAL LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ============================================
  // CONSOLE WELCOME
  // ============================================
  console.log('⚡ Taura Solar & Electrical Services Ltd');
  console.log('🔧 Powering Kenya with reliable energy solutions.');
  console.log('📞 Call us: +254 700 123 456');
  console.log('🏢 Trusted partners carousel loaded successfully!');
  console.log('📸 Gallery page with videos and photos added!');

})();