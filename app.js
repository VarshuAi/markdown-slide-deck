
            let idx = 0;
            const slides = ["Slide 1: Welcome!", "Slide 2: Glassmorphism Design", "Slide 3: End of Deck"];
            window.nextSlide = function(dir) {
                idx += dir;
                if(idx < 0) idx = 0;
                if(idx >= slides.length) idx = slides.length - 1;
                document.getElementById('slide-box').innerText = slides[idx];
            }
        