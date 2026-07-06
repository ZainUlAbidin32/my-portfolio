import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCheckCircle, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        message: '',
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/contact',{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (response.ok) {
          alert(data.message)
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        }
        else {
          alert(data.message);
        }
    }
  return (
    <div id="contact" className="flex flex-col  items-center px-4 py-20 gap-4 bg-gradient-to-t from-gray-800 to-black text-white lg:px-30 lg:gap-15">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold lg:text-5xl">Contact</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <div className="bg-gray-800 flex flex-col items-center py-12 px-14 gap-3">
          <FaMapMarkerAlt size={30} />
          <h5 className="font-bold text-xl">Physical Address</h5>
          <p className="flex flex-col items-center text-gray-400">
            <span className="block">Chak 117 S.B Tehsil Sillanwali, </span>
            <span className="block">District Sargodha</span>
          </p>
        </div>
        <div className="bg-gray-800 flex flex-col items-center py-12 px-16 gap-3">
          <HiOutlineMail size={30} />
          <h5 className="font-bold text-xl">Email Address</h5>
          <p className="flex flex-col items-center text-gray-400">
            <span className="block">iamzain0032@gmail.com</span>
            <span className="block">zayn00032@gmail.com</span>
          </p>
        </div>
        <div className="bg-gray-800 flex flex-col items-center py-12 px-16 gap-3">
          <HiOutlinePhone size={30} />
          <h5 className="font-bold text-xl">Phone Numbers</h5>
          <p className="flex flex-col items-center text-gray-400">
            <span className="block">+92 3415721308</span>
            <span className="block">+92 3248628841</span>
          </p>
        </div>
      </div>
      <div id="connect" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col bg-gray-800 py-10 px-4 gap-6 justify-center">
          <h5 className="font-bold text-xl text-amber-600">Let's Connect</h5>
          <h6>Have a project in mind or looking for a MERN Stack Developer?</h6>
          <p>
            I'm always interested in discussing new opportunities,
            collaborations, and innovative ideas. Feel free to reach out, and
            I'll get back to you as soon as possible.
          </p>
          <div>
            <div className="flex gap-2 items-center">
                <HiCheckCircle className="text-green-700" size={25}/>
                <span>Available for Internship</span>
            </div>
            <div className="flex gap-2 items-center">
                <HiCheckCircle className="text-green-700" size={25}/>
                <span>Open to Freelance Projects</span>
            </div>
            <div className="flex gap-2 items-center">
                <HiCheckCircle className="text-green-700" size={25}/>
                <span>Open to Full-Time Opportunities</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
            <p className="text-amber-600 text-sm">GET IN TOUCH</p>
            <h6 className="text-2xl font-bold">Let's talk about your project</h6>
            <p className="text-gray-400">Have an idea or project you'd like to bring to life? Whether it's a portfolio, business website, or full-stack web application, I'd love to hear about it. Let's work together to build something meaningful.</p>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input className="border border-gray-600 py-1 px-2 focus:outline-0" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input className="border border-gray-600 py-1 px-2 focus:outline-0" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                <textarea className="border border-gray-600 py-1 px-2 focus:outline-0" rows={5} name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                <button className="bg-amber-600 cursor-pointer w-[30%] py-2 rounded-xl font-bold" type="submit">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;