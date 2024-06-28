// File: ThankYouPayment.jsx

import React from 'react';

const ThankYouPayment = () => {
    return (
        <div style={styles.container}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Checkmark_green.svg/1200px-Checkmark_green.svg.png" alt="Checkmark" style={styles.image} />
            <h1 className='fw-bold' style={styles.header}>Успешно записване!</h1>
            <p style={styles.text}>
                Благодарим Ви за вашето записване за курса "Първи стъпки в програмирането". Плащането премина успешно.
            </p>
            <p style={styles.text}>
                Ще получите допълнителна информация и следващи стъпки в рамките на следващите 24 часа.
            </p>
            <p style={styles.text}>
                Още веднъж благодарим и очакваме с нетърпение да започнем нашето пътуване в света на кодирането!
            </p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        backgroundColor: '#1d3557', // Dark blue background for better contrast
        color: '#fff', // White text color
    },
    image: {
        width: '150px',
        height: '150px',
        marginBottom: '20px',
    },
    header: {
        fontSize: '2.5em',
        color: '#f4a261', // Accent color for the header
        marginBottom: '20px',
    },
    text: {
        fontSize: '1.3em',
        marginBottom: '15px',
        textAlign: 'center',
        maxWidth: '600px', // Limiting text width for better readability
        lineHeight: '1.5', // Improved line spacing for readability
    },
};

export default ThankYouPayment;
