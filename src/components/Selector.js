import countriesJson from "../countries.json";

const Selector = () => {
    return (
        <div>
            <select>
                { countriesJson.map( (country, index) =>
                    <option key={ index }>{ country.Country }</option>
                ) }
                {/* <option>United States</option>
                <option>Japan</option> */}
            </select>
        </div>
    );
}

export default Selector;