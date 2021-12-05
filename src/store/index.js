import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileHospital: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileHospital = doc.data().hospital;
      console.log(state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
  },
  modules: {},
});