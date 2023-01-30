const url =
  // "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
  // "https://data.gov.il/api/3/action/datastore_search?resource_id=bf9df4e2-d90d-4c0a-a400-19e15af8e95f&q=";
  "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";
// - Zeev's end point

const locateCar = () => {
  // Create a url with lpr - license plate
  const lpr = document.getElementById("lpr").value;

  fetch(url + lpr) // Go to the server and get the data
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => console.log(data.result.records[0])); // Convert the information to our data
};
