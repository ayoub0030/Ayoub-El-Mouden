import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
// Import project images as placeholders for blog posts
import blogImage1 from "../../Assets/Projects/blog.png";
import blogImage2 from "../../Assets/Projects/leaf.png";
import blogImage3 from "../../Assets/Projects/chatify.png";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with React",
      date: "March 15, 2025",
      image: blogImage1,
      excerpt: "Learn how to build scalable and maintainable web applications using React and modern JavaScript techniques.",
      content: `
        <p>React has become one of the most popular JavaScript libraries for building user interfaces. Its component-based architecture allows developers to create reusable UI elements that can be composed to build complex applications.</p>
        
        <h3>Why React?</h3>
        <p>React's virtual DOM implementation provides excellent performance by minimizing direct manipulation of the DOM. This approach, combined with its unidirectional data flow, makes applications more predictable and easier to debug.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Components:</strong> The building blocks of React applications</li>
          <li><strong>Props:</strong> How data is passed between components</li>
          <li><strong>State:</strong> How components maintain and update their data</li>
          <li><strong>Hooks:</strong> Functions that let you use state and other React features without writing classes</li>
        </ul>
        
        <h3>Best Practices</h3>
        <p>When building React applications, it's important to follow certain best practices:</p>
        <ol>
          <li>Keep components small and focused on a single responsibility</li>
          <li>Use functional components and hooks instead of class components when possible</li>
          <li>Implement proper state management for complex applications</li>
          <li>Write tests for your components to ensure they behave as expected</li>
        </ol>
        
        <p>By following these principles, you can create React applications that are not only performant but also maintainable in the long run.</p>
      `,
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Introduction to Machine Learning for Developers",
      date: "February 28, 2025",
      image: blogImage2,
      excerpt: "Discover how machine learning can enhance your applications and provide more value to your users.",
      content: `
        <p>Machine Learning (ML) is transforming the way we build software. As developers, understanding the basics of ML can open up new possibilities for creating intelligent applications.</p>
        
        <h3>What is Machine Learning?</h3>
        <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. Instead of writing rules, you provide data and the algorithm finds patterns.</p>
        
        <h3>Types of Machine Learning</h3>
        <ul>
          <li><strong>Supervised Learning:</strong> Training on labeled data to make predictions</li>
          <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
          <li><strong>Reinforcement Learning:</strong> Learning through trial and error with rewards</li>
        </ul>
        
        <h3>ML for Web Developers</h3>
        <p>As a web developer, you can integrate ML into your applications in several ways:</p>
        <ol>
          <li>Use pre-trained models through APIs like TensorFlow.js</li>
          <li>Implement recommendation systems for content or products</li>
          <li>Add natural language processing for chatbots or content analysis</li>
          <li>Create image recognition features for your applications</li>
        </ol>
        
        <p>The barrier to entry for ML has never been lower. With libraries like TensorFlow.js, you can run machine learning models directly in the browser, making ML accessible to front-end developers.</p>
      `,
      tags: ["Machine Learning", "AI", "TensorFlow"]
    },
    {
      id: 3,
      title: "The Future of Web Development: What's Next?",
      date: "January 10, 2025",
      image: blogImage3,
      excerpt: "Explore emerging trends and technologies that will shape the future of web development in the coming years.",
      content: `
        <p>The web development landscape is constantly evolving. Staying ahead of the curve requires awareness of emerging trends and technologies that will shape the future of our industry.</p>
        
        <h3>Web Assembly (WASM)</h3>
        <p>Web Assembly allows high-performance applications to run in the browser. It enables languages like C++, Rust, and Go to run on the web, opening up new possibilities for complex applications.</p>
        
        <h3>JAMstack Architecture</h3>
        <p>The JAMstack (JavaScript, APIs, and Markup) approach to building websites focuses on performance, security, and developer experience. By pre-rendering pages and serving them from CDNs, JAMstack sites offer excellent performance and scalability.</p>
        
        <h3>AI-Driven Development</h3>
        <ul>
          <li>AI-assisted coding tools that help developers write better code faster</li>
          <li>Automated testing and bug detection powered by machine learning</li>
          <li>Intelligent design systems that can generate UI components based on requirements</li>
        </ul>
        
        <h3>Edge Computing</h3>
        <p>Moving computation closer to the user with edge functions and CDNs will continue to improve application performance and user experience. Frameworks like Next.js and Remix are already embracing this approach.</p>
        
        <p>As web developers, embracing these technologies and approaches will help us build better, faster, and more user-friendly applications in the future.</p>
      `,
      tags: ["Web Development", "Trends", "Future Tech"]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog Posts </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my recent articles on web development and technology.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogPosts.map((post) => (
            <Col md={4} className="blog-card" key={post.id}>
              <BlogCard
                id={post.id}
                title={post.title}
                date={post.date}
                image={post.image}
                excerpt={post.excerpt}
                content={post.content}
                tags={post.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
