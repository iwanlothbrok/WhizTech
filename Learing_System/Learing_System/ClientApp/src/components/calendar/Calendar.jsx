// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Button from '@mui/material/Button'; // Import the Button component


export default function Calendar() {
    // const [selectedDate, setSelectedDate] = React.useState(null); // State to store the selected date
    // const [message, setMessage] = React.useState(''); // State to store the success message

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    // const handleOKClick = () => {
    //     // Check if a date is selected before sending to the API
    //     if (selectedDate) {
    //         // Replace 'your-api-endpoint' with your actual API endpoint
    //         fetch('your-api-endpoint', {
    //             method: 'POST',
    //             body: JSON.stringify({ date: selectedDate }),
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     setMessage('Event information sent successfully');
    //                 } else {
    //                     setMessage('Error sending event information');
    //                 }
    //             })
    //             .catch(error => {
    //                 setMessage('Error sending event information');
    //             });
    //     } else {
    //         setMessage('Please select a date before clicking OK');
    //     }
    // };

    // return (
    //     <LocalizationProvider dateAdapter={AdapterDayjs}>
    //         <StaticDatePicker
    //             orientation="landscape"
    //             value={selectedDate}
    //             onChange={handleDateChange}
    //         />
    //         <Button onClick={handleOKClick} variant="contained" color="primary">
    //             OK
    //         </Button>
    //         <p>{message}</p>
    //     </LocalizationProvider>
    // );
    return (
        <div>asd</div>
    )
}
