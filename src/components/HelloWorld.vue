<template>
	<div>
		<LayoutListInline
			padding-x="5"
			padding-y="5"
			gap-x="5"
			gap-y="5"
			horizontal-align="left"
			vertical-align="center"
			:wrap="true"
			style="border: 1px solid;"
		>
			<button>OK</button>
			<button>Cancel</button>
			<button>Save</button>
			<button>Submit</button>
			<button>Confirm</button>
			<button>Accept</button>
			<button>Join</button>
			<button>Update</button>
			<button>Done</button>
		</LayoutListInline>

		<LayoutGrid
			column-count="12"
			gap-x="5"
			gap-y="5"
		>
			<LayoutGridCell span="4">
				<GreyBox name="4" />
			</LayoutGridCell>
			<LayoutGridCell span="2" />
			<LayoutGridCell span="2">
				<GreyBox name="2" />
			</LayoutGridCell>

			<LayoutGridRowBreak />

			<LayoutGridCell span="3">
				<GreyBox name="3" />
			</LayoutGridCell>
			<LayoutGridCell span="3">
				<GreyBox name="3" />
			</LayoutGridCell>
			<LayoutGridCell span="6">
				<GreyBox name="6" />
			</LayoutGridCell>
		</LayoutGrid>
	</div>
</template>

<script>
import LayoutListInline from "@/components/layout/LayoutListInline";
import LayoutGridCell from "@/components/layout/LayoutGridCell";
import LayoutGrid from "@/components/layout/LayoutGrid";
import LayoutGridRowBreak from "@/components/layout/LayoutGridRowBreak";
import GreyBox from "@/components/GreyBox";

export default {
	name: "HelloWorld",
	components: {
		LayoutListInline,
		LayoutGrid,
		LayoutGridCell,
		LayoutGridRowBreak,
		GreyBox,
	}
}
</script>

<style scoped>

</style>