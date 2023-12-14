<!-- start script -->

<script>
export default {
    name: 'AppFooter',
}

</script>

<!-- start template -->

<template>
    <div class="footer-container">
        <div class="section-container d-flex">
            <div class="container1 d-flex flex-column align-items-start">
                <img id="logo" src="../../public/image/logo-footer-gobike.png" alt="">
                <div class="location pt-3">
                    <font-awesome-icon icon="fa-solid fa-location-dot" class="text-light pt-3 pe-2" />
                    <span class="text-light">New Jersey, USA</span>
                </div>
                <div class="number pt-3">
                    <font-awesome-icon icon="fa-solid fa-phone-volume" class="text-light pt-3 pe-2" />
                    <span class="text-light">+1 (234) 567 89 10</span>
                </div>
                <div class="number pt-3">
                    <font-awesome-icon icon="fa-solid fa-envelope" class="text-light pt-3 pe-2" />
                    <span class="text-light">example@example.com</span>
                </div>
                <div class="socials pt-3">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="text-light fs-2 p-3 me-2 border border-light" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="text-light fs-2 p-3 me-2 border border-light" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="text-light fs-2 p-3 me-2 border border-light" />
                </div>
            </div>
            <div class="container2 pt-5">
                <h1 class="fw-bold text-light">Join Our Newsletter</h1>
                <p class="text-light">Subscribe to receive useful information.</p>
                <div class="input-group mb-3">
                    <input type="text" class="form-control p-3" placeholder="Your Email Address" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>
                <button class="container-fluid btn btn-light p-3">Subscribe <font-awesome-icon
                        icon="fa-solid fa-arrow-right" /></button>
            </div>
            <div class="container3 pt-5">
                <h1 class="fw-bold text-light">Trainings</h1>
                <p class="text-light">- Riding Lesson</p>
                <p class="text-light">- Safe Driving</p>
                <p class="text-light">- Mountain Bike</p>
                <p class="text-light">- Trail Drive</p>
                <p class="text-light">- Pedaling</p>
            </div>
            <div class="container4 pt-5">
                <h1 class="fw-bold text-light">Quick Links</h1>
                <p class="text-light">- Home</p>
                <p class="text-light">- About Us</p>
                <p class="text-light">- Blog</p>
                <p class="text-light">- Packages</p>
                <p class="text-light">- Contact</p>
            </div>
        </div>
        <p class="text-light pt-5 text-center">© 2023 Loris Cassara' - All Rights Reserved.</p>
    </div>
</template>

<!-- start style -->

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

.footer-container {
    position: absolute;
    top: -449px;
    width: 100%;
    height: 450px;
    background-color: black;
}

.section-container {
    width: 76%;
    margin: 0 auto;
}

#logo {
    width: 220px;
    padding-top: 2rem;
}

.socials:hover {
    cursor: pointer;
}

::-webkit-input-placeholder {
    color: $themeGray;
}

::-moz-input-placeholder {
    color: $themeGray;
}

::-ms-input-placeholder {
    color: $themeGray;
}

.container2,
.container3,
.container4 {
    padding-left: 8rem;
}

.container3,
.container4 {
    p:hover {
        cursor: pointer;
        text-decoration: underline;
    }
}
</style>