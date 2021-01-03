<template>
  <div class="container-fluid">
    <div class="center">
      <filmDetail
        :selectedUser="selectedUser"
        v-if="isModalVisible"
        @close="closeModal"
      />
      <div>
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input
            v-model="searchBox"
            @keyup.enter="search"
            type="text"
            class="form-control"
            placeholder="Search a film..."
          />
        </div>
        <div
          v-if="Response === 'False'"
          class="container d-flex justify-content-center"
        >
          <h1>There is a no film...</h1>
        </div>
        <div v-show="Response === 'True'" class="row row-cols-5">
          <div class="col mt-5" v-for="i in items" :key="i.id">
            <div class="card" style="width: 18rem" @click="showModal(i)">
              <img :src="i.Poster" class="card-img-top" />
              <div class="card-body" @click.stop="">
                <p class="card-text">
                  {{ i.Title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filmDetail from "@/components/filmDetail";
import axios from "axios";
export default {
  components: { filmDetail },
  data() {
    return {
      items: [],
      searchBox: null,
      founded: [],
      isModalVisible: false,
      selectedUser: "",
      Response: Boolean,
      once: true,
    };
  },
  methods: {
    showModal(i) {
      this.isModalVisible = true;
      this.selectedUser = i;
    },
    closeModal() {
      this.selectedUser = null;
      this.isModalVisible = false;
    },
    search() {
      this.items = [];
      this.$emit("once", this.once);
      axios
        .get(`http://www.omdbapi.com/?apikey=296a2df0&s=${this.searchBox}`)
        .then((res) => {
          if (res.data.Response === "False") {
            this.Response = res.data.Response;
          } else {
            this.Response = res.data.Response;
            this.items = res.data.Search;
          }
        });
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  padding: 4rem;
}
.row {
  margin-left: 50px;
}
</style>