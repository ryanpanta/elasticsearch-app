import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import { SearchProvider } from "./SearchContext";
function App() {
    return (
        <div>
            <BrowserRouter>
                <SearchProvider>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="result" element={<Result />} />
                        </Routes>
                    </main>
                </SearchProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
