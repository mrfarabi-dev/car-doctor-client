import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-56" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-around items-center">
          <p className="text-orange-700 text-xl">Price : ${price}</p>
          <button>
            <FaArrowRight className="text-orange-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
