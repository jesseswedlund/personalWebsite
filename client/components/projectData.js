const project = {
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
      'Deploying as a web app with Heroku'
    ],
    image: '/images/haircutz.png',
    youtube: 'https://www.youtube.com/embed/t47zl9t8a4E',
    medium: '',
    url: 'https://haircutz.herokuapp.com/',
    github: 'https://github.com/2009-FSA-CS-Lucians-Lightbringers/haircutzGame'
  },
  OEI: {
    name: 'Outdoor Recreation Inc.',
    description: 'REI Ecommerce site clone',
    tech:
      'React, Redux, Express, Sequelize, PostgreSQL, Sessions, Passport, Socket.IO, Stripe, Toast, and Nodemailer',
    role: 'Full Stack Developer',
    captains:
      'OEI was designed and built by a team of three in just 7 days. Some of my specific contributions were:',
    contributions: [
      'Designing the header and search bar functionality',
      'Implementing a guest checkout system using local storage',
      'Creating controlled React forms to add and edit products as an Admin',
      'Writing Redux thunks and reducers to make API calls and update state for products'
    ],
    image: '/images/OEI.png',
    youtube: '',
    medium: '',
    url: 'https://outdoor-equipment-incorporated.herokuapp.com/products',
    github: 'https://github.com/The-Shopper-Awakens/graceshopper'
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
      'Used Material UI to create an attractive user interface'
    ],
    image: '/images/riverCoach.png',
    youtube: 'https://www.youtube.com/embed/u6Orm3mcK54',
    medium:
      'https://medium.com/swlh/progressive-web-applications-what-they-are-why-theyre-hot-right-now-and-how-to-build-one-3c6c131f55d6',
    url: ''
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
      'Refactoring an existing application to optimize operations and organize code'
    ],
    image: '/images/sudokuSolver.png',
    youtube: '',
    medium: '',
    url: 'https://thesudokusolver.herokuapp.com/',
    github: 'https://github.com/jesseswedlund/sudokuSolver'
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
      'Learning object-oriented coding structures such as loops, conditionals, booleans, and events'
    ],
    image: '/images/pnwWildwater.png',
    youtube: '',
    medium: '',
    url: 'https://scratch.mit.edu/projects/390382488/'
  }
}

export default project
