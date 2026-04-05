// ===== DATA =====
const projectsData = [
    {
        id: 1,
        name: 'AI GitHub Profile Analysis System',
        company: 'Personal Project',
        duration: '2026',
        liveUrl: 'https://git-analyzer.streamlit.app/',
        category: 'data',
        featured: true,
        description: 'A data-driven system that analyzes GitHub repositories to uncover developer behavior, code quality signals, and repository health trends.',
        detailedDescription: 'Built an interactive analysis app that studies repositories through code pattern analysis, commit sentiment, developer comparison, and project sustainability indicators. The system is designed to transform raw GitHub activity into meaningful insights about productivity and collaboration.',
        technologies: ['Python', 'Streamlit', 'GitHub Data', 'NLP', 'Sentiment Analysis', 'Data Visualization'],
        achievements: [
            'Implemented code DNA style analysis for repositories',
            'Added commit sentiment analysis for collaboration insights',
            'Created developer comparison workflows and repository health metrics',
            'Published the project as a live portfolio application'
        ]
    },
    {
        id: 2,
        name: 'Resume Matcher: NLP and ML Powered Resume Intelligence System',
        company: 'Personal Project',
        duration: '2026',
        liveUrl: 'https://resume-analyzer-pro-brown.vercel.app/',
        category: 'ai',
        featured: true,
        description: 'An NLP-based system for resume-job matching, candidate comparison, role prediction, and ATS-focused resume improvement.',
        detailedDescription: 'Developed a resume intelligence platform that extracts skills, analyzes keyword relevance, identifies skill gaps, and predicts suitable roles. The product focuses on resume quality, ATS compatibility, and clearer comparison between candidates and job descriptions.',
        technologies: ['Python', 'NLP', 'Machine Learning', 'Resume Parsing', 'Recommendation Logic', 'Vercel'],
        achievements: [
            'Built resume and job description comparison workflows',
            'Generated skill gap analysis and personalized recommendations',
            'Added role prediction and ATS-oriented improvement guidance',
            'Designed the platform as a practical resume intelligence product'
        ]
    },
    {
        id: 3,
        name: 'AI Food Nutrition Analysis Platform',
        company: 'Personal Project',
        duration: '2025',
        liveUrl: 'https://ai-food-nutrition-anylsis-psyy.vercel.app/',
        category: 'data',
        description: 'A nutrition analysis system that evaluates meals and creates personalized health insights using BMI, BMR, and TDEE based calculations.',
        detailedDescription: 'Created a health-focused analytics platform that examines calorie intake, macronutrient balance, and goal-based dietary needs. The application turns food data into personalized guidance that supports everyday wellness decisions.',
        technologies: ['Python', 'Health Analytics', 'BMI', 'BMR', 'TDEE', 'Nutrition Modeling'],
        achievements: [
            'Implemented BMI, BMR, and TDEE based evaluation logic',
            'Generated calorie and macronutrient analysis from meal inputs',
            'Produced goal-based recommendations for healthier decisions',
            'Focused the experience on practical and understandable insights'
        ]
    },
    {
        id: 4,
        name: 'AI Travel Planning Agent',
        company: 'Personal Project',
        duration: '2025',
        liveUrl: 'https://ai-travel-planner-onthego.streamlit.app/',
        category: 'fullstack',
        description: 'An AI-powered travel planning app that creates personalized multi-day itineraries based on budget, travel style, duration, companions, and interests.',
        detailedDescription: 'Built a modular travel planning application using Python and Streamlit with LLM-powered structured outputs through OpenRouter. The system combines recommendation logic with external APIs for images, maps, hotels, and PDF export to deliver an end-to-end AI product experience.',
        technologies: ['Python', 'Streamlit', 'OpenRouter', 'API Integration', 'Maps', 'PDF Export'],
        achievements: [
            'Generated personalized itineraries from multiple user inputs',
            'Integrated LLM outputs with external image and travel data APIs',
            'Added hotel suggestions, maps support, and PDF export',
            'Showcased a modular and deployment-ready AI product workflow'
        ]
    },
    {
        id: 5,
        name: 'Assured Contract Farming System for Stable Market Access',
        company: 'FarmConnect',
        duration: 'Dec 2025 - Feb 2026',
        category: 'fullstack',
        featured: true,
        description: 'A full-stack Android application that connects farmers and buyers for crop listings, price negotiation, contracts, and dispute handling.',
        detailedDescription: 'Built FarmConnect as a native Android marketplace for direct farmer-to-buyer interaction with image-based crop listings, in-app chat, contract management, and a dispute resolution workflow. The system combines a Kotlin Android frontend with a Node.js and TypeScript REST API backend, SQLite data storage, JWT-based authentication, role-based access control, Firebase Cloud Messaging, and secure media uploads.',
        technologies: ['Kotlin', 'Android Studio', 'Node.js', 'TypeScript', 'SQLite', 'JWT', 'Firebase Cloud Messaging', 'REST API'],
        achievements: [
            'Developed a native Kotlin Android app with a modular mobile architecture',
            'Built real-time buyer and farmer communication with push notifications',
            'Implemented JWT authentication and role-based access for Farmers, Buyers, and Admins',
            'Created crop image uploads, contract workflows, and dispute resolution features'
        ]
    },
    {
        id: 6,
        name: 'BookBridge',
        company: 'Android Application',
        duration: 'Jan 2025 - Mar 2025',
        category: 'fullstack',
        description: 'A peer-to-peer book marketplace for buying and selling books with secure login, listings, search filters, and digital access support.',
        detailedDescription: 'Built BookBridge as an Android marketplace that helps users list, discover, and purchase books through a streamlined mobile experience. The app includes secure authentication, searchable listings, filters for easier discovery, and an in-app PDF viewer with download support for digital books.',
        technologies: ['Android', 'Kotlin', 'Authentication', 'Search Filters', 'PDF Viewer', 'Mobile UI'],
        achievements: [
            'Built secure login and user-friendly listing flows for buyers and sellers',
            'Added search and filtering features for faster book discovery',
            'Integrated an in-app PDF viewer for seamless reading experience',
            'Enabled PDF download support for digital book access'
        ]
    },
    {
        id: 7,
        name: 'Expense Tracker Using Python',
        company: 'Personal Project',
        duration: 'Mar 2025 - May 2025',
        category: 'data',
        description: 'A desktop finance tracker for managing expenses, monitoring balances, and visualizing spending patterns.',
        detailedDescription: 'Developed a personal finance application using Tkinter and ttkbootstrap to record expenses, save and load data, and visualize spending through charts. The project focuses on practical budget management with automatic balance updates, theme switching, analytics, and CSV export for reporting.',
        technologies: ['Python', 'Tkinter', 'ttkbootstrap', 'CSV Export', 'Data Visualization', 'Desktop Application'],
        achievements: [
            'Built expense add, save, and load workflows for daily finance tracking',
            'Implemented automatic balance updates for better spending awareness',
            'Added pie-chart analytics to visualize expense distribution',
            'Included theme switching and CSV export for usability and reporting'
        ]
    },
    {
        id: 8,
        name: 'Sudoku Solver Using Java',
        company: 'Academic Project',
        duration: 'Sep 2024 - Nov 2024',
        category: 'fullstack',
        description: 'A Java-based 4x4 Sudoku solver with a Swing interface and backtracking logic for interactive puzzle solving.',
        detailedDescription: 'Created a Sudoku solver that computes valid solutions for 4x4 puzzles using a backtracking algorithm. The project pairs algorithmic problem solving with a Swing-based graphical interface so users can enter values, trigger the solver, and view results interactively.',
        technologies: ['Java', 'Swing', 'Backtracking', 'Algorithms', 'Desktop UI'],
        achievements: [
            'Implemented a backtracking algorithm to solve valid 4x4 Sudoku inputs',
            'Designed a Swing interface for easy user interaction',
            'Displayed computed puzzle results clearly within the UI',
            'Combined algorithm design with practical desktop application development'
        ]
    },
    {
        id: 9,
        name: 'AirWise AQI Website',
        company: 'Web Project',
        duration: 'Aug 2024 - Oct 2025',
        category: 'data',
        description: 'A responsive website that displays real-time air quality and weather insights using live API data.',
        detailedDescription: 'Built AirWise as a real-time AQI and weather dashboard using the OpenWeatherMap API. The website presents live air quality, temperature, humidity, and wind information through a responsive HTML, CSS, and JavaScript interface designed for quick environmental insights.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Responsive Design', 'Weather Data'],
        achievements: [
            'Integrated live AQI and weather data from the OpenWeatherMap API',
            'Displayed temperature, humidity, wind, and air quality insights in one dashboard',
            'Designed a responsive interface for desktop and mobile viewing',
            'Turned raw environmental data into a clear and accessible web experience'
        ]
    }
];

