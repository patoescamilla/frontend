function HotelCard({ nombre, ubicacion, precio }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "250px",
      }}
    >
      <h3>{nombre}</h3>
      <p>{ubicacion}</p>
      <p>
        <strong>${precio} / noche</strong>
      </p>
      <button style={{ marginTop: "10px" }}>
        Ver disponibilidad
      </button>
    </div>
  );
}

export default HotelCard;
