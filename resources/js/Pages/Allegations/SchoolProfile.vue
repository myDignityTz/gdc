<template>
	<section class="mb-6 bg-white shadow rounded px-4 py-4">
		<h3 class="text-xs uppercase mb-6">School</h3>
		<div class="flex mb-2">
			<ul class="w-full">
				<li class="border-t py-3 flex justify-between">
					<span>Name</span>
					<div>{{ environment.name }}</div>
				</li>
				<li class="border-t py-3 flex justify-between">
					<span>Type</span>
					<div>{{ environment.type }}</div>
				</li>
				<li class="border-t py-3 flex justify-between">
					<span>Street</span>
					<div>{{ environment.street }}</div>
				</li>
				<li class="border-t py-3 flex justify-between">
					<span>District</span>
					<div>{{ environment.district.name }}</div>
				</li>
				<li class="border-t py-3 flex justify-between">
					<span>Region</span>
					<div>{{ environment.region.name }}</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		props: ["environment"]
	};
</script>