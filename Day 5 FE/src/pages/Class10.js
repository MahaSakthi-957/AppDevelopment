import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Class10.css';

const subjects = [
  { name: 'Tamil', description: 'Study of the Tamil language, including literature and grammar.', link: 'https://cbsetamil.com/wp-content/uploads/2024/02/10th-Tamil-Textbook-2024.pdf', rating: 4, price: 550 },
  { name: 'English', description: 'Language skills including grammar, composition, and literature.', link: 'https://ncert.nic.in/textbook.php?jefp1=1-10', rating: 5, price: 600 },
  { name: 'Mathematics', description: 'Study of numbers, shapes, patterns, and logical reasoning.', rating: 3, price: 550 },
  { name: 'Science', description: 'Study of the natural world through biology, chemistry, and physics.', rating: 4, price: 520 },
  { name: 'History', description: 'Study of past events and their impact on the present.', rating: 4, price: 550 },
  { name: 'Geography', description: 'Study of the Earth’s landscapes, environments, and the relationships between people and their environments.', rating: 3, price: 600 },
  { name: 'Politics', description: 'Study of political systems, government, and political behavior.', rating: 2, price: 550 },
  { name: 'Economics', description: 'Study of resource allocation and usage in societies.', rating: 4, price: 600 },
];

const Class10 = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the user role from local storage
    const email = localStorage.getItem('email');
    if (email && email.endsWith('@skcet.ac.in')) {
      setIsAdmin(true);
    }
  }, []);

  const handleAddToCart = (subject) => {
    addToCart({ ...subject, class: '10' });
    navigate('/cart');
  };

  const handleRemoveFromCart = (subject) => {
    removeFromCart(subject.id); // Assuming each subject has a unique id
    // Optionally update UI or state
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>
        &#9733;
      </span>
    ));
  };

  return (
    <div className="class10-container">
      {subjects.map((subject, index) => (
        <div
          className="subject-item"
          key={index}
          onClick={() => subject.link && window.open(subject.link, '_blank')}
          style={{ cursor: subject.link ? 'pointer' : 'default' }}
        >
          <h3>{subject.name}</h3>
          <p>{subject.description}</p>
          <div className="rating">{renderStars(subject.rating)}</div>
          {subject.price && subject.price > 500 && (
            <p className="price">Price: ₹{subject.price}</p>
          )}
          <button onClick={(e) => { e.stopPropagation(); handleAddToCart(subject); }}>Add to Cart</button>
          {isAdmin && (
            <button onClick={(e) => { e.stopPropagation(); handleRemoveFromCart(subject); }}>Remove from Cart</button>
          )}
        </div>
      ))}
      <div className="motivational-quote">
        <p><b>"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt</b></p>
      </div>
    </div>
  );
};

export default Class10;
