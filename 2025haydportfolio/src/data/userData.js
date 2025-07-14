// User data extracted from resume and portfolio requirements
export const userData = {
  personal: {
    name: "Hayden Howell",
    title: "Full-Stack Engineer",
    subtitle: "Designer. \n Bachelors of Computer Science",
    description: "Innovative software engineer with expertise in full-stack development, AI integration, and systems architecture. Passionate about building scalable solutions that bridge technology and human experience.",
    location: "Available Worldwide",
    email: "hhowell403@gmail.com", // Update with actual email
    github: "https://github.com/hhowell116", // Update with actual GitHub
    linkedin: "https://www.linkedin.com/in/hhowell403/",
  },
  
  terminalSequence: [
    "> initializing protocol...",
    "> loading personal modules...", 
    "> compiling thoughts...",
    "> syncing timeline...",
    "> welcome, explorer_"
  ],
  
  projects: [
    {
      id: "Project Coming Soon",
      name: "Project Coming Soon",
      description: "",
      fullDescription: "",
      techStack: [""],
      highlights: [
        "",
        "",
        "",
        " "
      ],
      metrics: {
        Progress: "80%",
        Hours_worked_on: "8",
        impact: ""
      },
      status: "Live",
      github: "https://github.com/hhowell116?tab=repositories",
      stillImage: "/assets/bentoGrids/Milestone/Milestone_still.png",
      hoverVideo: "/assets/bentoGrids/Milestone/Milestone_hover.mp4",
      gridSize: "large"
    },
    {
      id: "CMYK-Color-Analyzer",
      name: "CMYK-Color-Analyzer",
      description: " An app that takes any uploaded image and calculates the CMYK values of the colors within it.",
      fullDescription: "Upload an image to determine its CMYK values of the color within it. Pixel sampling (every 5px) and calculate averages for the overall percentages. Displays all detected colors and their overall value to the image. Channel Isolation tool to view each CMYK value separately.",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "Data Visualization", "Three.js", "REST APIs"],
      highlights: [
        "Helps designers and printers precisely assess color profiles for better output",
        "Samples pixels at set intervals (every 5px) for efficient color averaging",
        "Calculates and displays average CMYK percentages across the entire image",
        "Shows all detected colors with their relative contributions to the image"
      ],
      metrics: {
        achievement: "Improves color analysis speed and precision",
        color_convert: "(RGB ↔ CMYK)",
        insights: "Personalized"
      },
      github: "https://github.com/hhowell116/CMYK-color-analyzer",
      stillImage: "/assets/bentoGrids/Hackronomics/Hackronomics_Still.png",
      hoverVideo: "/assets/bentoGrids/Hackronomics/Hackronomics_hover.mp4",
      gridSize: "large"
    },

      /*

    {
      id: "fundraiser",
      name: "Fundraiser Management System",
      description: " Mock Donation platform for scholarship fund tracking and management",
      fullDescription: "Our class project simulated a donation platform for students to raise and track scholarship funds. I designed the UI, implemented C# backend logic, and wrote NUnit tests to ensure correct donation processing. It successfully supported multiple fundraising workflows and demonstrated robust validation and modular architecture.",
      techStack: ["C#", "Winforms", ".NET", "XML", "NUnit", "Software Design Patterns", "Entity Framework"],
      highlights: [
        "Robust donation processing",
        "Multiple fundraising workflows",
        "Comprehensive NUnit testing",
        "Modular architecture design"
      ],
      metrics: {
        workflows: "Multiple",
        testing: "NUnit",
        architecture: "Modular"
      },
      github: "https://github.com/Ehiane/FundraiserApplication_WinForms",
      stillImage: "/assets/bentoGrids/Fundraiser/Fundraiser_still.png",
      hoverVideo: "/assets/bentoGrids/Fundraiser/Fundraiser_hover.mp4",
      gridSize: "small"
    },

      */
    {
      id: "TODO List/Productivity Calendar",
      name: "TODO List/Productivity Calendar",
      description: "Personalized Productivity Machine",
      fullDescription: "An app personalized to fit all of my needs. On one side you have your todo list/goals tabs. You are able to schedule a task or look at completed tasks. On the other side, you have your calendar. This calendar is to keep you productive every day, that's why it comes with a task manager of its own to add a task to every day of the week. You are encouraged to stay productive every day hence the streak and the countdown of each day. There is also a health calendar for marking your weight and calories consumed each day to promote weight gain/loss depending on your needs. You are able to view your weight entered over time through the graph implemented. ",
      techStack: ["React", "Vite", "node.js", "tailwind", "git", "chart.js", ],
      highlights: [
        "Clean, user-friendly UI designed for focus and efficiency",
        "Productivity stats & streak tracking to motivate users",
        "Daily Bible verse to keep you motivated",
      ],
      metrics: {
        tasks_completed: "∞",
        features: "Weight/Calorie Tracker",
        style: "Personalized",
      },
      github: "https://github.com/hhowell116/calendar-task-manager",
      youtube: "https://youtu.be/uYLZ9f73XJk?si=ag8PhV6M0GtwrLAy",
      stillImage: "/assets/bentoGrids/SpreadSheet/SpreadSheet_still.png",
      hoverVideo: "/assets/bentoGrids/SpreadSheet/SpreadSheet_hover.mp4",
      gridSize: "medium"
    },

      /*
    {
      id: "imdb",
      name: "IMDb Movie Sentiment Analysis",
      description: "LSTM model for movie review sentiment classification",
      fullDescription: "To explore NLP, I trained an LSTM model on 50K IMDb reviews to classify positive vs. negative sentiments. I used Keras and TensorFlow with tokenization and dropout layers to reduce overfitting. The model reached 84% accuracy and provided visual insights on emotional patterns in film reviews.",
      techStack: ["Python", "TensorFlow", "word-embeddings", "LSTM", "NLP", "deep-learingng", "neural-network"],
      highlights: [
        "50K IMDb reviews dataset",
        "84% accuracy achieved",
        "LSTM neural network",
        "Visual sentiment insights"
      ],
      metrics: {
        reviews: "50K",
        accuracy: "84%",
        model: "LSTM"
      },
      github: "https://github.com/Ehiane/imdb-movie-sentiment-analysis",
      youtube: "https://youtu.be/uYLZ9f73XJk?si=ag8PhV6M0GtwrLAy",
      stillImage: "/assets/bentoGrids/IMDB/imdb_still.png",
      hoverVideo: "/assets/bentoGrids/IMDB/imdb_hover.mp4",
      gridSize: "medium"
    },
*/
      /*
    {
      id: "",
      name: "",
      description: " ",
      fullDescription: "",
      techStack: ["", "", "", "", "", ""],
      highlights: [
        "",
        "",
        "",
        ""
      ],
      metrics: {
        data: "6M+",
        cities: "Multi-city",
        insights: "Location-based"
      },
      github: "https://github.com/ehiane/yelp-analytics",
      youtube: "https://www.youtube.com/watch?v=VPdj3VkV9Es",
      
      stillImage: "/assets/bentoGrids/YelpData/yelp_data_still.png",
      hoverVideo: "/assets/bentoGrids/YelpData/yelp_data_hover.mp4",
      gridSize: "small"
    },

      */
      /*
    {
      id: "",
      name: "",
      description: "",
      fullDescription: "",
      techStack: ["", "", "", "", "", ""],
      highlights: [
        "",
        "",
        "",
        ""
      ],
      metrics: {
        enrollment: "+13%",
        certifications: "",
        optimization: ""
      },
      status: "Live",
      demo: "https://harvardschoolakute.com/",
      stillImage: "/assets/bentoGrids/HarvardSchool/Harvard School_still.png",
      hoverVideo: "/assets/bentoGrids/HarvardSchool/Harvard School_hover.mp4",
      gridSize: "large"
    },
      */

      /*
    {
      id: "",
      name: "",
      description: "",
      fullDescription: "",
      techStack: ["", "", "", "", "", "", "", "", ""],
      highlights: [
        "",
        "",
        "",
        ""
      ],
      metrics: {
        test_coverage: "98%",
        phase: "Pilot Testing",
        impact: "Streamlined Access"
      },
      github: "https://github.com/Ehiane/StudentFacultyResearchPortal",
      youtube: "https://youtu.be/6KkSGxuj5pA",
      stillImage: "/assets/bentoGrids/FacultyResearch/FacultyResearch_still.png",
      hoverVideo: "/assets/bentoGrids/FacultyResearch/FacultyResearch_hover.mp4",
      gridSize: "medium"
    },
    */


    {
      id: "Project Coming Soon2",
      name: "Project Coming Soon",
      description: "",
      fullDescription: "",
      techStack: ["", "", "", "", "", "", "", "", "", ""],
      highlights: [
        "",
        "",
        "",
        ""
      ],
      metrics: {
        days: "12+",
        Hours_worked_on: "14",
        gui_apps: "",
        games: ""
      },
      github: "https://github.com/Ehiane/100_days_of_code_in_python-Projects",
      stillImage: "/assets/bentoGrids/100DaysOfCode/100Days_still.png",
      hoverVideo: "/assets/bentoGrids/100DaysOfCode/100Days_hover.mp4",
      gridSize: "large"
    }
  ],

  professionalInvolvements: [
    {
      id: "Data Entry Internship",
      name: "Data Entry Internship",
      description: "Data Entry Internship - MiHIN ",
      fullDescription: "Assisted in streamlining internal workflows by supporting the integration of health data across digital platforms. Played a key role in ensuring timely updates to key datasets that supported statewide healthcare interoperability initiatives.",
      role: "Data Analyst | Hubspot/Jira | Operations Coordinator",
      period: "Jan 2024 - Dec 2024",
      company: "Michigan Health Information Network Shared Services (MiHIN)",
      tags: ["Sql", "Data Entry", "Hubspot", "Jira", "Excel"],
      highlights: [
        "Maintained data accuracy and organized large data sets in Excel",
        "Used SQL to query and validate data in support of healthcare information systems",
        "Collaborated across teams using HubSpot and Jira to ensure consistent data reporting and task tracking"
      ],
      achievements: [
        "Managed implementing all new customers data",
        "Learned to use SQL queries to manipulate data sets",
        "Mastered excel and word",
        "Developed a perfect attention to detail"
      ],
      type: "leadership",
      gridSize: "large",
      icon: "/assets/professional_icons/haydmihin.png"
    },
    {
      id: "Customer Engagement Team",
      name: "Customer Engagement Team",
      description: "Healthcare Customer Engagement Coordinator - MiHIN",
      fullDescription: "Supported cross-functional initiatives by coordinating administrative processes that enhanced customer integration and engagement across healthcare data networks.",
      role: "Hubspot | Customer Outreach | Jira",
      period: "Aug 2023 - Jan 2024",
      company: "Michigan Health Information Network Shared Services (MiHIN)",
      tags: ["Customer Service", "Outreach", "Communication" , "Root Cause Analysis"],
      highlights: [
        "Acted as liaison between MiHIN and healthcare organizations to facilitate secure data exchange",
        "Created and managed communication pathways using destination strings",
        "Onboarded/decommissioned organizations via Jira tickets and HubSpot",
          "Collected data for RCA (Root Cause Analysis) requests to resolve internal issues"
      ],
      achievements: [
        "Enhanced customer service skills",
        "Scheduled RCA meetings within the company",
        "Improved team experience handling customer information",
      ],
      type: "work",
      gridSize: "medium",
      icon: "/assets/professional_icons/haydmihin.png"
    },
    {
      id: " Social Media Marketing Intern",
      name: " Social Media Marketing Intern",
      description: "Social Media Marketing Intern - MiHIN",
      fullDescription: "Developed and executed social media content strategies to increase audience engagement and brand awareness across multiple platforms. Analyzed campaign performance metrics to refine messaging, improve reach, and support organizational communication goals.",
      role: "Adobe Suite | Webinar | Powerpoints",
      period: "Jan 2023 - Aug 2023",
      company: "Michigan Health Information Network Shared Services (MiHIN)",
      tags: ["Brand Strategy", "Content Creation", "Campaign Management"],
      highlights: [
        "Designed visual content and managed social campaigns to increase engagement",
        "Utilized analytics to measure and improve campaign performance",
        "Developed content aligned with brand goals and user behavior insights",
      ],
      achievements: [
        "Created visuals that increased follower growth",
        "Improved content creation efficiency",
        "Boosted social media engagement within the company"
      ],
      type: "internship",
      gridSize: "large",
      icon: "/assets/professional_icons/haydmihin.png"
    },
    {
      id: "Graphic Design Marketing Intern",
      name: "Graphic Design Marketing Intern",
      description: "Marketing & Graphic Design Specialist -MiHIN",
      fullDescription: "Produced eye-catching graphics to support real estate marketing efforts. Worked closely with team members to craft materials that effectively connect with target audiences and reinforce brand identity.",
      role: "Canva| Adobe Suite | Color Theory",
      period: "Jun 2021 - Dec 2022",
      company: "Better Homes and Gardens Real Estate",
      tags: ["Adobe Photoshop", "Adobe Illustrator", "Canva", ],
      highlights: [
        "Designed promotional materials targeting key real estate demographics",
        "Applied principles of color theory, typography, and layout in marketing content",
        "Collaborated with agents to develop branding materials and client outreach content",
      ],
      achievements: [
        "Applied advanced design techniques to improve promotional effectiveness",
        "Supported multiple campaigns, contributing to increased lead generation",
        "Enhanced brand consistency through strategic design choices"
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/haydbhg.png"
    },
    {
      id: "Copy & Print Specialist",
      name: "Copy & Print Specialist",
      description: "Copy & Print Specialist - Office Depot",
      fullDescription: "Provided high-quality printing, copying, and finishing services tailored to customer needs. Assisted clients with selecting print solutions, ensured accurate job production, and maintained equipment to meet daily workflow demands.",
      role: "Color Matching | Print Production | Finishing Services | Customer Service",
      period: "Jan 2025 - May 2025",
      company: "Office Depot",
      tags: ["Python", "Flask", "SQL", "QuickBooks API", "ProSeries", "Automation"],
      highlights: [
        "Managed printers, copiers, and finishing equipment for accurate, high-quality output",
    "Recommended services or products to meet customer needs and upsold additional print-related items",
    "Collaborated with customers to design and format custom print materials such as business cards, flyers, posters, and brochures",
      ],
      achievements: [
        "Improved turnaround time by streamlining design and proofing processes",
    "Increased repeat business by delivering consistent, high-quality visual products",
    "Helped small business clients elevate branding through polished, on-demand designs",
      ],
      type: "professional",
      gridSize: "medium",
      icon: "/assets/professional_icons/haydod.png"
    }
  ],
  
  skills: {
    languages: [
      "Python", "C", "C++", "C#", "JavaScript", "Swift", "TypeScript", "Haskell", "XML", "HTML", "CSS"
    ],
    concepts: [
      "Data Structures and Algorithms", "Scalability", "OOP", "Software Design Patterns", "Agile Development"
    ],
    frameworks: [
      "Flask", "React.js", "Node.js", "Express.js", ".Net", "SQL Alchemy"
    ],
    systems: [
      "CI/CD Pipelines", "API Development", "Scalable Web Applications"
    ],
    databases: [
      "SQL", "SQLite", "MySQL", "PostgreSQL", "MongoDB", "RDBMS"
    ],
    development: [
      "Git/GitHub", "Jira", "Postman", "Linux", "PowerBI", "REST APIs", "Power Query", "MS Excel"
    ],
    testing: [
      "NUnit", "Selenium", "Cypress", "Unittest", "Pytest", "TDD (Test Driven Development)"
    ],
    analytics: [
      "PowerBI", "Power Query", "MS Excel", "Data Visualization", "Statistical Analysis"
    ],
    methodologies: [
      "Agile", "Scrum", "TDD", "Code Review", "Version Control", "Documentation"
    ]
  },
  
  experience: [
    {
      title: "Senior Full-Stack Engineer",
      company: "Tech Innovation Labs",
      period: "2022 - Present",
      description: "Leading development of AI-powered applications and distributed systems architecture.",
      achievements: [
        "Built scalable microservices handling 1M+ daily requests",
        "Implemented ML models improving user engagement by 40%",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022", 
      description: "Developed full-stack applications with focus on user experience and performance optimization.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Built responsive web applications serving 100K+ users",
        "Collaborated with design teams to implement pixel-perfect UIs"
      ]
    }
  ],
  
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2020",
    achievements: ["Summa Cum Laude", "Outstanding Student in Software Engineering"]
  }
}
