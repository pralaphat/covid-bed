<template>
  <div class="card-group">
    <div v-for="item in requests" :key="item.id" class = "card">
      {{ "Name: " + item.firstName + " " + "Phone Number: " + item.phoneNumber }}
    </div>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit";
export default {
  name: "Dashboard",
  data() {
    return {
      requests: [],
    };
  },
  firestore() {
    return {
      requests: db.collection("requests").where('hospital' , "==", "Test Hospital" )
    };
  },
  computed: {
    hospital: {
      get() {
        return this.$store.state.profileHospital;
      },
    },
  }

}
</script>

<style lang="scss" scoped>
.card-group {
  align-items: center;
}
.card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: rgb(131, 124, 124);
  padding: 10px;
  margin: 10px;
  min-height: 50px;
  max-width: 500px;
  transition: 0.5s ease all;
  &:hover {
    transform: rotateZ(-0.5deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}
</style>
