<template>
  <div id="app">   
    <router-view/>
  </div>
</template>

<style>
/* using montseraat font because SF Pro Display is not available */
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;

}


*,*::before,*::after{
  box-sizing: border-box;  
  margin: 0;
  padding: 0;
}
body,html, #app{
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.font-14{
  font-size: 0.875rem;
  line-height: 1.0444rem;
  color: #1A1F36;
  
}
  /* * { 
   outline: 1px solid rgb(193, 3, 3);
   outline-offset: -1px;
 } 
 *:nth-child(1) {
     outline: 1px solid rgb(23, 209, 91);
   outline-offset: -1px;
   } */

</style>
