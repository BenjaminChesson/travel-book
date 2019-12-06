<template>
  <svg
    class="TravelBook__Logo"
    viewBox="0 0 98 98"
    style="enable-background:new 0 0 98 98;"
    xml:space="preserve"
  >
    <g id="XMLID_43_">
      <g id="XMLID_1_">
        <g>
          <path
            class="st0"
            d="M27.8,58.3c-4.9-4.9-7.9-11.6-7.9-19c0-14.9,12-26.9,26.9-26.9c7.4,0,14.2,3,19,7.9c4.9,4.9,7.9,11.6,7.9,19     c0,14.9-12,26.9-26.9,26.9C39.4,66.2,32.6,63.2,27.8,58.3z"
          ></path>
        </g>
        <g>
          <path
            class="st1"
            d="M27.8,58.3c-4.9-4.9-7.9-11.6-7.9-19c0-14.9,12-26.9,26.9-26.9c7.4,0,14.2,3,19,7.9c4.9,4.9,7.9,11.6,7.9,19     c0,14.9-12,26.9-26.9,26.9C39.4,66.2,32.6,63.2,27.8,58.3z"
          ></path>
          <path
            class="st1"
            d="M72.2,14c14,14,14,36.6,0,50.6s-36.7,14-50.6,0"
          ></path>
          <polyline
            class="st1"
            points="27.8,58.3 27.8,58.3 21.6,64.6 15.4,70.8    "
          ></polyline>
          <polyline
            class="st1"
            points="78.6,7.5 72.2,13.9 65.9,20.2    "
          ></polyline>
          <line class="st2" x1="49.8" y1="90.5" x2="49.8" y2="75.1"></line>
          <polyline
            class="st1"
            points="36.8,90.5 49.8,90.5 63,90.5    "
          ></polyline>
        </g>
      </g>
    </g>
    <defs>
      <linearGradient id="LinearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="20%" stop-color="var(--color-stop)"></stop>
        <stop offset="100%" stop-color="var(--color-bot)"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>
<style lang="less">
@import "../styles/01-variables/colors.less";

#LinearGradient {
  --color-stop: @primary-lightest;
  --color-bot: @primary;
}

.TravelBook__Logo {
  width: 4rem;
  margin: 0 0.5rem 0 0;
  .st0 {
    fill: url(#LinearGradient) @primary;
  }
  .st1 {
    fill: none;
    stroke: @darkest;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .st2 {
    fill: none;
    stroke: @darkest;
    stroke-width: 6;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
}
</style>
