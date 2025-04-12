import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showFindModal, setShowFindModal] = useState(false); // NEW

  return (
    <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">FoodLink</h1>
        <button 
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 gap-10">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Bridging Hunger & Hope</h2>
          <p className="text-lg mb-8">Connecting surplus food to those in need, one link at a time.</p>
          <div className="flex gap-4">
            <button 
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl text-white"
              onClick={() => setShowModal(true)}
            >
              Donate Food
            </button>
            <button 
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl text-white"
              onClick={() => setShowFindModal(true)} // NEW
            >
              Find Food
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" 
            alt="Food Distribution" 
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-10 md:px-20 py-20">
        {['Fast Donations', 'Verified NGOs', 'Track Your Impact'].map((feature, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 rounded-2xl p-8 text-center shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
            <p>Seamlessly connect, donate, and track how your food makes a difference.</p>
          </motion.div>
        ))}
      </section>

      {/* Modal for Donation */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Donate Food</h2>
                <button onClick={() => setShowModal(false)}>
                  <X size={24} />
                </button>
              </div>
              <form className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <input 
                  type="text" 
                  placeholder="Food Details" 
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Finding Food */}
      <AnimatePresence>
        {showFindModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Find Food Near You</h2>
                <button onClick={() => setShowFindModal(false)}>
                  <X size={24} />
                </button>
              </div>
              <form className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Enter your location or zip code" 
                  className="p-3 rounded-lg border border-gray-300 text-black"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Search
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="p-6 text-center border-t border-gray-700">
        <p>© 2025 FoodLink. All rights reserved.</p>
      </footer>
    </div>
  );
}
