<template>
	<layout>
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
				<div class="flex w-2/3 mx-auto">
					<div class="w-2/3">
						<form class="relative bg-white rounded shadow-lg left-0" style="top: -7rem;">
							<div class="py-8">
                                <template v-if="!$page.auth.user">
                                    <!-- Reporter -->
                                    <section class="px-6 pb-12 mb-6 border-b">
                                        <header class="mb-6">
                                            <h2 class="text-lg mb-2 text-gray-600">Report details</h2>
                                            <p class="text-sm text-gray-700">
                                                This details will be only be used to follow up reported issues.
                                                Please indicate if you would like to remain anonymous
                                            </p>
                                        </header>

                                        <!-- alerts -->
                                        <div v-if="hasStatus" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow mb-4" role="alert">
                                            <div class="flex">
                                                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                                <div>
                                                    <p class="font-bold">Case Reported</p>
                                                    <p class="text-sm">{{ $page.status }}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="flex -mx-3">
                                            <div class="w-full px-3 mb-6">
                                                <label for="reporter_name" class="block mb-2 text-gray-700">Name</label>
                                                <input type="text" id="reporter_name" v-model="form.reporter.name" class="form-input w-full" />
                                            </div>
                                        </div>
                                        <div class="flex -mx-3">
                                            <div class="w-1/2 px-3">
                                                <label for="reporter_email" class="block mb-2 text-gray-700">Email</label>
                                                <input type="text" id="reporter_email" v-model="form.reporter.email" class="form-input w-full" />
                                                <div v-if="errors().has('reporter.email')" class="text-red-500 text-sm italic mt-1">
                                                    {{ errors().first('reporter.email') }}
                                                </div>
                                            </div>
                                            <div class="w-1/2 px-3">
                                                <label for="reporter_phone" class="block mb-2 text-gray-700">Phone</label>
                                                <input type="text" id="reporter_phone" v-model="form.reporter.phone" class="form-input w-full" />
                                                <div v-if="errors().has('reporter.phone')" class="text-red-500 text-sm italic mt-1">
                                                    {{ errors().first('reporter.phone') }}
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </template>
								<!-- Case -->
								<section class="px-6 pb-12 mb-6 border-b">
									<header class="mb-6">
										<h2 class="text-lg mb-2 text-gray-600">Case details</h2>
										<p class="text-sm text-gray-700">
                                            Provide key details about the reported case. Provide as much detail as
                                            possible including place and date.
										</p>
									</header>

                                    <div v-if="$page.auth.user && hasStatus" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow mb-4" role="alert">
                                        <div class="flex">
                                            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                            <div>
                                                <p class="font-bold">Case Reported</p>
                                                <p class="text-sm">{{ $page.status }}</p>
                                            </div>
                                        </div>
                                    </div>

									<div class="flex -mx-3">
										<div class="mb-6 w-1/2 px-3">
											<label for="type" class="block mb-2 text-gray-700">Type</label>
											<select class="form-select w-full" id="type" v-model="form.type_id">
												<option value>Choose...</option>
												<option :value="type.id" v-for="type in types" :key="type.id">
                                                    {{ type.name }}
                                                </option>
											</select>
											<div v-if="errors().has('type_id')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('type_id') }}
                                            </div>
										</div>
										<div class="mb-6 w-1/2 px-3">
											<label for="category" class="block mb-2 text-gray-700">Category</label>
											<select class="form-select w-full" id="category" v-model="form.category_id">
												<option value>Choose...</option>
												<option :value="category.id" v-for="category in categories" :key="category.id">
                                                    {{ category.name }}
                                                </option>
											</select>
											<div v-if="errors().has('category_id')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('category_id') }}
                                            </div>
										</div>
									</div>

									<div class="flex -mx-3">
										<div class="w-full px-3 mb-6">
											<label for="environment_type" class="block mb-2 text-gray-700">Environment</label>
											<select class="form-select w-full" id="environment_type" v-model="form.environment_type">
												<option value>Choose...</option>
												<option value="home">Home</option>
												<option value="school">School</option>
											</select>
											<div v-if="errors().has('environment_type')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('environment_type') }}
                                            </div>
										</div>
									</div>

									<div class="-mx-6">
										<component :is="environment" :regions="regions" @environment="appendEnvironment"></component>
									</div>

									<div class="flex -mx-3">
										<div class="w-full px-3">
											<label for="description" class="block mb-2 text-gray-700">Description</label>
											<textarea class="form-textarea w-full" id="description" rows="3" v-model="form.description"></textarea>
                                            <div v-if="errors().has('description')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('description') }}
                                            </div>
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
											<label for="victim_name" class="block mb-1 text-gray-700">Name</label>
											<input type="text" id="victim_name" class="form-input w-full" v-model="form.victim.name" />
                                            <div v-if="errors().has('victim.name')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('victim.name') }}
                                            </div>
										</div>
										<div class="mb-6 w-1/3 px-3">
											<label for="victim_age" class="block mb-1 text-gray-700">Age (In Years)</label>
											<input type="number" id="victim_age" class="form-input w-full" v-model="form.victim.age" />
                                            <div v-if="errors().has('victim.age')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('victim.age') }}
                                            </div>
										</div>
									</div>
									<div class="mb-6">
										<label for="victim_description" class="block mb-1 text-gray-700">Description</label>
										<textarea class="form-textarea w-full" id="victim_description" rows="3" v-model="form.victim.description"></textarea>
                                        <div v-if="errors().has('victim.description')" class="text-red-500 text-sm italic mt-1">
                                            {{ errors().first('victim.description') }}
                                        </div>
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
											<label for="suspect_name" class="block mb-1 text-gray-700">Name</label>
											<input type="text" id="suspect_name" class="form-input w-full" v-model="form.suspect.name" />
                                            <div v-if="errors().has('suspect.name')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('suspect.name') }}
                                            </div>
										</div>
									</div>

									<div class="flex -mx-3">
										<div class="mb-6 w-1/2 px-3">
											<label for="suspect_relationship" class="block mb-1 text-gray-700">Relationship</label>
											<select class="form-select w-full" id="suspect_relationship" v-model="form.suspect.relationship">
												<option>Choose...</option>
												<option v-for="relationship in relationships" :key="relationship.id" :value="relationship.name">
                                                    {{ relationship.name }}
                                                </option>
											</select>
                                            <div v-if="errors().has('suspect.relationship')" class="text-red-500 text-sm italic mt-1">
                                                {{ errors().first('suspect.relationship') }}
                                            </div>
										</div>
									</div>

									<div class="mb-6">
										<label for="suspect_description" class="block mb-1 text-gray-700">Description</label>
										<textarea class="form-textarea w-full" id="suspect_description" rows="3" v-model="form.suspect.description"></textarea>
                                        <div v-if="errors().has('suspect.description')" class="text-red-500 text-sm italic mt-1">
                                            {{ errors().first('suspect.description') }}
                                        </div>
									</div>
								</section>
								<!-- Footer -->
								<footer class="flex justify-end px-6">
									<button @click.prevent="submit" class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-5 py-3 rounded">
                                        Report Case
                                    </button>
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
		components: {
		    Layout,
            HomeEnvironment,
            SchoolEnvironment
        },
        head: {
            title: 'The Expert - Allegations',
        },
		props: {
            regions: { type: Array, required: true },
            types: { type: Array, required: true},
            relationships: { type: Array, required: true }
        },
		data() {
			return {
				form: {
					type_id: "",
					category_id: "",
					description: "",
					environment_type: "",
					environment: null,
                    reporter: {
					    name: "",
                        email: "",
                        phone: ""
                    },
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
		    hasStatus() {
		        return !! Object.keys(this.$page.status).length;
            },
			environment() {
				return this.form.environment_type ? `${this.form.environment_type}Environment` : null;
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
				this.$inertia.post("/report_issues", this.form);
			},
			appendEnvironment(payload) {
				this.form.environment = payload;
			}
		}
	};
</script>
