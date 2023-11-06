<script>
	import HomeBlock from '$lib/components/HomeBlock.svelte';
</script>

<div class="flex flex-col gap-3 items-center text-center">
	<h1
		class="text-6xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
	>
		mempass-cli
	</h1>
	<h3 class="text-4xl sm:text-5xl font-bold">Generate strong memorable passwords</h3>
	<h2 class="text-2xl max-w-lg">
		Use <span
			class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
			>mempass-cli</span
		> to generate strong passwords that you will never forget.
	</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<HomeBlock title="Features" titleClass="text-yellow-400" shadowClass="shadow-yellow-400/30">
		<ul class="list-disc list-inside font-medium text-sm sm:text-base gap-2 md:gap-2 flex flex-col">
			<li>Multiple generation modes</li>
			<li>Configurable number of words</li>
			<li>Configurable words length</li>
			<li>Optional separators beetween words</li>
			<li>Mulitple letter capitalization options</li>
			<li>Optional digits before/after each word</li>
			<li>Optional symbols before/after each word</li>
			<li>Optional 1337 encoding</li>
			<li>Optional password generation entropy calculation</li>
		</ul>
	</HomeBlock>
	<HomeBlock title="Install" titleClass="text-orange-400" shadowClass="shadow-orange-400/30">
		<ul
			class="list-decimal list-inside font-medium text-sm sm:text-base gap-2 md:gap-2 flex flex-col"
		>
			<li>
				Clone <a href="https://github.com/busyapi/mempass-cli" target="_blank"
					>https://github.com/busyapi/mempass-cli</a
				>
			</li>
			<li>Run <span class="font-mono font-bold">make && make install</span></li>
			<li>
				The default install directory is <span class="font-mono font-bold">/usr/local/bin</span>
			</li>
		</ul>
	</HomeBlock>
	<HomeBlock title="Use" titleClass="text-red-500" shadowClass="shadow-red-500/30">
		<div class="font-mono font-bold text-sm sm:text-base mb-4">
			$ mempass -T2 -ufirst_letter -d1<br /><br />
			Domineer1-Prioress9-Paginate3<br />
			Genies5-Variants7-Anopia6
		</div>
		<ul class="list-disc list-inside font-medium text-sm sm:text-base gap-2 md:gap-2 flex flex-col">
			<li>-T2: Generate two passwords</li>
			<li>-ufirst_letter: Uppercase first letter</li>
			<li>-d1: Add one digit at the end of each word</li>
		</ul>
	</HomeBlock>
</div>
