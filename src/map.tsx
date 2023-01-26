import { LatLngBoundsExpression, LatLngExpression } from "leaflet";
import "./App.css";
import {
  Circle,
  MapContainer,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import {
  hexBoundary1,
  hexBoundary2,
  hexBoundary3,
  hexCenterCoordinates2,
} from "./h3";
import { useState, useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";

const SearchField = () => {
  const provider = new OpenStreetMapProvider();

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => {
      map.removeControl(searchControl);
    };
  }, []);

  return null;
};

// const TooltipCircle = () => {
//   const [clickedCount, setClickedCount] = useState(0);

//   const clickedText =
//     clickedCount === 0
//       ? "Click this Circle to change the Tooltip text"
//       : `Circle click: ${clickedCount}`;

//   return (
//     <Circle
//       center={hexCenterCoordinates2}
//       eventHandlers={{
//         click: () => {
//           console.log("clicked");
//           return setClickedCount(clickedCount + 1);
//         },
//       }}
//       pathOptions={{ fillColor: "blue" }}
//       radius={200}
//       className="circle"
//     >
//       <Tooltip>{clickedText}</Tooltip>
//     </Circle>
//   );
// };

export const Map = () => {
  const center = [14.636681390481519, -90.50629388386255] as LatLngExpression;

  console.log(hexBoundary1);

  const multiPolyline = hexBoundary2 as any;

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ] as LatLngExpression[];

  const multiPolygon = hexBoundary1 as any;

  // const rectangle = [
  //   [51.49, -0.08],
  //   [51.5, -0.06],
  // ] as LatLngBoundsExpression;

  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };

  return (
    <div id="map" style={{ height: "180px" }}>
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        Hello
      </div>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <SearchField />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
        <CircleMarker
          center={[51.51, -0.12]}
          pathOptions={redOptions}
          radius={20}
        >
          <Popup>Popup in CircleMarker</Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </CircleMarker> */}

        {/* <Polyline pathOptions={limeOptions} positions={polyline} /> */}
        {/* <TooltipCircle /> */}
        <Polygon pathOptions={limeOptions} positions={multiPolyline}>
          <Popup>Routers: 9</Popup>
        </Polygon>

        <Polygon pathOptions={purpleOptions} positions={polygon} />
        {/* <Polygon pathOptions={purpleOptions} positions={multiPolygon} / */}
        <Polygon pathOptions={purpleOptions} positions={multiPolygon}>
          <Tooltip sticky>Sticky tooltip</Tooltip>
        </Polygon>
        <Polygon pathOptions={redOptions} positions={hexBoundary3}>
          <Popup>Routers: 10</Popup>
        </Polygon>
        {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
      </MapContainer>
    </div>
  );
};
