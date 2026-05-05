
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

// Gallery Section - Lightbox Functionality
  function openLightbox(slideIndex) {
      // Get the carousel element
      var myCarouselElement = document.getElementById('galleryCarousel');
      
      // Initialize Bootstrap carousel instance
      var carousel = bootstrap.Carousel.getInstance(myCarouselElement);
      if (!carousel) {
          carousel = new bootstrap.Carousel(myCarouselElement, {
              interval: false // disables auto-sliding
          });
      }
      
      // Move to the clicked image index
      carousel.to(slideIndex);
  }


    /* ===============================
        WhatsApp Form Logic
       =============================== */
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Page reload hone se rokega

        // 1. Clinic ka WhatsApp Number (Country code 91 ke sath)
        var myPhoneNumber = "919453272173"; 

        // 2. Form ke saare input fields se data fetch karna
        var name = document.getElementById('ptName').value;
        var age = document.getElementById('ptAge').value;
        var sex = document.getElementById('ptSex').value;
        var mobile = document.getElementById('ptMobile').value;
        var date = document.getElementById('ptDate').value;
        var time = document.getElementById('ptTime').value;
        var doctor = document.getElementById('ptDoctor').value;

        // 3. WhatsApp par bheje jane wale message ka format (Bolding ke liye * use kiya hai)
        var message = "Hello Yogi Piles Centre, I would like to book an appointment. Here are my details:" + "\n\n" +
                      "👤 *Patient Name:* " + name + "\n" +
                      "🎂 *Age:* " + age + "\n" +
                      "⚧️ *Sex:* " + sex + "\n" +
                      "📱 *Mobile:* " + mobile + "\n" +
                      "📅 *Preferred Date:* " + date + "\n" +
                      "⏰ *Preferred Time:* " + time + "\n" +
                      "👨‍⚕️ *Selected Doctor:* " + doctor;

        // 4. URL Encode karke WhatsApp API link banana
        var url = "https://wa.me/" + myPhoneNumber + "?text=" + encodeURIComponent(message);
        
        // 5. Naye tab me WhatsApp open karna
        window.open(url, '_blank').focus();
        
        // Optional: Message bhejte hi form ko reset/khali kar dega
        document.getElementById('bookingForm').reset();
    });