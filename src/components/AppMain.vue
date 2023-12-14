<!-- start script -->

<script>

import AppSecondCarousel from './AppSecondCarousel.vue'
import AppEventFirst from './appevents/AppEventFirst.vue'
import AppEventSecond from './AppEvents/AppEventSecond.vue'

export default {
    name: 'AppMain',
    components: {
        AppSecondCarousel,
        AppEventFirst,
        AppEventSecond
    },
    mounted() {
        const firstBtn = document.querySelector('#first-button');
        const secondBtn = document.querySelector('#second-button');
        const firstEvent = document.querySelector('#first-event');
        const secondEvent = document.querySelector('#second-event');

        firstBtn.addEventListener('click', function () {
            secondBtn.classList.remove('btn-dark');
            secondBtn.classList.add('btn-light');
            firstBtn.classList.add('btn-dark');
            firstEvent.classList.remove('d-none');
            secondEvent.classList.add('d-none');
        })

        secondBtn.addEventListener('click', function () {
            firstBtn.classList.remove('btn-dark');
            firstBtn.classList.add('btn-light');
            secondBtn.classList.add('btn-dark');
            firstEvent.classList.add('d-none');
            secondEvent.classList.remove('d-none');
        })
    }
}

</script>

<!-- start template -->

<template>
    <!-- start first carousel -->

    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../public/image/event1.jpg" class="d-block w-100" alt="Slider 1">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold">Learn Mountain Bike From The Expert</h1>
                    <p class="fw-bold">Learn cycling from the pros.</p>
                    <button class="btn btn-secondary btn-lg">Learn More <span><font-awesome-icon
                                icon="fa-solid fa-arrow-right" /></span></button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../public/image/event3.jpg" class="d-block w-100" alt="Slider 2">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold">Professional Cycling Club</h1>
                    <p class="fw-bold">Learn cycling from the pros.</p>
                    <button class="btn btn-secondary btn-lg">Learn More <span><font-awesome-icon
                                icon="fa-solid fa-arrow-right" /></span></button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../public/image/event2.jpg" class="d-block w-100" alt="Slider 3">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="fw-bold">Unforgattable Cycling Experience</h1>
                    <p class="fw-bold">Learn cycling from the pros.</p>
                    <button class="btn btn-secondary btn-lg">Learn More <span><font-awesome-icon
                                icon="fa-solid fa-arrow-right" /></span></button>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- start Get to know us-->

    <div class="section-know-us d-flex justify-content-center align-items-center">
        <div class="gear-container">
            <img src="../../public/image/bike-circle.png" alt="Gear" id="gear">
            <img src="../../public/image/bike-player.png" alt="Biker" id="biker">
        </div>
        <div class="know-us-container">
            <h1 class="fw-bold ps-5">Do you want to be a <br>professional cyclist?</h1>
            <p class="ps-5">We offer 6 courses of varying difficulty and beautiful scenery <br> that cyclists of all levels
                can enjoy.
                You
                will learn cycling from <br> professionals with our competent and experienced staff. You <br> will have a
                lot of fun
                with our amazing space.
            </p>
            <img class="ps-5" src="../../public/image/divider.jpg" alt="Divider">
            <div class="professional-team pt-5 d-flex">
                <img class="ps-5" src="../../public/image/racing-helmet.png" alt="Racing Helmet" id="racing-helmet-prof">
                <div class="text-container-pro">
                    <h2 class="fw-bold ps-4">Professional Team</h2>
                    <p class="ps-4">We make you professional by adding your <br> sincerity as well as professionalism.</p>
                </div>
            </div>
            <div class="professional-trainings d-flex">
                <img class="ps-5" src="../../public/image/helmet.png" alt="Helmet" id="helmet-prof">
                <div class="text-container-tra">
                    <h2 class="fw-bold ps-4">Professional Trainings</h2>
                    <p class="ps-4">We always ride with the best equipment, <br> respecting nature and fun.</p>
                </div>
            </div>
            <button class="btn btn-dark btn-lg ms-5 mt-3">Get to know us <font-awesome-icon
                    icon="fa-solid fa-arrow-right" /></button>
        </div>
    </div>

    <!-- start second carousel -->

    <h1 class="fw-bold" id="title-carousel">Our Professional Cycling Trainings</h1>
    <p class="text-center">Learn from the mountain biking expert.</p>

    <AppSecondCarousel />

    <!-- start our events -->

    <h1 class="fw-bold" id="title-events">Don't Miss Our Events!</h1>
    <p class="text-center">Get the amazing cycling experience.</p>
    <div class="events-container">
        <div class="title-botton d-flex justify-content-between">
            <h4>Events</h4>
            <div class="button-container">
                <button class="btn btn-dark" id="first-button"><font-awesome-icon icon="fa-solid fa-square" /></button>
                <button class="btn btn-light ms-2" id="second-button"><font-awesome-icon icon="fa-solid fa-bars" /></button>
            </div>
        </div>

        <AppEventFirst class="" id="first-event" />

        <AppEventSecond class="" id="second-event" />
    </div>

    <!-- start expert trainers -->

    <div class="expert-container">
        <h1 class="fw-bold pt-5" id="title-expert">Our Expert Trainers</h1>
        <p class="text-center">Learn to ride a bike from the experts.</p>
    </div>
    <div class="card-container-expert d-flex">
        <div class="card">
            <img src="../../public/image/biker1.jpg" alt="">
            <div class="intro d-flex flex-column justify-content-center">
                <h4 class="fw-bold m-0">Micheal Lee</h4>
                <p class="fw-bold m-0">Biker</p>
                <div class="social-container">
                    <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-instagram" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-twitter" />
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../public/image/biker4.jpg" alt="">
            <div class="intro d-flex flex-column justify-content-center">
                <h4 class="fw-bold m-0">Micheal Lee</h4>
                <p class="fw-bold m-0">Biker</p>
                <div class="social-container">
                    <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-instagram" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-twitter" />
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../public/image/biker3.jpg" alt="">
            <div class="intro d-flex flex-column justify-content-center">
                <h4 class="fw-bold m-0">Micheal Lee</h4>
                <p class="fw-bold m-0">Biker</p>
                <div class="social-container">
                    <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-instagram" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-twitter" />
                </div>
            </div>
        </div>
        <div class="card">
            <img src="../../public/image/biker2.jpg" alt="">
            <div class="intro d-flex flex-column justify-content-center">
                <h4 class="fw-bold m-0">Micheal Lee</h4>
                <p class="fw-bold m-0">Biker</p>
                <div class="social-container">
                    <font-awesome-icon class="p-1" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-instagram" />
                    <font-awesome-icon class="p-1" icon="fa-brands fa-twitter" />
                </div>
            </div>
        </div>
    </div>

    <!-- start pack section -->
    <div class="d-flex justify-content-center">
        <div>
            <font-awesome-icon icon="fa-solid fa-medal" id="medal" />
        </div>
    </div>
    <h1 class="fw-bold text-center pt-2 m-0">Special Packs</h1>
    <p class="text-center m-0">Select pricing plan to get more</p>
    <div class="main-container1">
        <div class="the-card">
            <div class="the-front d-flex flex-column align-items-center">
                <font-awesome-icon class="emoji-card" icon="fa-solid fa-handshake" />
                <h1 class="fw-bold">Basic</h1>
                <p>Learn to ride a bike from the professionals.</p>
                <div class="color-black">
                    <p class="m-0" id="first-text">&#x2713 Phone Mountaineer bike training</p>
                    <hr>
                    <p class="m-0">&#x2713 Remote Excellent bike service</p>
                    <hr>
                    <p class="m-0">&#x2713 Onsite Safe cycling training</p>
                    <hr>
                    <p class="m-0">&#x2717 Saafety helmet on bike</p>
                    <hr>
                    <p class="m-0">&#x2717 Free bikes for children</p>
                </div>
            </div>
            <div class="the-back">
                <h1 class="price-text">BASIC</h1>
                <h3>1800$</h3>
                <button class="btn btn-light btn-lg mt-5">Send Request</button>
            </div>
        </div>
    </div>
    <div class="main-container2">
        <div class="the-card">
            <div class="the-front d-flex flex-column align-items-center">
                <img class="img-price" src="../../public/image/helmet.png" alt="">
                <h1 class="padding-t fw-bold">Standard</h1>
                <p>Learn to ride a bike from the professionals.</p>
                <div class="color-black">
                    <p class="m-0" id="first-text">&#x2713 Phone Mountaineer bike training</p>
                    <hr>
                    <p class="m-0">&#x2713 Remote Excellent bike service</p>
                    <hr>
                    <p class="m-0">&#x2713 Onsite Safe cycling training</p>
                    <hr>
                    <p class="m-0">&#x2713 Saafety helmet on bike</p>
                    <hr>
                    <p class="m-0">&#x2717 Free bikes for children</p>
                </div>
            </div>
            <div class="the-back">
                <h1 class="price-text">STANDARD</h1>
                <h3>2500$</h3>
                <button class="btn btn-light btn-lg mt-5">Send Request</button>
            </div>
        </div>
    </div>
    <div class="main-container3">
        <div class="the-card">
            <div class="the-front d-flex flex-column align-items-center">
                <img class="img-price" src="../../public/image/racing-helmet.png" alt="">
                <h1 class="padding-t fw-bold">Premium</h1>
                <p>Learn to ride a bike from the professionals.</p>
                <div class="color-black">
                    <p class="m-0" id="first-text">&#x2713 Phone Mountaineer bike training</p>
                    <hr>
                    <p class="m-0">&#x2713 Remote Excellent bike service</p>
                    <hr>
                    <p class="m-0">&#x2713 Onsite Safe cycling training</p>
                    <hr>
                    <p class="m-0">&#x2713 Saafety helmet on bike</p>
                    <hr>
                    <p class="m-0">&#x2713 Free bikes for children</p>
                </div>
            </div>
            <div class="the-back">
                <h1 class="price-text">PREMIUM</h1>
                <h3>5000$</h3>
                <button class="btn btn-light btn-lg mt-5">Send Request</button>
            </div>
        </div>
    </div>

    <!-- start articles section -->

    <div class="article-section">
        <h1 class="fw-bold text-center pt-5">Resent New & Articles</h1>
        <p class="text-center">Important information about bike</p>
    </div>
    <div class="card-wrapper-container d-flex">
        <div class="tilting-card-wrapper1">
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="tilting-card-body">
                <img class="pt-4 rounded" src="../../public/image/news-bike5-300x180.jpg" alt="">
                <p class="fw-bold">22.06.2022 - Bike</p>
                <h4 class="fw-bold">Road bike or mountain <br> bike?</h4>
                <p>Compared to similar road bikes with a <br> solid frame structure, [...] </p>
                <button class="btn btn-dark mt-4">More</button>
            </div>
        </div>
        <div class="tilting-card-wrapper2">
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="tilting-card-body">
                <img class="pt-4 rounded" src="../../public/image/news-bike6-300x180.jpg" alt="">
                <p class="fw-bold">22.06.2022 - Bike</p>
                <h4 class="fw-bold">What is mountain biking <br> called?</h4>
                <p>Mountain biking is one of the most <br> popular outdoor sports, [...] </p>
                <button class="btn btn-dark mt-4">More</button>
            </div>
        </div>
        <div class="tilting-card-wrapper3">
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="tilting-card-body">
                <img class="pt-4 rounded" src="../../public/image/news-bike3-300x180.jpg" alt="">
                <p class="fw-bold">22.06.2022 - Bike</p>
                <h4 class="fw-bold">How much should you <br> cycle a day?</h4>
                <p>In order to get the right benefit from <br> the exercise [...] </p>
                <button class="btn btn-dark mt-4">More</button>
            </div>
        </div>
        <div class="tilting-card-wrapper4">
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="mouse-position-tracker"></div>
            <div class="tilting-card-body">
                <img class="pt-4 rounded" src="../../public/image/news-bike4-300x180.jpg" alt="">
                <p class="fw-bold">22.06.2022 - Bike</p>
                <h4 class="fw-bold">How long does it take 5 <br> km by bike?</h4>
                <p>It takes 5 km and 10 minutes, sir. But at <br> [...] </p>
                <button class="btn btn-dark mt-4">More</button>
            </div>
        </div>
    </div>
