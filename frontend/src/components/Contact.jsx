import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold p-10 pt-10 pb-5 text-center">
          Get In Touch
        </h1>
        <p className="pb-24 p-8 text-center text-xl text-slate-500">
          We'd love to hear from you. Reach out through the form below or find
          our details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-6xl mx-auto">
        <div className="flex-1 border-2 shadow-lg p-10 rounded-lg">
          <h1 className="text-3xl font-bold pb-3">Contact Details</h1>
          <hr className="border-red-500 border-t-2 mb-6" />

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Our Headquarters</h3>
                <p className="text-slate-600">
                  RedStore Global HQ, 123 Ecom Street, Suite 400, Tech City,
                  90210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-slate-600">support@RedStore.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-slate-600">+91 987 654 3210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4 bg-slate-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold pb-3 mb-6">Send us a Message</h2>
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows="5"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
