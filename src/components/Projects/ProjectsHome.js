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
import rescueLogo from "../../Assets/Projects/RescueAI/rescueLogo.png"
import rescue1 from "../../Assets/Projects/RescueAI/rescue1.png"
import rescue2 from "../../Assets/Projects/RescueAI/rescue2.png"
import rescue3 from "../../Assets/Projects/RescueAI/rescue3.png"




// Additional images for project details
const brightwayAdditional = [brightWay , brightwayTask, brightwayChildTask, brightwayChat];
const eduDeskAdditional = [eduDesk , eduDeskTask, eduDeskChildTask, eduDeskChat];
const rescue = [rescueLogo, rescue1, rescue2, rescue3];
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
              imgPath={eduDesk}
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
              imgPath={rescueLogo}
              isBlog={false}
              title="RescueAI"
              description="RescueAI is an AI-powered voice assistant that optimizes emergency response by managing and prioritizing calls with real-time intelligence."
              fullDescription="RescueAI enhances Morocco’s emergency services by reducing wait times and improving call management through AI-driven automation.
I t detects caller emotions, prioritizes urgent cases, and provides structured incident reports to assist human operators.
With multilingual support in French and English, it ensures accessibility and efficiency in critical situations.
Integrated with telecom systems, RescueAI revolutionizes emergency response, ultimately saving lives. 🚀"
              technologies={["React.js", "JavaScript", "Twilio", "Retell", "Google Maps Geocoding API", "Gemini 2"]}
              features={[
                 "AI-powered voice agent for structured incident reporting",
                "Emotion detection for prioritizing urgent cases",
                "Multilingual support (French & English) for accessibility",
                "Seamless integration with Morocco's telecom infrastructure",
                "Real-time decision support for emergency operators",
                "Optimized call management to reduce response times"
                  ]}
              additionalImages={editorAdditional}
              ghLink="https://github.com/ayoub0030/AiVoiceAgent/blob/main/Readme.md"
              demoLink="https://youtu.be/WhHe-JSVAeQ"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsHome;
