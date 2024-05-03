import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center py-12" style={{backgroundImage: `url(https://avxpert.co.uk/images/services/av-it-support.jpg)`}}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" className="mt-1 p-2 block w-full bg-transparent border-black border-b-2 focus:outline-none focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1 p-2 block w-full bg-transparent border-black border-b-2 focus:outline-none focus:border-green-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="mt-1 p-2 block w-full bg-transparent border-black border-b-2 focus:outline-none focus:border-green-500"></textarea>
                </div>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">Send Message</button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">Reach Us</h3>
              <div className="flex items-center space-x-4 text-black">
                <img src="https://cdn-icons-png.flaticon.com/128/1865/1865269.png" alt="Address" className="h-6 w-6" />
                <p>Ghauwara, Chhatarpur, M.P., India</p>
              </div>
              <div className="flex items-center space-x-4 text-black">
                <img src="https://cdn-icons-png.flaticon.com/128/5585/5585856.png" alt="Phone" className="h-6 w-6" />
                <p>+91 9109635263</p>
              </div>
              <div className="flex items-center space-x-4 text-black">
                <img src="https://cdn-icons-png.flaticon.com/128/10829/10829119.png" alt="Email" className="h-6 w-6" />
                <p>atishayjainjnv@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
