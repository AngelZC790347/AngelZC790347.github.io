import Aura from "@primeuix/themes/aura"
import '@primeuix/themes/aura/theme.css'
import PrimeVue from "primevue/config"
import type { App } from "vue"

export default (app: App) => {
    app.use(PrimeVue, {
        riple: true,
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