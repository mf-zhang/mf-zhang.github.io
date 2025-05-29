// Handle tag navigation offset
document.addEventListener('DOMContentLoaded', function() {
  // Get the hash from the URL
  const hash = window.location.hash;
  if (hash) {
    // Wait for the page to fully load
    setTimeout(function() {
      // Get the element with the hash
      const element = document.querySelector(hash);
      if (element) {
        // Get the header height based on device type
        const isMobile = window.innerWidth <= 768; // 768px is a common breakpoint for mobile devices
        const headerHeight = isMobile ? 50 : 60; // 50px for mobile, 60px for desktop
        
        // Calculate the element's position
        const elementPosition = element.getBoundingClientRect().top;
        // Calculate the offset position
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        // Scroll to the offset position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
}); 