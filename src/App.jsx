import Home from "./pages/Home"
import './App.css'
import About from "./pages/About"
import CounterCls from "./layout/CounterCls"
import CounterFn from "./layout/CounterFn"
const App = () => {
  return (
    <>
    {/* <Home/>
    <About/> */}
    <CounterCls/>
      <CounterFn/>
    {/* hook is a function to use for state updation and side effect (DOM manipulation and api working) */}
    </>
  )
}

export default App