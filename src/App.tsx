import './App.css'
import { increment , decrement , incrementByAmount , resetCounter } from './store/counterSlice';
import { useAppDispatch, useAppSelector } from './store/hooks'
function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
      <div className='counter'>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(resetCounter())}>reset</button>
      </div>
    
  )
}

export default App
