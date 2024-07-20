// import React, { useEffect, useState } from "react";
// import CountryCard from "../Card/CountryCard";
// import styles from "./Countries.module.css";
// import SearchBox from "../SearchBox/SearchBox";

// function Countries() {
//   const API_URL = "https://restcountries.com/v3.1/all";
//   const [countries, setCountries] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         setCountries(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   // Updated filtering logic for the new API data structure
//   const filteredCountries = countries.filter((country) =>
//     country.name.common.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className={styles.countries}>
//       <SearchBox search={search} handleSearch={handleSearch} />
//       <div className={styles.grid}>
//         {filteredCountries.length > 0 ? (
//           filteredCountries.map((country) => (
//             <CountryCard
//               key={country.cca3} // Using cca3 as a unique key
//               name={country.name.common} // Accessing common name
//               flagImg={country.flags.svg} // Accessing SVG flag URL
//             />
//           ))) : (
//           <p>No countries found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Countries;

import React, { useEffect, useState } from "react";
import CountryCard from "../Card/CountryCard";
import styles from "./Countries.module.css";
import SearchBox from "../SearchBox/SearchBox";

function Countries() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.countries}>
      <SearchBox search={search} handleSearch={handleSearch} />
      <div className={styles.countryCard}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3} 
            name={country.name.common} 
            flagImg={country.flags.svg} 
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;