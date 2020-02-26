<template>
    <form @submit.prevent="submit">
        <header class="px-6 mt-6">
            <h2 class="text-gray-700 text-xs uppercase tracking-wide font-semibold">Edit Allegation Type</h2>
        </header>
        <section class="mt-6">
            <div class="px-6 mb-6">
                <label for="name" class="block mb-2">Name</label>
                <input type="text" id="name" class="form-input w-full" v-model="form.name" />
                <div class="mt-2 text-sm text-red-500" v-if="form.errors.has('name')">{{ form.errors.first('name') }}</div>
            </div>
        </section>

        <footer class="px-6 pb-4 flex justify-end">
            <button
                @click.prevent="submit"
                class="bg-purple-700 text-white text-xs uppercase tracking-wider px-5 py-3 rounded"
            >Save Changes</button>
        </footer>
    </form>
</template>

<script>
    import EventBus from '@/events';
    import Form from "form-backend-validation";

    export default {
        props: {
            allegationType: {
                required: true,
                type: Object
            }
        },
        data() {
            return {
                form: new Form({ name: this.allegationType.name })
            };
        },
        methods: {
            async submit() {
                try {
                    await this.form.put(`/allegation_types/${this.allegationType.id}`);

                    this.$emit("close");

                    EventBus.$emit('allegationTypeWasUpdated', true);

                    this.$inertia.reload();
                } catch (e) {

                }
            }
        }
    };
</script>
