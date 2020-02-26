<template>
    <div class="w-full bg-white px-5 py-8 shadow rounded overflow-hidden">
        <apexchart height="320" :options="options" :series="series" :labeles="['A', 'B']"></apexchart>
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
                    chart: {
                        id: "vuechart-example",
                            width: "100%",
                            type: "area",
                            foreColor: "#4299E1",
                            toolbar: {
                            show: false
                        }
                    },
                    title: {
                        text: "Annual Report",
                            align: "left",
                            margin: 16,
                            offsetX: 18,
                            offsetY: 0,
                            floating: false,
                            style: {
                            fontSize: "16px",
                            color: "#263238"
                        }
                    },
                    fill: { colors: "#4299E1" },
                    grid: {
                        show: true,
                        borderColor: "#EDF2F7"
                    },
                    noData: {
                        text: "Not data yet, visit again to see progress",
                        align: "center"
                    },
                    stroke: {
                        show: true,
                        curve: "smooth",
                        lineCap: "butt",
                        width: 3,
                        colors: ["#4299E1"]
                    },
                    dataLabels: { enabled: false },
                    legend: { show: true },
                    xaxis: { categories: this.labels },
                    theme: { palette: "palette1" }
                }
            }
        },
        methods: {
            async fetchReport() {
                let response = await Axios.get(`/internal_api/annual_report`);

                this.labels = response.data.map(item => item.month);
                this.series = [{
                    name: "Allegations (Cases)",
                    data: response.data.map(item => item.total)
                }];
            }
        }
    }
</script>
