<template>
	<layout title="The Expert - Allegations">
		<div class="w-2/3 mx-auto">
			<header class="flex justify-between items-center my-8">
				<h1 class="text-lg font-semibold">Allegations (Cases)</h1>
				<inertia-link class="btn btn-purple" href="/allegations/create">Report Allegation</inertia-link>
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
							>&nbsp;</th>
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
									<span class="text-xs uppercase tracking-wider font-semibold bg-gray-200 px-2 py-1 rounded-full">{{ allegation.status }}</span>
								</td>
								<td class="px-4 py-4">
									<div class="flex items-center">
										<a
											href="#"
											class="text-xs uppercase"
											@click.prevent="show(allegation.id)"
										>{{ allegation.isVisible ? "Hide" : "Show" }}</a>
										<span class="px-3 text-xs text-gray-400">|</span>
										<v-popover placement="bottom-end" offset="16">
											<button class="flex items-center text-xs uppercase">
                                                Actions
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current ml-1 text-gray-600"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
											</button>

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
														>Assign to {{ stakeholder.name }}</inertia-link>
													</template>

													<hr class="mt-3" />

													<inertia-link
														href="#"
														class="block flex items-center px-4 py-2 text-purple-700 hover:bg-purple-700 hover:text-white text-sm"
													>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"/></svg>
                                                        Update
													</inertia-link>
													<inertia-link
														href="#"
														class="block flex items-center px-4 py-2 text-red-500 hover:bg-purple-700 hover:text-white text-sm"
													>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 fill-current mr-2"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>
                                                        Delete
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
                                            <component :is="allegation.environment_category" :environment="allegation.environment" />
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
	import HomeProfile from "./HomeProfile";

	export default {
		components: {
		    Layout,
            school: SchoolProfile,
            home: HomeProfile,
        },
		props: {
            allegations: {
                required: true,
                type: Array
            },
            stakeholders: {
                required: true,
                type: Array
            }
        },
		data() {
			return {
				cases: this.allegations.map(item => Object.assign(item, { isVisible: false}))
			};
		},
		methods: {
			show(id) {
				this.cases = this.cases.map(item => {
					if (item.id !== id) {
					    return item;
					}

                    return Object.assign(item, { isVisible: !item.isVisible});
				});
			}
		}
	};
</script>
