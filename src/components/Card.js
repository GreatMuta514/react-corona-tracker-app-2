import { useState } from "react";

const Card = () => {
    const [allCountriesData, setAllCountriesData] = useState([]);
    const getAllCountriesData = () => {
        fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
        .then(res => res.json())
        .then(data => setAllCountriesData(data.Countries))
    }
    return (
        <div>
            <h1>Card</h1>
            <button onClick={getAllCountriesData}>get all data</button>
        </div>
    );
};

export default Card;
