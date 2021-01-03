<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark w-100">
    <router-link
      to="/"
      class="nav-link navbar-brand"
      active-class="active"
      style="cursor: pointer"
      >Home
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link
            to="/favs"
            class="nav-link"
            active-class="active"
            style="cursor: pointer"
            >favorites</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/404"
            class="nav-link"
            active-class="active"
            style="cursor: pointer"
            >Some not found page</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  background-color: #212529 !important;
  position: absolute;
}
</style>