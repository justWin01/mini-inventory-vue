import {ref, reactive, onMounted} from 'vue'

export function useInventory() {

	const itemName = ref("")
	const darkMode = ref(false)

	const state = reactive({inventory: []})


	function addItem() {
		if (itemName.value.trim() !== "") {
			state.inventory.push({name: itemName.value, id: Date.now()})
			itemName.value = ""
		}
	}

	onMounted(() => {

		console.log("Fetching inventory from API...")

		state.inventory.push({
			id: 1,
			name: "Notebook"
		}, {
			id: 2,
			name: "Pen"
		})

	})

	return {itemName, darkMode, state, addItem}

}
