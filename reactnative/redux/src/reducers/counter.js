export const INCRESE = "COUNT/INCRESE"

export const increseCount = count => (
  {type: INCRESE, count}
)

const initalState = {
  count: 0
}

const counter = (state = initalState, action) => {
  switch(action.type){
    case INCRESE:
      return{
        ...state, count: action.count
      }

    default: //default를 사용하지 않으면 맨 처음 state에 count값이 und
      return state
  }
}

export default counter