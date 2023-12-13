<!-- start script -->

<script>
export default {
    name: 'AppSecondCarousel',
    mounted() {
        let items = document.querySelectorAll('.carousel .carousel-item');
        items.forEach((e) => {
            const slide = 4;
            let next = e.nextElementSibling;
            for (let i = 0; i < slide; i++) {
                if (!next) {
                    next = items[0]
                }
                let clonechild = next.cloneNode(true)
                e.appendChild(clonechild.children[0])
                next = next.nextElementSibling
            }
        })
    }
}

</script>

<!-- start template -->

<template>
    <div class="container-carousel d-flex justify-content-center">
        <div class="carousel" data-bs-ride="carousel" id="carouselExample">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../public/image/training-box-1.jpg" alt="one" class="img-fluid w-100">
                                <h4 class="fw-bold">Riding Lesson</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../public/image/training-box-2.jpg" alt="two" class="img-fluid w-100">
                                <h4 class="fw-bold">Safe Driving</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../public/image/training-box-3.jpg" alt="three" class="img-fluid w-100">
                                <h4 class="fw-bold">Mountain Bike</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../public/image/training-box-4.jpg" alt="four" class="img-fluid w-100">
                                <h4 class="fw-bold">Trail Drive</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <img src="../../public/image/training-box-5.jpg" alt="five" class="img-fluid w-100">
                                <h4 class="fw-bold">Pedaling</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<!-- start style -->

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
    display: flex;
}

.carousel {
    width: 80%;
}

.card {
    position: relative;

    &:before {
        content: "";
        background: rgba(43, 43, 43, 0.5);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.card {
    margin: 1rem;
}

.card-body {
    background-color: black;

    h4 {
        position: absolute;
        top: 35px;
        left: 35px;
        color: white;
    }
}
</style>