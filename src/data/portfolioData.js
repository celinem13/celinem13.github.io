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
]

export const experiences = [
  {
    id: 'brainstorm-stem',
    period: 'July 2025 — Present',
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
      'Automated flight-data workflows with Python and SQL, reducing analysis time by approximately 95%.',
      'Built dashboards to examine more than 10 GB of aviation performance data and KPIs.',
      'Developed software supporting F-16 flight-data analysis in a secure engineering environment.',
    ],
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'C++', 'JavaScript', 'Java', 'SQL', 'R'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Vite', 'HTML', 'CSS', 'React Router'],
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
      'Pandas',
      'NumPy',
    ],
  },
  {
    category: 'Engineering tools',
    skills: [
      'Git',
      'GitHub',
      'CMake',
      'CTest',
      'Linux / WSL',
      'Postman',
      'JIRA',
      'AWS',
    ],
  },
]