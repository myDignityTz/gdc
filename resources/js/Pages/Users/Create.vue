<template>
	<form @submit.prevent="submit">
		<section class="mt-6">
			<div class="px-6 mb-6">
				<label for="name" class="block mb-2">Name</label>
				<input type="text" class="form-input w-full" v-model="form.name" />
			</div>
			<div class="px-6 mb-6">
				<label for="email" class="block mb-2">Email</label>
				<input type="text" class="form-input w-full" v-model="form.email" />
			</div>
		</section>
		<section class="px-6">
			<label for="role">Roles</label>
			<div class="flex mt-1" v-for="role in roles" :key="role.id">
				<label class="flex items-center">
					<input type="checkbox" class="form-checkbox" :value="role.name" v-model="form.roles" />
					<span class="ml-2">{{ role.title }}</span>
				</label>
			</div>
		</section>
		<hr class="my-4" />
		<footer class="px-6 pb-4 flex justify-end">
			<button
				@click.prevent="submit"
				class="bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 rounded"
			>Save Changes</button>
		</footer>
	</form>
</template>

<script>
	export default {
		props: ["roles"],
		data() {
			return {
				form: {
					name: "",
					email: "",
					roles: []
				}
			};
		},
		methods: {
			submit() {
				this.$inertia.post("/users", this.form).then(response => {
					this.$emit("close");
				});
			}
		}
	};
</script>