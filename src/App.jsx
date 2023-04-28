
import store from "./store"

import { Provider } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import Main from './pages/main'
import ResultsComponent from './components/resultsComponent';
import Basket from "./components/basket";
import Home from "./components/home";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/home' element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/search/:query" element={<ResultsComponent />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
