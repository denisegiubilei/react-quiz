import quizData from '../data/quiz'

const originalQuiz = JSON.parse(JSON.stringify(quizData))

export const ACTIONS = {
  UPDATE : 'update',
  ADD_POINT: 'addPoint',
  FINISHED: 'finished',
  REFRESH: 'refresh'
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
    case ACTIONS.FINISHED:
      return {
        ...state,
        points: state.finished + 1
      }
    case ACTIONS.REFRESH:
      return {
        ...state,
        quiz: JSON.parse(JSON.stringify(originalQuiz)),
        finished: 0,
        points: 0
      }
    default:
      return state
  }
}
