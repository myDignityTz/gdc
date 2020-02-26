<template>
	<layout title="The Expert - Stakeholders">
		<div class="w-2/3 mx-auto">
			<div
				v-for="stakeholder in stakeholders"
				:key="stakeholder.id"
				class="bg-white rounded shadow overflow-hidden my-6"
			>
				<header class="px-6 pt-4 pb-6">
					<h2 class="text-lg font-semibold text-gray-700">{{ stakeholder.name }}</h2>
					<p class="text-gray-600">{{ stakeholder.description }}</p>
				</header>
				<table class="text-left w-full">
					<thead>
						<tr>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>Type</th>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>Category</th>
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
						<tr v-for="allegation in stakeholder.allegations" :key="allegation.id" class="border-t">
							<td class="px-4 py-4">{{ allegation.type.name }}</td>
							<td class="px-4 py-4">{{ allegation.category.name }}</td>
							<td class="px-4 py-4">{{ allegation.environment_category }}</td>
							<td class="px-4 py-4">
								<h3 class="text-sm font-semibold">{{ allegation.victim.name }}</h3>
								<span class="text-xs text-gray-600">{{ allegation.victim.age }} Years</span>
							</td>
							<td class="px-4 py-4">
								<h3 class="text-sm font-semibold">{{ allegation.suspect.name }}</h3>
								<span class="text-xs text-gray-600">{{ allegation.suspect.relationship }}</span>
							</td>
							<td class="px-4 py-4">
								<span
									class="text-xs uppercase tracking-wider bg-gray-200 px-2 py-1 rounded-full"
								>{{ allegation.pivot.status }}</span>
							</td>
							<td class="px-4 py-4">
								<v-popover placement="bottom-end">
									<!-- This will be the popover target (for the events and position) -->
									<button class="px-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
									</button>
									<!-- This will be the content of the popover -->
									<template slot="popover">
										<div class="bg-white shadow-xl border">
											<inertia-link
												:href="`/allegations/${allegation.id}/statuses`"
												method="patch"
												:data="{ stakeholder_id: stakeholder.id, status: 'spam' }"
												class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
											>Mark as Spam</inertia-link>
											<template v-if="allegation.pivot.status !== 'current'">
												<inertia-link
													:href="`/allegations/${allegation.id}/statuses`"
													method="patch"
													:data="{ stakeholder_id: stakeholder.id, status: 'current' }"
													class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
												>Mark as Current</inertia-link>
											</template>
											<template v-if="allegation.pivot.status !== 'closed'">
												<inertia-link
													:href="`/allegations/${allegation.id}/statuses`"
													method="patch"
													:data="{ stakeholder_id: stakeholder.id, status: 'closed' }"
													class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
												>Mark as Closed</inertia-link>
											</template>
											<hr />
											<template v-if="allegation.pivot.status !== 'closed'">
												<inertia-link
													href="#"
													class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
												>Edit Allegation</inertia-link>
											</template>
											<inertia-link
												href="#"
												class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
											>Remove Allegation</inertia-link>
											<template v-if="allegation.pivot.status !== 'closed'">
												<hr />
												<inertia-link
													:href="`allegations/${allegation.id}/forward`"
													class="block px-4 py-2 hover:bg-purple-700 hover:text-white"
													method="patch"
													:data="{ stakeholder_id: stakeholder.id }"
												>
													Forward to
													<span class="font-semibold">{{ stakeholder.name }}</span>
												</inertia-link>
											</template>
										</div>
									</template>
								</v-popover>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	export default {
		components: { Layout },
		props: ["stakeholders"]
	};
</script>
