import { FullService } from "./FullService";

export const Services = (props) => {
  return (
    <div className="flex flex-col bg-gradient-to-l  from-pink-200 to-slate-200 p-4">
      {/* Kratka - left */}
      <FullService
        num="1"
        title="Šišanje Na Nulu"
        prices={[{ price: "4" }, { price: "4" }, { price: "4" }]}
      />
      <FullService
        num="2"
        title="Šišanje Kose i Sušenje"
        prices={[{ price: "3" }, { price: "4" }, { price: "6" }]}
      />
      <FullService
        num="3"
        title="Šišanje Sa Mašinicom"
        prices={[{ price: "6" }, { price: "6" }, { price: "6" }]}
      />
      <FullService
        num="4"
        title="Šišanje"
        prices={[{ price: "8" }, { price: "8" }, { price: "8" }]}
      />
      <FullService
        num="5"
        title="Šišanje I Pranje"
        prices={[{ price: "8" }, { price: "10" }, { price: "11" }]}
      />

      <FullService
        num="6"
        title="Šišanje, Pranje I Feniranje"
        prices={[{ price: "14" }, { price: "15" }, { price: "16" }]}
      />

      <FullService
        num="7"
        title="Farbanje, Šišanje I Feniranje"
        prices={[{ price: "22" }, { price: "24" }, { price: "27" }]}
      />

      <FullService
        num="8"
        title="Pramenovi, Šišanje I Feniranje"
        prices={[{ price: "22" }, { price: "24" }, { price: "30" }]}
      />

      <FullService
        num="9"
        title="Muško Šišanje + Pramenovi"
        prices={[{ price: "16" }, { price: "16" }, { price: "16" }]}
      />

      <FullService
        num="10"
        title="Trajna Šišanje I Feniranje"
        prices={[{ price: "23" }, { price: "27" }, { price: "34" }]}
      />

      <FullService
        num="11"
        title="Feniranje Frizure"
        prices={[{ price: "8" }, { price: "10" }, { price: "11" }]}
      />
      <FullService
        num="12"
        title="Pakung"
        prices={[{ price: "3" }, { price: "3" }, { price: "3" }]}
      />

      <FullService
        num="13"
        title="Štucanje Brade"
        prices={[{ price: "3" }, { price: "3" }, { price: "3" }]}
      />

      <FullService
        num="14"
        title="Svečana Frizura"
        hair2="Srednje Duga"
        prices={[{ price: "0" }, { price: "16" }, { price: "20" }]}
      />

      <FullService
        num="15"
        title="Farbanje + Pramenovi + Šišanje + Fen Frizura"
        hair2="Srednje Duga"
        prices={[{ price: "27" }, { price: "34" }, { price: "40" }]}
      />
    </div>
  );
};

const Service = (props) => {
  const { name, price, img } = props;

  return (
    <div className="flex w-36 flex-col m-1 text-center">
      <div className="h-36 w-36">
        <img src={img} />
      </div>
      <span className="">{name}</span>
      <span>{price}</span>
    </div>
  );
};

{
  /* <Service
name="Kratka rgjngtj gttggt fr f frf f "
price="€8"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Duga"
price="€10"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Kratka rgjngtj gttggt fr f frf f "
price="€8"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Duga"
price="€10"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Kratka rgjngtj gttggt fr f frf f "
price="€8"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Duga"
price="€10"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Kratka rgjngtj gttggt fr f frf f "
price="€8"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Duga"
price="€10"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Kratka rgjngtj gttggt fr f frf f "
price="€8"
img="https://via.placeholder.com/400/300"
/>
<Service
name="Duga"
price="€10"
img="https://via.placeholder.com/400/300"
/> */
}
