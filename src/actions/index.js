import { NUMBER, OPERATOR, EVALUATE, DOT, CLEAR } from './type';

export const enterNmber = number => {
  return {
    type: NUMBER,
    payload: number
  }
}

export const enterOperator = operator => {
  return {
    type: OPERATOR,
    payload: operator
  }
}

export const enterEvaluate = () => {
  return {
    type: EVALUATE
  }
}

export const enterDot = () => {
  return {
    type: DOT
  }
}

export const enterAC = () => {
  return {
    type: CLEAR
  }
}