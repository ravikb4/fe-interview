<template>
	<div>
		<vue-markdown :source="markdown" />
	</div>
</template>

<script lang="ts">
import VueMarkdown from 'vue-markdown-render'

export default {
    props: {
		markdown: {
			type: String,
			required: true
		}
	},
    components: {
        VueMarkdown
    },
}
</script>
