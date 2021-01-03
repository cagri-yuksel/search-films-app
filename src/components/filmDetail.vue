<template>
  <div class="container">
    <transition v-show="status" name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" @click="close">
          <div class="modal-dialog" role="document">
            <div class="modal-content" @click.stop="">
              <div class="modal-header">
                <h5>
                  {{ items.Title }}
                  <span class="badge bg-secondary modal-title">
                    {{ items.Year }}</span
                  >
                </h5>
                <button
                  class="btn-close btn-close-white"
                  @click="close"
                ></button>
              </div>
              <div class="modal-body">
                <img :src="items.Poster" />
                <div></div>
              </div>
              <div class="modal-tags">
                <div class="d-inline p-2 bg-dark text-white">
                  {{ items.Type }}
                </div>
                <div
                  v-if="items.Runtime != 'N/A'"
                  class="d-inline p-2 bg-dark text-white"
                >
                  {{ items.Runtime }}
                </div>
                <div
                  v-if="items.totalSeasons > 0"
                  class="d-inline p-2 bg-dark text-white"
                >
                  {{ items.totalSeasons }} Season
                </div>
                <div class="d-inline p-2 bg-dark text-white">
                  IMDb score: {{ items.imdbRating }}
                </div>
              </div>
              <div class="modal-footer">
                <p>{{ items.Plot }}</p>
                <div class="d-inline p-2 bg-dark text-white ml-5">
                  Add to favorites
                  <i
                    @click="addToFavs(items)"
                    class="fas fa-heart"
                    :class="{ active: active }"
                  ></i>
                </div>
                <div class="d-inline p-2 bg-dark text-white ml-5">
                  <a
                    style="color: white"
                    :href="`https://www.imdb.com/title/${items.imdbID}`"
                    target="_blank"
                    ><i class="fab fa-imdb fa-3x"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["selectedUser"],
  data() {
    return {
      items: [],
      status: false,
      active: false,
      idCheck: null,
    };
  },
  methods: {
    close() {
      this.status = false;
      setTimeout(() => {
        this.$emit("close");
      }, 500);
    },
    addToFavs(items) {
      if (this.active === false) {
        axios.post(`http://localhost:3000/favorites`, items).then((res) => {
          this.active = true;

          this.idCheck = res.data.id;
        });
      } else {
        axios
          .delete(`http://localhost:3000/favorites/${this.idCheck}`)
          .then((res) => {
            this.active = false;
          });
      }
    },
  },
  created() {
    axios
      .get(
        "http://www.omdbapi.com/?apikey=296a2df0&i=" + this.selectedUser.imdbID
      )
      .then((res) => {
        this.items = res.data;

        this.status = true;
      });
    axios
      .get(`http://localhost:3000/favorites?imdbID=${this.selectedUser.imdbID}`)
      .then((res) => {
        if (res.data.length === 0) {
          this.active = false;
        } else {
          this.idCheck = res.data[0].id;
          this.active = true;
        }
      });
  },
};
</script>
<style scoped>
.img {
  margin-right: 100%;
}
.card-body {
  margin-left: 100px;
}
.spinner-border {
  margin-top: 20rem;
  height: 20rem;
  width: 20rem;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.5s ease-in;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-header {
  background-color: #212529;
}
.modal-header h5 {
  color: #fff;
  text-align: center !important;
}
.modal-content {
  margin: 0px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}
.card-title {
  text-align: center;
}
.modal-footer {
  color: #fff;
  background-color: #212529;
  border: none;
}
.modal-side {
  position: fixed;
  color: #fff;
  background-color: #212529;
  bottom: 15%;
  width: 200px;
  height: 70%;
  left: 503px;
}
.d-inline {
  left: 100px;
}

.modal-enter {
  opacity: 0;
  -webkit-transform: translateY(-25px);
  transform: translateY(-25px);
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  -webkit-transform: translateY(-25px);
  transform: translateY(-25px);
}
.fas:hover {
  color: red;
}
.d-inline {
  justify-content: space-around !important;
}
.fab:hover {
  color: #dba506;
}
.active {
  color: red;
}
</style>