import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { VApp, VContainer, VLayout, VFlex, VCard, VCardText, VIcon, VBtn } from 'vuetify/lib'
Vue.use(Vuetify, { 
    theme: {},
    components: {
        VApp, VContainer, VLayout, VFlex, VCard, VCardText, VIcon, VBtn
    }
})

export default new Vuetify()