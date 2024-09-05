<template>
  <nav>
    <ul>
      <li v-for="item in props.items" :key="item.id">
        <RouterLink :to="item.path">{{ item.label}}</RouterLink>
      </li>
    </ul>
    <div class="profile">P</div>
  </nav>
</template>

<script setup>
import {RouterLink} from "vue-router";
const props = defineProps(["items"])
</script>

<style scoped>
nav {
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 30px;
  background: white;
  padding: 15px;
  justify-content: center;
}

ul {
  list-style-type: none;
  align-items: center;
  border-radius: 15px;
}

li {
  padding-top: 5px;
  padding-bottom: 5px;
}
.profile {
  display: flex;
  align-items: center;
}

@media (max-width: 720px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
  ul {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>