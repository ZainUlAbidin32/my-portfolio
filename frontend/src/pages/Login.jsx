import { useState } from "react"
import { FaLock, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("https://my-portfolio-one-beta-59.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            localStorage.setItem("token", data.token);
            navigate("/portfolio")
        }
        else {
            alert(data.message);
        }
    }
  return (
    <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500 flex flex-col items-center justify-center gap-10">
      <h2 className="text-white font-bold text-4xl">LOGIN</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
        <div className="flex items-center gap-4 border-b-2 border-white">
            <FaUser className="text-xl text-white"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" id="" className="text-white border-0 outline-0 py-3 px-3 text-2xl"/>
        </div>
        <div className="flex items-center gap-4 border-b-2 border-white">
            <FaLock className="text-xl text-white"/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" id="" className="text-white border-0 outline-0 py-3 px-3 text-2xl"/>
        </div>
        <button type="submit" className="mt-6 bg-blue-700 text-white py-3 text-2xl cursor-pointer">Login</button>
      </form>
      <p className="text-xl">
        Don't have an account? {" "} <Link to="/signup" className="font-bold underline">Sign Up</Link>
      </p>
    </div>
  )
}

export default Login