<!--
 * @Date: 30/03/2021 17.16.46 +0800
 * @Author: KnowsCount
 * @LastEditTime: 31/03/2021 06.55.43 +0800
 * @FilePath: /wedding-invitation-for-programmers/src/Wedding.vue
-->
<template>
	<div class="wedding">
		<Editor/>
	</div>
</template>

<script>
	import Editor from "./components/Editor.vue"

	export default {
		props: [],
		components: {
			Editor
		},
		name: 'Wedding'
	}

</script>

<style lang="less">
@import './assets/base.less';
html,
body {
	height: 100%;
}
.wedding {
	position: relative;
	max-width: 568px!important;
	height: 100%;
	min-height: 100%;
	margin: 0 auto;
	background: #2B2B48;
	perspective: 500px;
}
</style>
