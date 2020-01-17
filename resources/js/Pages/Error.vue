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
        computed: {
            title() {
                return {
                    503: '503: Service Unavailable',
                    500: '500: Server Error',
                    404: '404: Page Not Found',
                    403: '403: Forbidden',
                }[this.status]
            },
            description() {
                return {
                    503: 'Sorry, we are doing some maintenance. Please check back soon.',
                    500: 'Whoops, something went wrong on our servers.',
                    404: 'Sorry, the page you are looking for could not be found.',
                    403: 'Sorry, you are forbidden from accessing this page.',
                }[this.status]
            },
        },
    }
</script>
