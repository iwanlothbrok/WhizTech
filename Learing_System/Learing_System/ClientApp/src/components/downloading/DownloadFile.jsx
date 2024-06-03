// src/components/DownloadFile.js

import React, { useEffect } from 'react';
import file from '../../styles/files/interview.docx';
import js from '../../styles/43.png'
const DownloadFile = () => {
    useEffect(() => {
        const link = document.createElement('a');

        link.href = file;
        link.setAttribute('download', 'top3questions-js.docx'); // Specify the download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    return (
        <>
            <div className='text-center m-5'>
                <h1 className='text-success mt-5'>Файлът се изтегля...<br /> Oчаквайте ТОП 3 задачите, които присъстват на всяка JS интервю  </h1>
                <img src={js} className='w-25 h-25' alt="" /></div>
        </>
    );
};

export default DownloadFile;
