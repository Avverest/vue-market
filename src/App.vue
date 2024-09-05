<template>
  <section>
   <VSidebar :items="routes" />
  </section>
  <section class="main-section">
    <header></header>
    <main>
      <BaseTypography variant="h1">Content</BaseTypography>
    </main>
  </section>
</template>

<script setup>
import VSidebar from "@/components/BaseSidebar.vue";
import BaseTypography from "@/components/BaseTypography.vue";
import { routes } from "@/pages/router.js";
</script>

<style scoped>
header {
  line-height: 1.5;
}
.main-section {
  flex-grow: 1;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
