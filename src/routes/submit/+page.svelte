<svelte:head>
	<title>Submit - Kansas Suffragist Memorial</title>
	<!-- <meta
		name="description"
		content="Join us in commemorating the hallowed history of Kansas suffragists and their fight to secure
	the vote for all women."
	/> -->
</svelte:head>

<div class="prose mx-auto mt-8 max-w-2xl lg:prose-lg">
	<h1 class="text-center">Submission Form</h1>
	<div class="mx-auto max-w-xl">
		<form
			action="https://formcarry.com/s/HdGTaKByAg"
			method="POST"
			accept-charset="UTF-8"
			enctype="multipart/form-data"
		>
			<h2>Contact Information</h2>

			<div class="space-y-6">
				<label class="block" for="name">
					<div class="text-sm uppercase">Full Name<span class="text-red-500">*</span></div>
					<input class="mt-1 block w-full" type="text" name="name" required />
				</label>
				<label class="block" for="email">
					<div class="text-sm uppercase">Email<span class="text-red-500">*</span></div>
					<input class="mt-1 block w-full" type="email" name="email" required />
				</label>
				<label class="block" for="address">
					<div class="text-sm uppercase">Mailing Address</div>
					<textarea class="mt-1 block w-full" rows="4" name="address" />
				</label>
			</div>

			<h2>Website and Social Media</h2>

			<div class="space-y-6">
				<label class="block" for="name">
					<div class="text-sm uppercase">Artist Website</div>
					<input class="mt-1 block w-full" type="text" name="website" />
				</label>
				<label class="block" for="name">
					<div class="text-sm uppercase">Social Media Accounts</div>
					<textarea rows="4" class="mt-1 block w-full" name="socialMedia" />
				</label>
			</div>

			<h2>Qualifications</h2>

			<div class="space-y-6">
				<div class="border border-red-500 p-4">
					<b>All files should be .pdf format.</b><br />
					<b>There is a maxiumum file size of 10MB for each file.</b>
				</div>

				<label class="block " for="letter">
					<div>
						<b>Letter of Interest</b><span class="text-red-500">*</span> outlining your approach to public
						art and insights regarding your interest in making art for this project. Include what you
						bring to the project as an artist; challenges and/or sources of inspiration presented by
						the project; and what you hope to gain from this experience. (No more than 3 pages)
					</div>
					<input
						class="mt-2 w-full rounded bg-white p-4"
						type="file"
						accept=".pdf"
						name="letter"
						required
					/>
				</label>

				<label class="block" for="resume">
					<div>
						<b>Resumé or CV</b><span class="text-red-500">*</span> including professional references
						and their contact information. (no more than 3 pages)
					</div>
					<input
						class="mt-2 w-full rounded bg-white p-4"
						type="file"
						accept=".pdf"
						name="resume"
						required
					/>
				</label>

				<label class="block " for="images">
					<div>
						<b>Annotated Image List</b><span class="text-red-500">*</span>, including at least 5 and
						more than 10 images of past works, clearly indicating the title, dimensions, materials,
						date, and locations of each work.
					</div>
					<input
						class="mt-2 w-full rounded bg-white p-4"
						type="file"
						accept=".pdf"
						name="images"
						required
					/>
				</label>
			</div>

			<input type="hidden" name="_gotcha" />
			<input
				class="mt-12 block w-full cursor-pointer rounded bg-blue-50 px-4 py-2 hover:bg-blue-100"
				type="submit"
				Value="Submit"
			/>
		</form>
	</div>
</div>
