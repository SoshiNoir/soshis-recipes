import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCbkLGXx1Sjz1A3LLqVx9E4WvRieVgi2wU',
  authDomain: 'recipe-d819b.firebaseapp.com',
  projectId: 'recipe-d819b',
  storageBucket: 'recipe-d819b.appspot.com',
  messagingSenderId: '187579997700',
  appId: '1:187579997700:web:ccef6225eca1acc3e99f51',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const recipesCollectionRef = collection(db, 'recipes');

export { db, recipesCollectionRef };
