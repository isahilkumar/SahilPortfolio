import projectCoffee from './assets/project_coffee.png';
import projectApi from './assets/project_api.png';
import projectEvent from './assets/project_event.png';
import projectSky from './assets/project_sky.png';

export const portfolioData = {
    name: "Sahil Kumar",
    title: "Full Stack Developer",
    contact: {
        email: "mailsahil1008@gmail.com",
        phone: "+91 6200227362",
        linkedin: "https://www.linkedin.com/in/sahil-k45/",
        github: "https://github.com/isahilkumar",
    },
    skills: {
        languages: ["C++", "JavaScript (ES6+)", "C", "PHP", "Python"],
        frontend: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "Django", "REST APIs"],
        databases: ["MySQL", "MongoDB"],
        tools: ["Git", "GitHub", "Postman", "VS Code"],
        softSkills: ["Problem-Solving", "Team Collaboration", "Adaptability", "Leadership"],
    },
    experience: [
        {
            role: "AI/ML Intern",
            company: "Interpro — AVIAH DAPPED",
            period: "Jun'25 - Aug'25",
            description: [
                "Gaining practical exposure to real-world AI applications under the mentorship of Aviah Dapped.",
                "Supporting IT operations by assisting in system maintenance and troubleshooting technical issues.",
                "Improving digital workflows and demonstrating strong analytical and collaborative skills."
            ],
        }
    ],
    projects: [
        {
            title: "Premium Coffee Shop",
            description: "A visually stunning and highly interactive web application for a modern coffee boutique. Features smooth scroll animations, a dynamic product showcase, and a mobile-first responsive design to provide a premium user experience.",
            tech: ["React.js", "Framer Motion", "Tailwind CSS", "Lucide React"],
            link: "https://coffee-shop-d91b3ljpz-isahilkumars-projects.vercel.app/",
            github: "https://github.com/isahilkumar",
            image: projectCoffee,
        },
        {
            title: "Advanced API Integration",
            description: "A robust backend platform demonstrating sophisticated API orchestration and real-time data synchronization. Features secure endpoint management, automated error handling, and high-performance data transformations for scalable applications.",
            tech: ["Node.js", "Express.js", "REST APIs", "Postman", "MongoDB"],
            link: "https://github.com/isahilkumar/API-Integration/deployments/Production",
            github: "https://github.com/isahilkumar/API-Integration",
            image: projectApi,
        },
        {
            title: "Event Management System",
            description: "A complete Event Management web application where users can join events, request administrators to organize custom events, and track guest participation in real-time. Implemented an email-based invitation system, role-based access control, and secure authentication.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            link: "#",
            github: "https://github.com/isahilkumar/EVENTSAHIL",
            image: projectEvent,
        },
        {
            title: "Sky Livings",
            description: "Designed a room booking platform 'Sky Living' that streamlined exchange, billing, and room booking operations. Utilized modern web technologies and Android integration to build a highly responsive and scalable interface.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
            link: "#",
            github: "https://github.com/isahilkumar",
            image: projectSky,
        },
    ],
    education: [
        {
            degree: "Bachelor of Technology - Computer Science and Engineering",
            institution: "Lovely Professional University",
            period: "2023 - 2027",
            details: "CGPA: 7.8",
        },
        {
            degree: "Intermediate (Percentage: 82%)",
            institution: "AN College Patna",
            period: "2020 - 2022",
        },
    ],
    training: [
        {
            title: "Full Stack Development (React & Node.js)",
            period: "Jul 2023 - Jul 2025",
            description: [
                "Gained comprehensive experience in full-stack development through rigorous training at LPU.",
                "Built a high-performance route-optimization application with dynamic map integration and real-time processing.",
                "Strengthened debugging, performance optimization, and collaboration skills using Agile methodologies."
            ],
        }
    ],
    certifications: {
        link: "https://drive.google.com/drive/folders/1WxGETmhQncE9hFNPda2ybMKkIbWws2Az",
        items: [
            {
                title: "Privacy & Security in Online Social Media",
                issuer: "NPTEL",
                period: "May 2025",
                link: "https://drive.google.com/drive/folders/1WxGETmhQncE9hFNPda2ybMKkIbWws2Az",
            },
            {
                title: "Introduction to Hardware Operating System",
                issuer: "Coursera",
                period: "Apr 2024",
                link: "https://drive.google.com/drive/folders/1WxGETmhQncE9hFNPda2ybMKkIbWws2Az",
            }
        ]
    },
    achievements: [
        {
            title: "DSA Problem Solver",
            description: "Solved 300+ Data Structures and Algorithms problems on LeetCode and GeeksForGeeks (GFG), strengthening analytical and algorithmic thinking skills.",
            link: "https://leetcode.com/u/isahilkumar/",
        }
    ]
};
