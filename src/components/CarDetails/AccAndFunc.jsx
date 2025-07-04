const AccAndFunc = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Accessories and Functionalities:</h2>
      <ul className="list">
        {car.accessories.map((item, index) => {
          return (
            <li className="item" key={`access-${index}`}>
              <svg className="icon" width="16" height="16" viewBox="0 0 16 16">
                <use href="/icons/sprite.svg#icon-check-circle" />
              </svg>
              {item}
            </li>
          );
        })}

        {car.functionalities.map((item, index) => {
          return (
            <li className="item" key={`function-${index}`}>
              <svg className="icon" width="16" height="16" viewBox="0 0 16 16">
                <use href="/icons/sprite.svg#icon-check-circle" />
              </svg>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccAndFunc;
