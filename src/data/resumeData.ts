export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  title: string;
  description: string;
  highlightBadge?: string;
}

export interface FeaturedProject {
  title: string;
  company: string;
  description: string;
  details: string[];
  technologies: string[];
  metrics?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone?: string;
  linkedin: string;
  location: string;
  summary: string;
  stats: { label: string; value: string }[];
  experiences: WorkExperience[];
  skillCategories: SkillCategory[];
  featuredProjects: FeaturedProject[];
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
    cgpa: string;
  };
  awards: Award[];
}

export const resumeData: ResumeData = {
  name: "Aditya Chandel",
  title: "Senior Software Engineer",
  email: "aditya20chandel@gmail.com",
  linkedin: "https://linkedin.com/in/adityachandel",
  location: "Bengaluru, KA, India",
  summary:
    "Senior Software Engineer with 5+ years of experience architecting high-performance distributed systems. At GE Healthcare, led development of critical imaging platform services, earning 11 impact awards and 2 promotions. At Visa, engineered self-healing Active-Active event queues and multi-datacenter architecture for zero-downtime. Proficient in Java, Golang, Python, containerization, and distributed systems design — applying a GenAI-first approach to architect intelligent, resilient enterprise solutions.",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Impact Awards Earned", value: "13" },
  ],
  experiences: [
    {
      company: "Visa",
      role: "Senior Software Engineer",
      period: "July 2025 — Present",
      location: "Bengaluru, India",
      highlights: [
        "Engineered a self-healing Active-Active Event Queue using Hazelcast IMap and IQueue primitives, providing built-in disaster recovery and seamless failover — eliminating dependency on external message brokers.",
        "Led the Active-Active architecture implementation of the application, enabling multi-datacenter deployment with real-time data replication and zero-downtime failover.",
        "Built and optimized job scheduling solutions with deep expertise in Quartz Scheduler internals, customizing open-source Quartz to support active-active architecture.",
        "Architecting an Autonomous Incident Triage system using agentic workflows to reduce incident MTTR."
      ],
      technologies: ["Java", "Hazelcast", "Quartz Scheduler", "Distributed Systems", "GenAI Workflows", "Multi-DC Architecture"]
    },
    {
      company: "GE Healthcare",
      role: "Senior Software Engineer (Tech Lead)",
      period: "Oct 2020 — June 2025",
      location: "Bengaluru, India",
      highlights: [
        "Promoted from Software Engineer to Senior Software Engineer; mentored a team of 5 members as a Technical Lead to deliver PAAS and SAAS based microservices.",
        "Led the development of scalable microservices and next-generation ATDs (Advanced Technology Developments) for the Imaging Platform, including low-level and high-level design within an event-driven architecture.",
        "Led the implementation of a microservice to share medical data per the DICOMDIR international standard, and developed high-performance STOW, QIDO and WADO microservices with RESTful and asynchronous workflows.",
        "Delivered end-to-end Java Undertow and Golang based RESTful Microservice Templates; 31 different services built from these templates are in production to date.",
        "Spearheaded Java Spring Boot memory optimization, reducing usage by ~70%.",
        "Led the effort to scale and implement RabbitMQ features with webhooks within a Kubernetes cluster, alongside customized PAAS-based Redis solutions.",
        "Earned 10 impact awards for focus, collaboration, and entrepreneurial spirit."
      ],
      technologies: ["Java", "Golang", "Spring Boot", "Undertow", "Kubernetes", "RabbitMQ", "Redis", "Postgres", "DICOMDIR Standard"]
    }
  ],
  skillCategories: [
    {
      category: "Languages",
      skills: ["Java", "Python", "Go (Golang)", "SQL", "Bash"]
    },
    {
      category: "Concepts & Architecture",
      skills: ["Microservices", "Distributed Systems Design", "Low-Level Design (LLD)", "High-Level Design (HLD)", "Event-Driven Architecture", "BPMN", "Database Design", "Active-Active Failover"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["SpringBoot", "Jersey", "Hibernate", "Quartz", "Flask", "Undertow"]
    },
    {
      category: "Cloud, Containers & Infra",
      skills: ["Docker", "Kubernetes", "RabbitMQ", "Redis", "Hazelcast", "Helm", "Postgres"]
    },
    {
      category: "GenAI & Agentic Engineering",
      skills: ["Agentic Workflows", "RAG Pipelines", "Vector Databases", "Function Calling", "LLM Integration"]
    }
  ],
  featuredProjects: [
    {
      title: "Self-Healing Active-Active Event Queue",
      company: "Visa",
      description: "Disaster recovery & zero-downtime distributed event streaming system built natively on Hazelcast primitives.",
      details: [
        "Eliminated dependency on external message brokers by leveraging Hazelcast IMap & IQueue primitives.",
        "Enables multi-datacenter deployment with active-active real-time data replication and zero-downtime failover."
      ],
      technologies: ["Java", "Hazelcast", "Distributed Memory Grid", "Active-Active Architecture"],
      metrics: "Zero Downtime Failover"
    },
    {
      title: "Autonomous Incident Triage System",
      company: "Visa",
      description: "Intelligent incident classification and root-cause analysis platform using GenAI agentic workflows.",
      details: [
        "Automates log synthesis, stack trace parsing, and anomaly detection.",
        "Dramatically reduces Mean Time To Resolution (MTTR) during enterprise production incidents."
      ],
      technologies: ["Python", "GenAI", "Agentic Workflows", "LLM Function Calling", "RAG"],
      metrics: "Reduced MTTR"
    },
    {
      title: "Imaging Platform Medical Microservices (DICOMDIR / STOW / QIDO / WADO)",
      company: "GE Healthcare",
      description: "High-throughput international standard medical data sharing platform for healthcare imaging.",
      details: [
        "Designed RESTful & async workflows complying with DICOMDIR medical imaging standards.",
        "Implemented high-performance STOW, QIDO, and WADO microservices handling large-scale binary medical image payloads."
      ],
      technologies: ["Java", "Golang", "DICOMDIR", "RESTful APIs", "Kubernetes"],
      metrics: "Enterprise Healthcare Standard"
    },
    {
      title: "High-Performance Microservice Templates & Spring Boot Optimization",
      company: "GE Healthcare",
      description: "Standardized microservice architecture framework and Spring Boot optimization initiative.",
      details: [
        "Created Undertow and Golang microservice base templates adopted across 31 production microservices.",
        "Reduced Java Spring Boot memory footprint by ~70% across cluster deployments."
      ],
      technologies: ["Java", "Spring Boot", "Undertow", "Golang", "Docker", "K8s"],
      metrics: "~70% Memory Reduction & 31 Services"
    }
  ],
  education: {
    institution: "National Institute of Technology (NIT) Raipur",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2016 — Jun 2020",
    location: "Raipur, India",
    cgpa: "8.69 / 10"
  },
  awards: [
    {
      title: "13 Company Impact Awards",
      description: "Recognized across GE Healthcare (10 awards) and Visa (3 awards) for focus, exceptional technical leadership, collaboration, and entrepreneurial initiative.",
      highlightBadge: "13 Impact Awards"
    },
    {
      title: "2 Promotions to Tech Lead",
      description: "Rapid career trajectory advancing from Software Engineer to Senior Software Engineer & Technical Lead, mentoring cross-functional engineering teams.",
      highlightBadge: "Tech Lead Promotion"
    },
    {
      title: "Tech Talk Speaker",
      description: "Delivered a technical talk on Self-Healing Active-Active Event Queue Architecture, showcasing disaster recovery design patterns and Hazelcast primitives.",
      highlightBadge: "Tech Talk Speaker"
    }
  ]
};
