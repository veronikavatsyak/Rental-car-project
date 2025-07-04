const RentalConditions = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Rental Conditions:</h2>
      <ul className="list">
        {car.rentalConditions.map((item, index) => {
          return (
            <li className="iconWrap" key={`rental-${index}`}>
              <svg className="icon" viewBox="0 0 16 16" width="16" height="16">
                <use href="/icons/sprite.svg#icon-check-circle" />
              </svg>
              <span className="item">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RentalConditions;
