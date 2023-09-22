import "./App.css";
import TopPage from "./pages/TopPage";
import { useState } from "react";
import countriesJson from "./countries.json";

function App() {
  const [country, setCountry] = useState("");
  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`,
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <TopPage
        countriesJson={countriesJson}
        getCountryData={getCountryData}
        setCountry={setCountry}
      />
    </div>
  );
}

export default App;
