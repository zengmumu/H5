<template>
<transition name="fade">
	<div class="mumu">
			{{msg}}
			<h2>{{ $route.params.id }}</h2>
	</div>
</transition>
</template>
<script>
	export default {
		name: 'muo',
		data () {
			return {
				msg: 'I am mumu',
			}
		}
	}
</script>

<style scoped>
	
</style>