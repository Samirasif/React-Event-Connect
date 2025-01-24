import React from "react";

const Services = () => {
  // Array of feature objects
  const features = [
    {
      imgSrc: "https://www.svgrepo.com/show/529856/calendar.svg",
      title: "Event Planning Made Simple",
      description:
        "Find the perfect event planner for your special day. Simplify the process with curated recommendations tailored to your needs.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/529839/search.svg",
      title: "Easy Search",
      description:
        "Search for event planners by location, budget, and expertise. Find the perfect match in seconds with our user-friendly interface.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/529874/briefcase.svg",
      title: "Experienced Professionals",
      description:
        "Connect with experienced event planners who specialize in weddings, corporate events, parties, and more.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/529848/price-tag.svg",
      title: "Flexible Pricing",
      description:
        "Choose from planners offering competitive pricing and packages to suit your budget and event requirements.",
      link: "/pricing",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/529844/template.svg",
      title: "Customizable Packages",
      description:
        "Explore pre-made templates for event themes and work with planners to customize every detail for your big day.",
      link: "/templates",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/529867/location-pin.svg",
      title: "Global Access",
      description:
        "Find event planners from around the world. Whether local or destination events, we’ve got you covered.",
      link: "/find-planners",
    },
  ];

  return (
    <div className="bg-gray-200 px-2 py-10">
      <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
          Meet Flowspark
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg"
            alt=""
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-gray-500 sm:text-base">
              Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
              bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla.
              Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum
              curabitur vitae nunc. Dictumst vestibulum rhoncus est
              pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
              dignissim cras tincidunt lobortis feugiat vivamus.
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
    
      <div id="features" className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Features
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Writing has never been so easy
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          {features.map((feature, index) => (
            <li key={index} className="rounded-xl bg-white px-6 py-8 shadow-sm">
              {feature.link ? (
                <a href={feature.link} className="group">
                  <img
                    src={feature.imgSrc}
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    {feature.description}
                  </p>
                </a>
              ) : (
                <>
                  <img
                    src={feature.imgSrc}
                    alt=""
                    className="mx-auto h-10 w-10"
                  />
                  <h3 className="my-3 font-display font-medium">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    {feature.description}
                  </p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
