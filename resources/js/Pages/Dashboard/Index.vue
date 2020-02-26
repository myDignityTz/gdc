<template>
	<layout title="The Expert - Dashboard">
		<div class="w-2/3 mx-auto mb-12">
			<header class="my-8">
				<h2 class="mb-2 text-lg font-bold text-gray-700">Dashboard</h2>
				<p class="text-gray-700">Welcome, now you are logged in as: {{ $page.auth.user.name }}</p>
			</header>

			<section class="flex mb-6 -mx-3">
                <div class="w-full px-3">
                    <AnnualReport></AnnualReport>
                </div>
			</section>

			<section class="flex mb-6 -mx-3">
				<div class="w-1/3 px-3">
                    <SchoolType></SchoolType>
				</div>

				<div class="w-2/3 px-3">
                    <AllegationTypes></AllegationTypes>
				</div>
			</section>


			<section class="flex mb-6 -mx-3">
				<div class="w-3/5 px-3">
                    <TopAmbassadors></TopAmbassadors>
				</div>

				<div class="w-2/5 px-3">
                    <EnvironmentType></EnvironmentType>
				</div>
			</section>

			<!-- Recent Allegations -->
			<section class="flex mb-6">
                <RecentAllegations></RecentAllegations>
			</section>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
    import AnnualReport from "./AnnualReport";
    import SchoolType from "./SchoolType";
    import EnvironmentType from "./EnvironmentType";
    import TopAmbassadors from "./TopAmbassadors";
    import AllegationTypes from "./AllegationTypes";
    import AllegationsStatuses from "./AllegationsStatuses";
    import PopularTags from "./PopularTags";
    import RecentAllegations from './RecentAllegations'

	export default {
		components: {
		    Layout,
            AnnualReport,
            SchoolType,
            EnvironmentType,
            TopAmbassadors,
            AllegationTypes,
            AllegationsStatuses,
            PopularTags,
            RecentAllegations
        },
	};
</script>
