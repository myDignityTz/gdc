<template>
    <form @submit.prevent="handleRegistration">
        <!-- Header -->
        <header class="px-6 py-6">
            <h2 class="border-b pb-4 text-xs uppercase tracking-wider">Register</h2>
        </header>

        <!-- Body -->
        <div class="px-6">
            <!-- Name Field -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="name" class="block mb-2 text-gray-700">Full Name</label>
                    <input id="name" class="form-input w-full" v-model="form.name"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('name')">{{ form.errors.first("name") }}</div>
                </div>
            </div>
            <!-- Email -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="email" class="block mb-2 text-gray-700">Email Address</label>
                    <input id="email" type="email" class="form-input w-full" v-model="form.email"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('email')">{{ form.errors.first("email") }}</div>
                </div>
            </div>
            <!-- Password -->
            <div class="flex mb-6">
                <div class="w-full">
                    <label for="password" class="block mb-2 text-gray-700">Password</label>
                    <input id="password" type="password" class="form-input w-full" v-model="form.password"/>
                    <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('password')">{{ form.errors.first("password") }}</div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-purple-100 py-4 px-6 flex justify-end items-center">
            <button class="bg-purple-200 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded text-purple-700  mr-3" @click.prevent="cancel">
                Cancel
            </button>
            <button
                class="bg-purple-700 text-xs uppercase font-bold tracking-wider px-6 py-3 rounded text-white"
                :class="{ 'opacity-50 cursor-not-allowed' : isLoading }"
                @click.prevent="handleRegistration"
                :disabled="isLoading"
            >
                {{ isLoading ? 'Submitting...' : 'Register' }}
            </button>
        </footer>
    </form>
</template>

<script>
    import Form from 'form-backend-validation';
    import { Errors } from 'form-backend-validation';

    export default {
        data() {
            return {
                isLoading: false,
                form: new Form({
                    email: '',
                    name: '',
                    password: ''
                })
            };
        },
        methods: {
            async handleRegistration() {
                this.isLoading = true;

                try {
                    await this.form.post(`/register`, this.form);

                    this.$emit("close");

                    this.isLoading = false;

                    this.$inertia.reload();
                } catch (e) {
                    this.isLoading = false;
                }
            },
            cancel() {
                this.$emit("close");
            }
        }
    };
</script>

