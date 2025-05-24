
        // Mobile menu toggle
        document.getElementById("menu-toggle").addEventListener("click", function() {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.toggle("hidden");
        });

        // Smooth scrolling for mobile menu links
        document.querySelectorAll('#mobile-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                document.getElementById("mobile-menu").classList.add("hidden");
            });
        });

        // Smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
