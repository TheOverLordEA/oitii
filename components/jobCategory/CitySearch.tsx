"use client";
import { useState, useEffect } from "react";
import { autocomplete } from "@/lib/google";
import {
  PlaceAutocompleteResult,
  PlaceAutocompleteType,
} from "@googlemaps/google-maps-services-js";

const CitySearch = () => {
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      const predictions = await autocomplete(input);
      setPredictions(predictions ?? []);
    };

    fetchPredictions();
  }, [input]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
};

export default CitySearch;
// "use client";

// import React, { ChangeEvent } from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
//   Suggestion,
// } from "use-places-autocomplete";

// const CitySearch: React.FC = () => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       componentRestrictions: { country: "us" }, // Restrict to U.S. cities
//       types: ["(cities)"], // Specify that we want only cities
//     },
//     debounce: 300,
//   });

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       console.log("Coordinates:", { lat, lng });
//       // You can now use lat and lng for further actions (e.g., displaying on a map)
//     } catch (error) {
//       console.error("Error fetching geocode:", error);
//     }
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         // disabled={!ready}
//         placeholder="Search for a U.S. city..."
//       />
//       <ul>
//         {status === "OK" &&
//           data.map(({ place_id, description }: Suggestion) => (
//             <li key={place_id} onClick={() => handleSelect(description)}>
//               {description}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default CitySearch;

// // src/components/CitySearch.js
// "use client";

// import React from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// const CitySearch = () => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       componentRestrictions: { country: "us" }, // Restrict to U.S. cities
//       types: ["(cities)"], // Specify that we want only cities
//     },
//     debounce: 300,
//   });

//   const handleSelect = async (address: string) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       console.log("Coordinates:", { lat, lng });
//       // You can now use lat and lng for further actions (e.g., displaying on a map)
//     } catch (error) {
//       console.error("Error fetching geocode:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         placeholder="Search for a U.S. city..."
//       />
//       <ul>
//         {status === "OK" &&
//           data.map(({ place_id, description }) => (
//             <li key={place_id} onClick={() => handleSelect(description)}>
//               {description}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default CitySearch;
