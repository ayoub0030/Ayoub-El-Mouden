import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import brightWay from "../../Assets/Projects/brightWay-child-profiles-Crud.png"
import brightwayTask from "../../Assets/Projects/brightWayTask.png"
import brightwayChildTask from "../../Assets/Projects/brightWayChildTask.png"
import brightwayChat from "../../Assets/Projects/brightWayChat.png"
import eduDesk from "../../Assets/Projects/eduDesk/eduDesk.png"
import eduDeskTask from "../../Assets/Projects/eduDesk/eduDeskTask.png"
import eduDeskChildTask from "../../Assets/Projects/eduDesk/eduDeskChildTask.png"
import eduDeskChat from "../../Assets/Projects/eduDesk/eduDeskChat.png"






// Additional images for project details
const brightwayAdditional = [brightWay , brightwayTask, brightwayChildTask, brightwayChat];
const eduDeskAdditional = [eduDesk , eduDeskTask, eduDeskChildTask, eduDeskChat];
const leafAdditional = [leaf, chatify, bitsOfCode];
const blogAdditional = [bitsOfCode, chatify, leaf];
const editorAdditional = [editor, chatify, bitsOfCode];

function ProjectsHome() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Recent Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BrightPath"
              description="BrightPath is a playful, kid-focused task manager that keeps children motivated and organized, while parents create tasks, set deadlines, reward achievements, and see real-time progress or get alerts if anything goes wrong."
              fullDescription="BrightPath is a playful, kid-focused task manager that keeps children motivated and organized, while parents create tasks, set deadlines, reward achievements, and see real-time progress or get alerts if anything goes wrong."
              technologies={["React.js", "Material-UI", "Supabase", "gemini-1.5-pro", "Authentication", "ScreenPipe"]}
              features={[
                "Task Creation & Scheduling with customizable deadlines",
                "Real-Time Monitoring & Progress Tracking for parents",
                "Interactive Kid Interface with engaging visuals",
                "Reward System & Gamification for motivation",
                "Notifications & Reminders for both parents and kids",
                "Detailed Analytics & Insights for performance tracking"
            ]}
            
              additionalImages={brightwayAdditional}
              ghLink="https://github.com/ayoub0030/parentale-assistante"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="edu-Desk"
              description="EduDesk is a monitoring solution for schools computers , ensuring digital security and academic integrity. It detects threats, prevents cheating, and tracks student engagement—all while keeping data private and secure."
              fullDescription="EduDesk is an on-premise monitoring solution designed to enhance digital security and uphold academic integrity in educational institutions. By analyzing screen and audio activity in real time, it detects security threats, prevents cheating during exams, and tracks student engagement. Unlike cloud-based solutions, EduDesk processes all data locally, ensuring complete privacy and compliance with strict data protection standards. With seamless integration into existing school IT infrastructure and an intuitive dashboard for real-time insights, EduDesk provides a reliable and efficient way to create a safe and fair digital learning environment."
              technologies={["Next.js", "Tailwind CSS", "Markdown", "React", "Vercel"]}
              features={[
                "Real-time security threat detection and alerts",
                "Academic integrity enforcement during exams",
                "Student engagement tracking for educators",
                "Local data processing for privacy and security",
                "Intuitive dashboard with real-time insights and visual analytics",
                "Automatic malware detection and prevention",
                "Behavior analysis to identify potential cheating activities"
              ]}
              
              additionalImages={eduDeskAdditional}
              ghLink="https://github.com/ayoub0030/eduDesk"
              demoLink="https://blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview."
              fullDescription="Editor.io is a versatile online code and markdown editor that supports a wide range of features for developers and writers. Built with React.js, it offers a seamless coding experience with instant previews, syntax highlighting, and support for HTML, CSS, and JavaScript. The markdown editor includes features like GFM support, custom HTML tags, and a toolbar for easy formatting."
              technologies={["React.js", "JavaScript", "HTML", "CSS", "Markdown", "GFM"]}
              features={[
                "Online code editor with instant preview",
                "Support for HTML, CSS, and JavaScript",
                "Markdown editor with GFM support",
                "Custom HTML tags and toolbar",
                "Syntax highlighting and code completion",
                "Responsive design for mobile and desktop"
              ]}
              additionalImages={editorAdditional}
              ghLink="https://github.com/ayoub0030/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsHome;
