import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { ReactTutorial } from "./react-tutorial";
import { PythonTutorial } from "./python-tutorial";
import { TutorialHome } from "./tutorial-home";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="p-3 bg-light border d-flex justify-content-between text-center mt-2">
                    <div className="fs-3 fw-bold">Tutorial Home</div>
                    <div>
                        <nav>
                            <span className="mx-4"> <Link to="/"> Home </Link> </span>
                            <span className="mx-4"> <Link to="/java"> Java </Link> </span>
                            <span className="mx-4"> <Link to="/react"> React </Link> </span>
                            <span className="mx-4"> <Link to="/python"> Python </Link> </span>
                        </nav>
                    </div>
                    <div>
                        <button className="btn btn-warning">Sigin</button>
                    </div>
                </header>
                <section className="mt-4">
                    <Routes>
                        <Route path="/" element={<TutorialHome />} />
                        <Route path="java" element={<JavaTutorial />} />
                        <Route path="react" element={<ReactTutorial />} />
                        <Route path="python" element={<PythonTutorial />} />
                        <Route path="*" element={<div>Not Found - Requested path not found</div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}