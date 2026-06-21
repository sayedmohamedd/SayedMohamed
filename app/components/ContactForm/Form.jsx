'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({ email: '' });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      setErrors({
        email: validateEmail(value) ? '' : 'Invalid email format',
      });
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = emailData;

    if (!name || !email || !phone || !message || !validateEmail(email)) {
      toast.error('Please fill all fields correctly');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully 🚀');
        setEmailData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">

      <form
        onSubmit={sendMail}
        className="
          bg-white/5
          border
          border-white/10
          rounded-2xl
          p-6 md:p-8
          backdrop-blur-md
          space-y-5
        "
      >

        {/* Title */}
        <h3 className="text-xl text-white font-semibold mb-2">
          Send me a message 🚀
        </h3>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={emailData.name}
          onChange={handleChange}
          className="
            w-full
            px-4
            py-3
            rounded-xl
            bg-black/30
            border
            border-white/10
            text-white
            outline-none
            focus:border-primary
          "
        />

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={emailData.email}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-black/30
                border
                border-white/10
                text-white
                outline-none
                focus:border-primary
              "
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={emailData.phone}
            onChange={handleChange}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/30
              border
              border-white/10
              text-white
              outline-none
              focus:border-primary
            "
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message..."
          value={emailData.message}
          onChange={handleChange}
          rows={5}
          className="
            w-full
            px-4
            py-3
            rounded-xl
            bg-black/30
            border
            border-white/10
            text-white
            outline-none
            focus:border-primary
            resize-none
          "
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-3
            rounded-xl
            bg-primary
            text-white
            font-medium
            hover:scale-[1.02]
            transition-all
            duration-300
            disabled:opacity-50
          "
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

      </form>

      {/* Toast */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme="colored"
      />
    </div>
  );
};

export default Form;