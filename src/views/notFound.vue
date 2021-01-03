<template>
  <div class="back container-fluid d-flex justify-content-center min-vh-100">
    <div class="container">
      <h1 class="mt-5">
        This page not found
        <span class="badge bg-light text-dark">404</span>
      </h1>
      <h6 class="h6">PopCat memes</h6>
    </div>
    <img src="../assets/popcat.gif" class="rounded-circle" alt="popcat memes" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.back {
  background-color: brown;
}
.rounded-circle {
  margin-top: 15rem;

  background-color: white;
  position: absolute;
}
.container {
  text-align: center;
  padding-block-start: 1rem;
}
.h6 {
  margin-top: 40rem;
}
</style>