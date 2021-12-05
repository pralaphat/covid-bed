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
    profileBedCap: null,
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
      state.profileBedCap = doc.data().bedCap;
      console.log(state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + 
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeHospital(state, payload) {
      state.profileHospital = payload;
    },
    changeBedCap(state, payload) {
      state.profileBedCap = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        Hospital: state.profileHospital,
        bedCap: state.profileBedCap,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});