</template>

<!-- start style -->

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

//Carousel section

#carouselExampleCaptions {
    padding-top: 5rem;
}

.carousel-item {
    height: 818px;
    position: relative;

    &:before {
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.gear-container {
    position: relative;
    padding-top: 10rem;

    #biker {
        position: absolute;
        right: 0;
        width: 100%;
        top: 5rem;
    }
}

#gear {
    animation-name: spin;
    animation-duration: 11000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

#racing-helmet-prof,
#helmet-prof {
    width: 8rem;
    height: 5rem;
}

#title-carousel {
    padding-top: 15rem;
    text-align: center;
}

#title-events {
    padding-top: 8rem;
    text-align: center;
}

.events-container {
    width: 76%;
    margin: 0 auto;
}

.expert-container {
    background-color: $themeGray;
    margin: 8rem 0;
    height: 17rem;
    position: relative;
}

#title-expert {
    text-align: center;
}

.card-container-expert {
    width: 76%;
    margin: 0 auto;
    position: absolute;
    bottom: 2150px;
    left: 15rem;
}

.card {
    height: 300px;
    width: 300px;
    margin: 50px;
    box-shadow: 5px 5px 20px black;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    img {
        height: 400px;
        width: 280px;
        border-radius: 3px;
        transition: .3s;
    }

    .intro {
        height: 100px;
        width: 350px;
        padding-left: 6px;
        box-sizing: border-box;
        position: absolute;
        background-color: $themeBlack;
        color: $themeWhite;
        bottom: 0;
        transition: .3s;
    }
}

