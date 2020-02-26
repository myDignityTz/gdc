<template>
    <form @submit.prevent="submit">
        <!-- Header -->
        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">Change password</h2>
        </header>

        <!-- Body -->
        <div class="px-6">

            <!-- Password -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="password_old" class="block mb-2 text-gray-700">Old Password</label>
                    <input id="password_old" type="password" class="form-input w-full" v-model.trim="form.password_old"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('password_old')">{{ form.errors.first("password_old") }}</div>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="w-full">
                    <label for="password" class="block mb-2 text-gray-700">Password</label>
                    <input id="password" type="password" class="form-input w-full" v-model.trim="form.password"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('password')">{{ form.errors.first("password") }}</div>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="w-full">
                    <label for="password_confirmation" class="block mb-2 text-gray-700">New password</label>
                    <input id="password_confirmation" type="password" class="form-input w-full" v-model.trim="form.password_confirmation"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('password_confirmation')">{{ form.errors.first("password_confirmation") }}</div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-purple-100 py-4 px-6 flex justify-end items-center">
            <button class="btn btn-purple" @click.prevent="submit">Confirm</button>
        </footer>
    </form>
</template>

<script>
    import Form from "form-backend-validation";

    export default {
        computed: {
            user() {
                return this.$page.auth.user;
            }
        },
        data() {
            return {
                isLoading: false,
                form: new Form({
                    password_old: '',
                    password: '',
                    password_confirmation: '',
                })
            };
        },
        methods: {
            async submit() {
                try {
                    await this.form.put(`/password/${this.$page.auth.user.id}`);

                    this.$emit("close");

                    await this.$inertia.reload();

                } catch (e) {
                    console.log(e);
                }
            },
            cancel() {
                this.$emit("close");
            }
        }
    }
</script>
