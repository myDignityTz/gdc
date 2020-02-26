<template>
    <div class="bg-white px-6 py-8 shadow rounded overflow-hidden">
        <header class="mb-5">
            <h4 class="border-b pb-4 text-gray-700 uppercase text-xs tracking-wider">Allegations status Metrics</h4>
        </header>
        <div>
            <div class="flex py-3 items-center justify-between">
                <div class="flex items-center">
                    <span class="block h-4 w-4 bg-gray-500"></span>
                    <span class="ml-2 text-gray-700">Pending</span>
                </div>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <div class="flex items-center">
                    <span class="block h-4 w-4 bg-green-500"></span>
                    <span class="ml-2 text-green-700">Current</span>
                </div>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <div class="flex items-center">
                    <span class="block h-4 w-4 bg-red-500"></span>
                    <span class="ml-2 text-gray-700">Spam</span>
                </div>
                <span>12</span>
            </div>
            <div class="flex py-3 items-center justify-between">
                <div class="flex items-center">
                    <span class="block h-4 w-4 bg-blue-500"></span>
                    <span class="ml-2 text-gray-700">Closed</span>
                </div>
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
                let { data } = await Axios.get(`/internal_api/allegation_statuses`);
            }
        }
    }
</script>
