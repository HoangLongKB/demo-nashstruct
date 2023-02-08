import Head from "next/head";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <Head>
        <meta
          name="description"
          content="Learn about the history and mission of Your Website Name."
        />
      </Head>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="w-full max-w-md text-gray-800">
        <p>
          Your Website Name is a technology company that provides innovative
          solutions for businesses and individuals. Our mission is to make
          technology accessible and easy to use for everyone.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Our History</h2>
        <p>
          Founded in 2020, Your Website Name has quickly become a leader in the
          technology industry. Our team of experts has a passion for innovation
          and a commitment to excellence, which has helped us to grow and
          succeed.
        </p>
        <h2 className="text-xl font-bold mt-6 mb-2">Our Team</h2>
        <p>
          Our team is made up of talented individuals who bring a variety of
          skills and experiences to the table. From software engineers to
          designers, our team works tirelessly to bring our customers the best
          possible products and services.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
