import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools, useMapTools2 } from "../hooks/useMapTools";
import HealthRegion from "./HealthRegion";
import "./HealthRegionList.css";

export default function HealthRegionList(props) {
  // step 1: load geoJSON and create tooltip
  const {mapData} = useMapTools();

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));

    // console.log(d3.geoContains(mapData.data, [-90.36529541015625, 24.601762580418423]));
    // console.log(d3.geoContains(mapData.data, [-90.45867919921875, 24.329579224758987]));
    console.log(d3.geoContains(mapData.data, [-90.29251098632812, 24.475900136285446]));
    console.log(d3.geoContains(mapData.data, [-90.52871704101562, 24.525885444592642]));

    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const healthRegions = mapData.data.features.map((data) => {
      const region_name = data.properties["NAME_ENG"];
      return (
        <HealthRegion
          key={data.properties.FID}
          path={path(data)}
          tooltipData={region_name}
        />
      );
    });

    return (
      <>
        <h1>Ontario's 34 Public Health Regions</h1>
        <svg className="map-canvas">
          <g>{healthRegions}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
