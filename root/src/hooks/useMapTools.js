import * as d3 from "d3";
import { useState, useEffect } from "react";
// import map_data from "./map_data.geojson"
import map_data from "./cheez.geojson";
// import map_data from "./test03.geojson"

export const useMapTools = function () {
  // store loaded map data in a state
  const [mapData, setMapData] = useState({
    data: {},
    loading: true,
  });

  // only fetch map data once and create a tooltip
  useEffect(() => {
    // d3.json("https://xihai01.github.io/friendly-journey/map_data.geojson")
    d3.json(map_data)
      .then((data) => {
        console.log(data);
        setMapData((prevState) => {
          return { ...prevState, data: data, loading: false };
        });
      })
      .catch((err) => {
        console.log("error occurred with loading map", err);
      });

    /// tooltip creation
    d3.select("body")
      .append("div")
      .attr("id", "tooltip")
      .attr("style", "position: absolute; opacity: 0");
    ///
  }, []);

  return { mapData };
};



// export const useMapTools2 = function () {
//   // store loaded map data in a state
//   const [mapData2, setMapData2] = useState({
//     data: {},
//     loading: true,
//   });

//   // only fetch map data once and create a tooltip
//   useEffect(() => {
//     d3.json(example)
//       .then((data) => {
//         console.log(data);
//         // setMapData2((prevState) => {
//         //   return { ...prevState, data: data, loading: false };
//         // });
//       })
//       .catch((err) => {
//         console.log("error occurred with loading map", err);
//       });
//   }, []);

//   return { mapData2 };
// };
