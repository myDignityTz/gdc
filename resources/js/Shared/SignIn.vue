<template>
	<form>
		<!-- Header -->
		<header class="px-6 py-6">
			<h2 class="border-b pb-4 text-xs uppercase tracking-wider">Sign In</h2>
		</header>
		<!-- Body -->
		<div class="px-6">
			<!-- Email -->
			<div class="flex mb-6">
				<div class="w-full">
					<label for="email" class="block mb-2 text-gray-700">Email Address</label>
					<input
						id="email"
						type="email"
						class="form-input w-full"
						required
						autocomplete="email"
						v-model="form.email"
						autofocus
					/>
				</div>
			</div>
			<!-- Password -->
			<div class="flex mb-6">
				<div class="w-full">
					<label for="password" class="block mb-2 text-gray-700">Password</label>
					<input
						id="password"
						type="password"
						class="form-input w-full"
						required
						autocomplete="current-password"
						v-model="form.password"
					/>
				</div>
			</div>
			<!-- Remeber me -->
			<div class="mb-6">
				<div class="flex justify-between">
					<div class="flex items-center">
						<input
							class="form-checkbox"
							type="checkbox"
							name="remember"
							id="remember"
							v-model="form.remember"
						/>
						<label class="ml-2" for="remember">Remember me</label>
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
			>Sign In</button>
		</footer>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					password: "",
					email: "",
					remember: false
				}
			};
		},
		methods: {
			login() {
				this.$inertia.post("/login", this.form).then(response => {
					this.$emit("close");
				});
			},
			cancel() {
				this.$emit("close");
			}
		}
	};
</script>