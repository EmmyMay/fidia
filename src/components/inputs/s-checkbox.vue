<template>
  <div class="checkbox">
    <div class="checkbox-wrapper">
      <p-check  class="p-svg p-curve" color="primary">
      <svg slot="extra" class="svg svg-icon" viewBox="0 0 20 20">
            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  style="stroke: white;fill:white"></path>
        </svg>
         <span class="label-value"> {{labelValue}} </span>
        </p-check>
    </div>  
  </div>
</template>

<script>
export default {
 props:{
   labelValue: String
 }
}
</script>

<style scoped>
 .label-value{
   color: #3C4257;
   font-size: 0.875rem;
   margin-left: 0.375rem;
   font-weight: 500;
 }
</style>