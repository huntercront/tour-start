var i = 1;
let slideSelcts = document.querySelectorAll('.slider-slide')
slideSelcts.forEach(function(slideSelct) {
    slideSelct.addEventListener('click', function(e) {

        let activeSlide = document.querySelector('.active-slide');
        let activeSlideImg = document.querySelector('[data-img="' + activeSlide.getAttribute('data-place') + '"]')
        if (!this.classList.contains('active-slide')) {
            activeSlide.classList.add('progress');
            this.classList.add('active-slide');

            let newSlideImg = document.querySelector('[data-img="' + this.getAttribute('data-place') + '"]');


            if (activeSlideImg.classList.contains('active-img')) {
                activeSlideImg.classList.add('proces')
            }
            setTimeout(function() {
                activeSlideImg.classList.remove('active-img', 'proces');
                newSlideImg.classList.add('active-img');


                activeSlide.classList.remove('active-slide');
                activeSlide.classList.remove('progress');
                activeSlide.style.order = i;
                i++;
            }, 500)
        }
    })
})