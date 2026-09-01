const products = [
  
  {
    id: 1,
    name: "Golden Rose Total Cover 2in1 Foundation",
    category: "Foundarion",
    price: 35,
    oldPrice: 50,
    discount: 30,
    image: "/images/foundation-1.jpg",
    description: "ტონალური კრემი ბუნებრივი და თანაბარი დაფარვისთვის."
  },
  {
    id: 2,
    name: "Golden Rose Skin Sensation Foundation",
    category: "Foundarion",
    price: 30,
    oldPrice: 40,
    discount: 25,
    image: "/images/foundation-2.jpg",
    description: "მსუბუქი ტექსტურის ტონალური ყოველდღიური მაკიაჟისთვის."
  },
  {
    id: 3,
    name: "Golden Rose Longstay Matte Foundation",
    category: "Foundarion",
    price: 25,
    oldPrice: 50,
    discount: 50,
    image: "/images/foundation-3.jpg",
    description: "მატე ეფექტის მქონე ტონალური ხანგრძლივი გამოყენებისთვის."
  },

  
  {
    id: 4,
    name: "Golden Rose Mascara",
    category: "Mascara",
    price: 25,
    oldPrice: 40,
    discount: 35,
    image: "/images/mascara-1.jpg",
    description: "ტუში წამწამების მოცულობისა და სიგრძის გასაზრდელად."
  },
  {
    id: 5,
    name: "Golden Rose Lash Love Mascara",
    category: "Mascara",
    price: 20,
    oldPrice: 30,
    discount: 30,
    image: "/images/mascara-2.jpg",
    description: "ყოველდღიური გამოყენებისთვის განკუთვნილი მსუბუქი ტუში."
  },
  {
    id: 6,
    name: "Golden Rose Volume Mascara",
    category: "Mascara",
    price: 25,
    oldPrice: 50,
    discount: 50,
    image: "/images/mascara-3.jpg",
    description: "მოცულობის ეფექტის მქონე ტუში ინტენსიური მაკიაჟისთვის."
  },

  
  {
    id: 7,
    name: "Golden Rose Highlighter",
    category: "Highlighter",
    price: 28,
    oldPrice: 40,
    discount: 30,
    image: "/images/highlighter-1.jpg",
    description: "ნაზი ბზინვარების მქონე ჰაილაითერი სახისთვის."
  },
  {
    id: 8,
    name: "Golden Rose Nude Look Highlighter",
    category: "Highlighter",
    price: 24,
    oldPrice: 32,
    discount: 25,
    image: "/images/highlighter-2.jpg",
    description: "ბუნებრივი და ელეგანტური ბზინვარებისთვის."
  },
  {
    id: 9,
    name: "Golden Rose Glow Highlighter",
    category: "Highlighter",
    price: 25,
    oldPrice: 50,
    discount: 50,
    image: "/images/highlighter-3.jpg",
    description: "ინტენსიური ბზინვარების ეფექტი განსაკუთრებული მაკიაჟისთვის."
  },

  
  {
    id: 10,
    name: "Golden Rose Precision Eyeliner",
    category: "Eyeliner",
    price: 15,
    oldPrice: 20,
    discount: 25,
    image: "/images/eyeliner-1.jpg",
    description: "ზუსტი და მარტივი ხაზის შესაქმნელი ლაინერი."
  },
  {
    id: 11,
    name: "Golden Rose Perfect Liner",
    category: "Eyeliner",
    price: 18,
    oldPrice: 30,
    discount: 40,
    image: "/images/eyeliner-2.jpg",
    description: "ინტენსიური ფერის ლაინერი ყოველდღიური მაკიაჟისთვის."
  },
  {
    id: 12,
    name: "Golden Rose Extreme Eyeliner",
    category: "Eyeliner",
    price: 20,
    oldPrice: 40,
    discount: 50,
    image: "/images/eyeliner-3.jpg",
    description: "გამოკვეთილი თვალის მაკიაჟისთვის."
  },

 
  {
    id: 13,
    name: "Golden Rose Nail Lacquer",
    category: "NailLacquer",
    price: 8,
    oldPrice: 12,
    discount: 30,
    image: "/images/NailLacquer-1.jpg",
    description: "ფრჩხილის ლაქი ლამაზი და თანაბარი დაფარვისთვის."
  },
  {
    id: 14,
    name: "Golden Rose Nail Lacquer 2",
    category: "NailLacquer",
    price: 9,
    oldPrice: 15,
    discount: 40,
    image: "/images/NailLacquer-2.jpg",
    description: "მკვეთრი ფერი და ბზინვარე ეფექტი."
  },
  {
    id: 15,
    name: "Golden Rose Nail Lacquer 3",
    category: "NailLacquer",
    price: 10,
    oldPrice: 20,
    discount: 50,
    image: "/images/NailLacquer-3.jpg",
    description: "ელეგანტური ფრჩხილის ლაქი ყოველდღიური გამოყენებისთვის."
  },


  {
    id: 16,
    name: "Golden Rose Eyeshadow",
    category: "Eyeshadow",
    price: 22,
    oldPrice: 30,
    discount: 25,
    image: "/images/Eyeshadow-1.jpg",
    description: "თვალის ჩრდილების პალიტრა ყოველდღიური მაკიაჟისთვის."
  },
  {
    id: 17,
    name: "Golden Rose Eyeshadow 2",
    category: "Eyeshadow",
    price: 25,
    oldPrice: 40,
    discount: 35,
    image: "/images/Eyeshadow-2.jpg",
    description: "მრავალფეროვანი ჩრდილები ლამაზი თვალის მაკიაჟისთვის."
  },
  {
    id: 18,
    name: "Golden Rose Eyeshadow 3",
    category: "Eyeshadow",
    price: 30,
    oldPrice: 50,
    discount: 50,
    image: "/images/Eyeshadow-3.jpg",
    description: "ინტენსიური ფერისა და ხანგრძლივი ეფექტის ჩრდილები."
  }
];

export default products;