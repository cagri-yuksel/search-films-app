<template>
  <div class="container-fluid">
    <h1 v-show="favs.length > 0">Your Favorites</h1>
    <h1 v-show="favs.length <= 0">Your Favorite page is empty</h1>
    <div class="row row-cols-3">
      <div class="card mt-2" v-for="i in favs" :key="i.id">
        <div class="row">
          <div class="col-md-5">
            <img :src="i.Poster" style="height: 318px" />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{{ i.Title }}</h5>
              <p class="card-text">Actors: {{ i.Actors }}</p>
              <p>Director: {{ i.Director }}</p>
              <p>Language: {{ i.Language }}</p>
              <p>Runtime: {{ i.Runtime }}</p>
              <p>Rated: {{ i.Rated }}</p>
              <p>imdbRating: {{ i.imdbRating }}</p>
              <p class="card-text"></p>
            </div>
          </div>
          <div>
            <div class="card-body">
              <h5 class="card-title">
                Year: {{ i.Year }} Type: {{ i.Type }} {{ i.totalSeasons }}
              </h5>
              <p class="card-text">
                Plot:
                {{ "" + i.Plot }}
              </p>
              <div class="card-text">
                <small class="text-muted">
                  <div class="d-inline position-absolute bottom-0 start-0">
                    Remove from favorites
                    <i
                      class="fas fa-heart"
                      @click="removeFromFavs(i)"
                      style="color: red"
                    ></i>
                  </div>
                  <div class="d-inline position-absolute bottom-0 end-0">
                    <a
                      style="color: black"
                      :href="`https://www.imdb.com/title/${i.imdbID}`"
                      target="_blank"
                      ><i class="fab fa-imdb fa-3x"></i
                    ></a></div
                ></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      favs: [],
      idCheck: null,
    };
  },
  methods: {
    removeFromFavs(i) {
      if (confirm("Remove from Favorites?")) {
        axios.delete(`http://localhost:3000/favorites/${i.id}`).then((res) => {
          this.favs = this.favs.filter((p) => p.id !== i.id);
        });
      }
    },
  },
  created() {
    axios.get("http://localhost:3000/favorites").then((res) => {
      this.favs = res.data;
    });
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 3rem;
  text-align: center;
}
.fab:hover {
  color: #dba506;
}
</style>