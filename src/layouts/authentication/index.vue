<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped>
.app-main {
  display: grid;
  place-items: center;
  height: 100vh;
}
</style>
