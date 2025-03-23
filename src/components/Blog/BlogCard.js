import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { CgCalendarDates } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import BlogModal from "./BlogModal";

function BlogCard({ id, title, date, image, excerpt, content, tags }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Card className="blog-card-view">
        <div className="blog-card-img-container">
          <Card.Img variant="top" src={image} alt={title} className="blog-card-img" />
          <div className="blog-card-date">
            <CgCalendarDates className="blog-date-icon" />
            <span>{date}</span>
          </div>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="blog-tags">
            {tags.map((tag, index) => (
              <Badge key={index} pill bg="primary" className="blog-tag">
                {tag}
              </Badge>
            ))}
          </div>
          <Card.Text className="blog-excerpt">{excerpt}</Card.Text>
          <Button 
            variant="primary" 
            onClick={handleShow} 
            className="read-more-btn"
          >
            Read More <FaArrowRight className="read-more-icon" />
          </Button>
        </Card.Body>
      </Card>

      <BlogModal
        show={showModal}
        handleClose={handleClose}
        title={title}
        date={date}
        content={content}
        image={image}
        tags={tags}
      />
    </>
  );
}

export default BlogCard;
