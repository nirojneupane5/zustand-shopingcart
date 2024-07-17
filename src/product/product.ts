type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
};

export const product: TProduct[] = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features",
    price: 699.99,
    category: "Electronics",
    stock: 50,
  },
  {
    id: 2,
    name: "Laptop",
    description: "High-performance laptop for work and gaming",
    price: 1199.99,
    category: "Computers",
    stock: 30,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    description: "Noise-cancelling wireless earbuds with long battery life",
    price: 149.99,
    category: "Audio",
    stock: 100,
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor",
    price: 199.99,
    category: "Wearables",
    stock: 75,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality",
    price: 89.99,
    category: "Audio",
    stock: 150,
  },
  {
    id: 6,
    name: "Gaming Console",
    description: "Next-gen gaming console with immersive graphics",
    price: 499.99,
    category: "Gaming",
    stock: 25,
  },
  {
    id: 7,
    name: "4K TV",
    description: "Ultra HD 4K TV with vibrant colors and smart features",
    price: 899.99,
    category: "Electronics",
    stock: 40,
  },
  {
    id: 8,
    name: "Digital Camera",
    description: "Compact digital camera with high resolution",
    price: 349.99,
    category: "Photography",
    stock: 60,
  },
  {
    id: 9,
    name: "Fitness Tracker",
    description: "Wearable fitness tracker with sleep monitoring",
    price: 59.99,
    category: "Wearables",
    stock: 120,
  },
  {
    id: 10,
    name: "Tablet",
    description: "Lightweight tablet with powerful performance",
    price: 329.99,
    category: "Computers",
    stock: 80,
  },
];
