<template>
  <div class="form-wrap">
    <form class="request">
      <h2>Request Bed</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Phone Number" v-model="phoneNumber" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Hospital" v-model="hospital" />
          <hospital class="icon" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="request">Submit Request</button>
      <router-link class="back-button" :to="{ name: 'Home' }"
        >Back to home</router-link
      >
      <div class="angle"></div>
    </form>
    <div class="backgroundA"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import user from "../assets/Icons/user-alt-light.svg";
import hospital from "../assets/Icons/hospital.svg";
import db from "../firebase/firebaseInit";
export default {
  name: "Request",
  components: {
    email,
    user,
    hospital,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      hospital: "",
      phoneNumber: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async request() {
      if (
        this.phoneNumber !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.hospital !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const dataBase = db.collection("requests").doc();
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          hospital: this.hospital,
          phoneNumber: this.phoneNumber,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.request {
  h2 {
    max-width: 350px;
  }
}

.backgroundA {
  display: none;
  flex: 2;
  background-size: cover;
  background-image: linear-gradient(to left, #00acb1, #caf0c1);
  width: 100%;
  height: 100%;
  @media (min-width: 900px) {
    display: initial;
  }
}

.back-button {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease all;
  &:hover {
    border-color: #303030;
  }
}
</style>
