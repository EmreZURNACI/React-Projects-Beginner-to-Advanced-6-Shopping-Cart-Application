import { Provider } from "react-redux";
import { store } from './Store/Store.js'
import Modal from "./Modal.jsx";
import Urunler from "./Urunler.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Urunler />} />
          <Route path="basket" element={<Modal />} />
        </Routes>
      </Provider>
    </BrowserRouter>


  );
}

export default App;
