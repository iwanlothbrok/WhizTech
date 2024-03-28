import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCkAaumclVywpuX9B1aMBwZ136T7mXRRzk",
    authDomain: "whiztechsystem.firebaseapp.com",
    projectId: "whiztechsystem",
    storageBucket: "whiztechsystem.appspot.com",
    messagingSenderId: "839273473381",
    appId: "1:839273473381:web:9d454fe35e978d5c346d8c"
};


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


const courseSubmitHandle = async () => {
    try {
        const docRef = await addDoc(courseFormsCollection, {
            Name: 'Pepi IWANOW',
            Email: 'peipi@abv.bg',
            Language: 'csharp',
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