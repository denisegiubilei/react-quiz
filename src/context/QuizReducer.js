
import quizData from '../static/data/quiz'

export const initialState = {
  originalQuiz: JSON.parse(JSON.stringify(quizData)),
  questions: [...quizData.questions],
  answered: 0,
  points: 0
}

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
        questions: [...action.questions]
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
        ...initialState,
        questions: JSON.parse(JSON.stringify(state.originalQuiz.questions)),
      }
    default:
      return state
  }
}
