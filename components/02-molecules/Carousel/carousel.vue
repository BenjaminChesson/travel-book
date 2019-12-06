<template>
  <div class="carousel">
    <carousel
      :adjustable-height="true"
      :autoplay="false"
      :loop="false"
      :per-page="1"
      :pagination-color="grey"
      :speed="1500"
    >
      <slide>
        <span class="label">
          <img src="~/assets/images/travel1.jpg" />
        </span>
      </slide>
      <slide>
        <span class="label">
          <img src="~/assets/images/travel2.jpg" />
        </span>
      </slide>
      <slide>
        <span class="label">
          <img src="~/assets/images/travel3.jpg" />
        </span>
      </slide>
      <slide>
        <span class="label">
          <div class="video">
            <iframe
              width="533"
              height="300"
              src="https://www.youtube.com/embed/HSsqzzuGTPo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </span>
      </slide>
    </carousel>
  </div>
</template>
<style lang="less">
//To Import on prependData
@import "../../../styles/01-variables/colors.less";

.VueCarousel-slide {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  background: transparent;
  color: @white;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 300px;
  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    img {
      max-width: 600px;
      width: 100%;
    }
    iframe {
      @media all and (max-width: 767px) {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.VueCarousel-dot-container {
  margin-top: 0 !important;
  button {
    &.VueCarousel-dot {
      background-color: @medium !important;
      &--active {
        background-color: @darkest !important;
      }
    }
  }
}
</style>
