const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Brighte Eats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
