import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_KEY
};


// Initialize Firestore
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const contactFormsCollection = collection(db, 'contactForms');
// function for submit
const contactSubmitHandle = async (formData) => {
    console.log('before');
    console.log(formData);
    try {
        console.log('up');
        // Add the form data as a new document in the "contactForms" collection
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

export { contactSubmitHandle };