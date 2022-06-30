import { BrowserRouter } from 'react-router-dom';
import AnimatePage from './AnimatePage';
import '@styles/App.scss'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePage />
      </BrowserRouter>
    </div>
  )
}

export default App
