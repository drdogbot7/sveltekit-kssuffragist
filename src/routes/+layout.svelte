<script>
	import '../app.css';

	import logo from '$lib/assets/logo.svg';
</script>

<a href="/">
	<img class="max-w-xs mx-auto" src={logo} alt="Kansas Suffragist Memorial logo" />
</a>

<div class="container max-w-screen-lg mx-auto">
	<slot />
</div>
