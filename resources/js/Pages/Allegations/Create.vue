<template>
	<layout title="Allegations - Create">
		<div class="w-6/12 mx-auto">
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
							<select id="type" class="form-select w-full" v-model="form.type_id">
								<option value>Choose...</option>
								<option :value="type.id" v-for="type in types" :key="type.id">
                                    {{ type.name }}
                                </option>
							</select>
							<div v-if="errors().has('type_id')" class="form-error mt-1">
                                {{ errors().first('type_id') }}
                            </div>
						</div>
						<div class="mb-6 w-1/2 px-3">
							<label for="category_id" class="block mb-2 text-gray-700">Category</label>
							<select id="category_id" class="form-select w-full" v-model="form.category_id">
								<option value>Choose...</option>
								<option :value="category.id" v-for="category in categories" :key="category.id">
                                    {{ category.name }}
                                </option>
							</select>
							<div v-if="errors().has('category_id')" class="form-error mt-1">
                                {{ errors().first('category_id') }}
                            </div>
						</div>
					</div>

					<div class="flex -mx-3 px-6">
						<div class="w-full px-3 mb-6">
							<label for="environment" class="block mb-2 text-gray-700">Environment</label>
							<select id="environment" class="form-select w-full" v-model="form.environment_type">
								<option value>Choose...</option>
								<option value="home">Home</option>
								<option value="school">School</option>
							</select>
							<div v-if="errors().has('environment_type')" class="form-error mt-1">
                                {{ errors().first('environment_type') }}
                            </div>
						</div>
					</div>

					<component :is="environment" :regions="regions" @environment="appendEnvironment" />

					<div class="mb-6 px-6">
						<label for="description" class="block mb-2 text-gray-700">Description</label>
                        <textarea id="description" class="form-textarea w-full" rows="3" v-model="form.description"/>
                        <div v-if="errors().has('description')" class="form-error mt-1">
                            {{ errors().first('description') }}
                        </div>
					</div>
				</section>
				<!-- Victim -->
				<section class="border-b mb-8 pb-5 px-6">
					<header class="mb-8">
						<h2 class="text-xs uppercase font-semibold text-gray-600 tracking-wider">Victim Details</h2>
					</header>
					<div class="flex -mx-3">
						<div class="mb-6 w-2/3 px-3">
							<label for="victim_name" class="block mb-1 text-gray-700">Name</label>
							<input id="victim_name" type="text" class="form-input w-full" v-model="form.victim.name" />
                            <div v-if="errors().has('victim.name')" class="form-error mt-1">
                                The victim name field is required.
                            </div>
						</div>
						<div class="mb-6 w-1/3 px-3">
							<label for="victim_age" class="block mb-1 text-gray-700">Age (In Years)</label>
							<input id="victim_age" type="number" class="form-input w-full" v-model="form.victim.age" />
							<div v-if="errors().has('victim.age')" class="form-error mt-1">
                                The victim age field is required.
                            </div>
						</div>
					</div>
					<div class="mb-6">
						<label for="victim_description" class="block mb-1 text-gray-700">Description</label>
                        <textarea id="victim_description" class="form-textarea w-full" rows="3" v-model="form.victim.description"/>
					</div>
				</section>
				<!-- Suspect -->
				<section class="border-b mb-6 pb-5 px-6">
					<header class="mb-8">
						<h2 class="text-xs uppercase font-semibold text-gray-600 tracking-wider">Suspect Details</h2>
					</header>

					<div class="flex -mx-3">
						<div class="mb-6 w-full px-3">
							<label for="suspect_name" class="block mb-1 text-gray-700">Name</label>
							<input id="suspect_name" type="text" class="form-input w-full" v-model="form.suspect.name" />
                            <div v-if="errors().has('suspect.name')" class="form-error mt-1">
                                The suspect name field is required.
                            </div>
						</div>
					</div>

					<div class="flex -mx-3">
						<div class="mb-6 w-1/2 px-3">
							<label for="suspect_relationship" class="block mb-1 text-gray-700">Relationship</label>
							<select id="suspect_relationship" class="form-select w-full" v-model="form.suspect.relationship">
								<option>Choose...</option>
								<option v-for="relationship in relationships" :key="relationship.id" :value="relationship.name">
                                    {{ relationship.name }}
                                </option>
							</select>
                            <div v-if="errors().has('suspect.relationship')" class="form-error mt-1">
                                The suspect relationship field is required.
                            </div>
						</div>
					</div>

					<div class="mb-6">
						<label for="suspect_description" class="block mb-1 text-gray-700">Description</label>
                        <textarea id="suspect_description" class="form-textarea w-full" rows="3" v-model="form.suspect.description"/>
                        <div v-if="errors().has('suspect.description')" class="form-error mt-1">
                            The suspect description field is required.
                        </div>
					</div>
				</section>
				<!-- Footer -->
				<footer class="flex justify-end px-6">
					<button class="btn btn-purple" @click.prevent="submit">Save Changes</button>
				</footer>
			</form>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	import HomeEnvironment from "./Home";
	import SchoolEnvironment from "./School";

	export default {
		components: {
			Layout,
			HomeEnvironment,
			SchoolEnvironment
		},
		props: {
            regions: {
                required: true,
                type: Array
            },
            types: {
                required: true,
                type: Array
            },
            relationships: {
                required: true,
                type: Array
            }
        },
		data() {
			return {
				form: {
					type_id: '',
					category_id: '',
					description: '',
					environment_type: '',
					environment: null,
					victim: {
						name: '',
						age: '',
						gender: '',
						description: ''
					},
					suspect: {
						name: '',
						relationship: '',
						description: ''
					}
				}
			};
		},
		computed: {
			environment() {
				return this.form.environment_type  ? `${this.form.environment_type}Environment` : null;
			},
			categories() {
				let type = this.types.find(item => item.id === this.form.type_id );

				return type ? type.categories : [];
			}
		},
		methods: {
			submit() {
				this.$inertia.post(`/allegations`, this.form);
			},
			appendEnvironment(payload) {
				this.form.environment = payload;
			}
		}
	};
</script>
