import React from 'react';

export default function SmallContact() {
    return (
        <>
            <h1 className="mb-5 text-center">Elegant Contact Form</h1>
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
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-primary py-3 px-5 mt-2 mx-auto"
                        id="input-submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}
