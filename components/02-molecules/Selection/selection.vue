<template>
  <div class="Board_selected">
    <div class="Board__Wrapper">
      <div v-if="countryList && countryList.length" class="Board_selection">
        <h3>My selection:</h3>
        <ul>
          <li v-for="country of countryList" :key="country">
            <span class="name">{{ country.name }}</span>
            <div class="infos">
              <span class="capital">{{ country.capital }}</span>
              <span class="subregion">{{ country.subregion }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="Board_noSelection">
        <span>There is no country selected yet</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    countryList() {
      return this.$store.state.countryList
    }
  }
}
</script>
<style lang="less">
//To Import on prependData
@import "../../../styles/01-variables/colors.less";
@import "../../../styles/01-variables/fonts.less";
@import "../../../styles/01-variables/spaces.less";

.Board_selected {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.horizontal {
    @media all and (min-width: 768px) {
      flex-grow: 6;
      padding-left: @space-m;
    }
  }
  .Board__Wrapper {
    margin: 0 auto @space-l;
    background-color: @white;
    border: 1px solid @medium;
    padding: @space-m @space-l;
    border-radius: 4px;
    min-width: 100%;
    @media all and (min-width: 768px) {
      min-width: 60%;
    }

    .Board_selection {
      h3 {
        font-family: "Quicksand", "Source Sans Pro", -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
          sans-serif;
        font-size: @font-h1;
        font-weight: 600;
        color: @neutral;
        margin-bottom: @space-m;
      }
      ul {
        padding: 0;
        color: @neutral;
        list-style: none;
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: @space-s;
          @media all and (min-width: 768px) {
            flex-direction: row;
          }
        }
      }
      .name {
        font-weight: 500;
        font-size: 1.8rem;
        color: @darkest;
        margin: 0 0 @space-s;
        @media all and (min-width: 768px) {
          margin: 0;
          flex: 40%;
        }
      }
      .infos {
        display: flex;
        flex-direction: column;
        text-align: left;
        @media all and (min-width: 768px) {
          flex: 60%;
          flex-direction: row;
          text-align: right;
        }
        span {
          flex: 1;
          margin: 0 0 @space-s;
          @media all and (min-width: 768px) {
            margin: 0 0 0 @space-xs;
          }
        }
      }
    }
    .Board_noSelection span {
      font-size: @font-h1;
      color: @medium;
      font-weight: 500;
    }
  }
}
</style>
