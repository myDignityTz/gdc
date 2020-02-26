<template>
    <div class="bg-white px-6 py-8 shadow rounded overflow-hidden">
        <header class="mb-5">
            <h4 class="text-gray-700 uppercase text-xs tracking-wider">Ambassadors Metrics</h4>
        </header>
        <div>
            <div class="flex py-2 border-t items-center justify-between" v-for="ambassador in ambassadors">
                <div>
                    <h4 class="text-gray-700 text-sm font-semibold">{{ ambassador.name ? ambassador.name : 'Unknown' }}</h4>
                    <span class="text-gray-600 text-xs">Ambassador</span>
                </div>
                <span>{{ ambassador.total }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return {
                ambassadors: []
            }
        },
        mounted() {
            this.fetchReport();
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/internal_api/top_ambassadors`);

                this.ambassadors = data;
            }
        }
    }
</script>
