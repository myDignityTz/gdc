<template>
	<form>
		<!-- Header -->
		<header class="px-6 py-6">
			<h2 class="border-b pb-4 text-xs uppercase tracking-wider">Register</h2>
		</header>
		<!-- Body -->
		<div class="px-6">
			<!-- Name -->
			<div class="flex mb-6">
				<div class="w-full">
					<label for="name" class="block mb-2 text-gray-700">Full Name</label>
					<input id="name" class="form-input w-full" required autofocus v-model="form.name" />
				</div>
			</div>
			<!-- Email -->
			<div class="flex mb-6">
				<div class="w-full">
					<label for="email" class="block mb-2 text-gray-700">Email Address</label>
					<input id="email" type="email" class="form-input w-full" required v-model="form.email" />
				</div>
			</div>
			<!-- Password -->
			<div class="flex mb-6 -mx-3">
				<div class="w-1/2 px-3">
					<label for="password" class="block mb-2 text-gray-700">Password</label>
					<div class="col-md-6">
						<input
							id="password"
							type="password"
							class="form-input w-full"
							required
							v-model="form.password"
						/>
					</div>
				</div>

				<div class="w-1/2 px-3">
					<div class="mb-6">
						<label for="password-confirm" class="block mb-2 text-gray-700">Confirm Password</label>

						<div class="col-md-6">
							<input
								id="password-confirm"
								type="password"
								class="form-input w-full"
								v-model="form.passwordConfirm"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Footer -->
		<footer class="bg-purple-100 py-4 px-6 flex justify-end items-center">
			<button
				class="bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3"
				@click.prevent="cancel"
			>Cancel</button>
			<button
				class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded"
				@click.prevent="login"
			>Register</button>
		</footer>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: "",
					name: "",
					password: "",
					passwordConfirm: ""
				}
			};
		},
		methods: {
			login() {
				this.$inertia
					.post("/register", {
						name: this.form.name,
						email: this.form.email,
						password: this.form.password,
						"password-confirm": this.form.passwordConfirm
					})
					.then(response => {
						this.$emit("close");
					}).catch(error => {
						
					});
			},
			cancel() {
				this.$emit("close");
			}
		}
	};
</script>