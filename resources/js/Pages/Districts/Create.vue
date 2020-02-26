<template>
	<form @submit.prevent="submit">
        <header class="px-6 mt-6">
            <h2 class="text-gray-700 text-xs uppercase tracking-wide font-semibold">Create District</h2>
        </header>

		<section class="mt-6">
			<div class="px-6 mb-6">
				<label for="name" class="block mb-2">Name</label>
                <input type="text" id="name" class="form-input w-full" v-model="form.name" />
                <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('name')">{{ form.errors.first('name') }}</div>
			</div>

			<div class="px-6 mb-6">
				<label for="region" class="block mb-2">Region</label>
				<select id="region" class="form-select w-full" v-model="form.region_id">
					<option value>Choose...</option>
					<option v-for="region in regions" :key="region.id" :value="region.id">
                        {{ region.name }}
                    </option>
				</select>
                <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('region_id')">{{ form.errors.first('region_id') }}</div>
            </div>
		</section>

		<footer class="px-6 pb-4 flex justify-end">
			<button class="btn btn-purple" @click.prevent="submit">Save Changes</button>
		</footer>
	</form>
</template>

<script>
    import EventBus from '@/events';
    import Form from "form-backend-validation";

	export default {
		props: {
            regions: {
                required: true
            }
        },
		data() {
			return {
				form: new Form({
                    name: "",
                    region_id: ""
                })
			};
		},
		methods: {
            async submit() {
                try {
                    await this.form.post(`/districts`);

                    this.$emit("close");

                    EventBus.$emit('districtWasCreated', true);

                    this.$inertia.reload();

                } catch (e) { }
            }
		}
	};
</script>
