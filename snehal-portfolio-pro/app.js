// ===== DATA =====
const projectsData = [
    {
        id: 1,
        name: 'LP Bridge - GE Corporate',
        company: 'Capgemini',
        duration: 'Aug 2021 - Dec 2024',
        category: 'enterprise',
        featured: true,
        description: 'Leadership Programs Bridge facilitating operational management of leadership programs at General Electric across HR systems. Led team of 6 engineers, managing organizational rotations, work assignments, and graduations for GE Healthcare, Aerospace, and Vernova.',
        detailedDescription: 'A comprehensive Spring-based application managing organizational rotations, work assignments, location transfers, and graduations for General Electric employees across multiple business units. Integrated with Workday, GMS, HR3 APIs, and Tableau through APIGEE Gateway.',
        technologies: ['Spring MVC', 'Spring Cloud', 'Spring Security', 'Oracle SQL', 'Amazon RDS', 'REST APIs', 'SOAP', 'Tableau', 'APIGEE Gateway', 'Workday Integration'],
        achievements: [
            'Led team of 6 junior software engineers',
            'Improved user experience and business process effectiveness',
            'Enhanced application features and optimized performance',
            'Gathered requirements, conducted analysis, and managed releases',
            'Reduced processing time by 40%',
            'Improved system reliability from 95% to 99.5% uptime'
        ],
        teamSize: 6,
        durationYears: 3.4
    },
    {
        id: 2,
        name: 'Cymmetri - Single Sign On',
        company: 'Capgemini',
        duration: 'Sep 2019 - Jul 2021',
        category: 'enterprise',
        description: 'Java-based framework for single sign-on portal integrating authentication between applications on multiple networks and cloud-based services.',
        detailedDescription: 'Developed a comprehensive SSO framework using Java and Spring technologies to integrate authentication across multiple networks and cloud services, supporting SAML, OAuth, and custom API implementations.',
        technologies: ['Java', 'SpringMVC', 'SpringJPA', 'JBoss Module Framework', 'SAML', 'OAuth', 'Microservices'],
        achievements: [
            'Integrated SAML, OAuth, and custom APIs',
            'Implemented Social SSO services',
            'Developed identity management connectors',
            'Created microservice for Segregation of Duties',
            'Reduced authentication failures by 60%',
            'Supported 50+ integrated applications'
        ],
        teamSize: 4,
        durationYears: 1.8
    },
    {
        id: 3,
        name: 'ECM Workflow System',
        company: 'Capgemini',
        duration: 'Jun 2018 - Aug 2019',
        category: 'enterprise',
        description: 'Enterprise Content Management Java Application managing document approval workflows and business processes for BSE India.',
        detailedDescription: 'Complete ECM solution using Spring MVC and Activiti BPM engine for managing document approvals and business processes at BSE India, with custom MIS reporting and external system integrations.',
        technologies: ['Java', 'Spring MVC', 'Activiti BPM', 'API Development', 'MIS Reporting'],
        achievements: [
            'Designed and developed workflows',
            'Created MIS and Reports Management customizations',
            'Developed API integrations',
            'Managed complex business process automation',
            'Processed 100,000+ documents annually'
        ],
        durationYears: 1.2
    },
    {
        id: 4,
        name: 'AMAZE - iMobile Analytics',
        company: 'Capgemini',
        duration: 'Dec 2017 - May 2018',
        category: 'enterprise',
        description: 'Analytics platform providing API layer over MongoDB sharded cluster for discovering trends on financial data for ICICI bank customers.',
        technologies: ['Java', 'MongoDB', 'Sharded Clusters', 'API Design', 'Analytics'],
        achievements: [
            'Architected MongoDB layer',
            'Designed advanced query aggregations',
            'Defined API provisioning framework',
            'Analyzed 1M+ financial transactions'
        ],
        durationYears: 0.4
    },
    {
        id: 5,
        name: 'Vulnerability and System Monitoring',
        company: 'Unotech Software',
        duration: 'Nov 2017 - Dec 2017',
        category: 'opensource',
        description: 'Security monitoring system integrating ELK stack, Fluentd, Nagios, and OCSNg for identifying vulnerabilities and aggregating system logs.',
        technologies: ['ELK Stack', 'Golang', 'Fluentd', 'Nagios', 'Kibana'],
        achievements: [
            'Designed ELK stack integration architecture',
            'Developed Golang vulnerability comparison application',
            'Created security dashboards in Kibana',
            'Identified 500+ critical vulnerabilities'
        ],
        durationYears: 0.1
    },
    {
        id: 6,
        name: 'Hydra - Middleware',
        company: 'Unotech Software',
        duration: 'Aug 2017 - Oct 2017',
        category: 'opensource',
        description: 'Golang-based middleware interfacing with multiple open-source applications including Service Desk, Rundeck, GLPI, and access control systems.',
        technologies: ['Golang', 'JSON Configuration', 'API Design', 'Microservices'],
        achievements: [
            'Developed API handlers and routing system',
            'Built Hydra-Monitor service',
            'Implemented dynamic UI with JSON configuration'
        ],
        durationYears: 0.2
    },
    {
        id: 7,
        name: 'Food and Recipe Suggestion System',
        company: 'D.Y. Patil University',
        duration: 'Aug 2016 - Mar 2017',
        category: 'academic',
        description: 'Recommendation system to suggest recipes based on user preferences and health goals with allergic ingredient alerts.',
        technologies: ['HTML5', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
        achievements: [
            'Implemented content-based filtering',
            'Solved cold-start problem',
            'Developed nutrition checking algorithms'
        ]
    },
    {
        id: 8,
        name: 'Online Songs Portal - Soul Strings',
        company: 'D.Y. Patil University',
        duration: 'Sep 2015 - Oct 2015',
        category: 'academic',
        description: 'Music portal enabling users to explore songs, albums, lyrics, and artist information.',
        technologies: ['HTML5', 'JavaScript', 'CSS', 'PHP', 'MySQL']
    },
    {
        id: 9,
        name: 'Multi-client Chat Application',
        company: 'D.Y. Patil University',
        duration: 'Mar 2015 - Apr 2015',
        category: 'academic',
        description: 'Real-time chat application supporting multiple simultaneous conversations with dynamic user management.',
        technologies: ['Java', 'Socket Programming']
    }
];

const technicalSkills = [
    { name: 'Java', proficiency: 95, years: 9 },
    { name: 'Spring Framework', proficiency: 95, years: 8 },
    { name: 'SQL', proficiency: 90, years: 8 },
    { name: 'Spring Security', proficiency: 90, years: 6 },
    { name: 'REST APIs', proficiency: 90, years: 7 },
    { name: 'Spring Boot', proficiency: 85, years: 5 },
    { name: 'Spring Cloud', proficiency: 85, years: 5 },
    { name: 'Docker', proficiency: 85, years: 4 },
    { name: 'Oracle Database', proficiency: 85, years: 6 },
    { name: 'Microservices', proficiency: 85, years: 5 },
    { name: 'Tableau', proficiency: 85, years: 4 },
    { name: 'Git', proficiency: 85, years: 8 },
    { name: 'Linux', proficiency: 85, years: 7 },
    { name: 'AWS', proficiency: 80, years: 4 },
    { name: 'MongoDB', proficiency: 80, years: 4 },
    { name: 'SOAP', proficiency: 80, years: 5 },
    { name: 'Power BI', proficiency: 80, years: 2 },
    { name: 'Jenkins', proficiency: 80, years: 4 }
];

const businessSkills = [
    'Data Analysis',
    'Business Intelligence',
    'Process Optimization',
    'Requirements Analysis',
    'Stakeholder Management',
    'Project Planning',
    'Business Process Management',
    'Risk Management',
    'Performance Analysis'
];

const leadershipSkills = [
    { name: 'Team Leadership', proficiency: 95 },
    { name: 'Communication', proficiency: 95 },
    { name: 'Problem-solving', proficiency: 95 },
    { name: 'Cross-functional Collaboration', proficiency: 95 },
    { name: 'Strategic Planning', proficiency: 90 },
    { name: 'Decision Making', proficiency: 90 },
    { name: 'Emotional Intelligence', proficiency: 90 },
    { name: 'Mentoring', proficiency: 85 },
    { name: 'Conflict Resolution', proficiency: 85 },
    { name: 'Enthusiasm & Drive', proficiency: 100 }
];

const certifications = [
    { name: 'Certified SAFe\u00ae Practitioner', issuer: 'Scaled Agile, Inc.', date: 'Mar 2024 - Mar 2026', icon: '\ud83c\udfc6', category: 'leadership', status: 'Active' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Sep 2023 - Sep 2026', icon: '\u2601\ufe0f', category: 'cloud', status: 'Active' },
    { name: 'Professional Scrum Master\u2122 I', issuer: 'Scrum.org', date: 'May 2022', icon: '\ud83c\udfaf', category: 'leadership', status: 'Active' },
    { name: 'Certified Connected Manager', issuer: 'Capgemini', date: 'Dec 2022', icon: '\u2699\ufe0f', category: 'leadership', status: 'Active' },
    { name: 'Containerized Applications on AWS', issuer: 'Coursera', date: 'Oct 2023', icon: '\ud83d\udce6', category: 'cloud', status: 'Active' },
    { name: 'Jenkins: Automating Delivery Pipeline', issuer: 'Coursera', date: 'May 2023', icon: '\ud83d\udd27', category: 'cloud', status: 'Active' },
    { name: 'Agile Software Development', issuer: 'Coursera', date: 'Feb 2022', icon: '\ud83d\ude80', category: 'leadership', status: 'Active' },
    { name: 'Post Graduate Diploma in Business Management', issuer: 'NMIMS CDO', date: 'Jul 2021', icon: '\ud83c\udf93', category: 'academic', status: 'Active' },
    { name: 'Docker Hands On For Java Developers', issuer: 'Udemy', date: 'Mar 2021', icon: '\ud83d\udc33', category: 'cloud', status: 'Active' },
    { name: 'AWS Partner: Sales Accreditation', issuer: 'Amazon Web Services', date: 'Aug 2022', icon: '\u2601\ufe0f', category: 'cloud', status: 'Active' },
    { name: 'Migration Ambassador Foundations', issuer: 'Amazon Web Services', date: 'Aug 2022', icon: '\ud83d\udd04', category: 'cloud', status: 'Active' },
    { name: 'Advanced Linux Networking', issuer: 'GNU Solutions & Services', date: 'Jan 2016', icon: '\ud83d\udc27', category: 'data', status: 'Active' }
];

const experienceData = [
    {
        id: 'exp1',
        role: 'Business Analyst - College of Engineering Facilities',
        company: 'University of Delaware',
        duration: 'Mar 2025 - Present',
        location: 'Delaware, United States',
        category: 'leadership',
        logo: 'U',
        description: 'Currently contributing analytical expertise to optimize engineering facilities operations and support data-driven decision making.',
        keyFocus: ['Data-driven decision making', 'Facilities operations optimization', 'Process improvement initiatives']
    },
    {
        id: 'exp2',
        role: 'Manager',
        company: 'Capgemini',
        duration: 'Apr 2024 - Dec 2024',
        location: 'Mumbai, Maharashtra, India',
        category: 'leadership',
        logo: 'C',
        description: 'Led strategic initiatives and managed cross-functional teams at Capgemini.',
        responsibilities: [
            'Led strategic initiatives and managed cross-functional teams',
            'Delivered enterprise-scale solutions for Fortune 500 clients',
            'Drove process optimization and operational excellence',
            'Mentored and developed team members across multiple projects'
        ]
    },
    {
        id: 'exp3',
        role: 'Senior Consultant',
        company: 'Capgemini',
        duration: 'Apr 2022 - Mar 2024',
        location: 'Mumbai, Maharashtra, India',
        category: 'technical',
        logo: 'C',
        description: 'Led the development of LP Bridge for GE Corporate and managed technical teams.',
        responsibilities: [
            'Led the development of LP Bridge for GE Corporate',
            'Managed team of 6 junior software engineers',
            'Architected solutions using Spring frameworks and AWS',
            'Collaborated with stakeholders across GE Healthcare, Aerospace, and Vernova'
        ]
    },
    {
        id: 'exp4',
        role: 'Consultant',
        company: 'Capgemini',
        duration: 'Jul 2021 - Mar 2022',
        location: 'India',
        category: 'technical',
        logo: 'C',
        description: 'Delivered technical solutions for enterprise clients.',
        responsibilities: [
            'Delivered technical solutions for enterprise clients',
            'Implemented Agile methodologies and best practices',
            'Contributed to multiple high-priority projects'
        ]
    },
    {
        id: 'exp5',
        role: 'Java Developer',
        company: 'Unotech Software Pvt. Ltd',
        duration: 'Aug 2017 - Jul 2021',
        location: 'India',
        category: 'technical',
        logo: 'U',
        description: 'Developed enterprise applications using Java and Spring frameworks.',
        responsibilities: [
            'Developed enterprise applications using Java and Spring frameworks',
            'Built Single Sign-On systems and identity management solutions',
            'Created middleware applications in Golang',
            'Implemented security monitoring and vulnerability assessment systems'
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
        case 'education':
            initCountdown();
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
                <button class="project-btn" data-id="${project.id}">View Details</button>
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
    
    technicalSkills.slice(0, 10).forEach((skill, index) => {
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
    
    const skills = ['Java', 'Spring', 'AWS', 'SQL', 'Docker', 'APIs', 'Agile', 'Leadership', 'Analytics'];
    
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

// ===== EDUCATION COUNTDOWN =====
function initCountdown() {
    const graduationDate = new Date('2026-05-31T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const diff = graduationDate - now;
        
        if (diff < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form = document.getElementById('contact-form');
    const templateBtns = document.querySelectorAll('.template-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Snehal will get back to you soon.');
        form.reset();
    });
    
    templateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const template = btn.getAttribute('data-template');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            switch(template) {
                case 'collaboration':
                    subjectInput.value = 'Collaboration Opportunity';
                    messageInput.value = 'Hi Snehal, I\'d like to discuss a potential collaboration opportunity...';
                    break;
                case 'consulting':
                    subjectInput.value = 'Consulting Inquiry';
                    messageInput.value = 'Hello Snehal, I have a consulting project that might interest you...';
                    break;
                case 'speaking':
                    subjectInput.value = 'Speaking Engagement';
                    messageInput.value = 'Dear Snehal, We would love to have you speak at our event...';
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
            <div class="message-avatar">${isBot ? '\ud83e\udd16' : '\ud83d\udc64'}</div>
            <div class="message-content">${text}</div>
        `;
        
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getResponse(question) {
        const responses = {
            leadership: "Snehal is a natural leader with 9+ years of experience! She has successfully led teams of 30+ members at Capgemini, most notably managing a team of 6 junior software engineers on the LP Bridge project for GE Corporate. Her leadership certifications include Certified SAFe\u00ae Practitioner and Professional Scrum Master\u2122 I. She's known for her enthusiasm, strategic thinking, and ability to mentor team members while driving project success.",
            technical: "Snehal is exceptionally technically sound with expertise spanning multiple domains! Her core strengths include Java (9 years), Spring Framework (8 years), SQL (8 years), and cloud technologies like AWS. She's proficient in Docker, Kubernetes, Oracle Database, MongoDB, and data visualization tools like Tableau and Power BI. She has hands-on experience with Microservices architecture, REST/SOAP APIs, and various DevOps tools. Her diverse technical background makes her versatile across enterprise solutions and data analytics.",
            projects: "Snehal has delivered 15+ enterprise-scale projects! Her flagship project is LP Bridge for GE Corporate, a leadership programs management system serving GE Healthcare, Aerospace, and Vernova. She built Cymmetri, a Single Sign-On framework with OAuth and SAML integration. Other notable projects include an ECM Workflow System for BSE India, AMAZE analytics platform for ICICI Bank, and security monitoring systems using ELK Stack. She's worked on everything from enterprise Java applications to Golang middleware.",
            roles: "Snehal is pursuing her MS in Business Analytics (Expected May 2026) and is interested in roles that combine her technical expertise with business analytics and leadership. Ideal positions include Business Analyst, Data Analyst, Technical Program Manager, or Solution Architect roles where she can leverage her 9+ years of enterprise experience, leadership capabilities, and growing analytics expertise. She's particularly interested in opportunities involving strategic decision-making, team leadership, and data-driven insights."
        };
        
        return responses[question] || "That's a great question! Snehal is a highly accomplished professional with 9+ years of experience spanning software engineering, enterprise solutions, and business analytics. She's led teams of 30+ members, delivered 15+ projects, and holds 14+ certifications. Feel free to ask about her leadership experience, technical skills, projects, or career interests!";
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
