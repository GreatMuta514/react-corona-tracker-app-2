import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage";
import WorldPage from "./pages/WorldPage";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  useEffect(() => {
      fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then((res) => res.json())
      .then((data) => setAllCountriesData(data.Countries));
  }, []);

  const getCountryData = () => {
    fetch(
      `https://monotein-books.vercel.app/api/corona-tracker/country/${country}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed:
            data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered:
            data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
        console.log(data);
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TopPage
              countriesJson={countriesJson}
              getCountryData={getCountryData}
              setCountry={setCountry}
              countryData={countryData}
            />
          }
        />
        <Route
          path="/world"
          element={
            <WorldPage
              allCountriesData={allCountriesData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
