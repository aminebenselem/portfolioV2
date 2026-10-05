import { Component, HostListener, signal } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface Education {
  degree: string;
  school: string;
  period: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly name = 'Amine';
  protected readonly fullName = 'Amine Benselem';

  protected readonly role =
    'Software Engineer · Backend & Distributed Systems';

  protected readonly company = 'AutoApp Solutions';

  protected readonly email = 'aminebenselem09@gmail.com';

  protected readonly phone = '+216 99 335 213';
  protected readonly phoneHref = 'tel:+21699335213';

  protected readonly location = 'Menzel Temim, Tunisia';

  protected readonly githubUrl =
    'https://github.com/aminebenselem';

  protected readonly linkedinUrl =
    'https://www.linkedin.com/in/amine-benselem-2a143b255/';

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly navLinks = [
    { label: 'Experience', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  protected readonly experience: Experience[] = [
    {
      role: 'Software Engineering Intern',
      company: 'AutoApp Solutions',
      period: 'Feb 2026 — Jul 2026',
      location: 'Tunis',
      description:
        'Building a multi-tenant SaaS e-learning and marketplace platform for automotive functional safety, including modular backend services, payments, graph-based safety modeling, and AI-assisted content generation.',
      tags: [
        'Spring Boot',
        'Spring Modulith',
        'PostgreSQL',
        'Neo4j',
        'Docker',
        'React',
        'Stripe',
        'AI',
        'GitHub Actions',
      ],
    },

    {
      role: 'Software Engineering Intern',
      company: 'Nextgen Coding',
      period: 'Jun 2025 — Aug 2025',
      location: 'Boumhal',
      description:
        'Developed a mobile budgeting application end to end, covering the application frontend, backend services, authentication, and data persistence.',
      tags: [
        'React Native',
        'Supabase',
        'Next.js',
        'Express',
      ],
    },

    {
      role: 'Software Engineering Intern',
      company: 'Cold Engineering Company',
      period: 'Jul 2024 — Sep 2024',
      location: 'Ben Arous',
      description:
        'Designed and developed an application for document consultation using OCR and AI-assisted document processing.',
      tags: [
        'Angular',
        '.NET',
        'GPT-2',
        'OCR',
      ],
    },

    {
      role: 'Software Engineering Intern',
      company: 'National Broadcasting Office',
      period: 'Jan 2023 — Jun 2023',
      location: 'Montplaisir, Tunis',
      description:
        'Designed and developed a web and mobile intranet application for internal workflows, authentication, and information management.',
      tags: [
        'Spring Boot',
        'Angular',
        'MySQL',
        'Flutter',
        'JWT',
      ],
    },

    {
      role: 'Digital Game Developer Intern',
      company: 'CGI Studio',
      period: 'Jun 2022 — Jul 2022',
      location: 'Nabeul',
      description:
        'Developed a 3D PC game using Unity and C#, working across gameplay logic, application structure, and interactive 3D environments.',
      tags: [
        'Unity',
        'C#',
        'Visual Studio',
      ],
    },
  ];

  protected readonly projects: Project[] = [
    {
      title: 'API Gateway',
      description:
        'Built a production-oriented API Gateway in Go with health-aware load balancing, round-robin traffic distribution, rate limiting, and WebSocket upgrade handling. Designed the gateway to route HTTP traffic while supporting long-lived real-time connections and sticky routing for WebSocket sessions. Containerized and deployed the gateway as part of a distributed application stack.',
      tags: [
        'Go',
        'HTTP',
        'WebSockets',
        'Load Balancing',
        'Rate Limiting',
        'Docker',
      ],
    },

    {
      title: 'Collaborative Whiteboard',
      description:
        'Built and deployed a real-time collaborative whiteboard from scratch with Angular and Spring Boot. Implemented JWT authentication, board-level permissions, STOMP over WebSockets, real-time cursors, drawing, element manipulation, and Redis-backed permission caching. Deployed the whiteboard together with the Go API Gateway as a distributed real-time application.',
      tags: [
        'Angular',
        'Spring Boot',
        'WebSockets',
        'STOMP',
        'Redis',
        'PostgreSQL',
        'Docker',
        'Distributed Systems',
      ],
    },

    {
      title: 'Interactive Coding Sessions',
      description:
        'Built a web application where teachers run live coding sessions and students program directly in the browser without local setup, with real-time communication and AI-assisted functionality.',
      tags: [
        'Next.js',
        'Django',
        'PostgreSQL',
        'AWS',
        'Docker',
        'WebSockets',
        'Gemini API',
      ],
    },

    {
      title: 'Online Marketplace',
      description:
        'Built a full-stack marketplace application with a structured backend API, product management, and an Angular frontend.',
      tags: [
        'NestJS',
        'Angular',
        'PostgreSQL',
      ],
    },

    {
      title: 'University Management Platform',
      description:
        'Designed and developed a university management platform for courses, students, events, and communication using a microservices-oriented architecture.',
      tags: [
        'Angular',
        'Spring Boot',
        'Symfony',
        'PostgreSQL',
        'MongoDB',
        'Nginx',
      ],
    },

    {
      title: 'Intern Management App',
      description:
        'Built an online platform for tracking internship activities, working time, and progress between trainees and supervisors.',
      tags: [
        'Next.js',
        'React',
        'Express',
        'PostgreSQL',
      ],
    },

    {
      title: 'E-learning Exam Platform',
      description:
        'Built an e-learning platform where users can take structured multiple-choice exams and track their learning activities.',
      tags: [
        'Spring Boot',
        'Angular',
        'PostgreSQL',
      ],
    },
  ];

  protected readonly education: Education[] = [
    {
      degree: 'Software Engineering & Information Systems',
      school: 'TEK-UP Ariana',
      period: 'Sep 2023 — Jul 2026',
    },

    {
      degree: 'Software Development',
      school: 'ISTIC Borj Cédria',
      period: 'Sep 2020 — Jun 2023',
    },
  ];

  protected readonly languagesCode = [
    'Java',
    'Go',
    'JavaScript',
    'Python',
    'C',
    'PHP',
  ];

  protected readonly frameworks = [
    'Spring Boot',
    'Angular',
    'React',
    'Next.js',
    'Express',
    'Django',
  ];

  protected readonly tools = [
    'Docker',
    'PostgreSQL',
    'Redis',
    'Neo4j',
    'GitHub Actions',
    'Burp Suite',
    'Unity',
  ];

  protected readonly spokenLanguages = [
    {
      name: 'English',
      level: 'Working proficiency',
    },

    {
      name: 'French',
      level: 'Working proficiency',
    },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}


