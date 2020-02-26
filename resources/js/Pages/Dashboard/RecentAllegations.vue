<template>
    <div class="w-full bg-white mt-6 shadow rounded overflow-hidden">
        <table class="text-left w-full">
            <thead>
                <tr>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Reporter</th>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Type</th>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Environment</th>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Victim</th>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Suspect</th>
                    <th
                        class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
                    >Status</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="allegation in allegations">
                    <tr :key="allegation.id" class="border-t">
                        <td class="px-4 py-4">
                            <h3 class="text-sm font-semibold leading-none">{{ allegation.reporter_name }}</h3>
                            <span class="text-xs text-gray-600">Ambassador</span>
                        </td>
                        <td class="px-4 py-4">
                            <h3 class="text-sm font-semibold leading-none">{{ allegation.type.name }}</h3>
                            <span class="text-xs text-gray-600">{{ allegation.category.name }}</span>
                        </td>
                        <td class="px-4 py-4 align-top">
                            <span class="capitalize">{{ allegation.environment_category }}</span>
                        </td>
                        <td class="px-4 py-4">
                            <h3 class="text-sm font-semibold leading-none">{{ allegation.victim.name }}</h3>
                            <span class="text-xs text-gray-600">{{ allegation.victim.age }} Years</span>
                        </td>
                        <td class="px-4 py-4">
                            <h3 class="text-sm font-semibold leading-none">{{ allegation.suspect.name }}</h3>
                            <span class="text-xs text-gray-600 capitalize">{{ allegation.suspect.relationship }}</span>
                        </td>
                        <td class="px-4 py-4">
                                            <span
                                                class="text-xs uppercase tracking-wider font-semibold bg-gray-200 px-2 py-1 rounded-full"
                                            >{{ allegation.status }}</span>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Axios from 'axios';

    export default {
        data() {
            return {
                allegations: []
            }
        },
        mounted() {
            this.fetchReport();
        },
        methods: {
            async fetchReport() {
                let response = await Axios.get(`/internal_api/recent_allegations`);

                this.allegations = response.data;
            }
        }
    }
</script>

