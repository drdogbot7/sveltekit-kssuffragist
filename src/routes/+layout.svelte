<script>
	import '../app.css';
	import '@fontsource/markazi-text';

	import logo from '$lib/assets/logo.svg';
	import logoAAU from '$lib/assets/logo-aauw-ks.png?w=144&webp';
	import logoCPC from '$lib/assets/logo-cpc.svg';
	import logoLWVKS from '$lib/assets/logo-lwvks.png?w=288&webp';
</script>

<header>
	<!-- <div class="bg-red-500 px-4 py-2 text-center uppercase text-white">
		<b>Deadline for submissions has been extended to April 1, 2023.</b>
	</div> -->
	<div class="justify-center gap-12 sm:flex">
		<a href="/">
			<img class="mx-auto w-64" src={logo} alt="Kansas Suffragist Memorial logo" />
		</a>
		<nav class="mt-4 flex flex-col items-start justify-center gap-2">
			<a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/">Home</a
			>
			<a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/history">History</a
			>
			<!-- <a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/rfq">Request for Qualifications</a
			> -->
			<!-- <a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/submit">Submit</a
			> -->
			<a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/give">Give</a
			>
		</nav>
	</div>
</header>

<div class="container mx-auto max-w-screen-lg px-2 pb-8">
	<slot />
</div>

<footer class="py-8">
	<div class="flex items-center justify-center gap-4 px-6 md:gap-12">
		<div>
			<a href="https://lwvk.org/"
				><img class="h-auto w-72" src={logoLWVKS} alt="League of Women Voters of Kansas logo" /></a
			>
		</div>
		<div>
			<a href="https://aauw-ks.aauw.net/"
				><img class="h-auto w-36" src={logoAAU} alt="AAUW of KS logo" /></a
			>
		</div>
		<div>
			<a
				href="http://www.kslegislature.org/li_2022/b2021_22/committees/ctte_2011_capitol_preservation_committee_1/"
				><img
					class="h-auto w-36"
					src={logoCPC}
					alt="Kansas Capitol Preservation Committee logo"
				/></a
			>
		</div>
	</div>
	<div class="mt-8 text-center text-sm text-gray-600">
		©2023 Kansas Suffragist Monument Committee
	</div>
	<div class="mt-1 text-center text-xs text-gray-400">
		Website by <a title="Lawrence KS web design" href="https://www.coneflower.org"
			>Coneflower Consulting</a
		>
	</div>
</footer>
