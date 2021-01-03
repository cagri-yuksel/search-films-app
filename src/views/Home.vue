<template>
  <searchFilms @once="show" />
  <div
    v-show="once == false"
    class="container-fluid justify-content-center"
    style="text-align: center"
  >
    <h1>Welcome to your Film Search Page</h1>
    <h2>How its Work</h2>
    <p>Use Search bar for find some films</p>
    <p>Click one of the results and inspect the movie</p>
    <p>
      Use heart icon ( <i class="fas fa-heart" style="color: red"></i> ) for add
      to favorites or remove.
    </p>
    <p>
      Or you can go to (
      <i class="fab fa-imdb fa-2x align-bottom" style="color: #dba506"></i> )
      page of selected film.
    </p>
  </div>
</template>

<script>
import searchFilms from "../components/searchFilms";
export default {
  components: {
    searchFilms,
  },
  data() {
    return {
      once: false,
    };
  },
  methods: {
    show(e) {
      this.once = e;
    },
  },
};
</script>
