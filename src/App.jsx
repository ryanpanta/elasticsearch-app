import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import { SearchProvider } from "./SearchContext";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SearchProvider>
                    <Header />
                    <main className="mainApp">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="result" element={<Result />} />
                        </Routes>
                    </main>
                    <Footer />
                </SearchProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
