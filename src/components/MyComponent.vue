<template>
	<div>
		<input type="checkbox" v-model="isChecked" />
		<label for="checkbox">Checkbox</label>

		<br />

		<input type="radio" id="option1" value="option1" v-model="selectedOption" />
		<label for="option1">Option 1</label>

		<input type="radio" id="option2" value="option2" v-model="selectedOption" />
		<label for="option2">Option 2</label>

		<br />

		<input type="text" v-model="textInput" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isChecked: false,
			selectedOption: '',
			textInput: ''
		}
	}
}
</script>

<style scoped>
/* Add your custom styles here */
</style>
