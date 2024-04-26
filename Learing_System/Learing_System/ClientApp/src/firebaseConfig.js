import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

require('dotenv').config()


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log(firebaseConfig);
// Initialize Firestore
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const contactFormsCollection = collection(db, 'contactForms');
const courseFormsCollection = collection(db, 'courseForms');

// function for submit
const contactSubmitHandle = async (formData) => {

    try {
        const docRef = await addDoc(contactFormsCollection, {
            FullName: formData.FullName,
            Email: formData.Email,
            PhoneNumber: formData.PhoneNumber,
            Description: formData.Description,
        });
        // Handle success or show a success message to the user
        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        // Handle errors, show an error message, or log them
        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};


const courseSubmitHandle = async (formData) => {
    try {
        const docRef = await addDoc(courseFormsCollection, {
            Name: formData.FullName,
            Email: formData.Email,
            Language: formData.Language,
        });
        // Handle success or show a success message to the user
        console.log('Form submitted successfully!');

        return { success: true, message: 'Form submitted successfully' };
    } catch (error) {
        // Handle errors, show an error message, or log them
        console.error('Error submitting form:', error);
        return { success: false, message: 'Form submission failed' };
    }
};


export { contactSubmitHandle, courseSubmitHandle };