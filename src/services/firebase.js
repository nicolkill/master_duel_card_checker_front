import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAnalytics, logEvent } from "firebase/analytics";

const appId = process.env.REACT_APP_FIREBASE_APP_ID || "1:231025591086:web:eb37ff673e579759d8f0bf"
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyB3JduU1Ax_wKlsuDLvvz-V_7qq9ytl3UQ"
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID || "ulistapp-42375"
const messagingSenderId = process.env.REACT_APP_FIREBASE_SENDER_ID || "231025591086"
const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-R3MZ5R29M9"
const vapidKey = process.env.REACT_APP_FIREBASE_PUBLIC_VAPID_KEY || "BEPwhviEC8b1OzN83AI_80ROFNWVNzHljObOr23Wb5wM8O3O4ad1Of_jw4qOKGEg-hdWKzIXSNIN5Iqk1xEXEJA"

const firebaseConfig = {
  appId,
  apiKey,
  projectId,
  measurementId,
  messagingSenderId,
  storageBucket: `${projectId}.appspot.com`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

const getPushToken = async (firstTry = true) => {
  try {
    const currentToken = await getToken(messaging, { vapidKey })
    if (currentToken) {
      return currentToken;
    }
    if (firstTry) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        return getPushToken(false);
      }
    }
    // token not available
  } catch (err) {
    // permissions rejected
  }
  return null;
};

const addOnMessageFunction = (func) => {
  onMessage(messaging, func);
};

const addEvent = (event, metadata = {}) => {
  const sessionMetadata = {};
  logEvent(analytics, event, Object.assign(sessionMetadata, metadata))
};

const registerScreen = (screen) => {
  addEvent("screen_view", {
    firebase_screen: screen,
    firebase_screen_class: screen,
  });
};

const firebase = {
  getPushToken,
  addOnMessageFunction,
  addEvent,
  registerScreen,
};

export default firebase;