const technicalSkills = [
    { name: 'Python', proficiency: 92, years: 3 },
    { name: 'Java', proficiency: 74, years: 2 },
    { name: 'JavaScript', proficiency: 85, years: 2 },
    { name: 'TypeScript', proficiency: 76, years: 1 },
    { name: 'Node.js', proficiency: 78, years: 1 },
    { name: 'React', proficiency: 82, years: 2 },
    { name: 'Flutter', proficiency: 78, years: 1 },
    { name: 'Kotlin', proficiency: 80, years: 1 },
    { name: 'Android Dev', proficiency: 82, years: 1 },
    { name: 'HTML5', proficiency: 88, years: 3 },
    { name: 'CSS', proficiency: 86, years: 3 },
    { name: 'Flask', proficiency: 76, years: 1 },
    { name: 'Pandas', proficiency: 84, years: 2 },
    { name: 'NumPy', proficiency: 80, years: 2 },
    { name: 'SQLite', proficiency: 75, years: 1 },
    { name: 'Firebase', proficiency: 77, years: 1 },
    { name: 'Power BI', proficiency: 72, years: 1 },
    { name: 'API Integration', proficiency: 82, years: 2 }
];

const businessSkills = [
    'Data Processing',
    'NLP Workflows',
    'Problem Solving',
    'Machine Learning Basics',
    'Resume Intelligence',
    'Developer Profiling',
    'Health Data Evaluation',
    'Comparison Modeling',
    'Insight Generation'
];

