import React from "react";
import "./View.css";

function View() {
  const answers = [
    "I would build a floating city that serves as a sustainable utopia, complete with advanced technology and eco-friendly infrastructure, fostering innovation and harmony.",
    "Establishing a research institute focused on exploring space, unraveling the mysteries of the universe, and advancing space travel technology to make interplanetary colonization a reality.",
    "Funding global initiatives to eradicate poverty and hunger, investing in education, healthcare, and sustainable agriculture to create a world where everyone has equal opportunities.",
    "Creating an immersive virtual reality platform that revolutionizes education, allowing people worldwide to access high-quality learning experiences regardless of their physical location or economic status.",
    "Launching an ambitious project to preserve and restore endangered ecosystems, protecting biodiversity and addressing climate change through cutting-edge conservation efforts.",
    "Establishing a network of innovation hubs, providing resources and support for aspiring entrepreneurs to bring their groundbreaking ideas to life and drive economic growth globally.",
    "Building state-of-the-art medical research facilities focused on finding cures for incurable diseases, promoting health and well-being for all by pushing the boundaries of medical science.",
    "Investing in renewable energy projects on a global scale, accelerating the transition to a carbon-neutral world and combating climate change through sustainable energy solutions.",
    "Constructing a comprehensive space exploration program that aims to send humans to explore distant planets and celestial bodies, pushing the boundaries of human achievement in space travel.",
    "Establishing a network of art and cultural centers, supporting artists and creators from diverse backgrounds to foster cultural exchange and appreciation on a global scale.",
    "Creating a global initiative to provide clean water and sanitation to underserved communities, tackling water scarcity and promoting public health in regions facing critical challenges.",
    "Launching a groundbreaking initiative to develop advanced artificial intelligence for the betterment of society, addressing complex issues and enhancing efficiency across various sectors.",
    "Investing in sustainable agriculture and innovative farming practices to ensure food security for the growing global population while minimizing environmental impact and promoting biodiversity.",
    "Establishing a comprehensive mental health foundation, destigmatizing mental health issues, and providing accessible resources and support for individuals facing mental health challenges.",
    "Creating a global network of advanced research centers dedicated to understanding and addressing the impacts of emerging technologies on society, ensuring responsible and ethical development.",
    "Building a cutting-edge renewable energy infrastructure in developing countries, empowering communities with clean and reliable energy sources to drive economic growth and improve living standards.",
    "Establishing a space tourism program that offers affordable and accessible opportunities for people worldwide to experience space travel, fostering a new era of space exploration for civilians.",
    "Launching a large-scale initiative to clean up and protect the world's oceans, combating plastic pollution, preserving marine ecosystems, and promoting sustainable fisheries and aquaculture.",
    "Creating a global initiative to address education inequality, providing access to quality education for disadvantaged communities through the development of digital learning platforms and educational resources.",
    "Establishing a foundation for the advancement of renewable energy storage technologies, accelerating the transition to a fully sustainable energy grid and reducing dependence on fossil fuels.",
  ];

  return (
    <div className="viewMain">
      {answers.map((answer) => {
        return (
          <div className="card">
            {answer}
          </div>
        );
      })}
    </div>
  );
}

export default View;
