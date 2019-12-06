<template>
  <footer>
    <div class="container">
      <div class="Footer__links">
        <div class="Link__github">
          <a
            href="https://github.com/BenjaminChesson/travel-book"
            target="_blank"
            >Github repository</a
          >
        </div>
        <div class="Link__readme">
          <a
            href="https://github.com/BenjaminChesson/travel-book/blob/master/README.md"
            target="_blank"
            >Project readme</a
          >
        </div>
      </div>
      <div class="Footer__socials">
        <a>
          <Facebook />
        </a>
        <a>
          <LinkedIn />
        </a>
        <a>
          <Youtube />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import Facebook from "~/assets/icons/social-facebook.vue"
import LinkedIn from "~/assets/icons/social-linkedin.vue"
import Youtube from "~/assets/icons/social-youtube.vue"

export default {
  components: {
    Facebook,
    LinkedIn,
    Youtube
  }
}
</script>
<style lang="less">
//To Import on prependData
@import "../../../styles/01-variables/colors.less";
@import "../../../styles/01-variables/fonts.less";
@import "../../../styles/01-variables/spaces.less";
@import "../../../styles/02-mixins/status.less";

footer {
  margin-top: auto;
  padding: @space-m 0;
  color: @neutral;
  font-size: 1.4rem;
  .container {
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media all and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .Footer__links {
    display: flex;
    flex-direction: row;
    margin-bottom: @space-l;
    @media all and (min-width: 768px) {
      margin-bottom: 0;
    }
    a {
      display: block;
      margin: 0 @space-m;
      cursor: pointer;
      color: @neutral;
      .hover-color(@primary);
      @media all and (min-width: 768px) {
        margin-left: @space-s;
      }
    }
  }
  .Footer__socials {
    margin-bottom: @space-s;
    @media all and (min-width: 768px) {
      margin-bottom: 0;
    }
    a {
      cursor: pointer;
      fill: @neutral;
      &:hover,
      &:focus,
      &:active {
        .icon-facebook {
          fill: @color-facebook;
        }
        .icon-linkedin {
          fill: @color-linkedin;
        }
        .icon-youtube {
          fill: @color-youtube;
        }
      }

      svg {
        .transition;
        margin: 0 @space-s;
        width: 2.5rem;
        height: 2.5rem;
        @media all and (min-width: 768px) {
          margin-left: @space-s;
        }
      }
    }
  }
}
</style>
