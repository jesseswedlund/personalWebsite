const SET_PROJECT = 'SET_PROJECT'
export const setProject = (project) => ({type: SET_PROJECT, project})

export default function (state = 'sudokuSolver', action) {
  switch (action.type) {
    case SET_PROJECT:
      return action.project
    default:
      return state
  }
}
