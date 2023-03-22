import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import "./CityStreet.css";

function CityStreet(): JSX.Element {
  const urlCity =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1500";
  const urlStreet =
    "https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&limit=5000&q=";

  const [cities, setCities] = useState([]);
  const [streets, setStreets] = useState([]);
  const [city, setCity] = useState("");

  const getCities = async () => {
    const getData = (await axios.get(urlCity)).data.result.records;
    setCities(getData);
  };

  useEffect(() => {
    getCities();
  }, []);

  const getStreets = async (args: SyntheticEvent) => {
    const cityName = (args.target as HTMLInputElement).value;
    const myData = await (
      await axios.get(urlStreet + cityName)
    ).data.result.records;
    console.log(myData);
    setStreets(myData);
  };

  return (
    <div className="City">
      <h1>Search for city:</h1>
      <select onChange={getStreets}>
        {cities.map((item) => (
          <option key={item["סמל_ישוב"]}>{item["שם_ישוב"]}</option>
        ))}
      </select>
      <br />
      <br />
      <h1>Search for street:</h1>
      <select>
        {streets.map((item) => (
          <option key={item["סמל_רחוב"]}>{item["שם_רחוב"]}</option>
        ))}
      </select>
    </div>
  );
}

export default CityStreet;
