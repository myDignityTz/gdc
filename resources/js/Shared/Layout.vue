<template>
	<main>
		<header class="bg-purple-700 py-6">
			<nav class="w-2/3 mx-auto">
				<div class="flex justify-between">
					<div class="flex items-center text-purple-300">
						<inertia-link
                            :class="{ 'text-white': $current('home') }"
                            class="pr-4"
                            href="/home"
                            v-if="$can('view-dashboard')"
                        >Dashboard</inertia-link>

						<inertia-link
							:class="{ 'text-white': $current('allegations.index') }"
							class="px-4"
							:href="$route('allegations.index')"
                            v-if="$can('browse-allegations')"
						>Allegations</inertia-link>

						<inertia-link
							:class="{ 'text-white': $current('stakeholders.index') }"
							class="px-4"
							href="/stakeholders"
                            v-if="$can('browse-stakeholders')"
						>Stakeholders</inertia-link>

						<inertia-link
							:class="{ 'text-white': $current('users.index') }"
							class="px-4"
							href="/users"
                            v-if="$can('browse-users')"
						>Users</inertia-link>

						<v-popover placement="bottom-start" offset="24" v-if="$can('view-settings')">
							<!-- This will be the popover target (for the events and position) -->
							<button class="flex items-center px-4">
								<span class="mr-2">Settings</span>
								<i class="ri-arrow-down-s-line"></i>
							</button>
							<!-- This will be the content of the popover -->
							<template slot="popover">
								<div class="bg-white shadow-xl">
									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/allegation_types"
                                        v-if="$can('browse-allegation-types')"

									>Allegation Type</inertia-link>

									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/regions"
                                        v-if="$can('browse-regions')"
									>Regions</inertia-link>

									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/districts"
                                        v-if="$can('browse-districts')"
									>Districts</inertia-link>

									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/relationships"
                                        v-if="$can('browse-suspect-relationships')"
									>Suspect Relationships</inertia-link>
								</div>
							</template>
						</v-popover>

					</div>

                    <!--                    -->
					<div>
						<v-popover placement="bottom-start">
							<!-- This will be the popover target (for the events and position) -->
							<button class="text-white flex items-center">
								<span class="mr-2 leading-none">{{ $page.auth.user.name }}</span>
								<i class="ri-arrow-down-s-line"></i>
							</button>
							<!-- This will be the content of the popover -->
							<template slot="popover">
								<div class="bg-white shadow-xl">
									<header class="px-4 py-2 border-b">
										<h3 class="text-sm font-semibold text-gray-700">{{ $page.auth.user.name }}</h3>
										<span class="text-xs text-gray-600">{{ $page.auth.user.email }}</span>
									</header>
									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/account"
									>Account</inertia-link>
									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/password"
									>Change password</inertia-link>
									<inertia-link
										class="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-white"
										href="/logout"
										method="post"
									>Logout</inertia-link>
								</div>
							</template>
						</v-popover>
					</div>
				</div>
			</nav>
		</header>
		<article>
			<slot />
		</article>
	</main>
</template>

<script>
	export default {
		props: {
			title: String
		},
		watch: {
			title: {
				immediate: true,
				handler(title) {
					document.title = title;
				}
			}
		}
	};
</script>
