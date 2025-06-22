const CarSpecifications = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Car Specifications:</h2>
      <ul className="list">
        <li className="item" key="year">
          <svg className="icon" width="16" height="16">
            <use href="/icons/symbol-defs.svg#icon-calendar" />
          </svg>
          Year: {car.year}
        </li>
        <li className="item" key="type">
          <svg className="icon" width="16" height="16">
            <use href="/icons/symbol-defs.svg#icon-car" />
          </svg>
          Type: {car.type}
        </li>
        <li className="item" key="fuel">
          <svg className="icon" width="16" height="16">
            <use href="/icons/symbol-defs.svg#icon-fuel-pump" />
          </svg>
          Fuel Consumption: {car.fuelConsumption}
        </li>
        <li className="item" key="size">
          <svg className="icon" width="16" height="16">
            <use href="/icons/symbol-defs.svg#icon-gear" />
          </svg>
          Engine Size: {car.engineSize}
        </li>
      </ul>
    </div>
  );
};

export default CarSpecifications;
