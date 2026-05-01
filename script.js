
  document.addEventListener("DOMContentLoaded", function() {
      const loadMoreBtn = document.getElementById('loadMoreBtn');
      const hiddenFaqs = document.querySelectorAll('.faq-hidden');
      
      if(loadMoreBtn) {
          loadMoreBtn.addEventListener('click', function() {
              // Loop through all hidden FAQs and show them
              hiddenFaqs.forEach(function(faq) {
                  faq.classList.remove('faq-hidden');
                  // Add a smooth fade-in animation
                  faq.style.animation = "fadeIn 0.5s ease forwards";
              });
              
              // Hide the Load More button after all items are shown
              loadMoreBtn.style.display = 'none';
          });
      }
  });