        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Get the target element
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                // Scroll to the target element
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        function sendEmail() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let subject = document.getElementById("subject").value;
            let message = document.getElementById("message").value;
    
            let mailtoLink = `mailto:teegurivyshnavi@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
    
            window.location.href = mailtoLink;
        }
        // Basic form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset(); // Reset form after submission
        });
        document.addEventListener("DOMContentLoaded", () => {
            const navLinks = document.querySelectorAll("nav a");

            navLinks.forEach(link => {
                link.addEventListener("click", function () {
                    // Remove 'active' class from all links
                    navLinks.forEach(nav => nav.classList.remove("active"));

                    // Add 'active' class to the clicked link
                    this.classList.add("active");
                });
            });
        });