const leadershipSkills = [
    { name: 'Problem Solving', proficiency: 95 },
    { name: 'Analytical Thinking', proficiency: 94 },
    { name: 'Communication', proficiency: 88 },
    { name: 'Mentoring', proficiency: 86 },
    { name: 'Workshop Facilitation', proficiency: 84 },
    { name: 'Collaboration', proficiency: 90 },
    { name: 'Initiative', proficiency: 89 },
    { name: 'Adaptability', proficiency: 87 },
    { name: 'Peer Support', proficiency: 85 },
    { name: 'Continuous Learning', proficiency: 97 }
];

const certifications = [
    { name: 'Android App Development', issuer: 'Training Program', date: 'Apr 2025', icon: 'APP', category: 'development', status: 'Completed' },
    { name: 'Prompt Engineering Using AI Tools', issuer: 'be10x', date: 'Jun 2023 - Aug 2023', icon: 'AI', category: 'ai', status: 'Completed' },
    { name: 'Flutter Workshop', issuer: 'Workshop Program', date: 'Jan 2024 - Feb 2025', icon: 'FL', category: 'mobile', status: 'Completed' },
    { name: 'Git and GitHub Workshop', issuer: 'Workshop Program', date: 'Feb 2024 - Mar 2024', icon: 'GIT', category: 'tools', status: 'Completed' },
    { name: 'Google Cloud Study Jam', issuer: 'GDGC DBIT', date: 'Sep 2025 - Oct 2025', icon: 'GCP', category: 'development', status: 'Completed' }
];

const experienceData = [
    {
        id: 'exp1',
        role: 'B.E. in Computer Engineering Student',
        company: 'Don Bosco Institute of Technology',
        duration: 'Aug 2023 - Present',
        location: 'Mumbai, India',
        category: 'technical',
        logo: 'R',
        description: 'Pursuing computer engineering with a growing focus on data-driven systems, intelligent applications, and product-oriented problem solving.',
        keyFocus: [
            'Python based data processing and analysis',
            'NLP and intelligent comparison systems',
            'Frontend and app development using React and Flutter'
        ]
    },
    {
        id: 'exp2',
        role: 'Tech Team Member',
        company: 'College ACM',
        duration: 'Aug 2024 - Aug 2025',
        location: 'Mumbai, India',
        category: 'leadership',
        logo: 'A',
        description: 'Contributed to technical community efforts and helped organize practical learning experiences for fellow students.',
        responsibilities: [
            'Supported ACM tech team initiatives and event execution',
            'Helped conduct Git and GitHub workshops',
            'Assisted with basic frontend workshops covering HTML, CSS, and JavaScript',
            'Encouraged peer learning through hands-on technical support'
        ]
    },
    {
        id: 'exp3',
        role: 'AI Project Developer',
        company: 'Personal Projects',
        duration: '2024 - Present',
        location: 'Mumbai, India',
        category: 'technical',
        logo: 'P',
        description: 'Designed and developed portfolio projects spanning AI tools, mobile apps, analytics systems, desktop utilities, and problem-solving applications.',
        responsibilities: [
            'Built end-to-end applications across web, mobile, and desktop environments',
            'Worked with NLP, analytics, API integration, and algorithmic problem solving',
            'Combined backend logic with user-facing interfaces for practical tools',
            'Focused on turning technical ideas into useful and understandable products'
        ]
    },
    {
        id: 'exp4',
        role: 'Peer Mentor',
        company: 'Student Development Support',
        duration: '2024 - Present',
        location: 'Mumbai, India',
        category: 'leadership',
        logo: 'M',
        description: 'Helped juniors with development projects and contributed to a collaborative learning environment.',
        responsibilities: [
            'Guided juniors while they worked on development projects',
            'Shared practical advice on implementation and debugging',
            'Encouraged structured problem solving and cleaner execution',
            'Supported peers through teamwork and technical discussion'
        ]
    },
    {
        id: 'exp5',
        role: 'Participant',
        company: 'Smart India Hackathon',
        duration: 'Aug 2024 - Oct 2024',
        location: 'India',
        category: 'technical',
        logo: 'S',
        description: 'Participated in a competitive innovation environment centered on practical problem solving and product thinking.',
        responsibilities: [
            'Collaborated on solving real-world problems within a hackathon setting',
            'Applied analytical thinking under time constraints',
            'Contributed to ideation, planning, and solution development',
            'Strengthened rapid prototyping and teamwork skills'
        ]
    }
];

