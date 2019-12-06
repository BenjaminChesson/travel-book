<template>
  <header>
    <div class="container">
      <nuxt-link to="/">
        <div class="Logo">
          <Logo />
          <span>Travel Book</span>
        </div>
      </nuxt-link>
      <menu>
        <nuxt-link
          v-if="addCountry"
          to="/countries"
          class="ButtonLink__CountryPage"
          >Add country</nuxt-link
        >
        <nuxt-link v-else to="/" class="ButtonLink__HomePage"
          >Back home</nuxt-link
        >
      </menu>
    </div>
  </header>
</template>

<script>
import Logo from "~/assets/Logo.vue"

export default {
  components: {
    Logo
  },
  props: {
    addCountry: Boolean
  }
}
</script>

<style lang="less">
//To Import on prependData
@import "../../../styles/01-variables/colors.less";
@import "../../../styles/01-variables/fonts.less";
@import "../../../styles/01-variables/spaces.less";
@import "../../../styles/02-mixins/status.less";

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: @space-m 0;
  margin-bottom: @space-m;
  .container {
    justify-content: space-between;
  }
}
a {
  text-decoration: none;
  .Logo {
    display: flex;
    align-items: center;
    color: @darkest;
    text-decoration: none;
    line-height: 1;
    font-weight: 700;
    font-size: @font-h3;
    animation: 1s appear;
  }
}
menu {
  display: flex;
  align-items: center;
  padding: 0;
}
.ButtonLink__HomePage {
  background-color: transparent;
  border: 1px solid @medium;
  border-radius: 4px;
  color: @primary;
  cursor: pointer;
  font-weight: 600;
  padding: @space-s @space-m;
  .transition;
  .hover-background(@light);
}
.ButtonLink__CountryPage {
  background-color: @primary;
  border-radius: 4px;
  color: @white;
  cursor: pointer;
  font-weight: 600;
  padding: @space-s @space-m;
  .transition;
  .hover-background(@primary-hover);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
