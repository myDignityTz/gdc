<template>
    <main>
        <header class="bg-purple-700 py-5">
            <nav class="lg:w-2/3 w-full mx-auto">
                <div class="flex lg:flex-row flex-col items-center justify-between">
                    <div class="flex w-full lg:flex-row flex-col items-center text-purple-300">

                        <inertia-link
                            class="flex-shrink-0 mb-6 lg:mb-0 text-white font-bold lg:pr-4 lg:inline-block block pl-6 lg:pl-0 text-left w-full lg:w-auto"
                            href="/"
                        >
                            <img :src="`/img/logo/logo.png`" class="h-12 w-12" alt="">
                        </inertia-link>


                        <div class="flex flex-col lg:flex-row w-full">
                            <inertia-link
                                :class="{ 'text-white': $current('about') }"
                                class="hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap"
                                href="/about"
                            >About</inertia-link>

                            <inertia-link
                                :class="{ 'text-white': $current('stories') }"
                                class="hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap"
                                href="/stories"
                            >Stories</inertia-link>

                            <inertia-link
                                :class="{ 'text-white': $current('how-we-work') }"
                                class="hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap"
                                href="/how_we_work"
                            >How We Work</inertia-link>

                            <inertia-link
                                :class="{ 'text-white': $current('contact') }"
                                class="hover:text-white lg:px-4 px-6 block lg:inline mb-4 lg:mb-0 whitespace-no-wrap"
                                href="/contact"
                            >Contact</inertia-link>
                        </div>
                    </div>
                    <div class="flex lg:flex-row flex-col lg:items-center w-full px-6 lg:px-0 justify-end">
                        <template v-if="isAuthenticated">
                            <inertia-link
                                href="/home"
                                class="text-white px-3 hover:underline"
                                >{{ user.name }}</inertia-link
                            >
                        </template>
                        <template v-else>
                            <button
                                class="block text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline rounded bg-purple-600 lg:bg-transparent py-3 mb-4 lg:mb-0"
                                @click.prevent="login"
                            >
                                Sign in
                            </button>
                            <button
                                class="block text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline rounded bg-purple-600 lg:bg-transparent py-3 mb-4 lg:mb-0"
                                @click.prevent="register"
                            >
                                Register
                            </button>
                        </template>
                        <inertia-link
                            class="lg:ml-4 bg-white text-blue-700 px-4 py-3 flex items-center justify-center rounded text-center"
                            href="/report_issues"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                            <span
                                class="ml-2 leading-none text-xs uppercase tracking-wider font-semibold"
                                >Report Issue</span
                            >
                        </inertia-link>
                    </div>
                </div>
            </nav>
        </header>
        <article>
            <slot />
        </article>

        <footer class="py-8 bg-blue-900">
            <div class="lg:w-2/3 mx-auto px-6 lg:px-0">
                <div class="flex lg:flex-row flex-col items-center justify-between">
                    <div class="text-white mb-4">
                        &copy; Copyright {{ (new Date()).getFullYear() }}, The Expert.
                    </div>
                    <nav class="flex items-center">
                        <a href="#" class="px-2 text-blue-100 hover:text-blue-300 flex items-center">
                            <i class="ri-facebook-box-fill"></i>
                            <span class="ml-2">Facebook</span>
                        </a>
                        <a href="#" class="px-2 text-blue-100 hover:text-blue-300 flex items-center">
                            <i class="ri-instagram-fill"></i>
                            <span class="ml-2">Instagram</span>
                        </a>
                        <a href="#" class="px-2 text-blue-100 hover:text-blue-300 flex items-center">
                            <i class="ri-twitter-fill"></i>
                            <span class="ml-2">Twitter</span>
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
import SignIn from "./SignIn";
import SignUp from "./SignUp";
export default {
    props: {
        title: String
    },
    data() {
        return {
            options: {
                height: "auto",
                width: "450px",
                scrollable: true
            }
        };
    },
    computed: {
        user() {
            return this.$page.auth.user;
        },
        isAuthenticated() {
            return !!this.$page.auth.user;
        }
    },
    watch: {
        title: {
            immediate: true,
            handler(title) {
                document.title = title;
            }
        }
    },
    methods: {
        login() {
            this.$modal.show(SignIn, {}, this.options);
        },
        register() {
            this.$modal.show(SignUp, {}, this.options);
        }
    }
};
</script>