// ===== NAVIGATION =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateToPage(page);
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    if (logo) {
        logo.addEventListener('click', () => {
            navigateToPage('home');
        });
    }
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

function navigateToPage(pageName) {
    const overlay = document.querySelector('.page-transition-overlay');
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Show transition overlay
    overlay.classList.add('active');
    
    setTimeout(() => {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show target page
        const targetPage = document.getElementById(`page-${pageName}`);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });
        
        // Hide transition overlay
        setTimeout(() => {
            overlay.classList.remove('active');
        }, 100);
        
        // Initialize page-specific features
        initializePage(pageName);
    }, 200);
}

function initializePage(pageName) {
    switch(pageName) {
        case 'home':
            animateCounters();
            break;
        case 'projects':
            loadProjects();
            break;
        case 'skills':
            loadSkills();
            break;
        case 'certifications':
            loadCertifications();
            animateCertCounters();
            break;
        case 'experience':
            initExperienceHub();
            break;
    }
}

// ===== HOME PAGE =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== PROJECTS PAGE =====
function loadProjects() {
    const projectsDisplay = document.getElementById('projects-display');
    const viewBtns = document.querySelectorAll('.view-btn');
    const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
    
    let currentView = 'grid';
    let currentFilter = 'all';
    
    function renderProjects() {
        const filteredProjects = currentFilter === 'all' 
            ? projectsData 
            : projectsData.filter(p => p.category === currentFilter);
        
        projectsDisplay.innerHTML = '';
        
        filteredProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = `project-card ${project.featured ? 'featured' : ''}`;
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                ${project.featured ? '<span class="project-badge">Featured</span>' : ''}
                <h3>${project.name}</h3>
                <p class="project-meta">${project.company} | ${project.duration}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.slice(0, 5).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <button class="project-btn" data-id="${project.id}">View Details</button>
                    ${project.liveUrl ? `<a class="project-btn project-link-btn" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
                </div>
            `;
            
            projectsDisplay.appendChild(card);
        });
        
        // Add click handlers for detail buttons
        document.querySelectorAll('.project-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = parseInt(e.target.getAttribute('data-id'));
                showProjectModal(projectId);
            });
        });
    }
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.getAttribute('data-view');
            
            projectsDisplay.className = `projects-grid view-${currentView}`;
        });
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });
    
    renderProjects();
}

function showProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <h2>${project.name}</h2>
        <p class="project-meta">${project.company} | ${project.duration}</p>
        ${project.featured ? '<span class="project-badge">Featured Project</span>' : ''}
        
        <h3 style="color: var(--gold); margin-top: 2rem;">Overview</h3>
        <p style="color: var(--light-gray); line-height: 1.8; margin-bottom: 1.5rem;">${project.detailedDescription || project.description}</p>
        
        ${project.teamSize ? `<p style="color: var(--light-gray);"><strong style="color: var(--gold);">Team Size:</strong> ${project.teamSize} members</p>` : ''}
        ${project.durationYears ? `<p style="color: var(--light-gray);"><strong style="color: var(--gold);">Duration:</strong> ${project.durationYears} years</p>` : ''}
        
        ${project.achievements ? `
            <h3 style="color: var(--gold); margin-top: 2rem;">Key Achievements</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.achievements.map(achievement => `
                    <li style="padding: 0.5rem 0; padding-left: 2rem; position: relative; color: var(--light-gray);">
                        <span style="position: absolute; left: 0; color: var(--gold);">▹</span>
                        ${achievement}
                    </li>
                `).join('')}
            </ul>
        ` : ''}
        
        <h3 style="color: var(--gold); margin-top: 2rem;">Technologies Used</h3>
        <div class="project-tech" style="margin-top: 1rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        ${project.liveUrl ? `
            <div class="project-actions" style="margin-top: 1.5rem;">
                <a class="project-btn project-link-btn" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Open Live Project</a>
            </div>
        ` : ''}
    `;
    
    modal.classList.add('active');
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = () => modal.classList.remove('active');
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// ===== SKILLS PAGE =====
function loadSkills() {
    loadTechnicalSkills();
    loadBusinessSkills();
    loadLeadershipSkills();
    loadSkillsMatrix();
}

function loadTechnicalSkills() {
    const container = document.getElementById('technical-skills');
    container.innerHTML = '';
    
    technicalSkills.forEach((skill, index) => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.style.animationDelay = `${index * 0.05}s`;
        
        skillBar.innerHTML = `
            <div class="skill-bar-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-value">${skill.proficiency}%</span>
            </div>
            <div class="skill-bar-track">
                <div class="skill-bar-fill" style="width: ${skill.proficiency}%"></div>
            </div>
        `;
        
        container.appendChild(skillBar);
    });
}

function loadBusinessSkills() {
    const container = document.getElementById('business-skills');
    container.innerHTML = '';
    
    businessSkills.forEach((skill, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'skill-bubble';
        bubble.textContent = skill;
        bubble.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(bubble);
    });
}

function loadLeadershipSkills() {
    const container = document.getElementById('leadership-skills');
    container.innerHTML = '';
    
    leadershipSkills.forEach((skill, index) => {
        const circle = document.createElement('div');
        circle.className = 'skill-circle';
        circle.style.animationDelay = `${index * 0.05}s`;
        
        circle.innerHTML = `
            <div class="skill-circle-name">${skill.name}</div>
            <div class="skill-circle-value">${skill.proficiency}%</div>
        `;
        
        container.appendChild(circle);
    });
}

function loadSkillsMatrix() {
    const container = document.getElementById('skills-matrix');
    container.innerHTML = '';
    
    const skills = ['Python', 'Kotlin', 'Android', 'Node.js', 'TypeScript', 'SQLite', 'Firebase', 'React', 'APIs', 'AI'];
    
    skills.forEach((skill, index) => {
        const cell = document.createElement('div');
        cell.className = 'matrix-cell';
        cell.textContent = skill;
        cell.style.animationDelay = `${index * 0.05}s`;
        container.appendChild(cell);
    });
}

// ===== CERTIFICATIONS PAGE =====
function loadCertifications() {
    const wall = document.getElementById('certifications-wall');
    const categoryBtns = document.querySelectorAll('.cert-cat-btn');
    
    let currentCategory = 'all';
    
    function renderCertifications() {
        const filtered = currentCategory === 'all' 
            ? certifications 
            : certifications.filter(c => c.category === currentCategory);
        
        wall.innerHTML = '';
        
        filtered.forEach((cert, index) => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            card.style.animationDelay = `${index * 0.05}s`;
            
            card.innerHTML = `
                <span class="cert-status">${cert.status}</span>
                <span class="cert-icon">${cert.icon}</span>
                <h4>${cert.name}</h4>
                <p class="cert-issuer">${cert.issuer}</p>
                <p class="cert-date">${cert.date}</p>
            `;
            
            wall.appendChild(card);
        });
    }
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderCertifications();
        });
    });
    
    renderCertifications();
}

