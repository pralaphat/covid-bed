/* index.js
   this code used for define url to link will other pages */
   import Vue from "vue";
   import VueRouter from "vue-router";
   import Home from "../views/Home.vue";
   import Register from "../views/Register.vue";
   import Login from "../views/Login.vue";
   import Request from "../views/Request.vue"
   import Profile from "../views/Profile.vue"
   import firebase from "firebase/app";
   import "firebase/auth";
   
   Vue.use(VueRouter);
   
   const routes = [
     {
       /* home page */
       path: "/",
       name: "Home",
       component: Home,
       meta: {
         title: "Home"
       }
     },
     {
       /* hospital staff register page */
       path: "/register",
       name: "Register",
       component: Register,
       meta: {
         title: "Register"
       }
     },
     {
       /* hospital staff login page */
       path: "/login",
       name: "Login",
       component: Login,
       meta: {
         title: "Login"
       }
     },
     {
       /* patient request bed page */
       path: "/request",
       name: "Request",
       component: Request,
       meta: {
         title: "Request"
       }
     },
     {
       /* hospital staff profile */
       path: "/profile",
       name: "Profile",
       component: Profile,
       meta: {
         title: "Profile",
         requiresAuth: true,
       },
     },
   ];
   
   /* connect all .vue file with router */
   const router = new VueRouter({
     mode: "history",
     base: process.env.BASE_URL,
     routes,
     scrollBehavior() {
       return { x: 0, y: 0 };
     },
   });
   
   router.beforeEach((to, from, next) => {
     document.title = `${to.meta.title} | BedMe`;
     next();
   });
   
   router.beforeEach(async (to, from, next) => {
     let user = firebase.auth().currentUser;
     let admin = null;
     if (user) {
       let token = await user.getIdTokenResult();
       admin = token.claims.admin;
     }
     if (to.matched.some((res) => res.meta.requiresAuth)) {
       if (user) {
         if (to.matched.some((res) => res.meta.requiresAdmin)) {
           if (admin) {
             return next();
           }
           return next({ name: "Home" });
         }
         return next();
       }
       return next({ name: "Home" });
     }
     return next();
   });
   
   export default router;