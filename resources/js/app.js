require("./bootstrap");
import Vue from "vue";
import route from "ziggy";
import VueApexCharts from "vue-apexcharts";
import VTooltip from "v-tooltip";
import VModal from "vue-js-modal";
import { InertiaApp } from "@inertiajs/inertia-vue";
import Errors from "./Errors";

import "remixicon/fonts/remixicon.css";

Vue.use(VueApexCharts);
Vue.use(VTooltip);
Vue.use(InertiaApp);
Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
    dynamicDefaults: { clickToClose: false }
});

Vue.mixin({
    methods: {
        errors() {
            return new Errors(this.$page.errors);
        }
    }
});

Vue.component("apexchart", VueApexCharts);

Vue.prototype.$can      = (name) => {
    const { abilities } = app.$page.auth.user;

    if(!Object.keys(abilities).length) {
        return false;
    }

    return !! abilities.find(ability => {
        return ability.name === name;
    });
};
Vue.prototype.$route    = (...args) => route(...args);
Vue.prototype.$current  = (...args) => route().current(...args);

const appContainer = document.getElementById("app");

const app = new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(appContainer.dataset.page),
                resolveComponent: (name) => {
                    return import(`./Pages/${name}`).then((module) => module.default)
                }
            }
        })
}).$mount(appContainer);
