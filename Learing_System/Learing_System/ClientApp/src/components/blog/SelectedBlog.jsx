import React from "react";

export default function SelectedBlog({ selectedBlog, onClose }) {
  if (!selectedBlog) {
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card">
            <img
              src={selectedBlog.imageSrc}
              className="card-img-top"
              alt="Blog Image"
            />
            <div className="card-body">
              <h2 className="card-title">{selectedBlog.title}</h2>
              <p className="card-text">{selectedBlog.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  Date: {selectedBlog.date}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Author: {selectedBlog.author}
                </small>
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
