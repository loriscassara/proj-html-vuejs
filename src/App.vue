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
        data(){
            return {
                store
            }
        }
    }

</script>

<!-- start template -->

<template>

</template>

<!-- start style import scss -->

<style lang="scss">
  	@use './styles/general.scss';
</style>

<!-- start style scoped -->

<style lang="scss" scoped>
@use './styles/partials/_variables' as *;


</style>