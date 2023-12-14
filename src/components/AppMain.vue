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
    <div>
        <font-awesome-icon icon="fa-solid fa-medal" id="medal" />
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
    bottom: 7rem;
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
    padding-top: 13rem;
}
</style>