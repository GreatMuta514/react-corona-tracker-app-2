import Header from "../components/Header";
import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = (props) => {
  return (
    <div>
      <Header />
      <Title />
      <Selector
        countriesJson={props.countriesJson}
        getCountryData={props.getCountryData}
        setCountry={props.setCountry}
      />
      <Results countryData={props.countryData} />
    </div>
  );
};

export default TopPage;
