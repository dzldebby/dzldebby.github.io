function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
}

if (!isMobileDevice()) {
  // We'll load the original wc-cursor.js content here
}

window.addEventListener('resize', function() {
  const cursorElements = document.querySelectorAll('.cursor1, .cursor2');
  cursorElements.forEach(el => {
      if (el) {
          el.style.display = isMobileDevice() ? 'none' : '';
      }
  });
});

// Load the original wc-cursor.js content
if (!isMobileDevice()) {
  const script = document.createElement('script');
  script.src = 'wc-cursor.js';
  document.head.appendChild(script);
}