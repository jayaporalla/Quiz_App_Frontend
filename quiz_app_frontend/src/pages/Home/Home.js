import { Navbar, QuizCard } from "../../components/index";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const {data: {data}} = await axios.get("https://quiz-app-backend-yp5k.onrender.com/categories");
                setCategories(data);
            } catch(err){
                console.log(err);
            }
        })();
    }, []);

    return (
        <Fragment>
            <Navbar route="home" />
            <main className="main d-flex wrap gap-md align-center justify-center">
                {
                    categories.map((category) => (
                    <QuizCard category={category} key={category.id}/>
                ))}
            </main>
        </Fragment>
    );
};