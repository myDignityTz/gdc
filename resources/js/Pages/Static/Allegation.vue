<template>
	<layout title="The Expert - About">
		<div class="w-full">
			<section class="bg-purple-700 pt-24 pb-48">
				<div class="w-2/3 mx-auto">
					<header class="mb-4">
						<h1 class="text-3xl font-semibold text-white">Report Issue</h1>
					</header>
					<div class="text-purple-100 text-lg leading-loose">
						Girls Dropout Cure (GDC) is a platform that encourages and prompts the
						community to speak out and report different cases or issues that affect girls
						in their respective communities.
					</div>
				</div>
			</section>
			<section class="bg-white pb-24">
				<div class="w-2/3 mx-auto">
					<div class="w-2/3">
						<form class="relative bg-white rounded shadow-lg left-0" style="top: -7rem;">
							<div class="py-8">
								<!-- Reporter -->
								<section class="px-6 pb-12 mb-6 border-b">
									<header class="mb-6">
										<h2 class="text-lg mb-2 text-gray-600">Report details</h2>
										<p class="text-sm text-gray-700">
                                            This details will be only be used to follow up reported issues.
                                            Please indicate if you would like to remain anonymous
										</p>
									</header>
									<div class="flex -mx-3">
										<div class="w-full px-3 mb-6">
											<label for="name" class="block mb-2 text-gray-700">Name</label>
											<input type="text" class="form-input w-full" />
										</div>
									</div>
									<div class="flex -mx-3">
										<div class="w-1/2 px-3">
											<label for="name" class="block mb-2 text-gray-700">Email</label>
											<input type="text" class="form-input w-full" />
										</div>
										<div class="w-1/2 px-3">
											<label for="name" class="block mb-2 text-gray-700">Phone</label>
											<input type="text" class="form-input w-full" />
										</div>
									</div>
								</section>
								<!-- Case -->
								<section class="px-6 pb-12 mb-6 border-b">
									<header class="mb-6">
										<h2 class="text-lg mb-2 text-gray-600">Case details</h2>
										<p class="text-sm text-gray-700">
                                            Provide key details about the reported case. Provide as much detail as
                                            possible including place and date.
										</p>
									</header>
									<div class="flex -mx-3">
										<div class="mb-6 w-1/2 px-3">
											<label for="type" class="block mb-2 text-gray-700">Type</label>
											<select
												class="form-select w-full"
												:class="{ 'border-red-500' : $page.errors.type }"
												v-model="form.type_id"
											>
												<option value>Choose...</option>
												<option :value="type.id" v-for="type in types" :key="type.id">{{ type.name }}</option>
											</select>
											<div
												v-if="$page.errors.type"
												class="text-red-500 text-sm italic mt-1"
											>{{ $page.errors.type[0] }}</div>
										</div>
										<div class="mb-6 w-1/2 px-3">
											<label for="type" class="block mb-2 text-gray-700">Category</label>
											<select class="form-select w-full" v-model="form.category_id">
												<option value>Choose...</option>
												<option
													:value="category.id"
													v-for="category in categories"
													:key="category.id"
												>{{ category.name }}</option>
											</select>
											<div
												v-if="$page.errors.classification"
												class="text-red-500 text-sm italic mt-1"
											>{{ $page.errors.classification[0] }}</div>
										</div>
									</div>

									<div class="flex -mx-3">
										<div class="w-full px-3 mb-6">
											<label for="type" class="block mb-2 text-gray-700">Environment</label>
											<select class="form-select w-full" v-model="form.environment_type">
												<option value>Choose...</option>
												<option value="home">Home</option>
												<option value="school">School</option>
											</select>
											<div
												v-if="$page.errors.environment"
												class="text-red-500 text-sm italic mt-1"
											>{{ $page.errors.environment[0] }}</div>
										</div>
									</div>

									<div class="-mx-6">
										<component :is="environment" :regions="regions" @environment="appendEnvironment"></component>
									</div>

									<div class="flex -mx-3">
										<div class="w-full px-3">
											<label for="type" class="block mb-2 text-gray-700">Description</label>
											<textarea class="form-textarea w-full" rows="3" v-model="form.description"></textarea>
										</div>
									</div>
								</section>
								<!-- Victim -->
								<section class="px-6 pb-12 mb-6 border-b">
									<header class="mb-6">
										<h2 class="text-lg mb-2 text-gray-600">Victim details</h2>
										<p class="text-sm text-gray-700">
                                            Provide key details about the victim you are reporting the case on.
										</p>
									</header>
									<div class="flex -mx-3">
										<div class="mb-6 w-2/3 px-3">
											<label for="type" class="block mb-1 text-gray-700">Name</label>
											<input type="text" class="form-input w-full" v-model="form.victim.name" />
										</div>
										<div class="mb-6 w-1/3 px-3">
											<label for="type" class="block mb-1 text-gray-700">Age (In Years)</label>
											<input type="number" class="form-input w-full" v-model="form.victim.age" />
											<div
												v-if="$page.errors.victim"
												class="text-red-500 text-sm italic mt-1"
											>{{ $page.errors.victim.age[0] }}</div>
										</div>
									</div>
									<div class="mb-6">
										<label for="type" class="block mb-1 text-gray-700">Description</label>
										<textarea class="form-textarea w-full" rows="3" v-model="form.victim.description"></textarea>
									</div>
								</section>
								<!-- Suspect -->
								<section class="border-b mb-6 pb-5 px-6">
									<header class="mb-6">
										<h2 class="text-lg mb-2 text-gray-600">Suspect details</h2>
										<p class="text-sm text-gray-700">
                                            Provide key details about the alleged suspect. Remember we will not share
                                            your information with anyone.
										</p>
									</header>

									<div class="flex -mx-3">
										<div class="mb-6 w-full px-3">
											<label for="type" class="block mb-1 text-gray-700">Name</label>
											<input type="text" class="form-input w-full" v-model="form.suspect.name" />
										</div>
									</div>

									<div class="flex -mx-3">
										<div class="mb-6 w-1/2 px-3">
											<label for="type" class="block mb-1 text-gray-700">Relationship</label>
											<select class="form-select w-full" v-model="form.suspect.relationship">
												<option>Choose...</option>

												<option
													v-for="relationship in relationships"
													:key="relationship.id"
													:value="relationship.name"
												>{{ relationship.name }}</option>
											</select>
										</div>
									</div>

									<div class="mb-6">
										<label for="type" class="block mb-1 text-gray-700">Description</label>
										<textarea class="form-textarea w-full" rows="3" v-model="form.suspect.description"></textarea>
									</div>
								</section>
								<!-- Footer -->
								<footer class="flex justify-end px-6">
									<button
										@click.prevent="submit"
										class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded"
									>Report Case</button>
								</footer>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/SiteLayout";
	import SchoolEnvironment from "@/Pages/Allegations/School";
	import HomeEnvironment from "@/Pages/Allegations/Home";
	export default {
		components: { Layout, HomeEnvironment, SchoolEnvironment },
		props: ["allegations", "regions", "types", "relationships"],
		data() {
			return {
				form: {
					type_id: "",
					category_id: "",
					description: "",
					environment_type: "",
					environment: null,
					victim: {
						name: "",
						age: "",
						gender: "",
						description: ""
					},
					suspect: {
						name: "",
						relationship: "",
						description: ""
					}
				}
			};
		},
		computed: {
			errors() {
				return this.$page.errors;
			},
			environment() {
				return this.form.environment_type
					? `${this.form.environment_type}Environment`
					: null;
			},
			categories() {
				let type = this.types.find(item => {
					return item.id === this.form.type_id;
				});

				return type ? type.categories : [];
			}
		},
		methods: {
			submit() {
				this.$inertia.post("/allegations", this.form);
			},
			appendEnvironment(payload) {
				this.form.environment = payload;
			}
		}
	};
</script>
