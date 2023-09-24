import Card from "../components/Card";

const WorldPage = (props) => {
  return (
    <div>
      <Card
        allCountriesData={props.allCountriesData}
      />
    </div>
  );
};

export default WorldPage;
