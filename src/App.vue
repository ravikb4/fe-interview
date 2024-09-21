<script setup>
import { ref } from 'vue'
import MyComponent from './components/MyComponent.vue'
import MarkdownPreview from './components/MarkdownPreview.vue'
const markdown = ref('# Hello, Vite!')
const showPreview = ref(false)
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<p>Section 1</p>
	<MyComponent />
	<p>
		<span>Value of Checkbox: </span> <br />
		<span>Value of Radio options: </span> <br />
		<span>Value of Text input: </span> <br />
	</p>
	<p>Section 2</p>
	<br />
	<textarea v-model="markdown"></textarea>
	<br />
	<label>
		<input type="checkbox" v-model="showPreview" />
		Show preview
	</label>
	<hr />
	<div v-if="showPreview">
		<h2>Preview</h2>
		<MarkdownPreview :markdown="markdown" />
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
