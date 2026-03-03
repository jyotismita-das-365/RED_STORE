import logo from "../assets/logo/logo-white.png";
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <img src={logo} alt="logo" className="h-12 mb-5" />
        <h2 className="text-lg">
          Our purpose is to sustainably make the pleasure and benefits of sports
          accessible to the many.
        </h2>

        <div className="mt-7">
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                About Us
              </a>
            </li>
            <li>
              <a href="/products">
                Products
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
