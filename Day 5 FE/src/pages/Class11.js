import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Class11.css';

const subjects = [
  { name: 'English', description: 'Language skills including grammar, composition, and literature.', rating: 4, price: 600 },
  { name: 'Physics', description: 'Study of matter, energy, and fundamental forces of nature.', rating: 5, price: 650 },
  { name: 'Chemistry', description: 'Study of substances, their properties, and interactions.', rating: 3, price: 550 },
  { name: 'Mathematics', description: 'Study of numbers, shapes, patterns, and logical reasoning.', rating: 4, price: 1000 },
  { name: 'Information Technology', description: 'Focus on computer systems, software, and applications.', rating: 4, price: 580 },
  { name: 'Accountancy', description: 'Financial record-keeping, reporting, and analysis.', rating: 3, price: 520 },
  { name: 'Business Studies', description: 'Principles of managing and operating businesses.', rating: 4, price: 570 },
  { name: 'Economics', description: 'Study of resource allocation and usage in societies.', rating: 5, price: 620 },
];

const Class11 = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (subject) => {
    addToCart({ ...subject, class: '11' });
    navigate('/cart');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        &#9733;
      </span>
    ));
  };

  return (
    <div className="class11-container">
      {subjects.map((subject, index) => (
        <div
          className="subject-item"
          key={index}
        >
          <h3>{subject.name}</h3>
          <p>{subject.description}</p>
          <div className="rating">{renderStars(subject.rating)}</div>
          {subject.price && subject.price > 500 && (
            <p className="price">Price: ₹{subject.price}</p>
          )}
          <button onClick={() => handleAddToCart(subject)}>Add to Cart</button>
        </div>
      ))}
      <div className="motivational-quote">
        <p><b>"Either you run the day or the day runs you" - Jim Rohn</b></p>
      </div>
    </div>
  );
};

export default Class11;