.card:hover .intro {
    height: 120px;
}

.card:hover img {
    transform: scale(1.1);
}

#medal {
    margin-top: 15rem;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 70px;
    background-color: $themeBlack;
    color: $themeWhite;
}

.main-container1 {
    position: absolute;
    width: 450px;
    height: 570px;
    background: none;
    bottom: 950px;
    left: 450px;
    transform: translate(-50%, -50%);
}

.main-container2 {
    position: absolute;
    width: 450px;
    height: 570px;
    background: none;
    bottom: 950px;
    left: 950px;
    transform: translate(-50%, -50%);
}

.main-container3 {
    position: absolute;
    width: 450px;
    height: 570px;
    background: none;
    bottom: 950px;
    left: 1450px;
    transform: translate(-50%, -50%);
}

.the-card {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transform-style: preserve-3d;
    transition: all 0.8s ease;
    box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.3);
}

.the-card:hover {
    transform: rotateY(180deg);
    cursor: pointer;
}

.the-front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: linear-gradient(175deg, black 50%, white 50%);
    color: white;

    .emoji-card {
        font-size: 100px;
    }

    .img-price {
        width: 85px;
        position: absolute;
        filter: invert(1);
        top: 10px;
    }

    #first-text {
        padding-top: 7rem;
    }
}

