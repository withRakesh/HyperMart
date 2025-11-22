import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }
  
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    if (!user.username.trim() || !user.email.trim() || !user.password.trim()) {
      alert('Please enter all fields')
      return
    }

    const res = await axios.post('https://hypermart-fqba.onrender.com/api/auth/register', user)
    console.log(res.data)
    setUser({ name: '', email: '', password: '' })
    alert('Registered successfully!')
    navigate('/login')
  } catch (err) {
    console.log(err)
    alert(err?.response?.data?.message || 'Registration failed')
  }
}


  return (
    <div className="min-h-screen bg-[#E0F2FE] flex items-center justify-center p-4">
      <div className="backdrop-blur-xl bg-white/30 w-full max-w-md rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
          Register
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/" className="text-blue-500 hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register
