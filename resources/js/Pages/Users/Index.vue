<template>
	<layout title="The Expert - Users">
		<div class="w-2/3 mx-auto mb-12">
			<header class="flex justify-between my-8">
				<h1 class="text-lg font-semibold">Users</h1>
				<button
					class="flex items-center bg-purple-700 text-white px-5 py-2 hover:bg-purple-600 rounded"
					@click.prevent="create"
				>
					<i class="ri-add-line mr-2"></i>
					<span class="text-xs uppercase tracking-wider font-semibold">New User</span>
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
							></th>
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
								<td class="px-4 py-4">{{ user.roles.length }}</td>
								<td class="px-4 py-4">{{ user.created_at }}</td>
								<td class="px-4 py-4">
									<div class="flex items-center">
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700">Preview</a>
										<span class="text-xs px-2 text-gray-400">|</span>
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700">Edit</a>
										<span class="text-xs px-2 text-gray-400">|</span>
										<a href="#" class="text-xs uppercase tracking-wider text-gray-700">Delete</a>
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
	import Layout from "./../../Shared/Layout";
	import UserCreate from "./Create";
	export default {
		components: { Layout },
		props: ["users", "roles"],
		data() {
			return {
				options: {
					height: "auto"
				}
			};
		},
		methods: {
			create() {
				this.$modal.show(UserCreate, { roles: this.roles }, this.options);
			}
		}
	};
</script>

<style>
	.v-popover {
		line-height: 0;
	}
</style>