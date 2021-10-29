var i = 1;
let selectorWrapper = document.querySelector('.tour-start');
let slideSelcts = document.querySelectorAll('.slider-slide');
let tourLink = document.querySelector('.tour-link')
slideSelcts.forEach(function(slideSelct) {
    slideSelct.addEventListener('click', function(e) {

        let activeSlide = document.querySelector('.active-slide');
        let activeSlideImg = document.querySelector('[data-img="' + activeSlide.getAttribute('data-place') + '"]');

        let activeSlode = slideSelct;
        if (!this.classList.contains('active-slide')) {
            activeSlide.classList.add('progress');
            this.classList.add('active-slide');

            let newSlideImg = document.querySelector('[data-img="' + this.getAttribute('data-place') + '"]');
            tourLink.setAttribute('href', this.getAttribute('link'))


            if (activeSlideImg.classList.contains('active-img')) {
                activeSlideImg.classList.add('proces')
            }
            selectorWrapper.classList.remove('rostov', 'tver');

            setTimeout(function() {
                selectorWrapper.classList.add(activeSlode.getAttribute('data-place'))
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