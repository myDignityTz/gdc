<template>
	<layout title="The Expert - About">
		<div class="w-full">
			<section class="bg-purple-700 py-24">
				<div class="w-2/3 mx-auto relative">
					<div class="flex mb-12">
						<div class="w-2/3">
							<header class="mb-4">
								<h1 class="text-3xl font-semibold text-white">Shared Stories</h1>
							</header>
							<div class="text-purple-100 text-lg leading-loose">
								Keep up to date with what people share their stories! Girls Dropout Cure is an ever
								evolving stories with regular updates.
							</div>
						</div>
					</div>
					<form class="bg-white absolute left-0 right-0 py-10 px-12 rounded shadow" style="top: 12rem;">
						<div class="flex">
							<input type="text" class="form-input w-full" placeholder="Search..." />
							<button class="bg-purple-700 px-6 rounded text-white ml-4">Search</button>
						</div>
						<div class="mt-5">
							<span class="mr-4">Tags:</span>
							<span class="bg-gray-200 py-1 px-2 text-sm rounded-full mx-1">Sexual Abuse</span>
							<span class="bg-gray-200 py-1 px-2 text-sm rounded-full mx-1">Emotional Abuse</span>
							<span class="bg-gray-200 py-1 px-2 text-sm rounded-full mx-1">Other</span>
						</div>
					</form>
				</div>
			</section>

			<!-- Mission -->
			<section class="bg-white py-24">
				<div class="w-2/3 mx-auto">
					<article class="flex mt-12 border rounded overflow-hidden" v-for="index in 5" :key="index">
						<div class="w-1/2">
							<div class="flex flex-col h-full justify-between px-6 py-6">
								<h3
									class="text-lg text-gray-700 font-semibold mb-2"
								>Travel Can Keep You Creatively Inspired.</h3>
								<div class="text-gray-600">
									<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, soluta ducimus commodi incidunt iste fugiat excepturi natus deserunt itaque, praesentium dolorum optio aut enim, illo officia ex quam. Voluptate, repudiandae.</p>
								</div>
								<footer class="flex items-center justify-between border-t mt-4 pt-4">
									<div>
										<h4 class="text-sm text-gray-600">David Pella</h4>
									</div>
									<div class="text-gray-600">May 04</div>
								</footer>
							</div>
						</div>
						<div class="w-1/2">
							<img class="object-cover" src="/img/stories/image01.jpg" alt />
						</div>
					</article>
				</div>
			</section>
		</div>
	</layout>
</template>

<script>
	import Layout from "./../../Shared/SiteLayout";
	export default {
		components: { Layout }
	};
</script>
