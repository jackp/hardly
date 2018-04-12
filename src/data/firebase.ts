import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "config/firebase";

// Initialize Firebase
firebase.initializeApp(config);

// Initialize and export Firebase modules
export const auth = firebase.auth();
export const db = firebase.firestore();
