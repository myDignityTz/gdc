<template>
	<form @submit.prevent="submit">
		<section class="mt-6">
			<div class="px-6 mb-6">
				<label for="name" class="block mb-2">Name</label>
				<input type="text" class="form-input w-full" v-model="form.name" />
			</div>

			<div class="px-6 mb-6">
				<label for="region" class="block mb-2">Region</label>
				<select class="form-select w-full" v-model="form.region_id">
					<option value>Choose...</option>
					<option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
				</select>
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
		props: ["regions"],
		data() {
			return {
				form: {
					name: "",
					region_id: ""
				}
			};
		},
		methods: {
			submit() {
				this.$inertia.post("/districts", this.form).then(response => {
					this.$emit("close");
				});
			}
		}
	};
</script>