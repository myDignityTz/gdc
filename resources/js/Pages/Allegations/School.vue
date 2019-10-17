<template>
	<div class="bg-gray-100 px-6 py-6 mb-6 mt-3">
		<div class="flex -mx-3">
			<div class="mb-6 w-full px-3">
				<label for="type" class="block mb-2 text-gray-700">School name</label>
				<input class="form-input w-full" v-model="form.name" />
			</div>
		</div>
		<div class="flex -mx-3">
			<div class="mb-6 w-1/3 px-3">
				<label for="type" class="block mb-2 text-gray-700">Type</label>
				<select class="form-select w-full" v-model="form.type">
					<option value>Choose...</option>
					<option value="private">Private</option>
					<option value="government">Government</option>
				</select>
			</div>
			<div class="mb-6 w-2/3 px-3">
				<label for="type" class="block mb-2 text-gray-700">Level</label>
				<select class="form-select w-full" v-model="form.level">
					<option value>Choose...</option>
					<option value="primary">Primary Education</option>
					<option value="a-level">Secondary Education (O - level)</option>
					<option value="o-level">Secondary Education (A - level)</option>
				</select>
			</div>
		</div>

		<div class="flex -mx-3">
			<div class="mb-6 w-full px-3">
				<label for="type" class="block mb-1 text-gray-700">Street</label>
				<input type="text" class="form-input w-full" v-model="form.street" />
			</div>
		</div>

		<div class="flex -mx-3">
			<div class="mb-6 w-1/2 px-3">
				<label for="type" class="block mb-2 text-gray-700">Region</label>
				<select class="form-select w-full" v-model="form.region_id">
					<option value>Choose...</option>
					<option v-for="region in regions" :key="region.id" :value="region.id">{{ region.name }}</option>
				</select>
			</div>
			<div class="mb-6 w-1/2 px-3">
				<label for="type" class="block mb-2 text-gray-700">District</label>
				<select class="form-select w-full" v-model="form.district_id">
					<option value>Choose...</option>
					<option
						v-for="district in districts"
						:key="district.id"
						:value="district.id"
					>{{ district.name }}</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["regions"],
		data() {
			return {
				form: {
					name: "",
					type: "",
					level: "",
					street: "",
					region_id: "",
					district_id: ""
				}
			};
		},
		watch: {
			form: {
				handler: function() {
					this.$emit("environment", this.form);
				},
				deep: true
			}
		},
		computed: {
			districts() {
				let region = this.regions.find(item => {
					return item.id === this.form.region_id;
				});

				return region ? region.districts : [];
			}
		}
	};
</script>