<template>
	<main>
		<header class="bg-purple-700 py-5">
			<nav class="w-2/3 mx-auto">
				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<inertia-link class="text-white font-bold pr-4" href="/">GDC</inertia-link>
						<inertia-link class="text-white px-4" href="/about">About</inertia-link>
						<inertia-link class="text-white px-4" href="/stories">Stories</inertia-link>
						<inertia-link class="text-white px-4" href="/how_we_work">How we Work</inertia-link>
						<inertia-link class="text-white px-4" href="/contact">Contact</inertia-link>
					</div>
					<div class="flex items-center">
						<a
							class="text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline"
							href="/login"
						>Login</a>
						<a
							class="text-white px-3 text-xs uppercase tracking-wider font-semibold hover:underline"
							href="/login"
						>Register</a>
						<a
							class="ml-4 bg-white text-blue-700 px-4 py-2 flex items-center rounded"
							href="/report_issues"
						>
							<i class="ri-add-line"></i>
							<span class="ml-2 leading-none text-xs uppercase tracking-wider font-semibold">Report Issue</span>
						</a>
					</div>
				</div>
			</nav>
		</header>
		<article>
			<slot />
		</article>
		<footer class="py-8 bg-blue-900">
			<div class="w-2/3 mx-auto">
				<div class="flex items-center justify-between">
					<div class="text-white">&copy; Copyright 2019, The Expert.</div>
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