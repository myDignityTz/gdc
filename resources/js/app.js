require("./bootstrap");
import { InertiaApp } from "@inertiajs/inertia-vue";
import Vue from "vue";
import VTooltip from "v-tooltip";
import VModal from "vue-js-modal";
import VueApexCharts from "vue-apexcharts";

import "remixicon/fonts/remixicon.css";

Vue.use(VueApexCharts);
Vue.use(VTooltip);
Vue.use(InertiaApp);
Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
    dynamicDefaults: { clickToClose: false }
});

Vue.component("apexchart", VueApexCharts);

const app = document.getElementById("app");

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`./Pages/${name}`).then(module => module.default)
                // resolveComponent: name => require(`./Pages/${name}`).default
            }
        })
}).$mount(app);
