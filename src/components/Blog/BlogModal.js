import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { CgCalendarDates } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";

function BlogModal({ show, handleClose, title, date, content, image, tags }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="blog-modal"
    >
      <Modal.Header className="blog-modal-header">
        <Button 
          variant="link" 
          onClick={handleClose} 
          className="blog-modal-close"
        >
          <FaTimes />
        </Button>
      </Modal.Header>
      <Modal.Body className="blog-modal-body">
        <div className="blog-modal-image-container">
          <img src={image} alt={title} className="blog-modal-image" />
        </div>
        <div className="blog-modal-content">
          <div className="blog-modal-meta">
            <div className="blog-modal-date">
              <CgCalendarDates className="blog-date-icon" />
              <span>{date}</span>
            </div>
            <div className="blog-modal-tags">
              {tags.map((tag, index) => (
                <Badge key={index} pill bg="primary" className="blog-tag">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <h2 className="blog-modal-title">{title}</h2>
          <div 
            className="blog-modal-text"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BlogModal;
