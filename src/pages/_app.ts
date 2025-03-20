import type {App} from "vue"
import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura"
import '@primeuix/themes/aura/theme.css'

export default (app: App): void => {
    app.use(PrimeVue,{
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false
            }
        }
    })
}