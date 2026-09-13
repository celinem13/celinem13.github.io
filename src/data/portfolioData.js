export const strengths = [
  {
    label: 'Experience',
    value: 'Flight-data automation',
  },
  {
    label: 'Primary tools',
    value: 'Python · SQL · React · C++',
  },
  {
    label: 'Perspective',
    value: 'Engineering + technical education',
  },
]

export const projects = [
  {
    id: 'cockpit-telemetry-monitor',
    category: 'Systems engineering · C++',
    title: 'Cockpit Telemetry Monitor',
    description:
      'A real-time aircraft telemetry simulator and cockpit-style Qt dashboard that evaluates flight readings and displays warning conditions.',
    technologies: ['C++17', 'Qt 6', 'CMake', 'CTest', 'WSL 2'],
    highlights: [
      'Simulates airspeed, altitude, heading, engine temperature, and fuel.',
      'Separates shared telemetry logic from the console and graphical interfaces.',
      'Includes automated tests for high-temperature and low-fuel warnings.',
    ],
    repositoryUrl:
      'https://github.com/celinem13/cockpit-telemetry-monitor',
  },
  {
    id: 'nerdnest',
    category: 'Full-stack application',
    title: 'NerdNest',
    description:
      'A community platform that helps people create profiles, discover local interest groups, and connect through posts and events.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    highlights: [
      'Built registration, login, and session restoration with JWT authentication.',
      'Created REST API endpoints for profiles, posts, and events.',
      'Connected a React interface to an Express API and MongoDB Atlas database.',
    ],
    repositoryUrl: 'https://github.com/celinem13/NerdNest',
  },
  {
    id: 'kaizo-ironmon-analysis',
    category: 'Data analysis · R and Python',
    title: 'Kaizo Ironmon Analysis',
    description:
      'An exploratory and statistical analysis of 467 Pokémon FireRed and LeafGreen Kaizo Ironmon runs.',
    technologies: [
      'R',
      'Python',
      'Pandas',
      'ggplot2',
      'Statistical analysis',
    ],
    highlights: [
      'Examined Pokémon stats, types, moves, rankings, and win outcomes.',
      'Tested variable distributions using the Shapiro–Wilk test.',
      'Found that Speed was not significantly associated with winning in the analyzed data.',
    ],
    repositoryUrl: 'https://github.com/celinem13/KaizoIronmonData',
  },
  {
    id: 'expression-parser',
    category: 'Algorithms · Java',
    title: 'Expression Parser Using Stacks',
    description:
      'A Java infix-to-postfix expression parser built with generic stack data structures, syntax validation, and automated test cases.',
    technologies: [
      'Java',
      'OOP',
      'Data Structures',
      'Algorithms',
      'Testing',
    ],
    highlights: [
      'Implemented both array-backed and linked generic stack data structures.',
      'Handles operator precedence, associativity, exponentiation, and nested parentheses.',
      'Validates malformed expressions with exception handling and tests for edge cases.',
    ],
    repositoryUrl:
      'https://github.com/celinem13/Expression-Parser-Using-Stacks-Java',
  },
  {
    id: 'broncobuddies',
    category: 'Full-stack application · Team project',
    title: 'BroncoBuddies',
    description:
      'A full-stack social platform designed to help Cal Poly Pomona students connect through an online community.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'Git',
    ],
    highlights: [
      'Built and integrated user-facing React functionality with backend services.',
      'Connected frontend components to Express APIs and persistent MongoDB data.',
      'Collaborated through Git/GitHub while debugging frontend and backend integration.',
    ],
    repositoryUrl:
      'https://github.com/gitgudorgitrekt/BroncoBuddies',
  },
  {
    id: 'twitch-chat-automation',
    category: 'Automation · C#',
    title: 'Twitch Streamer.bot Chat Automation',
    description:
      'An interactive C# Twitch automation that generates D&D characters in response to viewer chat commands.',
    technologies: [
      'C#',
      'Streamer.bot',
      'Twitch',
      'Automation',
    ],
    highlights: [
      'Processes viewer-triggered Twitch commands through Streamer.bot.',
      'Generates six ability scores using a 4d6-drop-lowest algorithm.',
      'Creates a random race and class, calculates modifiers, and posts the formatted result to chat.',
    ],
    repositoryUrl:
      'https://github.com/celinem13/Twitch-Streamer.bot-Chat-Automation',
  },
  {
    id: 'portfolio-site',
    category: 'Frontend · React',
    title: 'Developer Portfolio',
    description:
      'A responsive personal portfolio built to showcase software engineering experience, technical projects, and skills.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
      'GitHub Pages',
    ],
    highlights: [
      'Built a reusable React interface for projects, experience, and technical skills.',
      'Structured portfolio content as reusable data to make new projects and roles easy to add.',
      'Deployed the site with GitHub Pages and maintained it through Git-based development.',
    ],
    repositoryUrl:
      'https://github.com/celinem13/celinem13.github.io',
  },
]

