<template>
    <div class="bg-white px-6 py-8 shadow rounded overflow-hidden">
        <header class="mb-5">
            <h4 class="text-gray-700 uppercase text-xs tracking-wider border-b pb-5">Popular tags</h4>
        </header>
        <div>
            <div class="flex py-3 items-center justify-between">
                <a href="#" class="text-blue-500">#ChildAbuse</a>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <a href="#" class="text-blue-500">#Education</a>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <a href="#" class="text-blue-500">#Misbehavour</a>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <a href="#" class="text-blue-500">#GoodConduct</a>
                <span>12</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return { }
        },
        mounted() {
            this.fetchReport();
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/internal_api/popular_tags`);
            }
        }
    }
</script>
