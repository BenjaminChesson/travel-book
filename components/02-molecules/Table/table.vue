<template>
  <div class="Board">
    <div class="Board_data">
      <Loader v-if="loading === true" />
      <div v-else class="Board__List">
        <div class="Board__Pagination">
          <v-pagination
            v-model="currentPage"
            :classes="PaginationClasses"
            :page-count="totalPages"
            @change="pageResult(currentPage)"
          ></v-pagination>
        </div>
        <ul v-if="data && data.length">
          <li v-for="country of data" :key="country">
            <button class="Button_country" @click="addCountry(country)">
              {{ country.name }}
            </button>
          </li>
        </ul>
      </div>
      <div v-if="errors && errors.length" class="errors">
        <span>Error:</span>
        <ul>
          <li v-for="error of errors" :key="error">{{ error.message }}</li>
        </ul>
      </div>
    </div>
    <Selection class="horizontal" />
  </div>
</template>

<script>
import axios from "axios"

//Components
import vPagination from "vue-plain-pagination"
import Loader from "~/components/01-atoms/Loader/loader"
import Selection from "~/components/02-molecules/Selection/selection"

//Utils
//import { formatDataCountries } from "~/tools/utils/format"

export default {
  components: {
    Loader,
    Selection,
    vPagination
  },
  data() {
    return {
      data: null,
      loading: false,
      errors: [],
      currentPage: 1,
      totalPages: 13,
      PaginationClasses: {
        ul: "Pagination__List",
        li: "Pagination__Item",
        liActive: "active",
        liDisable: "disabled",
        button: "Pagination__Button"
      }
    }
  },
  computed: {
    countryList() {
      return this.$store.state.countryList
    }
  },

  // Fetches posts when the component is created.
  mounted() {
    this.pageResult(1)
  },
  methods: {
    pageResult: function(page) {
      this.loading = true
      axios
        .get(`${process.env.API_DEV}?page=${page}`)
        .then(response => {
          this.loading = false
          console.log(response.data.data)
          this.data = response.data.data
        })
        .catch(e => {
          this.loading = false
          this.errors.push(e)
        })
    },
    addCountry(payload) {
      this.$store.commit("addCountry", payload)
    }
  }
}
</script>
<style lang="less">
//To Import on prependData
@import "../../../styles/01-variables/colors.less";
@import "../../../styles/01-variables/fonts.less";
@import "../../../styles/01-variables/spaces.less";
@import "../../../styles/02-mixins/status.less";
.Board {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
  }
}
.Board__List {
  width: 100;
  ul:not([class*="errors"]) {
    list-style: none;
    padding: 0;
    width: 100%;
    li {
      width: 100%;
      margin: @space-s 0;
      .Button_country {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 600;
        padding: @space-s @space-m;
        background-color: @white;
        border: 1px solid @medium;
        border-radius: 4px;
        text-align: left;
        cursor: pointer;
        color: @primary;
        .transition;
        .hover-background(@light);
      }
    }
  }
}
div[class*="errors"] {
  padding: @space-m @space-s;
  .background-opacity(@alert, 0.2);
  color: @alert;
  border: 1px solid @alert;
  border-radius: 4px;
  span {
    display: block;
    margin: 0 @space-m @space-s;
  }
}
.Board__Pagination {
  .Pagination__List {
    display: flex;
    flex-direction: row;
    padding: @space-xs @space-s;
    .Pagination__Item {
      display: flex;
      justify-content: center;
      button.Pagination__Button {
        font-size: 1.6rem;
        padding: @space-xs @space-s;
        background-color: @white;
        border: 1px solid @medium;
        border-radius: 4px;
        cursor: pointer;
        color: @primary;
        .transition;
        .hover-background(@light);
      }
      span.pagination-link--disable {
        vertical-align: middle;
      }
      &.active {
        button.Pagination__Button {
          background-color: @primary;
          border: 1px solid @primary;
          color: @white;
        }
      }
    }
  }
}
.Board_data {
  margin: 0 0 @space-m;
  @media all and (min-width: 768px) {
    margin: 0;
    flex-grow: 2;
    padding-right: @space-m;
  }
}
</style>
