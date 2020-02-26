<template>
    <div class="bg-white pt-8 pb-4 shadow rounded overflow-hidden">
        <header class="mb-5 px-6">
            <h4 class="text-gray-700 uppercase text-xs tracking-wider border-b pb-5">Allegation Types (Abuses)</h4>
        </header>
        <div class="pr-4">
            <apexchart height="194" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return {
                labels: [],
                series: this.series
            }
        },
        mounted() {
            this.fetchReport();
        },
        computed: {
            options() {
                return  {
                    chart: {
                        type: "bar",
                        toolbar: { show: false }
                    },
                    plotOptions: {
                        bar: { columnWidth: "40%" }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    labels: this.labels
                }
            }
        },
        methods: {
            async fetchReport() {
                let { data } = await Axios.get(`/internal_api/allegation_types`);

                this.labels = data.map(item => item.name);
                this.series = [{ name: "Allegation Types", data: data.map(item => item.total ) }];
            }
        }
    }
</script>
