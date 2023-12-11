import { createApp } from 'vue'
import App from './App.vue'

//Import Bootstrap Js v5.3
import * as bootstrap from 'bootstrap'

// Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
