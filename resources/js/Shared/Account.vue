<template>
    <form @submit.prevent="handleLogin">
        <!-- Header -->
        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">{{ user.name }}</h2>
        </header>

        <!-- Body -->
        <div class="px-6">
            <!-- Email -->
            <!-- Password -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="name" class="block mb-2 text-gray-700">Name</label>
                    <input id="name" type="text" class="form-input w-full" v-model.trim="form.name"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('name')">{{ form.errors.first("name") }}</div>
                </div>
            </div>

            <div class="flex mb-6">
                <div class="w-full">
                    <label for="email" class="block mb-2 text-gray-700">Email Address</label>
                    <input id="email" type="email" class="form-input w-full" autocomplete="email" v-model.trim="form.email"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('email')">{{ form.errors.first("email") }}</div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-purple-100 py-4 px-6 flex justify-end items-center">
            <button class="btn btn-purple" @click.prevent="handleLogin">Update</button>
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
                    name: this.$page.auth.user.name,
                    email: this.$page.auth.user.email,
                })
            };
        },
        methods: {
            async handleLogin() {
                try {

                    await this.form.put(`/account/${this.$page.auth.user.id}`);

                    this.$emit("close");

                    await this.$inertia.reload();

                } catch (e) {}
            },
            cancel() {
                this.$emit("close");
            }
        }
    }
</script>
