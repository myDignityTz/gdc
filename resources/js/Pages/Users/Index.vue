<template>
	<layout title="The Expert - Users">
		<div class="w-2/3 mx-auto mb-12">
			<header class="flex justify-between my-8">
				<h1 class="text-lg font-semibold">Users</h1>
				<button class="btn btn-purple" @click.prevent="handleCreating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current mr-1"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
                    New User
				</button>
			</header>

			<div class="bg-white mt-6 shadow rounded overflow-hidden">
				<table class="text-left w-full">
					<thead>
						<tr>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>User</th>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>Email</th>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>Roles</th>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>Created at</th>
							<th
								class="px-4 py-4 bg-gray-100 text-xs text-gray-600 uppercase font-semibold tracking-wider"
							>&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="user in users">
							<tr :key="user.id" class="border-t">
								<td class="px-4 py-4">
									<h3 class="text-sm font-semibold leading-none">{{ user.name }}</h3>
									<span class="text-xs text-gray-600">{{ user.role }}</span>
								</td>
								<td class="px-4 py-4">{{ user.email }}</td>
								<td class="px-4 py-4">
                                    <v-popover trigger="click" offset="16">
                                        <a href="#" @click.prevent="" class="text-purple-600">{{ user.roles.length }} roles assigned</a>

                                        <template #popover>
                                            <div class="bg-white shadow-2xl rounded px-4 pb-6 overflow-auto" style="max-height: 320px;">
                                                <div v-for="(role, roleNumber) in user.roles" class="mt-4">
                                                    <h1 class="uppercase tracking-wide text-gray-700 border-b-2 border-gray-200 pb-2">
                                                        {{ roleNumber + 1 }}. {{ role.title }}
                                                    </h1>
                                                    <div class="mt-4">
                                                        <template v-if="role.name === 'admin'">
                                                            <div class="bg-purple-100 border border-purple-300 px-4 py-2 rounded">With admin role user can do everything.</div>
                                                        </template>
                                                        <template v-else>
                                                            <template v-if="role.abilities.length">
                                                                <div v-for="(ability, abilityNumber) in role.abilities" class="mt-1 text-gray-700">
                                                                    {{ abilityNumber + 1 }}. Can {{ ability.title.toLowerCase() }}
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class="bg-purple-100 border border-purple-300 px-4 py-2 rounded">No ability available for this role</div>
                                                            </template>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </v-popover>
                                </td>
								<td class="px-4 py-4">{{ user.created_at }}</td>
								<td class="px-4 py-4">
									<div class="flex items-center">
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700" @click="handleEditing(user)">Preview</a>
										<span class="text-xs px-2 text-gray-400">|</span>
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700" @click="handleEditing(user)">Edit</a>
										<span class="text-xs px-2 text-gray-400">|</span>
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700" @click="handleDeleting(user)">Delete</a>
									</div>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	import UserCreate from "./Create";
	import UserEdit from "./Edit";
	import UserDelete from "./Delete";

	export default {
		components: {
		    Layout
        },
		props: {
            users : {
                required: true
            },
            roles: {
                required: true
            }
        },
		data() {
			return {};
		},
		methods: {
			handleCreating() {
				this.$modal.show(UserCreate, { roles: this.roles }, { height: "auto" });
			},
            handleEditing(user) {
				this.$modal.show(UserEdit, { user, roles: this.roles }, { height: "auto" });
			},
            handleDeleting(user) {
				this.$modal.show(UserDelete, { user, roles: this.roles }, { height: "auto" });
			}
		}
	};
</script>

<style>
	.v-popover {
		line-height: 0;
	}
</style>
