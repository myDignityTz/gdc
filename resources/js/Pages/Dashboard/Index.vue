<template>
	<layout title="The Expert - Dashboard">
		<div class="w-2/3 mx-auto mb-12">
			<header class="my-8">
				<h2 class="mb-2 text-lg font-bold text-gray-700">Dashboard</h2>
				<p class="text-gray-700">Welcome, now you are logged in as: {{ $page.auth.user.name }}</p>
			</header>

			<!--  -->
			<section class="flex mb-6">
				<div class="w-full bg-white px-5 py-8 shadow rounded overflow-hidden">
					<apexchart height="320" :options="chartOptions" :series="series"></apexchart>
				</div>
			</section>

			<!-- School Types | Statuses -->
			<section class="flex mb-6 -mx-3">
				<div class="w-1/3 px-3">
					<div class="bg-white px-2 py-8 shadow rounded overflow-hidden">
						<header class="mb-5 px-6">
							<h4 class="border-b pb-4 text-gray-700 uppercase text-xs tracking-wider">School Types Metrics</h4>
						</header>
						<apexchart height="225" :options="governmentPrivateOptions" :series="governmentPrivateSeries"></apexchart>
					</div>
				</div>
				<div class="w-2/3 px-3">
					<div class="bg-white px-6 py-8 shadow rounded overflow-hidden">
						<header class="mb-5">
							<h4
								class="border-b pb-4 text-gray-700 uppercase text-xs tracking-wider"
							>Allegations status Metrics</h4>
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
				</div>
			</section>

			<!-- Ambassadors | Environment -->
			<section class="flex mb-6 -mx-3">
				<div class="w-3/5 px-3">
					<div class="bg-white px-6 py-8 shadow rounded overflow-hidden">
						<header class="mb-5">
							<h4 class="text-gray-700 uppercase text-xs tracking-wider">Ambassodor Metrics</h4>
						</header>
						<div>
							<div class="flex py-2 border-t items-center justify-between">
								<div>
									<h4 class="text-gray-700 text-sm font-semibold">David Pella</h4>
									<span class="text-gray-600 text-xs">Ambassador</span>
								</div>
								<span>12</span>
							</div>
							<div class="flex py-2 border-t items-center justify-between">
								<div>
									<h4 class="text-gray-700 text-sm font-semibold">Richard Jacob</h4>
									<span class="text-gray-600 text-xs">Ambassador</span>
								</div>
								<span>12</span>
							</div>
							<div class="flex py-2 border-t items-center justify-between">
								<div>
									<h4 class="text-gray-700 text-sm font-semibold">Magreth Mussa</h4>
									<span class="text-gray-600 text-xs">Ambassador</span>
								</div>
								<span>12</span>
							</div>
							<div class="flex py-2 border-t items-center justify-between">
								<div>
									<h4 class="text-gray-700 text-sm font-semibold">Gideon James</h4>
									<span class="text-gray-600 text-xs">Ambassador</span>
								</div>
								<span>12</span>
							</div>
						</div>
					</div>
				</div>

				<div class="w-2/5 px-3">
					<div class="bg-white py-8 shadow rounded overflow-hidden">
						<header class="mb-5 px-6">
							<h4 class="text-gray-700 uppercase text-xs tracking-wider border-b pb-5">Environment Metrics</h4>
						</header>
						<apexchart height="258" :options="governmentPrivateOptions" :series="governmentPrivateSeries"></apexchart>
					</div>
				</div>
			</section>

			<!-- Popular Tags | Environment -->
			<section class="flex mb-6 -mx-3">
				<div class="w-1/2 px-3">
					<div class="bg-white pt-8 pb-4 shadow rounded overflow-hidden">
						<header class="mb-5 px-6">
							<h4
								class="text-gray-700 uppercase text-xs tracking-wider border-b pb-5"
							>Allegation Types (Abuses)</h4>
						</header>
						<div class="pr-4">
							<apexchart height="194" :options="allegationTypesOptions" :series="allegationTypesSeries"></apexchart>
						</div>
					</div>
				</div>
				<div class="w-1/2 px-3">
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
				</div>
			</section>

			<!-- Recent Allegations -->
			<section class="flex mb-6">
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
			</section>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	export default {
		components: { Layout },
		props: ["allegations"],
		data() {
			return {
				chartOptions: {
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
					fill: {
						colors: "#4299E1"
					},
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
					dataLabels: {
						enabled: false
					},
					legend: {
						show: true
					},
					xaxis: {
						categories: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jub",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec"
						]
					},
					theme: {
						// mode: "dark",
						palette: "palette1"
					}
				},
				series: [
					{
						name: "Allegations (Cases)",
						data: [30, 40, 35, 50, 49, 60, 70, 91, 50, 49, 60, 70]
					}
				],

				governmentPrivateOptions: {
					chart: {
						type: "donut"
					},
					legend: {
						show: false
					},
					labels: ["Government", "Private", "Other"]
				},
				governmentPrivateSeries: [44, 55, 13],

				homeSchoolOptions: {
					chart: {
						type: "donut"
					},
					labels: ["Home", "School", "Other"]
				},
				homeSchoolSeries: [78, 55, 93],

				allegationTypesOptions: {
					chart: {
						type: "bar",
						toolbar: {
							show: false
						}
					},
					plotOptions: {
						bar: {
							columnWidth: "40%"
						}
					},
					dataLabels: {
						enabled: false
					},
					labels: ["Physical", "Emotinal", "Sexual", "Negleting"]
				},
				allegationTypesSeries: [
					{
						name: "Allegation Types",
						data: [34, 56, 21, 67]
					}
				]
			};
		}
	};
</script>
