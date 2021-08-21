<template>
  <div class="input-outlined">
    <div class="label-wrapper">
      <label class="input-label" for="input"> {{ labelValue }} </label>
      <slot name="extra-content"></slot>
    </div>
    <div class="input-field">
      <input
        class="input"
        :placeholder="placeholder"
        :type="type"
        name="input"
      />
      <span v-if="icon" class="input-icon">
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 12.968C3.582 12.968 0 8.28202 0 6.96802C0 5.65402 3.582 0.968018 8 0.968018C12.418 0.968018 16 5.65402 16 6.96802C16 8.28202 12.418 12.968 8 12.968ZM8 10.968C9.06087 10.968 10.0783 10.5466 10.8284 9.79644C11.5786 9.0463 12 8.02888 12 6.96802C12 5.90715 11.5786 4.88974 10.8284 4.13959C10.0783 3.38944 9.06087 2.96802 8 2.96802C6.93913 2.96802 5.92172 3.38944 5.17157 4.13959C4.42143 4.88974 4 5.90715 4 6.96802C4 8.02888 4.42143 9.0463 5.17157 9.79644C5.92172 10.5466 6.93913 10.968 8 10.968ZM8 8.96802C7.46957 8.96802 6.96086 8.7573 6.58579 8.38223C6.21071 8.00716 6 7.49845 6 6.96802C6 6.43758 6.21071 5.92888 6.58579 5.5538C6.96086 5.17873 7.46957 4.96802 8 4.96802C8.53043 4.96802 9.03914 5.17873 9.41421 5.5538C9.78929 5.92888 10 6.43758 10 6.96802C10 7.49845 9.78929 8.00716 9.41421 8.38223C9.03914 8.7573 8.53043 8.96802 8 8.96802Z"
            fill="#A3ACB9"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      labelValue: String,
      placeholder: String,
      icon: {
        default: false,
        type: Boolean
      },
      type: {
        default: 'text',
        type: String
      }
    },
  };
</script>

<style scoped>
.input-outlined {
  width: 100%;
  height: 100%;
}
.input-field{
  position: relative;
}
.input {
  
  background-color: transparent;
  height: 2.875rem;
  border: 1px solid #d9dce1;
  border-radius: 0.3125rem;
  width: 100%;
  padding-left: 1rem;
  padding-top: 0.8438rem;
  padding-bottom: 0.8438rem;
}
.input::placeholder {
  color: #1a1f36;
}
.input-label {
  font-size: 0.875rem;
  color: #3c4257;
  line-height: 1.0625rem;
}
.label-wrapper {
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
}
.input-icon{
  position: absolute;
  right: 0.75rem;
  top: 1.0625rem;
}

</style>