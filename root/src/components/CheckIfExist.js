import React, { useEffect } from 'react'
import * as d3 from "d3";
import map_data from "../hooks/test04.geojson";
import map_data_reverse from "../hooks/test04_reverse.geojson";
import map_data_05 from "../hooks/test05.geojson";
import map_data_05_reverse from "../hooks/test05_reverse.geojson";

export default function CheckIfExist() {
    
    useEffect(() => {
        const test_case = (data) => {
            console.log("====================================");
            console.log("Should be true: ", d3.geoContains(data, [90.36151885986328, 23.814558578342996]));
            console.log("Should be true: ", d3.geoContains(data, [90.37799835205078, 23.812674017111572]));
            console.log("Should be true: ", d3.geoContains(data, [90.36100387573242, 23.783145654039355]));
            console.log("Should be false: ", d3.geoContains(data, [90.3247833251953, 23.814637101133965]));
            console.log("Should be false: ", d3.geoContains(data, [90.40125846862793, 23.838191793429928]));
            console.log("Should be false: ", d3.geoContains(data, [90.35636901855469, 23.770971104571466]));
        }

        magic(map_data, test_case)
        magic(map_data_reverse, test_case)

        const test_case02 = (data) => {
            console.log("====================================");
            console.log("Should be true: ", d3.geoContains(data, [-106.53579711914062, 43.00665566595925]));
            console.log("Should be true: ", d3.geoContains(data, [-106.32568359375, 42.83468845508063]));
            console.log("Should be true: ", d3.geoContains(data, [-106.33804321289061, 42.48627657532139]));
            console.log("Should be false: ", d3.geoContains(data, [-105.88211059570312, 43.115019195614124]));
            console.log("Should be false: ", d3.geoContains(data, [-105.63766479492188, 42.43257946814707]));
            console.log("Should be false: ", d3.geoContains(data, [-107.02606201171875, 42.69152056761273]));
        }
        
        magic(map_data_05, test_case02)
        magic(map_data_05_reverse, test_case02)
    }, []);
    
    const magic = (geojson, callback) => {
        d3.json(geojson)
        .then((data) => {
            // console.log(data);
            callback(data)
        })
        .catch((err) => {
            console.log("error occurred with loading map", err);
        });
    }
    
    
    return (
        <div>CHECK IF EXIST IN THE AREA</div>
    )
}
