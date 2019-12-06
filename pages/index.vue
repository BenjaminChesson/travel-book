<template>
  <div>
    <Header :add-country="true" />
    <main>
      <div class="container">
        <content>
          <h1 class="title">My Travel book</h1>
          <div class="Home__Wrapper">
            <Selection v-if="countryList && countryList.length" />
            <Carousel />
          </div>
        </content>
      </div>
    </main>
  </div>
</template>
<script>
import Header from "~/components/02-molecules/Header/header"
import Selection from "~/components/02-molecules/Selection/selection"
import Carousel from "~/components/02-molecules/Carousel/carousel"

export default {
  components: {
    Header,
    Selection,
    Carousel
  },
  computed: {
    countryList() {
      return this.$store.state.countryList
    }
  }
}
</script>

<style lang="less">
//To Import on prependData
@import "../styles/01-variables/colors.less";
@import "../styles/01-variables/fonts.less";
@import "../styles/01-variables/spaces.less";
@import "../styles/02-mixins/status.less";
.Home__Wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
