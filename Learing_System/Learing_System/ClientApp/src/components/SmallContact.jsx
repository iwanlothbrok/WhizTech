import React from 'react';

export default function SmallContact() {
    return (
        <>
            <h1 className="text-center text-muted">Elegant Contact Form</h1>
            <form className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="input-name"
                            placeholder="Name"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="input-email"
                            placeholder="Email address"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input-subject"
                        placeholder="Subject"
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="input-message"
                        placeholder="Message"
                        rows="5"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    id="input-submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
