import { useQuiz } from "../../context";
import { Navbar } from "../../components";
import { Fragment } from "react";
import "./Result.css";

export const Result = () => {
    
    const { score } = useQuiz();

    return (
        <Fragment>
            <Navbar route="result"/>
            <main className="results d-flex direction-column align-center justify-center">
                <h2>Result</h2>
                <div>
                    <span>Your Score is { score } 🎉🎉</span>
                </div>
            </main>
        </Fragment>
    )
}