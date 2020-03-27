<template>
  <div>
  <Navbar></Navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>