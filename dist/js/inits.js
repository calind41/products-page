const dom = (selector) => document.querySelector(selector);
const domAll = (selector) => document.querySelectorAll(selector);

const productsList = dom(".productsList");
const filters = domAll(".filtersList .wrapper > div:not(:first-child)");

const leafletMapInstance = L.map("mapId", {
  scrollWheelZoom: false,
}).setView([42.253, -71.033], 15);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiY2FsaW5kb2RvbiIsImEiOiJjanN5bHgwczAxMXM0NDRvZHZteWs1MnlsIn0.VNFi_gaQFckCbOr3NZmJjg",
  }
).addTo(leafletMapInstance);
