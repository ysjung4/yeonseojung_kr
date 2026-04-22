// src/components/Projects.js

import React from 'react';

const Projects = () => {
    const projects = [
        {
            techStack: ["React", "JavaScript (ES6+)", "HTML", "CSS", "NHS API", "Google Maps API"],
            path: '/images/screenshoot5.png',
            link: "https://findnhshospital.netlify.app/",
            title: "HealthMate",
            description: "NHS Open API를 활용하여 사용자 위치 기반 의료 서비스 검색 기능을 제공하는 헬스케어 앱을 개발하였습니다."
        },
        {
            techStack: ["React", "JavaScript (ES6+)", "HTML", "CSS", "Fake Store API"],
            path: '/images/store.png',
            link: "https://stockmanaging.netlify.app/",
            title: "VirtuMall",
            description: "오픈 API를 활용하여 실제 쇼핑 환경과 유사한 이커머스 플랫폼을 개발하였습니다."
        },
        {
            techStack: ["React", "JavaScript (ES6+)", "HTML", "CSS"],
            path: '/images/screenshoot3.png',
            link: "https://gamjaworld.netlify.app",
            title: "Gamja's World",
            description: "반려동물 감자의 팬사이트를 개발하였습니다."
        }
    ];

    return (
        <div className="projects_container-md">
            <header className="major">
                <h2>Side Projects</h2>
            </header>

            <div className="projects-item">
                {projects.map((projects, index) => (
                    <article key={index} className="projects2-item">
                        <div className="projects_content">
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <div className="tech-stack">
                                {projects.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={projects.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={projects.path}
                                    alt={projects.title}
                                    className="experience-image"
                                />
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Projects;