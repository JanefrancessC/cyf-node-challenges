import React, { useEffect, useState } from "react";
import "./App.css";
// import stratfordData from './data/Stratford.json'

function App() {
  const [city, setCity] = useState("Stratford");
  const [category, setCategory] = useState("Pharmacies");
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    fetch(`/${city}/${category}/`)
      .then((res) => res.json())
      .then((data) => setCityData(data));
  }, [city, category]);
  return (
    <div className="App">
      <h1>London City Guide</h1>
      <label htmlFor="cities">Choose a city: </label>
      <select
        id="cities"
        name="cities"
        onChange={(e) => setCity(e.target.value.toLowerCase())}
      >
        <option value="stratford">Stratford</option>
        <option value="heathrow">Heathrow</option>
        <option value="harrow">Harrow</option>
      </select>
      <section>
        <button
          value="pharmacies"
          type="button"
          onClick={(e) => setCategory(e.target.value.toLowerCase())}
        >
          Pharmacies
        </button>
        <button
          type="button"
          value="colleges"
          onClick={(e) => setCategory(e.target.value.toLowerCase())}
        >
          Schools & Colleges
        </button>
        <button
          type="button"
          value="doctors"
          onClick={(e) => setCategory(e.target.value.toLowerCase())}
        >
          Doctors
        </button>
        <button
          type="button"
          value="hospitals"
          onClick={(e) => setCategory(e.target.value.toLowerCase())}
        >
          Hospitals
        </button>
      </section>
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {cityData &&
            cityData.length > 0 &&
            cityData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.website}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
