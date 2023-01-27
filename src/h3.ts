import { cellToBoundary, cellToLatLng, latLngToCell } from "h3-js";

const baseLatLong = [14.627047927176175, -90.49565087885661];

const latsAndLongs = [
  {
    coordinates: [baseLatLong[0], baseLatLong[1]],
    routers: 10,
    size: 7,
  },
];

for (let i = 0; i < 20; i++) {
  latsAndLongs.push({
    coordinates: [
      baseLatLong[0] - 0.01 * (i + 1),
      baseLatLong[1] - 0.01 * (i + 1),
    ],
    routers: i + 1,
    size: 7,
  });
}

for (let i = 0; i < 20; i++) {
  latsAndLongs.push({
    coordinates: [
      baseLatLong[0] + 0.01 * (i + 1),
      baseLatLong[1] + 0.01 * (i + 1),
    ],
    routers: i + 1,
    size: 7,
  });
}

export const coordinates = latsAndLongs;

// Convert a lat/lng point to a hexagon index at resolution 7
const h3Index = latLngToCell(14.627047927176175, -90.49565087885661, 7);
const h3Index2 = latLngToCell(14.636780442911116, -90.51044717335232, 7);
const h3Index3 = latLngToCell(14.668086900926687, -90.45654919715676, 8);
// -> '87283472bffffff'

// Get the center of the hexagon
export const hexCenterCoordinates = cellToLatLng(h3Index);
export const hexCenterCoordinates2 = cellToLatLng(h3Index2);
// -> [37.35171820183272, -122.05032565263946]

// Get the vertices of the hexagon
export const hexBoundary1 = cellToBoundary(h3Index);
export const hexBoundary2 = cellToBoundary(h3Index2);
export const hexBoundary3 = cellToBoundary(h3Index3);
// -> [ [37.341099093235684, -122.04156135164334 ], ...]
