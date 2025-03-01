import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Card = ({ title, description, price, onSelect, className }) => (
    <div className={`p-4 shadow-lg border border-gray-200 rounded-2xl ${className}`}>
      <div className="text-xl font-semibold mb-2">{title}</div>
      <div className="text-gray-600">{description}</div>
      <div className="text-lg font-bold mt-4">${price}</div>
      <button
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={onSelect}
      >
        Choose
      </button>
    </div>
);

const SubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/subscriptions/")
      .then(response => setSubscriptions(response.data))
      .catch(error => console.error("Error fetching subscriptions:", error));
  }, []);

  return (
    <div className="sub-page">
      <h1 className="text-3xl font-bold mb-6">Gym Subscriptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map(sub => (
          <motion.div 
            key={sub.id} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card 
              title={sub.name} 
              description={sub.description} 
              price={sub.price} 
              onSelect={() => console.log(`Selected subscription: ${sub.name}`)}
            />        
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
