/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you. Please fill out the form below or use
            our contact information to reach us.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@springdale.edu
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p>Saturday: 9:00 AM - 12:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215549469119!2d-73.98509668489565!3d40.75890097932666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625761975148!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
