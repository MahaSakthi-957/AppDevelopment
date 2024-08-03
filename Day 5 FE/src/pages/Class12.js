import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Class12.css';

const subjects = [
  { name: 'English', description: 'Language skills including grammar, composition, and literature.', rating: 4, price: 650 },
  { name: 'Biology', description: 'Study of living organisms and their interactions.', rating: 5, price: 700 },
  { name: 'Chemistry', description: 'Study of substances, their properties, and interactions.', rating: 4, price: 680 },
  { name: 'Mathematics', description: 'Study of numbers, shapes, patterns, and logical reasoning.', rating: 5, price: 1200 },
  { name: 'Computer Science', description: 'Focus on computer systems, programming, and applications.', rating: 4, price: 600 },
  { name: 'Business Studies', description: 'Principles of managing and operating businesses.', rating: 3, price: 540 },
  { name: 'Economics', description: 'Study of resource allocation and usage in societies.', rating: 4, price: 640 },
  { name: 'Psychology', description: 'Study of mind and behavior.', rating: 4, price: 620 },
];

const Class12 = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (subject) => {
    addToCart({ ...subject, class: '12' });
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
    <div className="class12-container">
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
        <p><b>"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</b></p>
      </div>
    </div>
  );
};

export default Class12;
