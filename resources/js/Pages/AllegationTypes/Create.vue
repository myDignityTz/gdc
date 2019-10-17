<template>
	<form @submit.prevent="submit">
		<section class="mt-6">
			<div class="px-6 mb-6">
				<label for="name" class="block mb-2">Name</label>
				<input type="text" class="form-input w-full" v-model="form.name" />
			</div>
		</section>

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
		data() {
			return {
				form: {
					name: ""
				}
			};
		},
		methods: {
			submit() {
				this.$inertia
					.post("/allegation_types", this.form)
					.then(response => {
						this.$emit("close");
					});
			}
		}
	};
</script>