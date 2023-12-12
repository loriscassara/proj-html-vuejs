<!-- start script -->

<script>

import { navMenu } from '../store.js'

export default {
    name: 'AppHeader',
    data() {
        return {
            navMenu
        }
    }
}

</script>

<!-- start template -->

<template>
    <nav class="navbar bg-body-light" id="nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../public/image/logo-gobike.png" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top w-100" id="nav-logo">
            </a>
            <ul class="d-flex m-0">
                <li class="text-dark fw-bold pe-5" v-for="i in navMenu.linksMenu"><span id="text-links">{{ i.text }}</span>
                </li>
            </ul>
            <div class="d-flex align-items-center">
                <div class="wrap" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling">
                    <div class="menu"></div>
                    <div id="menu-hover"></div>
                    <div class="menu"></div>
                </div>
                <div class="offcanvas offcanvas-start flex-column align-items-center" data-bs-scroll="true"
                    data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
                    aria-labelledby="offcanvasScrollingLabel">
                    <img class="pt-4" src="../../public/image/loader-gobike.png" alt="Icon Canvas" id="canvas-icon">
                    <h2 class="pt-5 fw-bold">Contact Information</h2>
                    <font-awesome-icon icon="fa-solid fa-phone-volume" class="canvas-i text-light rounded mt-4" />
                    <span class="fs-5 mt-4">+1 (234) 567 89 10</span>
                    <font-awesome-icon icon="fa-solid fa-envelope" class="canvas-i text-light rounded mt-4" />
                    <span class="fs-5 mt-4">example@example.com</span>
                    <font-awesome-icon icon="fa-solid fa-location-dot" class="canvas-i text-light rounded mt-4" />
                    <span class="fs-5 mt-4">New Jersey, USA</span>
                    <div class="canvas-social pt-4">
                        <font-awesome-icon icon="fa-brands fa-facebook" class="can-social fs-1 p-1" />
                        <font-awesome-icon icon="fa-brands fa-instagram" class="can-social fs-1 p-1" />
                        <font-awesome-icon icon="fa-brands fa-twitter" class="can-social fs-1 p-1" />
                    </div>
                    <span class="pt-5">© 2024 - Gobike</span>
                </div>
                <div class="rounded" id="upcoming-events">
                    <img src="../../public/image/racing-helmet.png" alt="Racing Helmet" class="pe-3" id="helmet">
                    <span class="text-light fw-bold">Upcoming Events<span><font-awesome-icon class="ps-2"
                                icon="fa-solid fa-arrow-right" /></span></span>
                </div>
            </div>
        </div>
    </nav>
</template>

<!-- start style -->

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;

#nav {
    width: 76%;
    margin: 0 auto;

    #nav-logo {
        height: 4.7rem;
    }

    #text-links {
        position: relative;
        padding: 0 5px;

        &:hover {
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            background-color: $themeBlack;
            height: 3px;
            width: 0%;
            left: 0;
            bottom: -10px;
            transition: 0.3s;
        }

        &:hover::after {
            width: 100%;
        }
    }

    .wrap {
        position: absolute;
        top: 50%;
        left: 79%;
        transform: translate(-50%, -50%);

        &:hover {
            cursor: pointer;
        }

        .menu {
            width: 30px;
            height: 2px;
            background-color: $themeBlack;
            margin: 6px 0;
        }

        #menu-hover {
            width: 20px;
            height: 2px;
            background-color: $themeBlack;
            margin: 6px 0;
            transition: 0.3s;

            &:hover {
                width: 30px;
            }
        }
    }

    .offcanvas {
        box-shadow: $offcanvas-box-shadow;
        transition: $offcanvas-transition-duration;
    }

    #canvas-icon {
        width: 40%;

        &:hover {
            cursor: pointer;
        }
    }

    .canvas-i {
        font-size: 3.5rem;
        background-color: $themeBlack;
        padding: 1rem;
    }

    .can-social:hover {
        cursor: pointer;
    }

    #upcoming-events {
        background-color: $themeBlack;
        padding: 0.5rem 1rem;

        &:hover {
            cursor: pointer;
        }

        #helmet {
            height: 3rem;
            filter: invert(1);
        }
    }
}
</style>