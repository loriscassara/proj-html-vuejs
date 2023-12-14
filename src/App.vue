<!-- start script -->

<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import { store } from './store.js'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', e => {
            cursor.setAttribute('style', 'top: ' + (e.pageY - 30) + 'px; left: ' + (e.pageX - 30) + 'px;')
        })
    }
}

</script>

<!-- start template -->

<template>
    <!-- cursor animate section -->

    <div class="cursor"></div>

    <!-- start header -->

    <header class="position-relative">
        <AppHeader />
    </header>

    <!-- starti main -->

    <main class="position-relative">
        <AppMain />
    </main>

    <!-- start footer -->

    <footer class="position-relative">
        <AppFooter />
    </footer>
</template>

<!-- start style import scss -->

<style lang="scss">
@use './styles/general.scss';
</style>

<!-- start style scoped -->

<style lang="scss" scoped>
@use './styles/partials/_variables' as *;
</style>