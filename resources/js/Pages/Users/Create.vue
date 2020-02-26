<template>
	<form @submit.prevent="submit">
        <header class="px-6 mt-6">
            <h2 class="text-gray-700 text-xs uppercase tracking-wide font-semibold">Create User</h2>
        </header>

		<section class="mt-6">
			<div class="px-6 mb-6">
				<label for="name" class="block mb-2">Name</label>
				<input type="text" id="name" class="form-input w-full" v-model="form.name" />
                <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('name')">{{ form.errors.first('name') }}</div>
			</div>
			<div class="px-6 mb-6">
				<label for="email" class="block mb-2">Email</label>
				<input type="email" id="email" class="form-input w-full" v-model="form.email" />
                <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('email')">{{ form.errors.first('email') }}</div>
			</div>
		</section>
		<section class="px-6">
			<span>Roles</span>
			<div class="flex mt-1" v-for="role in roles" :key="role.id">
				<label class="flex items-center">
					<input type="checkbox" class="form-checkbox" :value="role.name" v-model="form.roles" />
					<span class="ml-2">{{ role.title }}</span>
				</label>
			</div>
            <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('roles')">
                Users must be assigned at least to a one role
            </div>
		</section>
		<hr class="my-4" />
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
            roles: {
                required: true
            }
        },
		data() {
			return {
				form: new Form({
                    name: '',
                    email: '',
                    roles: []
                })
			};
		},
		methods: {
            async submit() {
                try {
                    await this.form.post(`/users`);

                    this.$emit("close");

                    EventBus.$emit('userWasCreated', true);

                    this.$inertia.reload();

                } catch (e) {}
            }
		}
	};
</script>
