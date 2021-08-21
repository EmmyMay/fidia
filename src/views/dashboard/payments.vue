<template>
  <div class="payments">
    <navbar />
    <div class="content-section">
      <header class="content-header">
        <h1 class="header-title">Payments</h1>
        <div class="header-btns">
          <s-btn
            shadowSecondary
            width="4.4375rem"
            height="1.8125rem"
            color="#FFFFFF"
          >
            <div class="btn-details">
              <span class="btn-icon">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4982 0.5C10.9146 0.5 11.2529 0.836093 11.2529 1.25021C11.2528 1.4172 11.1968 1.57935 11.0939 1.71083L6.75617 7.25487L6.75167 10.7943C6.75175 10.893 6.73238 10.9907 6.69466 11.0818C6.65694 11.1729 6.60162 11.2558 6.53186 11.3255L5.37954 12.4778C5.3691 12.4883 5.35576 12.4955 5.34122 12.4985C5.32668 12.5015 5.31159 12.5 5.29786 12.4944C5.28413 12.4888 5.27237 12.4792 5.26408 12.4669C5.25578 12.4546 5.25132 12.4401 5.25126 12.4253V7.25487L0.909059 1.71083C0.848175 1.63314 0.80329 1.54414 0.776996 1.449C0.750702 1.35385 0.743521 1.25444 0.755868 1.15651C0.768215 1.05857 0.799844 0.964051 0.848929 0.878409C0.898015 0.792767 0.963583 0.7177 1.04185 0.657544C1.17449 0.555321 1.33726 0.499921 1.50472 0.5H10.4982Z"
                    fill="#4F566B"
                  />
                </svg>
              </span>
              <span class="btn-text">Filter</span>
            </div>
          </s-btn>
          <s-btn
            shadowSecondary
            width="5.3125rem"
            height="1.8125rem"
            color="#FFFFFF"
          >
            <div class="btn-details">
              <span class="btn-icon">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0021 8.05748C12.0021 8.28006 11.9137 8.49353 11.7563 8.65092C11.5989 8.80831 11.3854 8.89673 11.1628 8.89673C10.9403 8.89673 10.7268 8.80831 10.5694 8.65092C10.412 8.49353 10.3236 8.28006 10.3236 8.05748V3.35766L1.42163 12.2563C1.34426 12.3336 1.25242 12.3949 1.15136 12.4367C1.05029 12.4785 0.941976 12.5 0.832599 12.5C0.723221 12.5 0.614923 12.4784 0.513886 12.4365C0.412849 12.3946 0.321054 12.3332 0.24374 12.2558C0.166426 12.1785 0.105108 12.0866 0.0632868 11.9856C0.0214659 11.8845 -3.89145e-05 11.7762 5.28625e-08 11.6668C3.90202e-05 11.5574 0.021621 11.4491 0.0635139 11.3481C0.105407 11.2471 0.16679 11.1553 0.244159 11.0779L9.14444 2.17935H4.44462C4.22193 2.17935 4.00835 2.09088 3.85088 1.93341C3.69341 1.77594 3.60495 1.56237 3.60495 1.33967C3.60495 1.11698 3.69341 0.903404 3.85088 0.745935C4.00835 0.588465 4.22193 0.5 4.44462 0.5H11.1754C11.2563 0.501041 11.3366 0.513761 11.4138 0.537766C11.5846 0.589901 11.7341 0.695691 11.84 0.839454C11.946 0.983217 12.0028 1.1573 12.0021 1.3359V8.05748Z"
                    fill="#4F566B"
                  />
                </svg>
              </span>
              <span class="btn-text">Export</span>
            </div>
          </s-btn>
          <s-btn
            shadowPrimary
            width="9.25rem"
            height="1.8125rem"
            color="#5469D4"
          >
            <div class="btn-details">
              <span class="btn-icon">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.75 5.75H11.25C11.4489 5.75 11.6397 5.82902 11.7803 5.96967C11.921 6.11032 12 6.30109 12 6.5C12 6.69891 11.921 6.88968 11.7803 7.03033C11.6397 7.17098 11.4489 7.25 11.25 7.25H6.75V11.75C6.75 11.9489 6.67098 12.1397 6.53033 12.2803C6.38968 12.421 6.19891 12.5 6 12.5C5.80109 12.5 5.61032 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75V7.25H0.75C0.551088 7.25 0.360322 7.17098 0.21967 7.03033C0.0790176 6.88968 0 6.69891 0 6.5C0 6.30109 0.0790176 6.11032 0.21967 5.96967C0.360322 5.82902 0.551088 5.75 0.75 5.75H5.25V1.25C5.25 1.05109 5.32902 0.860322 5.46967 0.71967C5.61032 0.579018 5.80109 0.5 6 0.5C6.19891 0.5 6.38968 0.579018 6.53033 0.71967C6.67098 0.860322 6.75 1.05109 6.75 1.25V5.75Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="btn-text2">Create payment</span>
            </div>
          </s-btn>
        </div>
      </header>
      <div class="tabbed-section">
        <header class="tab-header">
          <div
            v-for="tab in tabs"
            :class="[tab == 'Succeeded' ? 'tab-active' : '']"
            :key="tab"
            class="tab"
          >
            {{ tab }}
          </div>
        </header>
        <s-table :tableHeader="tableHeader" :tableContent="tableContent" />
      </div>
      <div class="content-footer">
        <p class="table-length">{{ tableContent.length }} results</p>
        <div class="table-nav">
          <s-btn
            shadowSecondary
            disabled
            width="4.6875rem"
            height="1.8125rem"
            color="white"
          >
            <span class="navbtn-text">Previous</span>
          </s-btn>
          <s-btn
            shadowSecondary
            default
            width="4.6875rem"
            height="1.8125rem"
            color="white"
          >
            <span class="navbtn-text">Next</span>
          </s-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navbar from "../../components/navbar.vue";
  import SBtn from "../../components/s-btn.vue";
  import STable from "../../components/s-table.vue";
  export default {
    components: { navbar, SBtn, STable },
    data() {
      return {
        tabs: ["All", "Succeeded", "Refunded", "Uncaptured"],
        tableHeader: ["Amount", "Description", "Customer", "Date"],
        tableContent: [
          {
            amount: 355.22,
            description: "fe3d8216-58f9-4dc1-aaef-2f19463b5258",
            customer: "hefovo87@ereyemind...",
            date: "7 Jul, 14:04",
          },
          {
            amount: 39.99,
            description: "0d7b6ac7-dbda-4157-bae9-e64749e538f5",
            customer: "john.doe@gmail.com",
            date: "7 Jul, 14:01",
          },
          {
            amount: 19.99,
            description: "eca84b25-0324-4f31-b9fb-d489048b77ae",
            customer: "jfamosinhoaraca@iseo...",
            date: "7 Jul, 13:28",
          },
          {
            amount: 19.99,
            description: "9ce0027a-2429-40aa-bca3-eb9fae9829db",
            customer: "gdontdisable@typery...",
            date: "7 Jul, 13:02",
          },
          {
            amount: 142.17,
            description: "73bb0713-d326-4983-a805-9cef0f15ff3c",
            customer: "psir@typre.com",
            date: "7 Jul, 12:34",
          },
          {
            amount: 93.76,
            description: "dff08e3b-037e-4fc9-a587-92850d82868e",
            customer: "qomarkhalildubai0@g...",
            date: "7 Jul, 12:16",
          },
          {
            amount: 931.00,
            description: "3005be4a-6d4d-487c-85c3-d61cfe64ef63",
            customer: "kfouzan.saleemc@yah...",
            date: "7 Jul, 11:31",
          },
          {
            amount: 19.99,
            description: "7e960154-e2e2-49eb-9252-edd51f421cd0",
            customer: "asaifah@gmx.com",
            date: "7 Jul, 11:18",
          },
          {
            amount: 41.99,
            description: "88f37e63-c2b2-4c09-aa89-428fc802fe09",
            customer: "5mohamad.hamod.5m...",
            date: "7 Jul, 10:46",
          },
          {
            amount: 179.98,
            description: "5a9aae47-1d6a-484e-8305-c75107796cd1",
            customer: "7lucyveenstra918@g...",
            date: "7 Jul, 10:12",
          },
          {
            amount: 15.17,
            description: "48eb8b41-9ff0-4d5d-82cc-4b9b820b5f53",
            customer: "0sajad@yopmail.com",
            date: "7 Jul, 06:03",
          },
          {
            amount: 41.99,
            description: "02fd1b96-0bba-48aa-8557-81021755b196",
            customer: "feverton78@gmail.com",
            date: "6 Jul, 23:45",
          },
          {
            amount: 67.83,
            description: "986bdfca-6c8d-4f40-b2ae-ed0abacccfce",
            customer: "lsid.ali_blidi@outlook...",
            date: "6 Jul, 23:32",
          },
          {
            amount: 35.01,
            description: "c5629140-ea34-40d8-97e4-d2986b33275e",
            customer: "twendel.b@yahoo.com",
            date: "6 Jul, 23:30",
          },
          {
            amount: 374.93,
            description: "c2194818-1485-437c-a389-6164e605d697",
            customer: "pdevonneq@gmail.com",
            date: "6 Jul, 23:16",
          },
          {
            amount: 330.91,
            description: "6583691d-4d9f-43ce-8f2f-0d2d95b30ad4",
            customer: "atotspop886@gmx.com",
            date: "6 Jul, 23:08",
          },
        ],
      };
    },
  };
</script>

<style scoped>
.payments {
  padding-right: 0.875rem;
  padding-bottom: 3rem;
}
.content-section {
  padding-left: 2.5rem;
  padding-top: 2rem;
  padding-right: 3.375rem;
}
.content-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid salmon; */
}
.header-title {
  font-size: 2.375rem;
  line-height: 2.0881rem;
}
.header-btns {
  display: flex;
  gap: 0.5rem;
}
.btn-details {
  display: flex;
  gap: 0.4219rem;
}
.btn-text2 {
  color: rgb(255, 255, 255);
}
.tabbed-section {
  margin-top: 1.25rem;
}
.tab-header {
  display: flex;
  gap: 1.625rem;
  border-bottom: 1px solid #e3e8ee;
}
.tab {
  font-size: 0.875rem;
  color: #697386;
}
.tab-active {
  color: #5469d4;
  border-bottom: 1px solid #5469d4;
  padding-bottom: 0.5625rem;
}
/* Content Footer Section */
.content-footer{
  display: flex;
  justify-content: space-between;
  padding-top: 1.25rem;
}
.table-nav{
  display: flex;
  gap: 0.5rem;
}
.navbtn-text {
  font-size: 0.875rem;
}
.table-length{
  font-size: 0.875rem;
}
</style>