import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-10 mr-6"
          width={72}
          height={72}
        />
        <h1 className="text-white text-xl font-medium">Your Company Name</h1>
      </div>
      <div className="flex">
        <Link
          href="/"
          className="px-4 py-2 mr-2 text-gray-900 font-medium hover:bg-gray-200 rounded"
        >
          Home
        </Link>
        <Link
          href="/technologyA"
          className="px-4 py-2 mr-2 text-gray-900 font-medium hover:bg-gray-200 rounded"
        >
          Technology A
        </Link>
        <Link
          href="/technologyB"
          className="px-4 py-2 mr-2 text-gray-900 font-medium hover:bg-gray-200 rounded"
        >
          Technology B
        </Link>
        <Link
          href="/about-us"
          className="px-4 py-2 mr-2 text-gray-900 font-medium hover:bg-gray-200 rounded"
        >
          About Us
        </Link>
        <Link href="/contact-us" className="bg-green-500 hover:bg-green-400 text-white font-medium py-2 px-4 rounded">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
