import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Hoteles disponibles</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <HotelCard
            nombre="Hotel Monterrey"
            ubicacion="Monterrey, NL"
            precio="1200"
          />

          <HotelCard
            nombre="Hotel Centro"
            ubicacion="Centro Histórico"
            precio="900"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
