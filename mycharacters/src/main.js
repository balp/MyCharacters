import { createApp } from 'vue'
import App from './App.vue'
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8xIoYuE4X317TxXtmgJiGE080GOmh-6M",
  authDomain: "mycharacters-6adff.firebaseapp.com",
  projectId: "mycharacters",
  storageBucket: "mycharacters.appspot.com",
  messagingSenderId: "219354499808",
  appId: "1:219354499808:web:3146a7dc95e47454809e85",
  measurementId: "G-W4X9MJ1W4L"
};
firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
