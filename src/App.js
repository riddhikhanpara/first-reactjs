import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SIgnup from "./component/SIgnup";
import PrivateCompenent from "./component/PrivateCompenent";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen">
        <Header />
        <div className=" h-[calc(100%-100px)]">
          <Routes>
            <Route element={<PrivateCompenent />}>
              <Route path="/" element={""} />
              <Route path="/logout" element={""} />
              <Route path="/delete" element={""} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update" element={""} />
              <Route path="/profile" element={"ddfgfg"} />
            </Route>
            <Route path="/signup" element={<SIgnup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
