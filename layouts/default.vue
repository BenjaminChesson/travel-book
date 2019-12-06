<template>
  <div class="app">
    <nuxt class="page" />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/02-molecules/Footer/footer"

export default {
  components: {
    Footer
  }
}
</script>
<style lang="less">
//To Import on prependData
@import "../styles/01-variables/colors.less";
@import "../styles/01-variables/fonts.less";
@import "../styles/01-variables/spaces.less";
@import "../styles/common.less";
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .page {
    flex: 1;
  }
}
main,
header,
footer {
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  width: 80%;
  content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
main {
  flex: 1;
  padding-bottom: @space-l;
}
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-size: @font-h1;
  font-weight: 300;
  color: @darkest;
  letter-spacing: 1px;
  margin-bottom: @space-m;
  @media all and (min-width: 768px) {
    font-size: @font-big;
  }
}
</style>
