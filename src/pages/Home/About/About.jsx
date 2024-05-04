import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="hero font-serif min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-4 top-1/2 border-8 border-orange-700 rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-2">
            <h3 className="text-3xl text-orange-700 font-bold">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which  look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which  look even slightly
              believable.
            </p>
            <button className="btn btn-outline rounded-sm border-2 bg-orange-700 bg-opacity-95 text-white border-orange-700">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
