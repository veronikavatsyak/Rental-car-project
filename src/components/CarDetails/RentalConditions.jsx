const RentalConditions = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Rental Conditions:</h2>
      <ul className="list">
        {car.rentalConditions.map((item, index) => {
          return (
            <li className="item" key={`rental-${index}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RentalConditions;
