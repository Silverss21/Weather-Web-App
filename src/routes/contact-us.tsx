import Header from '../components/header';
import { Label } from '../components/ui/label';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-bg bg-cover bg-no-repeat bg-center">
      <Header title="Contact Us" />
      <div className="flex justify-center mt-20 backdrop-blur-3xl rounded-3xl drop-shadow-2xl     max-w-[80%] mx-auto">
        <div className="w-1/2">
          <form className="p-8 bg-transparent rounded-md">
            <div className="mb-4">
              <Label htmlFor="name" className="block text-lg mb-2 text-white">
                Name
              </Label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-lg mb-2 text-white">
                Email
              </Label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <Label
                htmlFor="message"
                className="block text-lg mb-2 text-white"
              >
                Message
              </Label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
