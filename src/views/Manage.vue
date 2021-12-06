<!-- Manage.vue: query request -->
<template>
<div>
<h1>Total request: {{requests.length}}</h1>
<div class="card-group">
    <div v-for="(item) in requests" :key="item.id">
      <div class="card shadow-dreamy">
      <div class="card-text">
        <h2>{{ "Name: " + item.firstName }}</h2>
        <p>{{ "Contact: " + item.phoneNumber }}</p>
        
      </div>
      <div class="card-actions">
        <div class="action">
          <div class="value">Give</div>
        </div>
        <div class="action border">
          <div class="value">Ignore</div>
        </div>
        <div class="action">
          <div class="value">Info</div>
        </div>
      </div>
    </div>
  </div>
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
    const hospital = this.$store.state.profileHospital;
    return {
      requests: db.collection("requests").where("hospital", "==", hospital),
      count: db.collection("requests").where("hospital", "==", hospital).length,
    };
  },
  computed: {
    hospital: {
      get() {
        return this.$store.state.profileHospital;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
h1{
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 100px 80px;
  grid-template-areas: "text" "stats";

  border-radius: 18px;
  background: white;
  box-shadow: 0px 5px 15px 3px rgba(0,0,0,0.3);
  font-family: roboto;
  text-align: center;
  

  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}
.card-text {
  grid-area: text;
  margin: 25px;
}
.card-text p {
  color: rgb(48, 48, 48);
  font-size:15px;
  font-weight: 400;
}
.card-text h2 {
  margin-top:0px;
  font-size:28px;
}
.card-actions {
  grid-area: stats; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #016064;
}
.card-actions .action {
  padding:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.card-actions .border {
  border-left: 1px solid #022D36;
  border-right: 1px solid #022D36;
}
.card-actions .value{
  font-size:22px;
  font-weight: 500;
}
.card-actions .value sup{
  font-size:12px;
}
.card-actions .type{
  font-size:11px;
  font-weight: 300;
  text-transform: uppercase;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0px 5px 15px 3px rgba(0,0,0,0.3)
}

</style>
