<template>
    <div class="bg-white py-8 shadow rounded overflow-hidden">
        <header class="mb-5 px-6">
            <h4 class="text-gray-700 uppercase text-xs tracking-wider border-b pb-5">Environment Metrics</h4>
        </header>
        <apexchart height="258" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return {
                series: [],
                labels: []
            }
        },
        mounted() {
            this.fetchReport();
        },
        computed: {
            options() {
                return {
                    chart: { type: "donut"},
                    legend: { show: false},
                    labels: this.labels
                };
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/internal_api/environment_types`);

                this.series = data.map(item => item.total);
                this.labels = data.map(item => item.environment);
            }
        }
    }
</script>
