<template>
  <div class="login">
     <h1 class="title">Sign in to your account</h1>
     <form class="form-fields">
      <outlined-input labelValue="Email" placeholder="jane.doe@gmail.com" />
      <outlined-input type="password" icon labelValue="Password" placeholder="jane.doe@gmail.com">
      <s-link slot="extra-content" text="Forgot Password?"></s-link>
      </outlined-input>
      <s-checkbox labelValue="Stay signed in for a week" />
      <s-btn
      width="100%"
      height="2.875rem"
      color="#635CFF"
      style="color: white"
      >
        Continue
      </s-btn>
     </form>

     <div class="alternative">
      <s-link text="Use single sign-on (SSO) insteads"></s-link>
     </div>
  </div>
</template>

<script>
import outlinedInput from '../inputs/outlinedInput.vue'
import SCheckbox from '../inputs/s-checkbox.vue'
import SBtn from '../s-btn.vue'
import SLink from '../s-link.vue'
export default {
  components: { outlinedInput, SCheckbox, SBtn, SLink },

}
</script>

<style scoped>
.login{
 padding-left: 4.25rem;
 padding-right: 4.25rem;
 padding-top: 3rem;
 background-color: white;
 width: 33.875rem;
height: 33.5625rem;
box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12), 0px 15px 35px rgba(60, 66, 87, 0.08);
 /* border: 1px solid brown; */
}
.title{
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.8125rem;
  color: #3C4257;
  margin-bottom: 1rem;
}

.form-fields{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.alternative{
  margin-top: 1.75rem;
  text-align: center;
}

</style>