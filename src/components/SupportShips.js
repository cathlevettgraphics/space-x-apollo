const SupportShips = ({ ships }) => {
  return (
    <ul>
      <p>{ships.length} Support ships involved: </p>
      {ships.map((ship) => (
        <li key={ship.name}>
          <img src={ship.image} alt="" width="250" />
          <p>
            {ship.name}, {ship.home_port}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SupportShips;
