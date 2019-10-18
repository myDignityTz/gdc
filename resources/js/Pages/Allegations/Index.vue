<template>
	<layout title="The Expert - Allegations">
		<div class="w-2/3 mx-auto">
			<header class="flex justify-between items-center my-8">
				<h1 class="text-lg font-semibold">Allegations (Cases)</h1>
				<inertia-link
					href="/allegations/create"
					class="bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 font-semibold hover:bg-purple-600 rounded"
				>Report Allegation</inertia-link>
			</header>
			<div class="bg-white mt-6 shadow rounded overflow-hidden">
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
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							></th>
						</tr>
					</thead>
					<tbody>
						<template v-for="allegation in cases">
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
								<td class="px-4 py-4">
									<div class="flex items-center">
										<a
											href="#"
											class="text-xs uppercase"
											@click.prevent="show(allegation.id)"
										>{{ allegation.isVisible ? "Hide" : "Show" }}</a>
										<span class="px-3 text-xs text-gray-400">|</span>
										<v-popover placement="bottom-start" offset="16">
											<!-- This will be the popover target (for the events and position) -->
											<button class="flex items-center">
												<span class="text-xs uppercase mr-1">Actions</span>
												<i class="ri-arrow-down-s-line"></i>
											</button>
											<!-- This will be the content of the popover -->
											<template slot="popover">
												<div class="bg-white shadow-xl">
													<template v-for="stakeholder in stakeholders">
														<inertia-link
															:href="`/allegations/${allegation.id}/stakeholders`"
															class="block text-sm px-4 py-2 hover:bg-purple-700 hover:text-white"
															method="post"
															:key="stakeholder.id"
															:data="{ stakeholder_id: stakeholder.id }"
															v-if="!allegation.stakeholders.find(s => s.id === stakeholder.id)"
														>Asssign to {{ stakeholder.name }}</inertia-link>
													</template>

													<hr class="mt-3" />

													<inertia-link
														href="#"
														class="block flex items-center px-4 py-2 text-purple-700 hover:bg-purple-700 hover:text-white"
													>
														<i class="ri-edit-line"></i>
														<span class="text-sm ml-2">Update</span>
													</inertia-link>
													<inertia-link
														href="#"
														class="block flex items-center px-4 py-2 text-red-500 hover:bg-purple-700 hover:text-white"
													>
														<i class="ri-delete-bin-line"></i>
														<span class="text-sm ml-2">Delete</span>
													</inertia-link>
												</div>
											</template>
										</v-popover>
									</div>
								</td>
							</tr>
							<tr :key="`details-${allegation.id}`" v-if="allegation.isVisible" class="border-t">
								<td class="bg-gray-100 px-4 py-6" colspan="7">
									<div class="mb-8">
										<h2 class="mb-2 text-lg font-semibold">{{ allegation.type.name }} Case</h2>
										<p>{{ allegation.description }}</p>
									</div>
									<div class="flex">
										<div class="w-1/2">
											<section class="mb-6 border-b pb-6">
												<h3 class="text-xs uppercase mb-4">Basic Details</h3>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Type</div>
													<div class="w-2/3">{{ allegation.type.name }}</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Tags</div>
													<div class="w-2/3">{{ allegation.category.name }}</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Environment</div>
													<div class="w-2/3 capitalize">{{ allegation.environment_category }} Environment</div>
												</div>
											</section>

											<section class="mb-6 border-b pb-6">
												<h3 class="text-xs uppercase mb-4">Reporter</h3>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Name</div>
													<div class="w-2/3">David Pella</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Type</div>
													<div class="w-2/3">Ambassador</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Contact</div>
													<div class="w-2/3">
														<div class="mb-2">Phone: 0714 681 951</div>
														<div>Email: david.pella@example.com</div>
													</div>
												</div>
											</section>

											<section class="mb-6 border-b pb-6">
												<h3 class="text-xs uppercase mb-4">Victim Details</h3>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Name</div>
													<div class="w-2/3">{{ allegation.victim.name }}</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Age</div>
													<div class="w-2/3">{{ allegation.victim.age }} Years Old</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Gender</div>
													<div class="w-2/3">{{ allegation.victim.gender }}</div>
												</div>
											</section>

											<section class="mb-6">
												<h3 class="text-xs uppercase mb-4">Suspect Details</h3>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Name</div>
													<div class="w-2/3">{{ allegation.suspect.name }}</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Relationship</div>
													<div class="w-2/3">{{ allegation.suspect.relationship }}</div>
												</div>
												<div class="flex mb-2">
													<div class="w-1/3 text-gray-600 text-sm font-semibold">Contact</div>
													<div class="w-2/3">{{ allegation.suspect.name }}</div>
												</div>
											</section>
										</div>
										<div class="w-1/2 px-6">
											<!-- Stakeholder -->
											<section class="mb-6 bg-white shadow rounded px-4 py-4">
												<h3 class="text-xs uppercase mb-6">Assigned Stakeholders</h3>
												<div class="flex mb-2">
													<ul class="w-full">
														<li
															v-for="stakeholder in allegation.stakeholders"
															:key="stakeholder.id"
															class="border-t py-3 flex justify-between"
														>
															<span>{{ stakeholder.name }}</span>
															<button class="text-sm">Remove</button>
														</li>
													</ul>
												</div>
											</section>
											<!-- Environment -->
											<component :is="allegation.environment_category" :environment="allegation.environment"></component>
										</div>
									</div>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	import SchoolProfile from "./SchoolProfile";
	export default {
		components: { Layout, school: SchoolProfile },
		props: ["allegations", "stakeholders"],
		data() {
			return {
				cases: this.allegations.map(item => {
					return Object.assign(item, {
						isVisible: false
					});
				})
			};
		},
		methods: {
			show(id) {
				this.cases = this.cases.map(item => {
					if (item.id === id) {
						return Object.assign(item, {
							isVisible: !item.isVisible
						});
					}

					return item;
				});

				console.log(this.cases);
			}
		}
	};
</script>

<style>
	.v-popover {
		line-height: 0;
	}
</style>