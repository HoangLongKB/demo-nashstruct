import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nash Demo Structure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 py-20">
        <h1 className="text-3xl font-medium text-gray-900 mb-6">
          Welcome to Your Company
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl in sollicitudin commodo, ligula ante varius lacus, non bibendum
          mauris erat eget elit. Aliquam erat volutpat. Integer tempor risus id
          elit tempor, at posuere sapien laoreet.
        </p>
        <p className="text-lg text-gray-700 mb-12">
          Ut quis libero rutrum, porta libero non, bibendum tellus. Fusce
          pellentesque auctor leo ac fringilla. Sed lacinia, nulla eu facilisis
          tincidunt, nulla risus congue magna, vel suscipit magna tellus eget
          ipsum. Curabitur auctor commodo enim, vel elementum nibh tristique
          vel.
        </p>
        <p className="text-lg text-gray-700 mb-12">
          Nullam efficitur blandit sem eu laoreet. Sed bibendum tellus vitae
          suscipit viverra. Nullam a nisl blandit, tempor nisl eget, laoreet
          nulla. Sed eget consectetur risus, non posuere risus.
        </p>
        <div className="bg-white p-6">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/3 px-6 mb-6">
              <Link href="/" className="text-dark-grey hover:text-green-dark">
                <div className="bg-grey-lightest p-6 shadow-md hover:shadow-lg">
                  <h3 className="font-bold text-lg mb-3">Home</h3>
                  <p className="text-sm">Learn more about our technology A</p>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6">
              <Link
                href="/technologyA"
                className="text-dark-grey hover:text-green-dark"
              >
                <div className="bg-grey-lightest p-6 shadow-md hover:shadow-lg">
                  <h3 className="font-bold text-lg mb-3">Technology A</h3>
                  <p className="text-sm">
                    Discover the benefits of technology A
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6">
              <Link
                href="/technologyB"
                className="text-dark-grey hover:text-green-dark"
              >
                <div className="bg-grey-lightest p-6 shadow-md hover:shadow-lg">
                  <h3 className="font-bold text-lg mb-3">Technology B</h3>
                  <p className="text-sm">
                    Explore the features of technology B
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6">
              <Link
                href="/about-us"
                className="text-dark-grey hover:text-green-dark"
              >
                <div className="bg-grey-lightest p-6 shadow-md hover:shadow-lg">
                  <h3 className="font-bold text-lg mb-3">About Us</h3>
                  <p className="text-sm">Get to know our team and mission</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/contact-us"
            className="bg-green-500 hover:bg-green-400 text-white font-medium py-2 px-4 rounded"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}
