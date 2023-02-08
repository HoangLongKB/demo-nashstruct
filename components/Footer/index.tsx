import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white p-6 flex items-center justify-between">
      <p className="text-gray-900 font-medium text-sm">
        Copyright &copy; {new Date().getFullYear()} Company Name
      </p>
      <div className="flex">
        <Link href="/" className="text-gray-600 text-base px-4">
          Home
        </Link>
        <Link href="/" className="text-gray-600 text-base px-4">
          Technology A
        </Link>
        <Link href="/" className="text-gray-600 text-base px-4">
          Technology B
        </Link>
        <Link href="/" className="text-gray-600 text-base px-4">
          About Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
