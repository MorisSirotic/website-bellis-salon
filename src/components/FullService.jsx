export const FullService = (props) => {
  return (
    <div className="flex flex-col text-center w-full border-b-2 border-b-gray-400">
      <h1 className="text-2xl mb-4 font-bold">
        {props.num} {props.title}
      </h1>
      <div className="flex justify-between">
        <h2 className="text-md">{props.hair1 ? props.hair1 : "Kratka"}</h2>
        <h2 className="text-md">{props.hair2 ? props.hair2 : "Srednja"}</h2>
        <h2 className="text-md">{props.hair3 ? props.hair3 : "Duga"}</h2>
      </div>

      <div className="flex justify-between mb-4">
        {props.prices.map((item, index) => {
          if (index === 2) {
            return (
              <div key={index} className="flex mr-[-10px] self-end text-end">
                <TextService price={item.price} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <TextService price={item.price} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export const TextService = (props) => {
  const { price } = props;

  const convertedPrice = (price * 7.5345).toString();
  const decimalIndex = convertedPrice.indexOf(".");
  const formattedNum = convertedPrice.substring(0, decimalIndex + 3);

  if (price == 0) {
    return (
      <div className="flex w-full flex-col text-center">
        <h2 className="text-2xl w-12">X</h2>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col text-center">
      <div className="flex flex-col">
        <span>{price}€</span>

        <span>{formattedNum}kn</span>
      </div>
    </div>
  );
};
