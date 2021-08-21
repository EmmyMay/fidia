<template>
  <button
    :class="{
      's-btn': this.default,
      outlined: this.outlined,
      disabled: this.disabled,
      circle: this.circle,
      size: this.height || this.width,
      shadowSecondary: this.shadowSecondary,
      shadowPrimary: this.shadowPrimary,
    }"
    :style="cssVars"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      default: {
        default: true,
        type: Boolean,
      },
      outlined: {
        default: false,
        type: Boolean,
      },
      disabled: {
        default: false,
        type: Boolean,
      },
      color: {
        type: String,
      },
      circle: {
        type: Boolean,
      },
      height: {
        type: String,
      },
      width: {
        type: String,
      },
      shadowSecondary: {
        type: Boolean,
      },
      shadowPrimary: {
        type: Boolean,
      },
    },
    computed: {
      cssVars() {
        return {
          "--color": this.color,
          "--height": this.height,
          "--width": this.width,
        };
      },
    },
  };
</script>

<style scoped>
.s-btn {
  /* width: 100%; */
  border: none;
  border-radius: 0.25rem;
  background-color: var(--color);
  display: flex;
  gap: 0.5rem;
  color: #3C4257;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.outlined {
  /* width: 100%; */
  height: 3rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--color);
  display: flex;
  gap: 0.25rem;
  color: #3C4257;
  justify-content: center;
  align-items: center;
}
.disabled {
  opacity: 0.2;
  cursor: none;
}
.circle {
  border-radius: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
}
.size {
  width: var(--width);
  height: var(--height);
}
.shadowPrimary {
  box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px #5469d4,
    0px 1px 1px rgba(0, 0, 0, 0.12);
}
.shadowSecondary {
  box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08),
    0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
}
</style>