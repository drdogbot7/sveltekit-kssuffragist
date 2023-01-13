<script>
	import '../app.css';

	import logo from '$lib/assets/logo.svg';
</script>

<header>
	<div class="sm:flex justify-center gap-12">
		<a href="/">
			<img class="w-64 mx-auto" src={logo} alt="Kansas Suffragist Memorial logo" />
		</a>
		<nav class="flex gap-x-6 gap-y-4 justify-center items-center mt-4 flex-wrap">
			<a
				class="text-blue-500 w-full sm:w-auto text-center hover:underline font-bold uppercase"
				href="/history">History</a
			>
			<a
				class="text-blue-500 w-full sm:w-auto text-center hover:underline font-bold uppercase"
				href="/rfq">Request for Qualifications</a
			>
			<a
				class="text-blue-500 w-full sm:w-auto text-center hover:underline font-bold uppercase"
				href="/submit">Submit</a
			>
			<a
				class="text-blue-500 w-full sm:w-auto text-center hover:underline font-bold uppercase"
				href="/give">Give</a
			>
		</nav>
	</div>
</header>

<div class="container max-w-screen-lg mx-auto px-2">
	<slot />
</div>
