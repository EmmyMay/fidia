<template>
  <table>
    <thead class="table-header">
      <tr>
        <th class="th-check" scope="col">
          <s-checkbox />
        </th>
        <th v-for="data in tableHeader" :key="data" class="th-type" scope="col">
          {{ data }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in tableContent" :key="data.amount">
        <td class="check-cell">
          <s-checkbox />
        </td>
        <td class="type-cell">
          <div class="amount-cell">
            <span class="amount-text cell-text">US${{ data.amount }} </span>
            <div class="chip-green">
              <span class="chip-text">Succeeded</span>
              <span class="chip-icon">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.97274 8.90975L0.219741 5.19125C-0.0727588 4.89575 -0.0727588 4.4165 0.219741 4.12175C0.512241 3.827 0.987741 3.82625 1.28024 4.12175L4.50074 7.28975L10.7167 1.09625C11.0092 0.801496 11.4847 0.801496 11.7772 1.09625C12.0697 1.391 12.0697 1.871 11.7772 2.16575L5.02499 8.906C4.88579 9.04545 4.69705 9.12413 4.50001 9.12483C4.30298 9.12553 4.11368 9.0482 3.97349 8.90975H3.97274Z"
                    fill="#0E6245"
                  />
                </svg>
              </span>
            </div>
          </div>
        </td>
        <td class="type-cell desc-cell">
          <span class="cell-text description chip-circle"
            >{{ data.description }}
          </span>
        </td>
        <td class="type-cell">
          <span class="cell-text email">{{ data.customer }}</span>
        </td>
        <td class="type-cell">
          <span class="cell-text date-text"> {{ data.date }} </span>
        </td>
        <td>
          <div class="menu-button">
            <span class="menu-icon">
              <svg
                width="12"
                height="4"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 3.5C1.10218 3.5 0.720644 3.34196 0.43934 3.06066C0.158035 2.77936 0 2.39782 0 2C0 1.60218 0.158035 1.22064 0.43934 0.93934C0.720644 0.658035 1.10218 0.5 1.5 0.5C1.89782 0.5 2.27936 0.658035 2.56066 0.93934C2.84196 1.22064 3 1.60218 3 2C3 2.39782 2.84196 2.77936 2.56066 3.06066C2.27936 3.34196 1.89782 3.5 1.5 3.5ZM6 3.5C5.60218 3.5 5.22064 3.34196 4.93934 3.06066C4.65804 2.77936 4.5 2.39782 4.5 2C4.5 1.60218 4.65804 1.22064 4.93934 0.93934C5.22064 0.658035 5.60218 0.5 6 0.5C6.39782 0.5 6.77936 0.658035 7.06066 0.93934C7.34196 1.22064 7.5 1.60218 7.5 2C7.5 2.39782 7.34196 2.77936 7.06066 3.06066C6.77936 3.34196 6.39782 3.5 6 3.5ZM10.5 3.5C10.1022 3.5 9.72064 3.34196 9.43934 3.06066C9.15804 2.77936 9 2.39782 9 2C9 1.60218 9.15804 1.22064 9.43934 0.93934C9.72064 0.658035 10.1022 0.5 10.5 0.5C10.8978 0.5 11.2794 0.658035 11.5607 0.93934C11.842 1.22064 12 1.60218 12 2C12 2.39782 11.842 2.77936 11.5607 3.06066C11.2794 3.34196 10.8978 3.5 10.5 3.5Z"
                  fill="#4F566B"
                />
              </svg>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import sCheckbox from "./inputs/s-checkbox.vue";
  export default {
    props: {
      tableHeader: Array,
      tableContent: Array,
    },
    components: { sCheckbox },
  };
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding-top: 0.8125rem;
  padding-bottom: 0.6875rem;
  font-size: 0.6875rem;
  color: #1a1f36;
  font-weight: 500;
  text-align: left;
}
tr:first-of-type {
  border-bottom: 1px solid #e3e8ee;
}

tr:not(:first-of-type, :last-of-type) {
  border-bottom: 1px solid #e3e8ee;
  width: 80%;
}
.amount-cell {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
td {
  /* padding-left: 1.5rem; */
  padding-top: 1.3125rem;
  padding-bottom: 0.8125rem;
}

.cell-text {
  font-size: 0.8125rem;
}
.check-cell, .th-check {
  font-size: 0.6875rem;
  display: block;
  margin-top: 0.7rem;
}
.chip-green {
  font-size: 0.75rem;
  background-color: #cbf4c9;
  height: 1.313rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  border-radius: 0.25rem;
  display: flex;
  gap: 0.25rem;
}
.chip-text {
  color: #0e6245;
  font-size: 0.75rem;
  font-weight: 500;
}
.amount-text {
  font-weight: 500;
}
.date-text,
.email {
  color: #3c4257;
}
.description {
  color: #4f566b;
}
tbody {
  /* padding-left: 2rem; */
  /* border-right: 1rem solid transparent;
    border-left: 1rem solid transparent; */
}
.desc-cell{
  padding-right: 15.9375rem;
  padding-left: 1.375rem;
}
.th-type:nth-of-type(3){
  padding-right: 15.9375rem;
  padding-left: 1.375rem;
}
.menu-button{
  padding-left: 4.3125rem;
}
</style>