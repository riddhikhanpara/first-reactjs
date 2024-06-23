import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SIgnup from "./component/SIgnup";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen">
        <Header />
        <div className=" h-[calc(100%-100px)]">
          <Routes>
            <Route path="/" element={""} />
            <Route path="/logout" element={""} />
            <Route path="/delete" element={""} />
            <Route path="/add" element={""} />
            <Route path="/update" element={""} />
            <Route path="/profile" element={"ddfgfg"} />
            <Route path="/signup" element={<SIgnup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
