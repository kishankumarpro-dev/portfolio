import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/proj1.png";
import chatify from "../../Assets/Projects/proj2.png";
import bitsOfCode from "../../Assets/Projects/proj3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Streamora"
              description="Streamora is a full-stack video streaming platform built with Spring Boot and React. It supports user authentication, video upload and streaming, social features like likes, comments, and subscriptions, real-time chat and notifications via WebSocket, intelligent search and recommendations, creator analytics, and cloud storage via AWS S3."
              ghLink="https://github.com/kishankumar-dev/Streamora"
              demoLink="https://streaminglive.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NewGen AI"
              description="NewGen AI is an AI-powered chat application built with React.js and Next.js that delivers intelligent, real-time conversations. It features a responsive interface, secure authentication, and seamless AI integration, providing users with fast, interactive, and personalized chat experiences across web platforms."
              ghLink="https://github.com/kishankumar-dev/newgen_ai_Production"
              demoLink="https://newgen-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tomato Leaf Prediction"
              description="Tomato Leaf Disease Prediction is a deep learning application built with FastAPI and React.js that detects and classifies tomato leaf diseases from uploaded images. It provides real-time predictions through a REST API, helping users identify plant diseases quickly and accurately."
              ghLink="https://github.com/kishan-k9/Tomato-Leaf-Prediction/tree/main"
              demoLink="https://tomato-leaf-prediction.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
