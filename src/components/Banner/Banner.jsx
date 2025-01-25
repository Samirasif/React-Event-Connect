
const Banner = () => {
    return (  
      <section> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"> {/* Title */} <div className="mb-12 flex flex-col md:flex-row">
      <h2 className="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16"> Facts about FlowSpark </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <h3>10,000+</h3>
          <p>Users</p>
        </div>
        <p className="mt-4 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead. </p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <h3>460+</h3>
          <p>Components</p>
        </div>
        <p className="mt-4 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead. </p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <h3>50%</h3>
          <p>Time Savings</p>
        </div>
        <p className="mt-4 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead. </p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <h3>5-Star</h3>
          <p>User Satisfaction</p>
        </div>
        <p className="mt-4 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead. </p>
      </div>
    </div>
  </div>
</section>
    );
};

export default Banner;