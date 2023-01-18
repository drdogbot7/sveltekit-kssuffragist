<script>
	import '../app.css';
	import '@fontsource/markazi-text';

	import logo from '$lib/assets/logo.svg';
</script>

<header>
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
			<a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/rfq">Request for Qualifications</a
			>
			<a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/submit">Submit</a
			>
			<!-- <a
				class="w-full text-center font-bold uppercase text-blue-500 hover:underline sm:w-auto"
				href="/give">Give</a
			> -->
		</nav>
	</div>
</header>

<div class="container mx-auto max-w-screen-lg px-2 pb-8">
	<slot />
</div>