.color-black {
    color: black;
}

.padding-t {
    padding-top: 6.5rem;
}

.the-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: black;
    color: white;
    text-align: center;
    transform: rotateY(180deg);

    .price-text {
        padding-top: 8rem;
    }
}

.article-section {
    margin-top: 750px;
    background-color: $themeGray;
    padding-bottom: 550px;
}

.tilting-card-body {
    text-align: center;
    box-shadow: var(--shadow);
}

.mouse-position-tracker {
    position: absolute;
    width: calc(100% / 3);
    height: calc(100% / 3);
    z-index: 2;
}

.mouse-position-tracker:nth-child(3n - 2) {
    left: 0;
}

.mouse-position-tracker:nth-child(3n - 1) {
    left: calc(100% / 3);
}

.mouse-position-tracker:nth-child(3n) {
    right: 0;
}

.mouse-position-tracker:nth-child(n + 4):nth-child(-n + 6) {
    top: calc(100% / 3);
}

.mouse-position-tracker:nth-child(n + 7):nth-child(-n + 9) {
    bottom: 0;
}

.tilting-card-wrapper1 {
    position: relative;
    bottom: 535px;
    left: 200px;
    width: 20rem;
    height: 28rem;
}

.tilting-card-wrapper2 {
    position: relative;
    bottom: 535px;
    left: 250px;
    width: 20rem;
    height: 28rem;
}

.tilting-card-wrapper3 {
    position: relative;
    bottom: 535px;
    left: 300px;
    width: 20rem;
    height: 28rem;
}

.tilting-card-wrapper4 {
    position: relative;
    bottom: 535px;
    left: 350px;
    width: 20rem;
    height: 28rem;
}

.tilting-card-body {
    position: absolute;
    inset: 0;
    box-shadow: 0px 0px 28px 5px rgba(0, 0, 0, 0.3);
    background-color: white;
    border-radius: 0.5rem;
}

.tilting-card-body> :where(h1, p) {
    background: white;
    padding: 0.2rem;
    margin: 0;
}

.tilting-card-body {
    --perspective: 500px;
    --rotationX: 0;
    --rotationY: 0;
    --rotationZ: 0;
    --angle: 15deg;
    transform: perspective(var(--perspective)) rotateX(var(--rotationX)) rotateY(var(--rotationY)) rotateZ(var(--rotationZ));
    transition: transform 500ms ease;
}

.mouse-position-tracker:nth-child(1):hover~.tilting-card-body {
    --rotationX: var(--angle);
    --rotationY: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(2):hover~.tilting-card-body {
    --rotationX: var(--angle);
}

.mouse-position-tracker:nth-child(3):hover~.tilting-card-body {
    --rotationX: var(--angle);
    --rotationY: var(--angle);
}

.mouse-position-tracker:nth-child(4):hover~.tilting-card-body {
    --rotationY: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(6):hover~.tilting-card-body {
    --rotationY: var(--angle);
}

.mouse-position-tracker:nth-child(7):hover~.tilting-card-body {
    --rotationY: calc(var(--angle) * -1);
    --rotationX: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(8):hover~.tilting-card-body {
    --rotationX: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(9):hover~.tilting-card-body {
    --rotationY: var(--angle);
    --rotationX: calc(var(--angle) * -1);
}

:root {
    --shadow: 0px 1px 2.2px rgba(0, 0, 0, 0.02),
        0px 2.5px 5.3px rgba(0, 0, 0, 0.028), 0px 4.6px 10px rgba(0, 0, 0, 0.035),
        0px 8.3px 17.9px rgba(0, 0, 0, 0.042), 0px 15.5px 33.4px rgba(0, 0, 0, 0.05),
        0px 37px 80px rgba(0, 0, 0, 0.07);
}
</style>