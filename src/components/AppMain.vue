<!-- start script -->

<script>

import AppSecondCarousel from './AppSecondCarousel.vue'

export default {
    name: 'AppMain',
    components: {
        AppSecondCarousel
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
</template>

<!-- start style -->

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

//Carousel section
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
</style>