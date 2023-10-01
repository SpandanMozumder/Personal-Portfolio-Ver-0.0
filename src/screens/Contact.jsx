import { useState } from "react";
import SideNav from "../components/SideNav";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex bg-[#E6DACE] h-screen w-screen fixed">
      <div className="fixed">
        <SideNav />
      </div>
      <div className="container mx-[10rem] mt-[2.5rem] bg-white rounded-3xl shadow-2xl shadow-black overflow-auto h-[36rem]">
        <h1 className="text-5xl font-bold font-titillium text-center text-[#0050FF] my-[2rem]">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="p-[2rem]">
          <div className="flex">
            <div className="mb-4 w-[50%] mr-2">
              <label
                htmlFor="firstName"
                className="block text-xl font-titillium font-semibold"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3 shadow-md shadow-blue-300"
                required
              />
            </div>

            <div className="mb-4 w-[50%] ml-2">
              <label
                htmlFor="lastName"
                className="block text-xl font-titillium font-semibold"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-md py-2 px-3 shadow-md shadow-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-titillium font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 shadow-md shadow-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-xl font-titillium font-semibold"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 shadow-md shadow-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xl font-titillium font-semibold"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-md py-2 px-3 shadow-md shadow-blue-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#0050FF] text-white py-[0.5rem] px-[2rem] rounded-lg hover:bg-white hover:border hover:border-[#0050FF] hover:text-black font-titillium text-lg font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
