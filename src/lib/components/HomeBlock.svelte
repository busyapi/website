<script lang="ts">
	export let title: string;
	export let titleClass: string = 'text-black';
	export let shadowClass: string = 'shadow-black/30';
</script>

<div class={`rounded-md bg-white dark:bg-slate-800 p-6 shadow-lg ${shadowClass}`}>
	<h4 class={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 ${titleClass}`}>
		{title}
	</h4>
	<slot />
</div>
