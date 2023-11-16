import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../../image/bimbiya.png';

export default function Register() {
  const [formData, setFormData] = useState({
    step: 1,
    username: '',
    password: '',
    fullName: '',
    nic: '',
    email: '',
    mobileNo: '',
    dateOfBirth: null, // Initialize dateOfBirth as null
    address: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobileNo') {
      // Prevent entering letters and keep only the first 10 digits
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({
        ...formData,
        mobileNo: digits,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleNextStep = () => {
    if (formData.step < 3) {
      // Perform validation before moving to the next step
      let isValid = true;
      if (formData.step === 1) {
        const step1Errors = {};
        if (!formData.username) {
          step1Errors.username = 'Username is required';
          isValid = false;
        }
        if (!formData.password) {
          step1Errors.password = 'Password is required';
          isValid = false;
        }
        if (!formData.fullName) {
          step1Errors.fullName = 'Full Name is required';
          isValid = false;
        }
        setErrors(step1Errors);
      } else if (formData.step === 2) {
        const step2Errors = {};
        if (!formData.nic) {
          step2Errors.nic = 'NIC is required';
          isValid = false;
        }
        if (!formData.email) {
          step2Errors.email = 'Email is required';
          isValid = false;
        }
        // Validate mobile number format
        const mobileNumberRegex = /^\d{10}$/;
        if (!mobileNumberRegex.test(formData.mobileNo)) {
          step2Errors.mobileNo = 'Invalid mobile number format';
          isValid = false;
        }
        setErrors(step2Errors);
      }

      // Check if the step is valid before moving to the next step
      if (isValid) {
        setFormData({ ...formData, step: formData.step + 1 });
      }
    }
  };

  const handlePreviousStep = () => {
    setFormData({ ...formData, step: formData.step - 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here and send the data to your backend or perform any other required actions.
    console.log(formData);
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            Bimbiya.com
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {formData.step === 1 && (
                <div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account - Step 1
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleNextStep}>
                    <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                        required
                      />
                      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Full Name"
                        required
                      />
                      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover-bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus-ring-primary-800"
                    >
                      Next
                    </button>
                  </form>
                </div>
              )}
              {formData.step === 2 && (
                <div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account - Step 2
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleNextStep}>
                    <div>
                      <label htmlFor="nic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIC</label>
                      <input
                        type="text"
                        name="nic"
                        id="nic"
                        value={formData.nic}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="NIC"
                        required
                      />
                      {errors.nic && <p className="text-red-500 text-sm">{errors.nic}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="mobileNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                      <input
                        type="text"
                        name="mobileNo"
                        id="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Mobile Number"
                        required
                      />
                      {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover-bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus-ring-primary-800"
                    >
                      Next
                    </button>
                  </form>
                </div>
              )}
              {formData.step > 1 && (
                <button onClick={handlePreviousStep} className="text-sm font-light text-gray-500 dark:text-gray-400">Previous</button>
              )}
              {formData.step === 3 && (
                <div>
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account - Step 3
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        required
                      />
                      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                    <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="City"
                        required
                      />
                      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of Birth</label>
                      <DatePicker
                        selected={formData.dateOfBirth}
                        onChange={date => setFormData({ ...formData, dateOfBirth: date })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover-bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus-ring-primary-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
