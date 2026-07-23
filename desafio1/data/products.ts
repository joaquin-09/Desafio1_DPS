export interface Product {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  urlImage: string;
  description: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    category: "Realismo mágico",
    price: 18.5,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_71b_yRxXr-VjG-5n0vB-veLIQhYFom97-W36h8FFCXWmfbRHTnifoQ&s=10",
    description: "La saga de la familia Buendía en el pueblo mítico de Macondo.",
    stock: 12,
  },
  {
    id: 2,
    title: "El señor de los anillos (Trilogía)",
    author: "J. R. R. Tolkien",
    category: "Fantasía",
    price: 32.0,
    urlImage:
      "https://m.media-amazon.com/images/I/61cwlZx9LvL._UF1000,1000_QL80_.jpg",
    description: "La épica lucha entre la luz y la oscuridad en la Tierra Media.",
    stock: 8,
  },
  {
    id: 3,
    title: "Cuentos de Barro",
    author: "Salvador Salazar Arrué (Salarrué)",
    category: "Cuento salvadoreño",
    price: 9.5,
    urlImage:
      "https://www.librosdelaballena.com/wp-content/uploads/2020/05/cuentos-barro-244x300.png",
    description: "Relatos costumbristas de la identidad campesina salvadoreña.",
    stock: 20,
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Distopía",
    price: 14.0,
    urlImage:
      "https://www.lanetaen.com.mx/wp-content/uploads/2023/02/71kxa1-0mfL.jpg",
    description: "Una crítica al totalitarismo a través del Gran Hermano.",
    stock: 15,
  },
  {
    id: 5,
    title: "El principito",
    author: "Antoine de Saint-Exupéry",
    category: "Fábula",
    price: 10.0,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZX_7L9Sxf1Xu8noHoenJtSDR08OInT4uc2gB-PiEmKbfPhi-6qX60hML&s=10",
    description:
      "Un piloto perdido en el desierto conoce a un pequeño príncipe viajero.",
    stock: 25,
  },
  {
    id: 6,
    title: "Rayuela",
    author: "Julio Cortázar",
    category: "Vanguardia",
    price: 16.75,
    urlImage:
      "https://internacionallibrosyregalos.com/cdn/shop/products/RAYUELA_238x.jpg?v=1586222323",
    description: "Novela experimental que puede leerse en múltiples órdenes.",
    stock: 7,
  },
  {
    id: 7,
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    category: "Realismo mágico",
    price: 12.5,
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidwn-h8Ywe6W73Tece2EUBQr5p4piq_UmM4htMFh58lHy_b9e14YqGnFk&s=10",
    description: "La reconstrucción periodística de un asesinato anunciado.",
    stock: 10,
  },
  {
    id: 8,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Ciencia ficción",
    price: 13.25,
    urlImage:
      "https://m.media-amazon.com/images/I/61GaWVM6ZlL._AC_UF1000,1000_QL80_.jpg",
    description: "Un futuro donde los libros están prohibidos y se queman.",
    stock: 9,
  },
  {
    id: 9,
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    category: "Ensayo",
    price: 19.9,
    urlImage:
      "https://m.media-amazon.com/images/I/71JFMQYhn7L._UF1000,1000_QL80_.jpg",
    description: "Una historia breve de la humanidad y su evolución cultural.",
    stock: 14,
  },
  {
    id: 10,
    title: "Harry Potter y la piedra filosofal",
    author: "J. K. Rowling",
    category: "Fantasía",
    price: 17.0,
    urlImage:
      "https://image.cdn0.buscalibre.com/5b56b6968863b5e8148b4568.RS500x500.jpg",
    description: "El inicio de la historia del joven mago en Hogwarts.",
    stock: 22,
  },
  {
    id: 11,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    category: "Clásico",
    price: 21.0,
    urlImage:
      "https://m.media-amazon.com/images/I/91CIwR3QU1L._UF1000,1000_QL80_.jpg",
    description: "Las aventuras del hidalgo que confunde molinos con gigantes.",
    stock: 11,
  },
  {
    id: 12,
    title: "El alquimista",
    author: "Paulo Coelho",
    category: "Ficción filosófica",
    price: 11.5,
    urlImage:
      "https://m.media-amazon.com/images/I/61yXA+tHRiL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Un pastor andaluz emprende un viaje en busca de su leyenda personal.",
    stock: 18,
  },
  {
    id: 13,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    category: "Romance clásico",
    price: 13.0,
    urlImage:
      "https://m.media-amazon.com/images/I/71wnBzT9WqL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Elizabeth Bennet y el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.",
    stock: 13,
  },
  {
    id: 14,
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    category: "Distopía juvenil",
    price: 15.5,
    urlImage:
      "https://img2.od-cdn.com/ImageType-100/5835-1/%7B1BC1D16C-019F-4938-BA34-74A298057B44%7DIMG100.JPG",
    description:
      "Katniss Everdeen lucha por sobrevivir en un reality televisado mortal.",
    stock: 16,
  },
  {
    id: 15,
    title: "Crimen y castigo",
    author: "Fiódor Dostoyevski",
    category: "Clásico ruso",
    price: 17.25,
    urlImage:
      "https://m.media-amazon.com/images/I/71TCfoC27vL._AC_UF1000,1000_QL80_.jpg",
    description: "El tormento moral de Raskólnikov tras cometer un asesinato.",
    stock: 6,
  },
  {
    id: 16,
    title: "El diario de Ana Frank",
    author: "Ana Frank",
    category: "Biografía",
    price: 10.5,
    urlImage:
      "https://m.media-amazon.com/images/I/81Pgj953smL._AC_UF1000,1000_QL80_.jpg",
    description:
      "El testimonio real de una adolescente escondida durante el Holocausto.",
    stock: 19,
  },
  {
    id: 17,
    title: "Ensayo sobre la ceguera",
    author: "José Saramago",
    category: "Ficción",
    price: 14.75,
    urlImage:
      "https://m.media-amazon.com/images/I/717ZqBXBF9L._AC_UF1000,1000_QL80_.jpg",
    description: "Una epidemia de ceguera blanca desnuda la fragilidad social.",
    stock: 8,
  },
  {
    id: 18,
    title: "El hobbit",
    author: "J. R. R. Tolkien",
    category: "Fantasía",
    price: 15.0,
    urlImage:
      "https://m.media-amazon.com/images/I/71qpt1yWfbL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Bilbo Bolsón se une a una aventura para recuperar un tesoro de un dragón.",
    stock: 17,
  },
  {
    id: 19,
    title: "Los siete pilares de la sabiduría",
    author: "T. E. Lawrence",
    category: "Ensayo histórico",
    price: 22.5,
    urlImage:
      "https://m.media-amazon.com/images/I/711blf-yd7L._AC_UF1000,1000_QL80_.jpg",
    description:
      "El relato autobiográfico de la revuelta árabe vista por Lawrence de Arabia.",
    stock: 5,
  },
  {
    id: 20,
    title: "Matar a un ruiseñor",
    author: "Harper Lee",
    category: "Clásico",
    price: 12.9,
    urlImage:
      "https://m.media-amazon.com/images/I/61G0jxvbF5L._AC_UF1000,1000_QL80_.jpg",
    description:
      "La infancia de Scout Finch en el sur racialmente dividido de EE. UU.",
    stock: 21,
  },
];

export const categories: string[] = [
  "Todas",
  ...Array.from(new Set(products.map((p) => p.category))),
];