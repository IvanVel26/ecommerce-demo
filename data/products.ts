export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

// Datos de ejemplo cargados a mano. Cuando conectemos el backend,
// esto se va a reemplazar por un fetch a la API real.
export const products: Product[] = [
  {
    id: 1,
    name: "Mouse inalámbrico",
    description: "Mouse ergonómico con conexión Bluetooth y batería de larga duración.",
    price: 8999,
    stock: 25,
    category: "Accesorios",
  },
  {
    id: 2,
    name: "Teclado mecánico",
    description: "Teclado retroiluminado con switches táctiles, ideal para trabajo y juegos.",
    price: 24999,
    stock: 12,
    category: "Accesorios",
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    description: "Auriculares con cancelación de ruido y 20 horas de batería.",
    price: 19999,
    stock: 0,
    category: "Audio",
  },
  {
    id: 4,
    name: "Monitor 24 pulgadas",
    description: "Monitor Full HD con panel IPS, ideal para oficina y diseño.",
    price: 89999,
    stock: 6,
    category: "Monitores",
  },
  {
    id: 5,
    name: "Webcam Full HD",
    description: "Webcam 1080p con micrófono incorporado para videollamadas.",
    price: 15999,
    stock: 18,
    category: "Accesorios",
  },
  {
    id: 6,
    name: "Parlante portátil",
    description: "Parlante Bluetooth resistente al agua, con 10 horas de autonomía.",
    price: 22999,
    stock: 9,
    category: "Audio",
  },
];
