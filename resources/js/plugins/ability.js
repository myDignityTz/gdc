export default {
    install (Vue, options) {

        // creates a instance method that can be used inside of a Vue component
        Vue.prototype.$parseContent =  () => {
            //console.log(options);
        }
    }
}
