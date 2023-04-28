
import SearchResults from './components/searchResults'
import store from "./store"

import { Provider } from 'react-redux'
import {  Routes, Route } from "react-router-dom";
import Main from './pages/main'
import ResultsComponent from './components/resultsComponent';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
            <Route  path="/" element={<Main />} />
            <Route  path="/search/:query" element={<ResultsComponent/>} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App