function animateCertCounters() {
    const counters = document.querySelectorAll('.cert-stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== EXPERIENCE HUB =====
function initExperienceHub() {
    const cards = document.querySelectorAll('.experience-card');
    const filterBtns = document.querySelectorAll('.experience-filters .filter-btn');
    
    // Show first experience by default
    if (cards.length > 0) {
        showExperienceDetail(experienceData[0]);
        cards[0].classList.add('active');
    }
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            const expId = card.getAttribute('data-id');
            const exp = experienceData.find(e => e.id === expId);
            if (exp) {
                showExperienceDetail(exp);
            }
        });
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else if (filter === 'current' && card.classList.contains('current')) {
                    card.style.display = 'block';
                } else if (filter === 'current') {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function showExperienceDetail(exp) {
    const detailContainer = document.getElementById('exp-detail');
    
    const responsibilities = exp.responsibilities || exp.keyFocus || [];
    
    detailContainer.innerHTML = `
        <div class="exp-detail-content">
            <div class="exp-header">
                <div class="exp-company-logo">${exp.logo}</div>
                <div class="exp-header-text">
                    <h3>${exp.role}</h3>
                    <p class="exp-company-name">${exp.company}</p>
                    <p class="exp-meta">${exp.duration} | ${exp.location}</p>
                </div>
            </div>
            <div class="exp-description">
                <p>${exp.description}</p>
            </div>
            ${responsibilities.length > 0 ? `
                <div class="exp-impact">
                    <h4>${exp.keyFocus ? 'Key Focus Areas' : 'Key Responsibilities'}</h4>
                    <ul>
                        ${responsibilities.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    const templateBtns = document.querySelectorAll('.template-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Ratan will get back to you soon.');
        form.reset();
    });
    
    templateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const template = btn.getAttribute('data-template');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            switch(template) {
                case 'collaboration':
                    subjectInput.value = 'Project Collaboration';
                    messageInput.value = 'Hi Ratan, I would like to discuss a project collaboration opportunity with you...';
                    break;
                case 'consulting':
                    subjectInput.value = 'Internship Opportunity';
                    messageInput.value = 'Hello Ratan, I would like to connect with you regarding an internship or project opportunity...';
                    break;
                case 'speaking':
                    subjectInput.value = 'Workshop or Networking';
                    messageInput.value = 'Hi Ratan, I would like to invite you for a workshop, session, or networking conversation...';
                    break;
            }
        });
    });
}

// ===== CHAT ASSISTANT =====
function initChatAssistant() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const quickBtns = document.querySelectorAll('.quick-btn');
    const minimizeBtn = document.querySelector('.chat-minimize');
    
    chatToggle.addEventListener('click', () => {
        chatToggle.classList.toggle('active');
        chatWindow.classList.toggle('active');
    });
    
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            chatToggle.classList.remove('active');
            chatWindow.classList.remove('active');
        });
    }
    
    function addMessage(text, isBot = true) {
        const message = document.createElement('div');
        message.className = `chat-message ${isBot ? 'bot' : 'user'}`;
        
        message.innerHTML = `
            <div class="message-avatar">${isBot ? 'AI' : 'You'}</div>
            <div class="message-content">${text}</div>
        `;
        
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getResponse(question) {
        const responses = {
            leadership: "Ratan has contributed beyond coursework through ACM involvement and peer mentoring. He helped conduct Git, GitHub, HTML, CSS, and JavaScript workshops, supported juniors with development projects, and built a collaborative reputation through hands-on technical guidance.",
            technical: "Ratan's strongest areas include Python, JavaScript, React, Flutter, HTML, CSS, Flask, Pandas, NumPy, Power BI, and API integration. He is especially interested in building data-driven systems and AI applications that combine analysis, comparison logic, and useful user experiences.",
            projects: "Ratan has built a diverse set of portfolio projects across AI, analytics, mobile apps, and full-stack development. His work includes a GitHub profile analysis system, resume matcher, food nutrition platform, travel planning agent, contract farming app, book marketplace, expense tracker, Sudoku solver, and an AQI dashboard.",
            roles: "Ratan is exploring internships and entry-level opportunities where he can apply AI, data analysis, Python development, and product-building skills. Strong-fit directions include data analyst, AI and ML focused developer, Python developer, and software roles involving intelligent systems."
        };
        
        return responses[question] || "Ratan is a computer engineering student focused on AI, analytics, and practical software products. Feel free to ask about his projects, technical strengths, certifications, ACM involvement, or the kinds of roles he is exploring.";
    }
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            addMessage(btn.textContent, false);
            setTimeout(() => {
                addMessage(getResponse(question), true);
            }, 500);
        });
    });
    
    function sendMessage() {
        const text = chatInput.value.trim();
        if (text) {
            addMessage(text, false);
            chatInput.value = '';
            
            setTimeout(() => {
                const response = getResponse('');
                addMessage(response, true);
            }, 500);
        }
    }
    
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// ===== CTA BUTTONS =====
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
            }
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initChatAssistant();
    initContactForm();
    initCTAButtons();
    animateCounters();
});
