<script>
	import muralSet from '$lib/assets/mural-mockup.png?w=560;1120&webp&as=srcset';
	import mural from '$lib/assets/mural-mockup.png?w=560';
	import muralKeySet from '$lib/assets/mural-key.jpg?w=560;1120&webp&as=srcset';
	import muralKey from '$lib/assets/mural-key.jpg?w=560';
	console.log(muralKey);
</script>

<svelte:head>
	<title>Kansas Suffragist Memorial - Mural Key</title>
	<meta
		name="Kansas Suffragist Memorial - Mural Key"
		content="Join us in commemorating the hallowed history of Kansas suffragists and their fight to secure
	the vote for all women."
	/>
</svelte:head>

<div class="prose mx-auto mt-8 lg:prose-lg">
	<figure>
		<picture>
			<source srcset={muralSet} />
			<img src={mural} alt="Mockup of Kansas Suffragist Mural installed in statehouse" />
		</picture>
		<figcaption>
			Mockup of Phyllis Pease's mural installed in the Kansas State Capitol Building. See key below
			for delineation of the suffragists"
		</figcaption>
	</figure>
	<picture>
		<source srcset={muralKeySet} />
		<img src={muralKey} alt="Mockup of Kansas Suffragist Mural installed in statehouse" />
	</picture>
	<ol>
		<li>
			<b>Anna O. Anthony</b> (1844-1916) (Leavenworth), sister-in-law of Susan B. Anthony, hosted national
			suffragists at her Leavenworth home during the 1887 campaign.
		</li>
		<li>
			<b>Lutie Lytell</b> (1875-1934) (Tennessee/Topeka), the first African American woman admitted to
			the Kansas Bar Association (1897), advised women on marriage and divorce laws in Kansas.
		</li>
		<li>
			<b>Anna C. Wait</b> (1837-1916) (Lincoln), owner and editor of the Lincoln Beacon, co-founded the
			Kansas Equal Suffrage Association (KESA) in 1884 and spread suffrage news for twenty years.
		</li>
		<li>
			<b>Lilla D. Monroe</b> (1858-1929) (WaKeeney/Topeka), the first woman to practice law before the
			Kansas Supreme Court (1895), published the Kansas Woman’s Journal in Topeka and gathered stories
			from 800 pioneer women in western Kansas.
		</li>
		<li>
			<b>Annie L. Diggs</b> (1848-1916) (Lawrence/Topeka), a Populist suffragist and KESA president (1899),
			helped to design the state library in the Capitol as State Librarian (1898-1902).
		</li>
		<li>
			<b>Laura M. Johns</b> (1849-1935) (Salina), president of KESA (1887-1895) and the Kansas Republican
			Woman’s Association (1892), helped to coordinate thirty suffrage conventions across Kansas beginning
			in 1892.
		</li>
		<li>
			<b>Clarina I. H. Nichols</b> (1810-1885) (Quindaro), a lecturer, editor, and Underground Railroad
			conductor, sparked and led the woman suffrage movement in Kansas beginning in 1859.
		</li>
		<li>
			<b>Lizzie S. Sheldon</b> (1851-1942) (Lawrence), a KU law graduate (1900), wrote the constitutional
			amendment for full woman suffrage (1911) and ran for a seat on the Kansas Supreme Court (1914).
		</li>
		<li>
			<b>Carolyn (Langston) Hughes Clark</b> (1873-1938) (Lawrence/Topeka), a civil rights advocate,
			urged African American women to enter politics as journalists (1892) and encouraged the literary
			education of her son Langston Hughes.
		</li>
		<li>
			<b>Mary Jane “Mamie” Dillard</b> (1874-1954) (Lawrence), a prominent educator, promoted civil rights
			in education and taught Langston Hughes.
		</li>
		<li>
			<b>Jane L. Brooks</b> (1867-1945) (Wichita), a KESA president (1917-18), founded the first state
			chapter of the national League of Women Voters (1919) in Wichita.
		</li>
		<li>
			<b>Lucy B. Johnston</b> (1846-1937) (Topeka), a lawyer, expanded the Kansas Traveling Library collection
			and led the 1912 campaign for the ratification of the Kansas Equal Suffrage Amendment as KESA president.
		</li>
		<li>
			<b>Minnie J. Grinstead</b> (1869-1925) (Larned/Liberal), the first woman elected to the Kansas
			House of Representatives (1918), presented the joint resolution to ratify the Nineteenth Amendment
			(1919).
		</li>
	</ol>
</div>
