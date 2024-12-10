import React, { useState } from 'react';
import '../App.css';
import styles from './Store.module.css';

const Store = () => {
    const [cartItems, setCartItems] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);

    const initialItems = [
        {
            id: 1,
            name: 'UI/UX Design Consultation',
            description: 'Craft visually appealing and user-friendly digital interfaces.',
            price: 500,
            image: '/3dicons-chat-front-color.png',
        },
        {
            id: 2,
            name: 'Custom Website Design',
            description: 'Tailored website creation for unique brand identity.',
            price: 2000,
            image: '/3dicons-computer-front-color.png',
        },
        {
            id: 3,
            name: 'Life Choices Flowchart',
            description: 'Made some questionable life choices? Let’s map it out!',
            price: 150,
            image: '/3dicons-glass-front-color.png',
        },
        {
            id: 4,
            name: 'Professional Cat Photoshopping',
            description: 'Boots deserves a regal portrait. I can help with that.',
            price: 50,
            image: '/3dicons-brush-front-color.png',
        },
    ];

    const [availableItems, setAvailableItems] = useState(initialItems);

    const handleDragStart = (item) => setDraggedItem(item);

    const handleDrop = (e) => {
        e.preventDefault();
        if (draggedItem) {
            setCartItems([...cartItems, { ...draggedItem, quantity: 1 }]);
            setAvailableItems(availableItems.filter((item) => item.id !== draggedItem.id));
        }
    };

    const allowDrop = (e) => e.preventDefault();

    const removeFromCart = (id) => {
        const removedItem = cartItems.find((item) => item.id === id);
        setAvailableItems([...availableItems, removedItem]);
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className={styles.storePage}>
            <header className={styles.storeHeader}>
                <h1>Build a Service Package</h1>
                <p className={styles.subheader}>Drag and drop services into your cart below.</p>
            </header>

            <div className={styles.storeContainer}>
                <section className={styles.itemsSection}>
                    <h2>Available Services</h2>
                    {availableItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.itemCard}
                            draggable
                            onDragStart={() => handleDragStart(item)}
                        >
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section
                    className={styles.cartSection}
                    onDrop={handleDrop}
                    onDragOver={allowDrop}
                >
                    <h2>Your Cart</h2>
                    {cartItems.map((item) => (
                        <div className={styles.cartItem} key={item.id}>
                            <img src={item.image} alt={item.name} className={styles.itemImage} />
                            <div className={styles.itemDetails}>
                                <h4>{item.name}</h4>
                                <p>Qty: {item.quantity}</p>
                                <p>Total: ${item.price * item.quantity}</p>
                            </div>
                            <button
                                className={styles.removeButton}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <p className={styles.cartSummary}>
                        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Store;
