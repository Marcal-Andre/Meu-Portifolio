  (function() {
            "use strict";

            const header = document.getElementById('mainHeader');
            window.addEventListener('scroll', function() {
                header.classList.toggle('transparente', window.scrollY > 20);
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== "#" && href.startsWith("#")) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }
                });
            });

            const skillCards = Array.from(document.querySelectorAll('.skill-card-stair'));
            
            function checkSkillsVisibility() {
                const triggerBottom = window.innerHeight * 0.85;
                
                skillCards.forEach((card, index) => {
                    const cardTop = card.getBoundingClientRect().top;
                    
                    if (cardTop < triggerBottom) {
                        const reverseIndex = skillCards.length - 1 - index;
                        setTimeout(() => {
                            card.classList.add('ativo');
                        }, reverseIndex * 180);
                    } else {
                        card.classList.remove('ativo');
                    }
                });
            }

            window.addEventListener('scroll', checkSkillsVisibility);
            window.addEventListener('load', checkSkillsVisibility);
        })();