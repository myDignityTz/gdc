<template>
    <form @submit.prevent="handleLogin">
        <!-- Header -->
        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">
                Sign In
            </h2>
        </header>

        <!-- Body -->
        <div class="px-6">
            <!-- Email -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="email" class="block mb-2 text-gray-700">Email Address</label>
                    <input id="email" type="email" class="form-input w-full" autocomplete="email" v-model.trim="form.email"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('email')">{{ form.errors.first("email") }}</div>
                </div>
            </div>
            <!-- Password -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="password" class="block mb-2 text-gray-700">Password</label>
                    <input id="password" type="password" class="form-input w-full" autocomplete="current-password" v-model.trim="form.password"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('password')">{{ form.errors.first("password") }}</div>
                </div>
            </div>
            <!-- Remember me -->
            <div class="mb-6">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <input class="form-checkbox" type="checkbox" name="remember" id="remember" v-model="form.remember"/>
                        <label class="ml-2" for="remember">Remember me</label>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-purple-100 py-4 px-6 flex justify-end items-center">
            <button class="bg-purple-200 text-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded mr-3" @click.prevent="cancel">
                Cancel
            </button>
            <button class="bg-purple-700 text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded" @click.prevent="handleLogin">
                Sign In
            </button>
        </footer>
    </form>
</template>

<script>
    import Form from 'form-backend-validation';

    export default {
        data() {
            return {
                isLoading: false,
                form: new Form({
                    password: null,
                    email: null,
                    remember: false
                })
            };
        },
        methods: {
            async handleLogin() {
                try {

                    await this.form.post('login');

                    this.$emit("close");

                    await this.$inertia.visit(`/home`);

                } catch (e) {}
            },
            cancel() {
                this.$emit("close");
            }
        }
    };
</script>
