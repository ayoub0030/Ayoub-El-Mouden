import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
// Import project images as placeholders for blog posts
import blogImage1 from "../../Assets/Projects/blog.png";
import blogImage2 from "../../Assets/Projects/leaf.png";
import blogImage3 from "../../Assets/Projects/chatify.png";
import blogImage4 from "../../Assets/Projects/codeEditor.png";

function Blog() {
  const blogPosts = [
    {
      id: 4,
      title: "Aux États-Unis, l'intelligence artificielle remplace déjà les professeurs !",
      date: "March 24, 2025",
      image: blogImage4,
      excerpt: "L'Unbound Academy, une école en ligne qui devrait ouvrir ses portes dans l'État d'Arizona à la rentrée 2025, inquiète la communauté éducative mondiale. Et pour cause : les élèves étudieront les matières de base en utilisant un tuteur d'apprentissage basé sur une IA.",
      content: `
        <p>L'intelligence artificielle s'invite de façon surprenante dans l'État de l'Arizona, où une école devrait être lancée à l'automne. Il s'agit de l'Unbound Academy, dont l'ouverture a été approuvée par le Conseil d'État de l'Arizona en 2024. Avec 250 élèves attendus, du CM1 à la quatrième, l'école donnera la priorité à l'IA dans l'enseignement de la grammaire, des mathématiques, de la lecture… L'ouverture de cette école s'inscrit dans une évolution continue de l'utilisation de l'IA dans les salles de classe américaines.</p>
        
        <p>Mais, bien avant l'apparition des chatbots, les États-Unis nourrissaient déjà, dans les années 1930, le fantasme d'un enseignement automatisé. Un rêve issu du monde des sciences sociales, en particulier du behaviorisme. « Un psychologue américain appartenant à ce mouvement, B.F. Skinner, a inventé des teaching machines qui, en fonction des réponses des élèves, leur faisaient un feedback en vue d'automatiser l'apprentissage. L'idée n'était pas de remplacer les professeurs, mais de rendre accessible l'éducation de manière plus démocratique », rappelle Antoine Amiel, CEO de Learn Assembly.</p>
        
        <h3>Une évolution logique dans le contexte américain</h3>
        <p>L'autre élément à prendre en considération pour expliquer ce phénomène est qu'Outre Atlantique, la recherche d'efficacité, de performance, d'optimisation touche tous les domaines. L'éducation n'y échappe pas. « C'est devenu un dogme. Alors que la réussite scolaire est une conjonction de facteurs psychologiques et socio-économiques, on a parfois tendance à aller au plus simple en estimant que la technologie va résoudre tous les problèmes. Cela est notamment dû aux discours commerciaux d'éditeurs de logiciels », pointe-t-il.</p>
        
        <p>En effet, le marché de l'éducation et de la formation américain est totalement libéralisé. Les acteurs étant en concurrence, des écoles ou des entreprises pourraient être tentées de se passer de professeurs ou de formateurs. « Mais la question qui se pose est de savoir si les parents d'élèves voudront suivre ce mouvement et si l'efficacité pédagogique de ce modèle sera au rendez-vous. Selon moi, ce phénomène restera marginal », nuance Antoine Amiel.</p>
        
        <h3>Des remparts contre ce type d'initiatives en France</h3>
        <p>En France, c'est la prudence, le RGPD et maintenant l'AI Act qui orientent les politiques éducatives et le choix des outils pédagogiques. Le code de l'éducation donne par exemple un cadre pédagogique au sujet de l'accès aux écrans et de l'usage de l'IA générative. On y lit notamment que « à l'issue de l'école primaire et du collège, les élèves reçoivent une attestation, certifiant qu'ils ont bénéficié d'une sensibilisation au bon usage des outils numériques et de l'intelligence artificielle (…) ainsi qu'aux dérives et aux risques liés à ces outils ».</p>
        
        <p>À ce stade, il serait donc impensable que de telles pratiques puissent émerger dans le paysage éducatif français. « Malgré cela, certaines personnes ont tendance à agiter le chiffon rouge en disant que l'IA va remplacer les professeurs. Elles le font pour ne pas faire évoluer leurs propres pratiques, pour ne pas réfléchir aux usages du numérique à l'école. C'est un prétexte de conservatisme », estime Antoine Amiel.</p>
        
        <h3>Pour une IA de renfort</h3>
        <p>Pour autant, la crainte que peut susciter le remplacement des professeurs par l'IA ne doit pas se répercuter sur les apports positifs que celle-ci peut avoir dans l'enseignement. « Aujourd'hui, on sait qu'on a besoin d'adapter les parcours pédagogiques aux particularités des élèves ou des adultes qui se forment. Si l'IA peut permettre de réaliser cet objectif, c'est tant mieux », affirme Antoine Amiel.</p>
        
        <p>Pour lui, les start-up qui sont positionnées sur ce sujet n'ont en aucun cas l'ambition de remplacer les professeurs. « Elles savent très bien que c'est le meilleur moyen de se saborder. Ce qu'elles souhaitent, c'est que l'IA soit un renfort pour les professeurs, qu'elle les aide à avoir plus de proximité avec leurs élèves, à faire du mentorat », dit-il.</p>
        
        <p>En d'autres termes, que le meilleur moyen d'éviter de prendre la trajectoire américaine est de soutenir les EdTech convaincues que l'enseignement doit se baser sur les interactions humaines et la socialisation. « Il faudrait que l'Europe et la France soutiennent leurs acteurs de l'éducation, les fassent émerger, les financent. C'est le seul moyen pour ne pas être dans une situation de dépendance numérique totale aux outils des géants américains », conclut-il.</p>
      `,
      tags: ["IA", "Education", "EdTech", "Enseignement"]
    },
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
        <p>When building React applications, it's essential to follow certain best practices:</p>
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
