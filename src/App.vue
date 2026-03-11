<script setup>
import { useInventory } from './js/app'

const {
  itemName,
  darkMode,
  state,
  toggleDarkMode,
  addItem
} = useInventory()
</script>

<template>

<div :class="darkMode ? 'dark-mode' : 'light-mode'">

<div class="container py-5">

<div class="card shadow-lg">

<div class="card-header d-flex justify-content-between align-items-center">

<h3 class="m-0">Mini Inventory Tracker</h3>

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
class="btn btn-success"
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

<span class="badge bg-success">Item</span>

</li>

</ul>

</div>

</div>

</div>

</div>

</template>