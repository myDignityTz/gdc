<template>
	<layout title="Allegations - Create">
		<div class="w-2/5 mx-auto">
			<!-- Errors -->
			<div v-if="Object.keys($page.errors).length" class="bg-white my-4 rounded px-4 py-4">
				<pre>{{ $page.errors }}</pre>
			</div>
			<!-- Form -->
			<form class="my-8 bg-white rounded shadow py-6" @submit.prevent="submit">
				<header class="mb-8 px-6">
					<h2 class="text-lg mb-2 text-gray-600">Allegation Report Form</h2>
					<p class="text-sm text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt nam
						doloremque id veritatis molestias nisi sint quia tenetur. Maiores vel soluta,
						facere laudantium aliquid veniam quia tenetur! Odit, blanditiis.
					</p>
				</header>
				<!-- Basic details -->
				<section class="border-b mb-8 pb-5">
					<div class="flex -mx-3 px-6">
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

					<div class="flex -mx-3 px-6">
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

					<component :is="environment" :regions="regions" @environment="appendEnvironment"></component>

					<div class="mb-6 px-6">
						<label for="type" class="block mb-2 text-gray-700">Description</label>
						<textarea class="form-textarea w-full" rows="3" v-model="form.description"></textarea>
					</div>
				</section>
				<!-- Victim -->
				<section class="border-b mb-8 pb-5 px-6">
					<header class="mb-8">
						<h2 class="text-xs uppercase font-semibold text-gray-600 tracking-wider">Victim Details</h2>
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
					<header class="mb-8">
						<h2 class="text-xs uppercase font-semibold text-gray-600 tracking-wider">Suspect Details</h2>
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
						class="bg-purple-700 text-white text-xs uppercase font-semibold tracking-wider px-5 py-3 rounded"
					>Save Changes</button>
				</footer>
			</form>
		</div>
	</layout>
</template>

<script>
	import Layout from "./../../Shared/Layout";
	import HomeEnvironment from "./Home";
	import SchoolEnvironment from "./School";
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