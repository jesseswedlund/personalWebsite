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
    url: 'https://haircutz.herokuapp.com/'
  },
  OEI: {
    name: 'Outdoor Recreation Inc.',
    description: 'REI Ecommerce site clone.',
    tech:
      'React, Redux, Express, Sequelize, PostgreSQL, Sessions, Passport, Socket.IO, Stripe, Toast, and Nodemailer',
    role: 'Full Stack Developer',
    captains: 'Some of my specific contributions were:',
    contributions: [
      'Designing the header and search bar functionality',
      'Implementing a guest checkout system using local storage',
      'Creating controlled React forms to add and edit products as an Admin',
      'Writing Redux thunks and reducers to make API calls and update state for products'
    ],
    image: '/images/OEI.png',
    youtube: '',
    medium: '',
    url: 'https://haircutz.herokuapp.com/'
  },
  riverCoach: {
    name: 'River Coach',
    description:
      'A progressive web app for connecting with whitewater paddlers',
    tech: 'React, Redux, Material UI, Node.js, and Express',
    role: 'Sole Developer',
    captains: 'During this project I accomplished:',
    contributions: [
      'Implementing a service worker to cache important static assets for return visits to increase efficiency',
      'Creating a web manifest and in-app prompt to install app',
      'Utilizing functional React components using hooks and Redux thunk calls to a RESTful API that interact with a PostgreSQL database using Sequelize',
      'Used Material UI to create an attractive user interface'
    ],
    image: '/images/riverCoach.png',
    youtube: 'https://www.youtube.com/embed/0H9AuTp1Uh0',
    medium: '',
    url: ''
  },
  sudokuSolver: {
    name: 'Sudoku Solver',
    description: 'A web app that solves Sudokus up to level "hard".',
    tech: 'JavaScript, HTML, CSS',
    role: 'Sole Developer',
    captains:
      'In the development of the Sudoku Solver, my important learnings were:',
    contributions: [
      'Creating algorithms to emulate several sudoku strategies',
      'Designing interactive UI with vanilla CSS for entering sudoku puzzle'
    ],
    image: '/images/sudokuSolver.png',
    youtube: '',
    medium: '',
    url: ''
  }
}

export default project
