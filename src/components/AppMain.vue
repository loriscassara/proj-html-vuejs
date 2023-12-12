<!-- start script -->

<script>
export default {
    name: 'AppMain',
}

</script>

<!-- start template -->

<template>
    <!-- start section first carousel -->

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
</style>