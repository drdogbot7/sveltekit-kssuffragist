<script>
	import muralSet from '$lib/assets/mural-mockup.png?w=560;1120&webp&as=srcset';
	import mural from '$lib/assets/mural-mockup.png?w=560';
</script>

<svelte:head>
	<title>Kansas Suffragist Memorial</title>
	<meta
		name="description"
		content="Join us in commemorating the hallowed history of Kansas suffragists and their fight to secure
	the vote for all women."
	/>
</svelte:head>

<div class="prose mx-auto mt-8 lg:prose-lg">
	<p class="lead font-bold">
		Join us in commemorating the hallowed history of Kansas suffragists and their fight to secure
		the vote for all women.
	</p>
	<p>
		The Kansas Suffragist Memorial Committee was founded in collaboration between <a
			href="https://lwvk.org/"
		>
			the League of Women Voters of Kansas
		</a>, <a href="https://aauw-ks.aauw.net/">the AAUW of KS</a>, and
		<a
			href="http://www.kslegislature.org/li_2022/b2021_22/committees/ctte_2011_capitol_preservation_committee_1/"
		>
			the Kansas Capitol Preservation Committee
		</a>, with the goal of developing an innovative and original work of art to be displayed in the
		Kansas State Capitol Building.
	</p>
	<p>
		The Kansas Capitol Preservation Committee has given final approval to artist Phyllis Pease's
		mural (pictured below). With your financial support, we plan a January 29, 2025 dedication.
	</p>

	<figure>
		<picture>
			<source srcset={muralSet} />
			<img src={mural} alt="Mockup of Kansas Suffragist Mural installed in statehouse" />
		</picture>
		<figcaption>
			Mockup of Phyllis Pease's mural installed in the Kansas State Capitol Building.
		</figcaption>
	</figure>

	<h2>Support the Project</h2>

	<p>
		We are currently seeking <b>Donors and sponsors</b> interested in contributing funds to support
		the completion of the Kansas Suffragist Memorial.
		<a href="give">Learn more about how to give here</a>.
	</p>

	<p>
		We are excited to memorialize the incredible work of suffragists in our state, and we appreciate
		your interest in our project.
	</p>

	<hr />
	<h3>Questions?</h3>
	<p>
		Please email Marlene Merrill, <a href="mailto:amarlenem@yahoo.com">amarlenem@yahoo.com</a>
		or Cille King, <a href="mailto:cilleking@gmail.com">cilleking@gmail.com</a>.
	</p>
</div>
