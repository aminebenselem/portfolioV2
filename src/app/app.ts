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
  protected readonly role = 'Software Engineer';
  protected readonly company = 'AutoApp Solutions';
  protected readonly email = 'aminebenselem09@gmail.com';
  protected readonly phone = '+216 99 335 213';
  protected readonly phoneHref = 'tel:+21699335213';
  protected readonly location = 'Menzel Temim, Tunisia';
  protected readonly githubUrl = 'https://github.com/aminebenselem';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/amine-benselem-2a143b255/';
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
      role: 'Software Engineer',
      company: 'AutoApp Solutions',
      period: 'Feb 2026 — Present',
      location: 'Tunis',
      description:
        'Building a SaaS e-learning and marketplace platform for automotive functional safety.',
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
      description: 'Developed a mobile budgeting application end to end.',
      tags: ['React Native', 'Supabase', 'Next.js', 'Express'],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Cold Engineering Company',
      period: 'Jul 2024 — Sep 2024',
      location: 'Ben Arous',
      description:
        'Designed and developed an application for document consultation with AI and OCR.',
      tags: ['Angular', '.NET', 'GPT-2', 'OCR'],
    },
    {
      role: 'Software Engineering Intern',
      company: 'National Broadcasting Office',
      period: 'Jan 2023 — Jun 2023',
      location: 'Montplaisir, Tunis',
      description: 'Designed and built an intranet web and mobbile application for internal workflows.',
      tags: ['Spring Boot', 'Angular', 'MySQL' ,'Flutter' ,'JWT'],
    },
    {
      role: 'Digital Game Developer Intern',
      company: 'CGI Studio',
      period: 'Jun 2022 — Jul 2022',
      location: 'Nabeul',
      description: 'Developed a 3D PC game in Unity.',
      tags: ['Unity', 'C#', 'Visual Studio'],
    },
  ];

  protected readonly projects: Project[] = [
    {
      title: 'Interactive Coding Sessions',
      description:
        'Web app where teachers run live coding sessions and students program in-browser — no local setup required.',
      tags: ['Next.js', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'WebSockets', 'Gemini API'],
    },
    {
      title: 'Online Marketplace',
      description: 'Full-stack web application for an online store and marketplace.',
      tags: ['NestJS', 'Angular', 'PostgreSQL'],
    },
    {
      title: 'University Management Platform',
      description:
        'Course, student, and event management with chat — built as a microservices architecture.',
      tags: ['Angular', 'Spring Boot', 'Symfony', 'PostgreSQL', 'MongoDB', 'Nginx'],
    },
    {
      title: 'Intern Management App',
      description: 'Online time tracking and monitoring for trainees and supervisors.',
      tags: ['Next.js', 'React', 'Express', 'PostgreSQL'],
    },
    {
      title: 'E-learning Exam Platform',
      description: 'E-learning platform where users take exams as multiple-choice quizzes.',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL'],
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

  protected readonly languagesCode = ['Java', 'JavaScript', 'PHP', 'C', 'Python'];

  protected readonly frameworks = [
    'Angular',
    'Spring Boot',
    'Next.js',
    'Express',
    'Django',
    'React',
  ];

  protected readonly tools = ['Docker', 'Unity', 'Burp Suite', 'PostgreSQL', 'Neo4j'];

  protected readonly spokenLanguages = [
    { name: 'English', level: 'Working proficiency' },
    { name: 'French', level: 'Working proficiency' },
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
