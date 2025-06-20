const CarSpecifications = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Car Specifications:</h2>
      <ul className="list">
        <li className="item" key="year">
          Year: {car.year}
        </li>
        <li className="item" key="type">
          Type: {car.type}
        </li>
        <li className="item" key="fuel">
          Fuel Consumption: {car.fuelConsumption}
        </li>
        <li className="item" key="size">
          Engine Size: {car.engineSize}
        </li>
      </ul>
    </div>
  );
};

export default CarSpecifications;
