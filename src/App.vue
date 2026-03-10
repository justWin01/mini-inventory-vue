<script setup>
import { ref, reactive, onMounted } from 'vue'

/* Primitive state */
const itemName = ref("")

/* Dark mode toggle */
const darkMode = ref(false)

/* Complex structure */
const state = reactive({
  inventory: []
})

function toggleDarkMode(){
  darkMode.value = !darkMode.value
}

/* Add item */
function addItem() {
  if (itemName.value.trim() !== "") {
    state.inventory.push({
      name: itemName.value,
      id: Date.now()
    })
    itemName.value = ""
  }
}

/* Lifecycle */
onMounted(() => {
  console.log("Fetching inventory from API...")

  state.inventory.push(
    { id: 1, name: "Notebook" },
    { id: 2, name: "Pen" }
  )
})
</script>

<template>

<div :class="darkMode ? 'dark-mode' : 'light-mode'">

<div class="container py-5">

<div class="card shadow-lg">

<div class="card-header d-flex justify-content-between align-items-center">

<h3 class="m-0">Mini Inventory Tracker</h3>

<button 
class="btn btn-sm btn-outline-secondary"
@click="toggleDarkMode">

{{ darkMode ? "Light Mode" : "Dark Mode" }}

</button>

</div>

<div class="card-body">

<div class="input-group mb-3">

<input
v-model="itemName"
type="text"
class="form-control"
placeholder="Enter item"
/>

<button
class="btn btn-primary"
@click="addItem">
Add Item
</button>

</div>

<ul class="list-group">

<li
class="list-group-item d-flex justify-content-between align-items-center"
v-for="item in state.inventory"
:key="item.id">

{{ item.name }}

<span class="badge bg-primary">Item</span>

</li>

</ul>

</div>

</div>

</div>

</div>

</template>