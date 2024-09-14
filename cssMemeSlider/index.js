
// document.addEventListener('DOMContentLoaded', function() {

//     const slidesData = [
//         {
//             img: './images/5622704.jpg',
//             text: 'You like living dangerously'
//         },
//         {
//             img: './images/9299765.jpg',
//             text: 'No stress...'
//         },
//         {
//             img: './images/9971683.jpg',
//             text: 'What kind of questions are you asking, man?!'
//         },
//         {
//             img: './images/pexels-pixabay-209037.jpg',
//             text: "It's Monday again, noooo"
//         },
//         {
//             img: './images/pexels-tranmautritam-2194261.jpg',
//             text: 'What do you mean, “the deadline is today”?'
//         }
//     ];

//     const sliderContainer = document.getElementById('slider');

//     let currentSlide = 0;


//     slidesData.forEach((slide, index) => {
//         const slideItem = document.createElement('div');
//         slideItem.classList.add('slider-item');
//         if (index === 0) slideItem.classList.add('active');

//         slideItem.innerHTML = `
//             <img src="${slide.img}" alt="Slide ${index + 1}">
//             <div>
//                 <p>${slide.text}</p>
//                 <div class="dots-container">
//                     ${slidesData.map((_, dotIndex) => `
//                         <span class="dot ${dotIndex === index ? 'active' : ''}" data-slide="${dotIndex}"></span>
//                     `).join('')}
//                 </div>
//             </div>
//         `;
//         sliderContainer.appendChild(slideItem);
//     });

//     const slides = document.querySelectorAll('.slider-item');

//     function showSlide(index) {
//         slides.forEach((slide) => {
//             slide.classList.remove('active');
//         });
//         slides[index].classList.add('active');
//     }

//     document.querySelectorAll('.dot').forEach(dot => {
//         dot.addEventListener('click', function() {
//             let slideIndex = parseInt(this.getAttribute('data-slide'));
//             showSlide(slideIndex);
//             currentSlide = slideIndex;
//         });
//     });

//     setTimeout(() => {
//         showSlide(currentSlide);
//     }, 100);
// });

document.addEventListener('DOMContentLoaded', function() {

    const slidesData = [
        {
            img: './images/5622704.jpg',
            text: 'You like living dangerously'
        },
        {
            img: './images/9299765.jpg',
            text: 'No stress...'
        },
        {
            img: './images/9971683.jpg',
            text: 'What kind of questions are you asking, man?!'
        },
        {
            img: './images/pexels-pixabay-209037.jpg',
            text: "It's Monday again, noooo"
        },
        {
            img: './images/pexels-tranmautritam-2194261.jpg',
            text: 'What do you mean, “the deadline is today”?'
        }
    ];

    const sliderContainer = document.getElementById('slider');
    const dotsContainer = document.querySelector('.dots-container');

    let currentSlide = 0;

    slidesData.forEach((slide, index) => {
        const slideItem = document.createElement('div');
        slideItem.classList.add('slider-item');
        if (index === 0) slideItem.classList.add('active');

        slideItem.innerHTML = `
            <img src="${slide.img}" alt="Slide ${index + 1}">
            <div>
                <p>${slide.text}</p>
            </div>
        `;
        sliderContainer.appendChild(slideItem);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });

    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');

        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            let slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            currentSlide = slideIndex;
        });
    });

    showSlide(currentSlide);
});
