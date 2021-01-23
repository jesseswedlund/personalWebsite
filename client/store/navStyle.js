const SET_STYLE = 'SET_STYLE'
const SET_SELECTED = 'SET_SELECTED'
const initialStyle = {style: 'navBarHome', selected: 'home'}
export const setStyle = style => ({type: SET_STYLE, style})
export const setSelected = selected => ({type: SET_SELECTED, selected})

export default function(state = initialStyle, action) {
  switch (action.type) {
    case SET_STYLE:
      return {style: action.style, selected: state.selected}
    case SET_SELECTED:
      return {style: state.style, selected: action.selected}
    default:
      return state
  }
}
