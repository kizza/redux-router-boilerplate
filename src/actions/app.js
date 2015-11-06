export const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function showMessage() {
  console.log('SHOW MESSAGE')
  return {
    type: SHOW_MESSAGE
  }
}

export function changeTitle(){
  console.log('changeTitle')
  return {
    type: 'CHANGE_TITLE'
  }
}

