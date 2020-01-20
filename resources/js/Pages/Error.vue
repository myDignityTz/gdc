<template>
    <div class="flex justify-center">
        <div class="bg-white px-6 py-6 rounded shadow mt-32">
            <h1 class="text-lg mb-4">{{ title }}</h1>
            <div>{{ description }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            status: Number,
        },
        data() {
            return {
                errors: {
                    503: {
                        title: "503: Service Unavailable",
                        description: "Sorry, we are doing some maintenance. Please check back soon."
                    },
                    500: {
                        title: "500: Server Error",
                        description: "Whoops, something went wrong on our servers."
                    },
                    404: {
                        title: "404: Page Not Found",
                        description: "Sorry, the page you are looking for could not be found."
                    },
                    403: {
                        title: "403: Forbidden",
                        description: "Sorry, you are forbidden from accessing this page."
                    }
                }
            }
        },
        computed: {
            title() {
                return this.errors[this.status].title;
            },
            description() {
                return this.errors[this.status].description;
            },
        },
    }
</script>
