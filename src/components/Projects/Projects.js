import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";

//3. ecomm
//5. google 2.0
//4. tetris game
//1. tradehunt
//6. nft marketplace
//2. whatsapp clone

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
				<Row
					style={{
						justifyContent: "center",
						paddingBottom: "10px",
					}}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Tradehunt"
							description="Contest hosting platform where users are given virtual money to trade in various assets and rank on leaderboard."
							ghLink="https://github.com/SKundu312/tradehunt-be"
							demoLink="https://play.google.com/store/apps/details?id=com.tradehunt&gl=US"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Whatsapp Clone"
							description="WhatsApp web clone with signup through google authentication and realtime chat functionality through Socket.io."
							ghLink="https://github.com/SKundu312/Whatsapp-Clone"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Ecommerce Website"
							description="E-commerce website with user authentication, cart functionality, payment gateway and admin panel."
							ghLink="https://github.com/SKundu312/Ecommerce-mern"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Tetris"
							description="A responsive ReactJS based web game with score and level functionalities."
							ghLink="https://github.com/SKundu312/Tetris-game"
							demoLink="https://tetris-reactgame.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Google-2.0"
							description="Finds sites, news, images, videos of entered input. Includes Responsive UI and Dark Theme."
							ghLink="https://github.com/SKundu312/Google2.0"
							demoLink="https://google2-0.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="NFT Marketplace"
							description="React-native based mobile app displaying modern UI/UX features."
							ghLink="https://github.com/SKundu312/NFT_ReactNative"
							demoLink="https://expo.dev/@shreya_312/nftApp"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
  );
}

export default Projects;
