function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
}

// Load the original wc-cursor.js content
const script = document.createElement('script');
script.src = '../assets/js/wc-cursor.js'; // Adjust this path as needed
document.head.appendChild(script);

// Function to handle cursor visibility
function handleCursorVisibility() {
  const cursorElements = document.querySelectorAll('.cursor1, .cursor2');
  cursorElements.forEach(el => {
      if (el) {
          if (isMobileDevice()) {
              el.style.display = 'none';
          } else {
              el.style.display = '';
          }
      }
  });
}

// Initial check
handleCursorVisibility();

// Check on resize
window.addEventListener('resize', handleCursorVisibility);