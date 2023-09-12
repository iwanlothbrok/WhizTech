import React from 'react';

const QAComponent = ({ question }) => {
    return (
        <div className="container mt-5 text-white">
            <div className="row">
                <div className="col-md-6">
                    <div className="question" style={{ marginRight: '25px' }}>
                        <h3>Question:</h3>
                        <h2 style={{ marginRight: '25px' }}>Какво представлява програмният език C#?</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="answer">
                        <h3>Answer:</h3>
                        <h4>C# е програмен език, който е разработен в Microsoft от Андерс Хейлсберг през 2000 г. Характерно за него
                            е, че е структурен, мулти-парадигмен, строго-типизиран, декларативен, императивен
                            , функционален, обектно-ориентиран, компонентно-ориентиран програмен език с общо предназначение.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QAComponent;