export const experiences = [
  {
    id: 'boys-and-girls-club',
    period: 'October 2025 — Present',
    role: 'Activity Leader',
    company: 'Boys and Girls Club of Laguna Beach',
    highlights: [
      'Support youth educational programming and structured daily activities.',
      'Communicate with students, staff, and families while adapting to changing needs and priorities.',
      'Help maintain a safe, organized environment while supporting learning and engagement.',
    ],
  },
  {
    id: 'brainstorm-stem',
    period: 'June 2025 — Jul 2025',
    role: 'STEM Instructor',
    company: 'BrainStorm STEM Education',
    highlights: [
      'Teach robotics, physics, engineering, Scratch, and Python to students in grades 1–6.',
      'Turn technical concepts into hands-on lessons, demonstrations, and coding activities.',
      'Adapt instruction and troubleshooting support for different ages and experience levels.',
    ],
  },
  {
    id: 'navair',
    period: 'July 2023 — November 2023',
    role: 'Software Engineer — Flight Data',
    company: 'Naval Air Warfare Center (NAVAIR)',
    highlights: [
      'Automated engineering-data workflows with Python and SQL for F-16 simulation and mission-modeling systems.',
      'Reduced a heavily manual processing workflow from weeks to hours through software automation.',
      'Tested, debugged, and validated outputs while collaborating with engineers on requirements and software designs.',
    ],
  },
  {
    id: 'dynamic-augmented-solutions',
    period: 'December 2022 — February 2023',
    role: 'Augmented Reality Engineer',
    company: 'Dynamic Augmented Solutions',
    highlights: [
      'Developed and debugged C# and Unity applications for Oculus Quest and Microsoft HoloLens.',
      'Prototyped interactive training features, controls, and visual guidance for immersive applications.',
      'Tested software across hardware platforms and iterated on features based on project requirements and team feedback.',
    ],
  },
  {
    id: 'avenda-health',
    period: 'January 2022 — April 2022',
    role: 'Augmented Reality Engineer',
    company: 'Dynamic Augmented Solutions',
    highlights: [
      'Developed a user-facing signup experience using JavaScript, HTML, and CSS.',
      'Processed and validated healthcare datasets supporting machine-learning workflows.',
      'Prototyped Python-based AI/ML techniques while collaborating in an iterative software-development environment.',
    ],
  },
  {
    id: 'cpp-it',
    period: 'September 2019 — November 2021',
    role: 'Augmented Reality Engineer',
    company: 'Dynamic Augmented Solutions',
    highlights: [
      'Provided technical support for users by troubleshooting hardware, software, account, and connectivity issues.',
      'Set up and maintained computers, peripherals, and software while documenting recurring technical problems and solutions.',
      'Assisted students and staff with technology issues, communicating technical steps clearly and escalating more complex problems when needed.',
    ],
  },
  {
    id: 'coding-minds',
    period: 'October 2018 — September 2019',
    role: 'Augmented Reality Engineer',
    company: 'Dynamic Augmented Solutions',
    highlights: [
      'Taught C++, Java, and Python through hands-on programming projects.',
      'Covered OOP, data structures, algorithms, debugging, and problem-solving fundamentals.',
      'Helped students troubleshoot code and communicate technical concepts clearly.',
    ],
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    skills: [
      'Python',
      'C++',
      'Java',
      'C#',
      'JavaScript',
      'SQL',
      'C',
      'R',
    ],
  },

  {
    category: 'Frontend',
    skills: [
      'React',
      'Vite',
      'HTML',
      'CSS',
      'React Router',
    ],
  },

  {
    category: 'Backend and data',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'MongoDB Atlas',
      'MySQL',
      'SQL Server',
      'JWT',
      'Pandas',
      'NumPy',
    ],
  },

  {
    category: 'Application and systems',
    skills: [
      'Qt 6',
      'Unity',
      'CMake',
      'CTest',
      'Linux / WSL',
      'Bash',
    ],
  },

  {
    category: 'Software engineering',
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Debugging',
      'Testing',
      'Automated Testing',
      'Requirements Analysis',
      'Git',
      'GitHub',
      'JIRA',
      'Agile / Scrum',
    ],
  },

  {
    category: 'Development tools',
    skills: [
      'VS Code',
      'Visual Studio',
      'Postman',
    ],
  },
]