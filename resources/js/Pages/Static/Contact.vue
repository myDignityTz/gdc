<template>
	<layout title="The Expert - About">
		<div class="w-full">
			<section class="bg-purple-700 lg:py-24 py-12">
				<div class="lg:w-2/3 px-6 lg:px-0 mx-auto">
					<header class="mb-4">
						<h1 class="text-3xl font-semibold text-white">We’re Here to Help.</h1>
					</header>
					<div class="text-purple-100 text-lg leading-loose">
						We always want to hear from you! Let us know how we can best help you
						and we'll do our very best.
					</div>
				</div>
			</section>

			<!-- Details -->
			<section class="bg-gray-100 lg:py-24 py-12 border-b">
				<div class="lg:w-2/3 px-6 mx-auto">
					<div class="flex lg:flex-row flex-col">
						<div class="lg:w-1/3 w-full lg:text-center lg:border-r lg:pr-12 mb-4 lg:mb-4">
							<h3 class="text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Message us</h3>
							<a href="#" class="text-purple-500">Start a chat!</a>
						</div>
						<div class="lg:w-1/3 w-full lg:text-center lg:border-r lg:px-12 mb-4 lg:mb-4">
							<h3 class="text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Call anytime</h3>
							<a href="#" class="text-purple-500">+255 714 123 567</a>
						</div>
						<div class="lg:w-1/3 w-full lg:text-center lg:px-12 mb-4 lg:mb-4">
							<h3 class="text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Email us</h3>
							<a href="#" class="text-purple-500">support@theexpert.co.tz</a>
						</div>
					</div>
				</div>
			</section>

			<!-- Mission -->
			<section class="bg-white lg:py-24 py-12">
				<div class="lg:w-2/3 px-6 lg:px-0 mx-auto">
					<div class="flex">
						<div class="w-full">
							<header class="mb-6">
								<h1
									class="inline-block pb-2 text-sm text-gray-700 uppercase tracking-wider font-semibold"
								>Let us hear from you directly!</h1>
							</header>
							<div class="text-gray-600 lg:text-2xl text-xl">
								We always want to hear from you! Let us know how we can
								best help you and we'll do our very best.
							</div>

							<form class="mt-12">
								<section class="flex lg:flex-row flex-col lg:mb-6 lg:-mx-3">
									<div class="lg:w-1/2 w-full lg:px-3 lg:mb-0 mb-6">
										<label for="name" class="block text-gray-700 mb-2">Name</label>
										<input type="text" id="name" class="form-input w-full" placeholder="Full Name..." />
									</div>
									<div class="lg:w-1/2 w-full lg:px-3 lg:mb-0 mb-6">
										<label for="email" class="block text-gray-700 mb-2">Email</label>
										<input type="text" id="email" class="form-input w-full" placeholder="hello@domain.com..." />
									</div>
								</section>
								<section class="flex mb-6 -mx-3">
									<div class="w-full px-3">
										<label for="subject" class="block text-gray-700 mb-2">Subject</label>
										<input type="text" id="subject" class="form-input w-full" placeholder="Subject..." />
									</div>
								</section>
								<section class="flex mb-6">
									<div class="w-full">
										<label for="description" class="block text-gray-700 mb-2">What can we help you with?</label>
										<textarea
											id="description"
											class="form-textarea w-full"
											placeholder="What can we help you with..."
											rows="5"
										></textarea>
									</div>
								</section>
								<footer>
									<button
										class="bg-purple-700 leading-none text-xs uppercase tracking-wider font-bold text-white px-5 py-4 flex items-center rounded shadow"
									>Send Message</button>
								</footer>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/SiteLayout";

	export default {
		components: { Layout },
        head: {
            title: 'The Expert - Contact Us',
        }
	};
</script>
