<template>
    <div class="bg-white px-2 py-8 shadow rounded overflow-hidden">
        <header class="mb-5 px-6">
            <h4 class="border-b pb-4 text-gray-700 uppercase text-xs tracking-wider">School Types Metrics</h4>
        </header>
        <apexchart height="225" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return {
                labels: [],
                series: [],
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
                }
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/internal_api/school_types`);

                this.labels = data.map(item => item.type);
                this.series = data.map(item => item.total);
            }
        }
    }
</script>
