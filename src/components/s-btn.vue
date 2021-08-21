<template>
  <button :class="{
    's-btn': this.default,
    'outlined': this.outlined,
    'disabled': this.disabled,
    'circle'  : this.circle,
    'size': this.height || this.width,
    }"
    :style="cssVars"
    >
    <slot></slot>
   </button>
</template>

<script>
  export default {
    props:{
      default:{
        default: true,
        type: Boolean
      },
      outlined:{
        default: false,
        type: Boolean
      },
      disabled:{
        default: false,
        type: Boolean
      },
      color: {
        default: '#7735d5;',
        type: String
      },
      circle:{
        type: Boolean
      },
      height:{
        type: String
      },
      width:{
        type: String
      }
    },
    computed: {
      cssVars(){
        return {
          '--color': this.color,
          '--height': this.height,
          '--width': this.width
        }
      }
    }
  };
</script>

<style scoped>
.s-btn {
  /* width: 100%; */
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color);
  display: flex;
  gap: 0.5rem;
  color: white;
  justify-content: center;
  align-items: center;
}
.outlined{
  /* width: 100%; */
  height: 3rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid var(--color);
  display: flex;
  gap: 0.5rem;
  color: white;
  justify-content: center;
  align-items: center;
}
.disabled{
  opacity: 0.2;
  cursor: none;
}
.circle{
  border-radius: 100%;
  padding-left: .5rem;
  padding-right: .5rem;
  width: 2.5rem;
  height: 2.5rem; 
}
.size{
 width: var(--width);
 height: var(--height);
}
</style>