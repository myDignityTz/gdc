<template>
	<layout title="The Expert - Users">
		<div class="w-2/3 mx-auto mb-12">
			<header class="flex justify-between my-8">
				<h1 class="text-lg font-semibold">Suspect Relationship</h1>
				<button class="btn btn-purple" @click.prevent="handleCreating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                    New Relationship
				</button>
			</header>

            <div class="mt-6" v-if="wasStored">
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Holy smokes!</strong>
                    <span class="block sm:inline"> New relationship type is created successfully!</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click.prevent="wasStored = false">
                        <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
            </div>

			<div class="bg-white mt-6 shadow rounded overflow-hidden">
				<table class="text-left w-full">
					<thead>
						<tr class="text-xs text-gray-600 uppercase font-semibold tracking-wide">
							<th class="px-4 py-4 bg-gray-100">Name</th>
							<th class="px-4 py-4 bg-gray-100">Created at</th>
							<th class="px-4 py-4 bg-gray-100">Updated at</th>
							<th class="px-4 py-4 bg-gray-100">&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="relationship in relationships" :key="relationship.id" class="border-t">
							<td class="px-4 py-4">{{ relationship.name }}</td>
							<td class="px-4 py-4">{{ relationship.created_at }}</td>
							<td class="px-4 py-4">{{ relationship.updated_at }}</td>
							<td class="px-4 py-4">
								<div class="flex items-center">
									<a href="#" class="text-xs uppercase tracking-wider text-gray-700" @click.prevent="handleEditing(relationship)">Edit</a>
									<span class="text-xs px-2 text-gray-400">|</span>
									<a href="#" class="text-xs uppercase tracking-wider text-gray-700" @click.prevent="handleDeleting(relationship)">Delete</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</layout>
</template>

<script>
    import EventBus from '@/events.js';
	import Layout from "@/Shared/Layout";
	import RelationshipCreate from "./Create";
	import RelationshipEdit from "./Edit";
	import RelationshipDelete from "./Delete";

	export default {
		components: {
		    Layout
        },
		props: {
            relationships: {
                required: true
            }
        },
        data() {
		    return {
                wasStored: false
            }
        },
        mounted() {
            EventBus.$on('relationshipCreated', (value) => {
                this.wasStored = value;
            });

            window.setInterval(() => {
                if (this.wasStored) { this.wasStored = false; }
            }, 5 * 1000);
        },
		methods: {
			handleCreating() {
				this.$modal.show(RelationshipCreate, {}, { height: "auto" });
			},
            handleEditing(relationship) {
				this.$modal.show(RelationshipEdit, { relationship }, { height: "auto" });
			},
            handleDeleting(relationship) {
				this.$modal.show(RelationshipDelete, { relationship }, { height: "auto" });
			}
		}
	};
</script>
