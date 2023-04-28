import store,{persistor}from "./store"
import { Provider } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import Main from './pages/main'
import ResultsComponent from './components/search/resultsComponent';
import Basket from "./components/basket/basket";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path='/home' element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/search/:query" element={<ResultsComponent />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>
        </PersistGate>
      </Provider>
    </div>
  )
}
export default App
