import { useReducer } from 'react'
import './App.css'

interface State {
  isDark: boolean,
  fSize: number
}

type Action = {
  type: 'toggleMode' | 'increase' | 'decrease'
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggleMode': 
      return {...state, isDark: !state.isDark}
    case 'increase':
      return {...state, fSize: Math.min(20, state.fSize + 1)}
    case 'decrease':
      return {...state, fSize: Math.max(1, state.fSize - 1)}
    default: 
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { isDark: false, fSize: 16 });

  const bodyClass = () => {
    let originalClasses = 'w-screen h-screen flex flex-col justify-center items-center '

    return state.isDark 
      ? originalClasses += 'bg-black text-white'
      : originalClasses += 'bg-white text-black'
  }

  const baseBtnClass = () => {
    return 'rounded-lg  px-4 py-2 cursor-pointer'
  }

  const toggleMode = () => {
    dispatch({type: 'toggleMode'})
  }

  const increaseFontSize = () => {
    dispatch({type: 'increase'})
  }

  const descreaseFontSize = () => {
    dispatch({type: 'decrease'})
  }

  return (
    <>
      <div className={bodyClass()}>
        <div 
          className='text-center' 
          style={{ fontSize: `${state.fSize}px` }}
        >Font Context</div>
        <div className='flex flex-col w-50 justify-center gap-4 mt-10'>
          <button 
            className={`${baseBtnClass()} bg-amber-500`} 
            onClick={toggleMode}
          >
            Toggle Dark Mode
          </button>
          <button 
            className={`${baseBtnClass()} bg-green-500`} 
            onClick={increaseFontSize}
          >
            Increase Font Size
          </button>
          <button 
            className={`${baseBtnClass()} bg-red-500`} 
            onClick={descreaseFontSize}
          >
            Decrease Font Size
          </button>
        </div>
      </div>
    </>
  )
}

export default App
