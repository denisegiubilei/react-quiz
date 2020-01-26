export const ACTIONS = {
  UPDATE : 'update',
  ANSWER: 'answer',
  ADD_POINT: 'addPoint',
  REFRESH: 'refresh',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return {
        ...state,
        quiz: [...action.quiz]
      }
    case ACTIONS.ADD_POINT:
      return {
        ...state,
        points: state.points + 1
      }
    case ACTIONS.ANSWER:
      return {
        ...state,
        answered: state.answered + 1
      }
    case ACTIONS.REFRESH:
      return {
        ...state,
        quiz: JSON.parse(JSON.stringify(state.originalQuiz)),
        answered: 0,
        points: 0
      }
    default:
      return state
  }
}
