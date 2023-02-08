const TechnologyB = () => {
  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Technology B</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          efficitur, velit vel mollis congue, odio velit laoreet est, at congue
          mi ante vel mi. Sed hendrerit, magna id pellentesque sollicitudin,
          lectus quam malesuada libero, vel dictum erat ipsum eget metus.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <i className="fas fa-rocket fa-7x text-indigo-500"></i>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Feature 1</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <i className="fas fa-cogs fa-7x text-indigo-500"></i>
            <h3 className="text-xl font-bold text-gray-800 mt-4">Feature 2</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyB;
