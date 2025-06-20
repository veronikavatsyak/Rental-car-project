const AccAndFunc = ({ car }) => {
  return (
    <div className="details">
      <h2 className="title">Accessories and Functionalities:</h2>
      <ul className="list">
        {car.accessories.map((item, index) => {
          return (
            <li className="item" key={`access-${index}`}>
              {item}
            </li>
          );
        })}
        ;
        {car.functionalities.map((item, index) => {
          return (
            <li className="item" key={`function-${index}`}>
              {item}
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
};

export default AccAndFunc;
