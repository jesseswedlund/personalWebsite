const project = {
  prReviewBot: {
    name: 'PR Review Bot',
    description: 'An AI-powered GitHub Action for automated code review',
    tech: 'Python, GitHub Actions, Anthropic API, Slack API',
    role: 'Sole Developer',
    captains:
      'Built as a personal project to bring AI-assisted code review into the GitHub PR workflow.',
    contributions: [
      'Built a GitHub Action triggered on PR review requests that calls the Anthropic API to perform AI-assisted code review in a pending state for human approval before finalizing',
      'Extracted thousands of historical PR comments from production repos using Python + Claude to synthesize a personal review "personality" JSON, fed into each review prompt to replicate real feedback',
      'Extended the system for team-wide use by supporting per-user personality files; integrated Slack bot notifications to alert on completed reviews',
    ],
    image: '/images/prReviewBot.png',
    youtube: '',
    medium: '',
    url: '',
    github: '',
  },
  inventoryMCP: {
    name: 'Inventory Management MCP',
    description:
      'An MCP server exposing Inventory Management APIs to LLM clients via natural language',
    tech: 'TypeScript, MCP, Auth0, Anthropic API',
    role: 'Sole Developer',
    captains:
      'Designed and built at Carbon Direct to make the Inventory Management system accessible to AI agents.',
    contributions: [
      "Designed and implemented a Model Context Protocol (MCP) server exposing the Inventory Management system's APIs to LLM clients via natural language",
      'Integrated Auth0 authentication using the existing company auth flow and permission-tiered access',
    ],
    image: '/images/inventoryMCP.png',
    youtube: '',
    medium: '',
    url: '',
    github: '',
  },
  aiDataRoom: {
    name: 'AI Data Room Completeness Tool',
    description:
      'A prototype that parses PDF documents against structured data requirements and surfaces gaps with document highlighting',
    tech: 'Python, Anthropic API, PDF parsing, LangGraph',
    role: 'Contributing Engineer',
    captains:
      'Built during a Carbon Direct hackathon to automate project diligence data validation. The system uses a "fan-out" architecture to parallelize LLM analysis across every combination of document page and data requirement, then aggregates the results into a structured completeness report.',
    contributions: [
      'Chunked input PDFs into individual pages and fanned out LLM requests across every page-requirement combination in parallel, dramatically reducing processing time',
      'Each node in the graph makes a targeted LLM call to evaluate whether a single requirement is satisfied by a single page, with cited evidence and location data',
      'Fan-out nodes converge into an aggregation step that produces a complete readout of which requirements are met, which are missing, and exactly where the evidence lives in the document',
      'Integrated document highlighting in a PDF viewer so users can see cited evidence in context',
      "Built a UI that surfaces a clear completeness summary with green/missing status per requirement so diligence teams can instantly see what's there and what's not",
    ],
    image: '/images/aiDataRoom.png',
    youtube: '',
    medium: '',
    url: '',
    github: '',
  },
  emailSystem: {
    name: 'Transactional Email System',
    description:
      'A Mailchimp-integrated transactional email system with automated tests and monitoring',
    tech: 'TypeScript, Node.js, Mailchimp API, NestJS',
    role: 'Feature Lead',
    captains:
      'Designed and delivered end-to-end at Carbon Direct. The architecture proved durable enough to generate new business value more than a year after initial delivery.',
    contributions: [
      'Designed and implemented a Mailchimp-integrated email system end-to-end, including automated tests and monitoring',
      'System architecture proved durable and generated new use cases and business value more than a year after initial delivery',
    ],
    image: '/images/emailSystem.png',
    youtube: '',
    medium: '',
    url: '',
    github: '',
  },
  haircutz: {
    name: 'Haircutz',
    description: 'A 2D multiplayer tower defense game',
    tech: 'Phaser.js, Socket.IO, Node.js, Express, and Webpack',
    role: 'Full Stack Developer',
    captains:
      'Haircutz was taken from concept to final product in just 2 weeks by a team of 4 developers. This project presented the tough challenges of writing complex game logic algorithms coupled with the need to create synchronous client-side gameplay using server-side logic and sockets. Some of my specific contributions were:',
    contributions: [
      'Designing a semi-authoritative server to create a synchronous game experience across two clients',
      'Writing much of the game logic for interactive game objects',
      'Refactoring the file system with Webpack and modularization',
      'Implementing an automated opponent for one player gameplay',
      'Deploying as a web app with Heroku',
    ],
    image: '/images/haircutz.png',
    youtube: 'https://www.youtube.com/embed/t47zl9t8a4E',
    medium: '',
    url: '',
    github: 'https://github.com/2009-FSA-CS-Lucians-Lightbringers/haircutzGame',
  },
  OEI: {
    name: 'Outdoor Recreation Inc.',
    description: 'REI Ecommerce site clone',
    tech: 'React, Redux, Express, Sequelize, PostgreSQL, Sessions, Passport, Socket.IO, Stripe, Toast, and Nodemailer',
    role: 'Full Stack Developer',
    captains:
      'OEI was designed and built by a team of three in just 7 days. Some of my specific contributions were:',
    contributions: [
      'Designing the header and search bar functionality',
      'Implementing a guest checkout system using local storage',
      'Creating controlled React forms to add and edit products as an Admin',
      'Writing Redux thunks and reducers to make API calls and update state for products',
    ],
    image: '/images/OEI.png',
    youtube: '',
    medium: '',
    url: '',
    github: 'https://github.com/The-Shopper-Awakens/graceshopper',
  },
  riverCoach: {
    name: 'River Coach',
    description:
      'A progressive web app for connecting with whitewater paddlers',
    tech: 'React, Redux, Material UI, Node.js, and Express',
    role: 'Sole Developer',
    captains:
      'In just three days, River Coach was taken from concept to a working PWA. The project itself is still in development as the many social media features still need to be built out. During this project I:',
    contributions: [
      'Implemented a service worker to cache important static assets for return visits to increase efficiency',
      'Created a web manifest and in-app prompt to install app',
      'Utilized functional React components using hooks and Redux thunk calls to a RESTful API that interact with a PostgreSQL database using Sequelize',
      'Used Material UI to create an attractive user interface',
    ],
    image: '/images/riverCoach.png',
    youtube: 'https://www.youtube.com/embed/u6Orm3mcK54',
    medium:
      'https://medium.com/swlh/progressive-web-applications-what-they-are-why-theyre-hot-right-now-and-how-to-build-one-3c6c131f55d6',
    url: '',
  },
  sudokuSolver: {
    name: 'Sudoku Solver',
    description: 'A web app that can solve most expert level sudokus',
    tech: 'React, JavaScript, CSS, Express, Webpack',
    role: 'Sole Developer',
    captains:
      'The sudoku solver was my first ever solo project. I built it first with vanilla JavaScript, HTML, and CSS. Later, I completely refactored and modularized the program using React and Webpack, and added an express server. In the development of the Sudoku Solver, my important learnings were:',
    contributions: [
      'Creating complex algorithms and data structures to emulate several sudoku solving strategies',
      'Designing an interactive UI with vanilla JS, HTML, and CSS for entering sudoku puzzle',
      'Refactoring an existing application to optimize operations and organize code',
    ],
    image: '/images/sudokuSolver.png',
    youtube: '',
    medium: '',
    url: 'https://thesudokusolver.netlify.app/',
    github: 'https://github.com/jesseswedlund/sudokuSolver',
  },
  pnwWildwater: {
    name: 'PNW Wildwater',
    description: 'A whitewater canoeing game built on Scratch',
    tech: 'Scratch',
    role: 'Sole Developer',
    captains:
      'PNW Wildwater was my first ever programming project. Scratch is a pseudo-coding program built by MIT to teach coding structure using building block puzzle pieces and an interactive art program to create the characters and setting for your game. In the development of the PNW Wildwater, my important learnings were:',
    contributions: [
      'Discovering a passion for building, creating, and coding',
      'Learning object-oriented coding structures such as loops, conditionals, booleans, and events',
    ],
    image: '/images/pnwWildwater.png',
    youtube: '',
    medium: '',
    url: 'https://scratch.mit.edu/projects/390382488/',
  },
}

export default project
