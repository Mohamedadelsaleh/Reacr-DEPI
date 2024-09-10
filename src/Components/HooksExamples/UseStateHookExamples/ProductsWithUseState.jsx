import React, { useState } from 'react';
import './style.css';

function ProductsWithUseState() {
   const [products, setProducts] = useState([
    { 
        id: 1,
        name: "Mohamed",
        age: 30,
        collage: "Ain Shams"
    },
    { 
        id: 2,
        name: "Ahmed",
        age: 20,
        collage: "Cairo"
    },
    { 
        id: 3,
        name: "Sara",
        age: 26,
        collage: "AUC"
    },
    { 
        id: 4,
        name: "Mo2men Ahmed",
        age: 28,
        collage: "GUC"
    },
    { 
        id: 5,
        name: "Eman",
        age: 22,
        collage: "SUC"
    },        
    { 
        id: 6,
        name: "Gehad",
        age: 23,
        collage: "CIC"
    }
   ]);

   const handleAddProduct = () => {
        setProducts([...products, {
            id: products.length + 1,
            name: "Alaa",
            age: products.length * 2,
            collage: "SUC"
        }
        ])
   }

  return (
    <div>
    {products.map((product) => (
        <div key={product.id} className="product">
        <h2>{product.name}</h2>
        <p>{product.age}</p>
        <h4>{product.collage}</h4>
        </div>
    ))}
    <button onClick={handleAddProduct}>Add Product</button>
    </div>
  )
}

export default ProductsWithUseState