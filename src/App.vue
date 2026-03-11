<script setup>
import { useInventory } from './js/app'

const {
  itemName,
  darkMode,
  state,
  addItem
} = useInventory()
</script>

<template>
  <div class="container py-5">

    <div class="card shadow-lg">

      <!-- HEADER -->
      <div class="card-header d-flex justify-content-between align-items-center">
        <h3 class="m-0">Mini Inventory Tracker</h3>
      </div>

      <!-- BODY -->
      <div class="card-body">

        <!-- INPUT SECTION -->
        <div class="input-group mb-3">
          <input
            v-model="itemName"
            type="text"
            class="form-control"
            placeholder="Enter item"
          />

          <button
            class="btn btn-success"
            @click="addItem"
          >
            Add Item
          </button>
        </div>

        <!-- INVENTORY LIST -->
        <ul class="list-group">

          <li
            v-for="item in state.inventory"
            :key="item.id"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ item.name }}

            <span class="badge bg-success">
              Item
            </span>
          </li>

        </ul>

      </div>
    </div>

  </div>
</template>