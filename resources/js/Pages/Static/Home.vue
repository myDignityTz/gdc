<template>
	<layout title="The Expert - Home">
		<!-- Cover -->
		<section class="cover bg-purple-700">
			<div class="w-2/3 mx-auto">
				<header class="py-24">
					<div class="flex -mx-6">
						<div class="w-1/2 px-6">
							<header class="mb-12">
								<h1 class="text-4xl font-bold text-white mb-4">GIRLS DROPOUT CURE</h1>
								<p class="text-purple-100 text-lg leading-loose">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Inventore adipisci odio rerum nostrum aspernatur tenetur
									cumque officia dolores aut,
									<span
										class="font-bold text-purple-900"
									>explicabo natus</span> distinctio illo
									et nihil
									<span
										class="font-bold text-purple-900"
									>veniam perspiciatis</span> saepe non consectetur.
								</p>
							</header>
							<footer class="flex">
								<a
									class="bg-white leading-none text-xs uppercase tracking-wider font-semibold text-purple-700 px-5 py-4 flex items-center rounded shadow"
									href="/report_issues"
								>Report an Issue</a>
								<a
									class="bg-purple-400 text-purple-900 leading-none text-xs uppercase tracking-wider font-bold px-5 py-4 ml-4 flex items-center rounded"
									href="/report_issues"
								>Register</a>
							</footer>
						</div>
						<div class="w-1/2 px-6 flex h-auto">
							<img class="h-64 w-full self-center" src="/img/cover/image01.svg" alt />
						</div>
					</div>
				</header>
			</div>
		</section>

		<!-- Mission -->
		<section class="bg-white py-24">
			<div class="w-2/3 mx-auto">
				<div class="flex -mx-6">
					<div class="w-1/2 px-6">
						<header class="mb-6">
							<h1
								class="inline-block pb-2 border-purple-500 border-b-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"
							>Mission</h1>
						</header>
						<div class="text-gray-600 text-xl">
							To give girls the voice to speak out against humiliations and
							harassments and provide educational support through our
							partners for them to become leaders of change.
						</div>
						<footer class="mt-8">
							<inertia-link
								href="/about"
								class="inline-flex bg-purple-200 py-2 px-4 rounded-full font-purple-700"
							>
								<span class="text-xs uppercase font-semibold tracking-wider">See Full Mission</span>
							</inertia-link>
						</footer>
					</div>
					<div class="w-1/2 px-6">
						<div class="shadow rounded overflow-hidden">
							<img class="w-full h-64 object-cover" src="/img/pages/image02.jpg" alt />
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Team -->
		<section class="bg-purple-100 py-24">
			<div class="w-2/3 mx-auto">
				<div class="flex">
					<div class="w-full">
						<header class="mb-6">
							<h1
								class="inline-block pb-2 border-purple-500 border-b-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"
							>Our Team</h1>
						</header>
						<div class="text-gray-600 text-2xl mb-4">
							GDC works on the ground with the committee which comprises parents,
							teachers, non-governmental organizations and key players initiating
							social welfare and secondary age educational. All of whom volunteer
							their time and expertise to ensure more girls complete their basic
							primary certification.
						</div>

						<div class="text-gray-600 text-xl font-thin">
							Supported physically by
							<a href="#" target="_blank" class="text-purple-500">
								<span class="font-semibold">UNICEF</span>
								<i class="ri-links-line ri-sm"></i>
							</a> and
							<a href="#" target="_blank" class="text-purple-500">
								<span class="font-semibold">Apps & Girls</span>
								<i class="ri-links-line ri-sm"></i>
							</a>.
						</div>

						<div class="mt-16">
							<div class="flex">
								<div class="w-1/3">
									<div class="flex items-center">
										<img class="h-16 w-16 object-cover rounded-full" src="/img/team/member01.jpg" />
										<div class="ml-4">
											<h3 class="text-gray-700 mb-2">Zahra Juma Mohamed</h3>
											<div class="text-gray-600 text-xs uppercase tracking-wider font-semibold">Team leader</div>
										</div>
									</div>
								</div>
								<div class="w-1/3">
									<div class="flex items-center">
										<img class="h-16 w-16 object-cover rounded-full" src="/img/team/member02.jpg" />
										<div class="ml-4">
											<h3 class="text-gray-700 mb-2">Faith Mote</h3>
											<div
												class="text-gray-600 text-xs uppercase tracking-wider font-semibold"
											>General Secretary</div>
										</div>
									</div>
								</div>
								<div class="w-1/3">
									<div class="flex items-center">
										<img class="h-16 w-16 object-cover rounded-full" src="/img/team/member03.jpg" />
										<div class="ml-4">
											<h3 class="text-gray-700 mb-2">Domitrida Joram</h3>
											<div
												class="text-gray-600 text-xs uppercase tracking-wider font-semibold"
											>Team representative</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</layout>
</template>

<script>
	import Layout from "@/Shared/SiteLayout";
	export default {
		components: { Layout }
	};
</script>

<style lang="scss" scoped>
	.cover {
		height: calc(100vh - 72px);
	}
</style>
