<script>
	let loading = true
	let checkboxValue = false
	let radioValue = ''
	let inputValue = ''

	function handleCheckboxChange(event) {
		checkboxValue = event.target.checked
	}

	function handleRadioChange(event) {
		radioValue = event.target.value
	}

	function handleInputChange(event) {
		inputValue = event.target.value
	}

	// Simulate loading
	setTimeout(() => {
		loading = false
	}, 1000)
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	<div>
		<label>
			<input type="checkbox" bind:checked={checkboxValue} on:change={handleCheckboxChange} />
			Checkbox
		</label>
	</div>

	<div>
		<label>
			<input type="radio" value="option1" bind:group={radioValue} on:change={handleRadioChange} />
			Option 1
		</label>
		<label>
			<input type="radio" value="option2" bind:group={radioValue} on:change={handleRadioChange} />
			Option 2
		</label>
	</div>

	<div>
		<label>
			Text Input:
			<input type="text" bind:value={inputValue} on:input={handleInputChange} />
		</label>
	</div>
{/if}
