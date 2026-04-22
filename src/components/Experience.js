// src/components/Experience.js

import React from 'react';

const Experience = () => {
    const experiences = [
        {
            techStack: ["JavaScript (ES6+)", "Vue.js", "Node.js", "Vuetify", "Google Maps API"],
            title: "Ocare M (KB헬스케어 하이브리드 앱) · 2023.09 ~ 2024.03",
            description: "네이버 지도 API 및 REST API를 연동하여 사용자 현재 위치 기반 병원·약국 찾기 기능을 개발하였습니다. 간편 본인인증 API를 연동하여 건강검진 결과 조회 기능을 구현하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)", "jQuery", "Google Maps API"],
            title: "Ocare M (KB헬스케어 하이브리드 앱) · 2022.08 ~ 2023.09",
            description: "구글 지도 API 및 REST API를 연동하여 사용자 현재 위치 기반 병원·약국 찾기 기능을 개발하였습니다. 사용자 조건에 맞는 건강검진 예약 병원 검색 기능을 개발하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)", "jQuery", "Java", "ozForm"],
            title: "전자 고용계약서 / 간호부 OCS (강북삼성병원) · 2022.07",
            description: "eForm 솔루션을 연동하여 전자 고용계약서 관리 기능을 유지보수하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)", "jQuery", "Java", "Secure Keypad"],
            title: "하이패스 시스템 (강북삼성병원) · 2022.03 ~ 2022.06",
            description: "결제용 전자 키패드 솔루션을 연동하여 직원 카드 등록 기능을 개발하였습니다."
        },
        {
            techStack: ["WordPress"],
            title: "ZeroonIs 워드프레스 사이트 · 2022.01 ~ 2022.02",
            description: "비즈니스 요구사항에 맞춘 기업 홈페이지를 WordPress로 개발하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)", "jQuery"],
            title: "MindOnCare (강북삼성병원 하이브리드 앱) · 2021.07 ~ 2022.06",
            description: "2주 프로그램용 심리상담 페이지를 개발하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)", "jQuery", "Java", "ozForm"],
            title: "CGM 리포트 (강북삼성병원) · 2021.06 ~ 2021.07",
            description: "ozReport 솔루션을 연동하여 환자별 당뇨 및 만성질환 헬스케어 리포팅 기능을 개발하였습니다."
        },
        {
            techStack: ["JavaScript (ES6+)"],
            title: "Kyci (웹) · 2021.02 ~ 2021.06",
            description: "청소년 스마트폰 중독 코칭 서비스의 회원가입, 로그인, 비밀번호 찾기, 마이페이지 기능을 개발하였습니다."
        }
    ];

    return (
        <div className="container-md">
            <header className="major">
                <h2>Experience</h2>
            </header>
            <div className="career-item">
                <div className="career-title">
                    <h3>웜힐트랩 · 프론트엔드 개발자 · 서울, 대한민국 (2021.02 ~ 2024.04)</h3>

                    {experiences.map((experience, index) => (
                        <li key={index} className="experience-item">
                            <ul>{experience.title}</ul>
                            <ul>{experience.description}</ul>
                            <div className="tech-stack">
                                {experience.techStack.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;