//Import reactive store management
import { reactive } from 'vue'

export const store = reactive({
    key: 'value'
});

export const navMenu = reactive({
    linksMenu: [
        {
            text: 'Home',
            url: '#'
        },
        {
            text: 'About Us',
            url: '#'
        },
        {
            text: 'Trainings',
            url: '#'
        },
        {
            text: 'Packages',
            url: '#'
        },
        {
            text: 'Blog',
            url: '#'
        },
        {
            text: 'Contact',
            url: '#'
        }
    ]
});