import { createApp } from 'vue'
import App from './App.vue'

//Import Bootstrap Js v5.3
import * as bootstrap from 'bootstrap'

// Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { faUserSecret, faBars, faArrowRight, faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faUserSecret, faBars, faArrowRight, faPhoneVolume, faEnvelope, faLocationDot, faFacebook, faInstagram, faTwitter)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
