<template>
    <form @submit.prevent="submit">
        <header class="px-6 mt-6">
            <h2 class="text-gray-700 text-xs uppercase tracking-wide font-semibold">Delete User</h2>
        </header>

        <section class="mt-6">
            <div class="px-6 mb-6">Are you sure you want to delete this item?</div>
        </section>

        <footer class="px-6 py-3 flex justify-end bg-gray-100">
            <button class="btn btn-gray mr-2" @click.prevent="cancel">Cancel</button>
            <button class="btn btn-red" @click.prevent="submit">Confirm Delete</button>
        </footer>
    </form>
</template>

<script>
    import EventBus from '@/events';
    import Form from "form-backend-validation";

    export default {
        props: {
            user: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                form: new Form({})
            };
        },
        methods: {
            async submit() {
                try {
                    await this.form.delete(`/users/${this.user.id}`);

                    this.$emit("close");

                    EventBus.$emit('userWasDeleted', true);

                    this.$inertia.reload();

                } catch (e) { }
            },
            cancel() {
                this.$emit("close");
            }
        }
    };
</script>
