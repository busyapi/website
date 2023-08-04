<script>
	import HomeBlock from '$lib/components/HomeBlock.svelte';
</script>

<div class="flex flex-col gap-3 items-center text-center">
	<h1
		class="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500"
	>
		BusyAPI
	</h1>
	<h3 class="text-4xl sm:text-5xl font-bold">Simulate a hard working API</h3>
	<h2 class="text-2xl max-w-lg">
		Use <span
			class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500"
			>Busy API</span
		> to test you API timeout management and emulates long blocking tasks for asynchonous work.
	</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	<HomeBlock title="How to use" titleClass="text-teal-500" shadowClass="shadow-teal-500/30">
		<ul
			class="list-decimal list-inside font-medium text-sm sm:text-base gap-4 md:gap-6 flex flex-col"
		>
			<li>
				Call <span class="font-mono font-bold">
					https://api.busyapi.dev/<span class=" text-rose-500">5</span>
				</span>
			</li>
			<li>
				Wait for <span class=" text-rose-500 font-bold">5</span> seconds
			</li>
			<li>
				Receive <span class="font-mono font-bold">204 No Content</span>
			</li>
			<li>
				Be happy and <a href="https://www.buymeacoffee.com/busyapi">donate to support!</a> 👏
			</li>
		</ul>
	</HomeBlock>
	<HomeBlock title="Good to know" titleClass="text-violet-500" shadowClass="shadow-violet-500/30">
		<ul
			class="list-decimal list-inside font-medium text-sm sm:text-base gap-4 md:gap-6 flex flex-col"
		>
			<li>Maximum timeout is <span class="text-rose-500 font-bold">60</span> seconds</li>
			<li>Only <span class="text-rose-500 font-bold">GET</span> requests are accepted</li>
			<li>Most request headers will be ignored</li>
		</ul>
	</HomeBlock>
</div>
