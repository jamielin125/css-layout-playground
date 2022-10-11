<template>
	<LayoutColumns
		column-count="3"
		flow-direction="row"
		vertical-align="center"
		gap-x="3"
		gap-y="5"
	>
		<button>1</button>
		<button>2</button>
		<button>3</button>
		<button>4</button>
		<button>5</button>
		<button>6</button>
	</LayoutColumns>
</template>

<script>
import LayoutColumns from "@/components/layout/LayoutColumns";

export default {
	name: "Columns",
	components: {
		LayoutColumns
	},
}
</script>

<style scoped>

</style>