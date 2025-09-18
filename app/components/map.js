// components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
iconSize: [40, 40],
});

export default function Map() {
return (
<MapContainer
center={[40.7128, -74.006]} // Example: NYC coords
zoom={13}
style={{ height: "400px", width: "100%" }}
>
<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[40.7128, -74.006]} icon={customIcon}>
<Popup>Clinic Location</Popup>
</Marker>
</MapContainer>
);
}
