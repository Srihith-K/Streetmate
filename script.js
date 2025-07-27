const suppliers = [
  {
    name: "Ramu Traders",
    area: "mumbai",
    categories: ["rice", "oil"],
    image: "https://plus.unsplash.com/premium_photo-1686878940830-9031355ec98c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3RyZWV0JTIwZ3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
      { name: "Urad Dal", price: "₹110/litre" },
      { name: "Chana Dal", price: "₹110/litre" },
      { name: "Groundnuts", price: "₹110/litre" },
      { name: "Ghee", price: "₹130/litre" }
    ],
    phone: "9123456789",
    link: "ramu_traders_profile.html"
  },

  {
    name: "Sai Rice Traders",
    area: "mumbai",
    categories: ["rice"],
    image: "https://images.unsplash.com/photo-1580053860283-d3f8f5796e15?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwcmljZSUyMHN0b3JlfGVufDB8fDB8fHww.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Basmati Rice", price: "₹60/kg" },
      { name: "Sona Masoori", price: "₹38/kg" },
      { name: "Idli Rice", price: "₹36/kg" },
    ],
    phone: "9123456789",
    link: "Sai_Rice.html"
  },

  

  {
    name: "Sharma Suppliers",
    area: "delhi",
    categories: ["rice","oil"],
    image: "https://moha-mushkil.com/wp-content/uploads/2018/10/IMG_20181006_170222.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Wheat Flour", price: "₹60/kg" },
      { name: "Maida", price: "₹38/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Cornflour", price: "₹36/kg" },
      { name: "Urad Dal", price: "₹36/kg" },
      { name: "Chana Dal", price: "₹36/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
    ],
    phone: "9123456789",
    link: "sharma_suppliers.html"
  },

   {
    name: "Bharat Masala Bhandar Spices",
    area: "mumbai",
    categories: ["spices"],
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwc3BpY2VzfGVufDB8fDB8fHww.jpg",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Jeera", price: "₹70/kg" },
      { name: "Salt", price: "₹70/kg" },
      { name: "Chilli Powder", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" },
      { name: "Clove", price: "₹70/kg" },
      { name: "Cardomom", price: "₹70/kg" },
      { name: "Cinnamon", price: "₹70/kg" },
      { name: "Garam Masala", price: "₹70/kg" },
      { name: "Ajino Moto", price: "₹70/kg" },
    ],
    phone: "8888877777",
    link: "bharat_masala.html"
  },

  {
    name: "Satya Rice Traders",
    area: "mumbai",
    categories: ["rice"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmvMg-UNYmVmMPrct7T5KY67OEoUkCNaiEA&s.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Basmati Rice", price: "₹60/kg" },
      { name: "Sona Masoori", price: "₹38/kg" },
      { name: "Idli Rice", price: "₹36/kg" },
      { name: "Brown Rice Rice", price: "₹40/kg" },
    ],
    phone: "9123456789",
    link: "satya_rice.html"
  },

  {
    name: "Ram Wholesale",
    area: "mumbai",
    categories: ["rice","oil"],
    image: "https://images.unsplash.com/photo-1645035687160-e587e0f1a949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeSUyMHN0b3JlJTIwc3RyZWV0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Wheat Flour", price: "₹60/kg" },
      { name: "Maida", price: "₹38/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Cornflour", price: "₹36/kg" },
      { name: "Urad Dal", price: "₹36/kg" },
      { name: "Chana Dal", price: "₹36/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
    ],
    phone: "9123456789",
    link: "ram_wholesale.html"
  },

  {
    name: "Dharma Oils",
    area: "delhi",
    categories: ["oil"],
    image: "https://images.picxy.com/cache/2020/5/4/5c0dd6d22057fa417cf8f28e36083f5c.jpg",
    products: [
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹130/litre" },
      { name: "Mustard Oil", price: "₹110/litre" },
      { name: "Rice Bran Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹90/litre" },
      { name: "Ghee", price: "₹120/litre" },
      { name: "Butter", price: "₹400/kg" },
    ],
    phone: "9440423283",
    link: "dharma_oils.html"
  },

  {
    name: "Mumbai Spices",
    area: "mumbai",
    categories: ["spices"],
    image: "https://content.jdmagicbox.com/comp/def_content/spice-retailers/shutterstock-169737956-spice-retailers-2-l3r0v.jpg",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Jeera", price: "₹70/kg" },
      { name: "Salt", price: "₹70/kg" },
      { name: "Chilli Powder", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" },
      { name: "Clove", price: "₹70/kg" },
      { name: "Cardomom", price: "₹70/kg" },
      { name: "Cinnamon", price: "₹70/kg" },
      { name: "Ajino Moto", price: "₹70/kg" },
    ],
    phone: "8888877777",
    link: "mumbai_spices.html"
  },

  {
    name: "Sejal Spices",
    area: "mumbai",
    categories: ["spices"],
    image: "https://images.unsplash.com/photo-1633881614907-8587c9b93c2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D.jpg",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Jeera", price: "₹70/kg" },
      { name: "Salt", price: "₹70/kg" },
      { name: "Chilli Powder", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" },
      { name: "Clove", price: "₹70/kg" },
      { name: "Cardomom", price: "₹70/kg" },
      { name: "Bay Leaf", price: "₹70/kg" },
      { name: "Cinnamon", price: "₹70/kg" },
      { name: "Ajino Moto", price: "₹70/kg" },
    ],
    phone: "8888877777",
    link: "sejal_spices.html"
  },

  {
    name: "Heritage Dairy",
    area: "mumbai",
    categories: ["dairy"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QnQL4ZRd0SDlqahX7rhlC1agGER1oI-MAg&sg",
    products: [
      { name: "Milk", price: "₹35/kg" },
      { name: "Curd", price: "₹45/kg" },
      { name: "Paneer", price: "₹30/kg" },
      { name: "Cheese", price: "₹30/kg" },
      { name: "Butter", price: "₹30/kg" },
      { name: "Yogurt", price: "₹30/kg" },
      { name: "Ghee", price: "₹25/kg" }
    ],
    phone: "9991112233",
    link: "heritage_dairy.html"
  },

  
  {
    name: "Anuj Vegetables",
    area: "delhi",
    categories: ["vegetables"],
    image: "https://images.unsplash.com/photo-1572402123026-b87c40a7a9ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlZ2V0YWJsZSUyMHNob3AlMjBzdHJlZXQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Carrot", price: "₹40/kg" },
      { name: "Beetroot", price: "₹40/kg" },
       { name: "Eggs", price: "₹40/kg" },
      { name: "Ginger", price: "₹40/kg" },
      { name: "Garlic", price: "₹40/kg" },
      { name: "Mint Leaves", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "anuj_vegetables.html"  
  },

  {
    name: "OilMart",
    area: "mumbai",
    categories: ["oil"],
    image: "https://c8.alamy.com/comp/B213D7/cooking-oils-in-supermarket-china-the-chinese-use-a-lot-of-edible-B213D7.jpg",
    products: [
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
      { name: "Ghee", price: "₹110/litre" },
      { name: "Butter", price: "₹110/litre" },
    ],
    phone: "9440423283",
    link: "oilmart.html"
  },

  {
    name: "Raj Vegetable Supply",
    area: "mumbai",
    categories: ["vegetables"],
    image: "https://content.jdmagicbox.com/comp/def_content/vegetable-vendors/shutterstock-130707287-vegetable-vendors-3-bils7.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Cabbage", price: "₹30/piece" },
      { name: "Carrot", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "raj_vegetable.html"
  },

  {
    name: "Srujan Spices",
    area: "delhi",
    categories: ["spices"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxVhUW0u4NYAQboEP5JJtegjNH3RAy-24Aw&s",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Jeera", price: "₹70/kg" },
      { name: "Salt", price: "₹70/kg" },
      { name: "Chilli Powder", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" },
      { name: "Clove", price: "₹70/kg" },
      { name: "Star Anise", price: "₹70/kg" },
      { name: "Cardomom", price: "₹70/kg" },
      { name: "Bay Leaf", price: "₹70/kg" },
      { name: "Cinnamon", price: "₹70/kg" },
      { name: "Ajino Moto", price: "₹70/kg" },
    ],
    phone: "8888877777",
    link: "srujan_spices.html"
  },

  {
    name: "Rama Vegetables",
    area: "mumbai",
    categories: ["vegetables"],
    image: "https://images.unsplash.com/photo-1558907530-fe311178388a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2V0YWJsZSUyMHNob3AlMjBzdHJlZXQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Cabbage", price: "₹30/piece" },
      { name: "Carrot", price: "₹40/kg" },
      { name: "Ginger", price: "₹40/kg" },
      { name: "Garlic", price: "₹40/kg" },
      { name: "Mint Leaves", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "rama_vegetables.html"
  },

  {
    name: "Anju Spices",
    area: "delhi",
    categories: ["spices"],
    image: "https://hogr.app/blog/wp-content/uploads/2024/09/image-18.png",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Jeera", price: "₹70/kg" },
      { name: "Salt", price: "₹70/kg" },
      { name: "Chilli Powder", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" },
      { name: "Clove", price: "₹70/kg" },
      { name: "Star Anise", price: "₹70/kg" },
      { name: "Cardomom", price: "₹70/kg" },
      { name: "Bay Leaf", price: "₹70/kg" },
      { name: "Cinnamon", price: "₹70/kg" },
      { name: "Ajino Moto", price: "₹70/kg" },
    ],
    phone: "8888877777",
    link: "anju_spices.html"
  },
  
  {
    name: "Poonam Traders",
    area: "delhi",
    categories: ["rice"],
    image: "https://images.jdmagicbox.com/comp/vijayawada/n8/0866px866.x866.150731190942.w9n8/catalogue/balaji-rice-and-general-stores-singh-nagar-vijayawada-rice-mills-1t9l2kz.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Basmati Rice", price: "₹60/kg" },
      { name: "Sona Masoori", price: "₹38/kg" },
      { name: "Idli Rice", price: "₹36/kg" },
    ],
    phone: "9123456789",
    link: "poonam_traders.html"
  },

  {
    name: "Sree Vegetables",
    area: "delhi",
    categories: ["vegetables"],
    image: "https://www.deccanchronicle.com/h-upload/2024/05/27/1093039-27cnr031.webp",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Carrot", price: "₹40/kg" },
      { name: "Beetroot", price: "₹40/kg" },
       { name: "Eggs", price: "₹40/kg" },
      { name: "Ginger", price: "₹40/kg" },
      { name: "Garlic", price: "₹40/kg" },
      { name: "Mint Leaves", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "sree_vegetables.html"
  },

  {
    name: "Sharan Vegetables",
    area: "delhi",
    categories: ["vegetables"],
    image: "https://images.picxy.com/cache/2019/3/7/fb58b7e5ee07e1c4c778ca7e9b264178.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Carrot", price: "₹40/kg" },
      { name: "Beetroot", price: "₹40/kg" },
       { name: "Eggs", price: "₹40/kg" },
      { name: "Ginger", price: "₹40/kg" },
      { name: "Garlic", price: "₹40/kg" },
      { name: "Mint Leaves", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "Sharan _Vegetables.html"
  },

  {
    name: "Vishal Wholesale",
    area: "delhi",
    categories: ["rice","oil"],
    image: "https://images.unsplash.com/photo-1645035687160-e587e0f1a949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeSUyMHN0b3JlJTIwc3RyZWV0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Wheat Flour", price: "₹60/kg" },
      { name: "Maida", price: "₹38/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Cornflour", price: "₹36/kg" },
      { name: "Urad Dal", price: "₹36/kg" },
      { name: "Chana Dal", price: "₹36/kg" },
      { name: "Suji/Rava", price: "₹36/kg" },
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
    ],
    phone: "9123456789",
    link: "vishal_wholesale.html"
  },

  {
    name: "Vishwa Dairy",
    area: "delhi",
    categories: ["dairy"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjILW0lGHt20FaN5jpADuPk8t9PcuG4Xu3Sw&s.jpg",
    products: [
      { name: "Milk", price: "₹35/kg" },
      { name: "Curd", price: "₹45/kg" },
      { name: "Paneer", price: "₹30/kg" },
      { name: "Cheese", price: "₹30/kg" },
      { name: "Butter", price: "₹30/kg" },
      { name: "Yogurt", price: "₹30/kg" },
      { name: "Ghee", price: "₹25/kg" }
    ],
    phone: "9991112233",
    link: "vishwa.html"
  },
  
  
  {
    name: "Arya Vegetables",
    area: "mumbai",
    categories: ["vegetables"],
    image: "https://images.unsplash.com/photo-1679116936383-266087d179ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0cmVldCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Cabbage", price: "₹30/piece" },
      { name: "Carrot", price: "₹40/kg" },
      { name: "Green Peas", price: "₹40/kg" },
      { name: "Ginger", price: "₹40/kg" },
      { name: "Garlic", price: "₹40/kg" },
      { name: "Mint Leaves", price: "₹40/kg" },
    ],
    phone: "9391716441",
    link: "arya_vegetables.html"
  },

  {
    name: "Sangam Dairy",
    area: "mumbai",
    categories: ["dairy"],
    image: "https://cdn.siasat.com/wp-content/uploads/2023/06/milk122e.jpg",
    products: [
      { name: "Milk", price: "₹35/kg" },
      { name: "Curd", price: "₹45/kg" },
      { name: "Paneer", price: "₹30/kg" },
      { name: "Cheese", price: "₹30/kg" },
      { name: "Butter", price: "₹30/kg" },
      { name: "Yogurt", price: "₹30/kg" },
      { name: "Fresh Cream", price: "₹30/kg" },
      { name: "Icecreams", price: "₹30/kg" },
      { name: "Ghee", price: "₹25/kg" }
    ],
    phone: "9991112233",
    link: "sangam.html"
  },

  {
    name: "Jersey Dairy",
    area: "delhi",
    categories: ["dairy"],
    image: "https://5.imimg.com/data5/SR/PF/MY-58326657/culture-for-all-fermented-dairy-products-500x500.jpg",
    products: [
      { name: "Milk", price: "₹35/kg" },
      { name: "Curd", price: "₹45/kg" },
      { name: "Paneer", price: "₹30/kg" },
      { name: "Fresh Cream", price: "₹30/kg" },
      { name: "Cheese", price: "₹30/kg" },
      { name: "Icecreams", price: "₹30/kg" },
      { name: "Butter", price: "₹30/kg" },
      { name: "Yogurt", price: "₹30/kg" },
      { name: "Ghee", price: "₹25/kg" }
    ],
    phone: "9991112233",
    link: "jersey.html"
  },
  {
    name: "Shankar Spices",
    area: "delhi",
    categories: ["spices"],
    image: "https://i.pinimg.com/736x/a4/ba/43/a4ba4312710012c57c9c6c9c066f86f1.jpg",
    products: [
      { name: "Garam Masala", price: "₹120/kg" },
      { name: "Clove", price: "₹120/kg" },
      { name: "Cardomom", price: "₹120/kg" },
      { name: "Cinnamon", price: "₹120/kg" },
      { name: "Pepper", price: "₹120/kg" },
      { name: "Salt", price: "₹120/kg" },
      { name: "Chilli Powder", price: "₹120/kg" },
      { name: "Ajino Moto", price: "₹120/kg" },
      { name: "Bay Leaf", price: "₹120/kg" },
    ],
    phone: "9876543210",
    link: "shankar_spices.html"
  },

  {
    name: "Fresh Dairy Farm Delhi",
    area: "delhi",
    categories: ["dairy"],
    image: "https://tiimg.tistatic.com/fp/1/004/887/fresh-dairy-milk-is-rich-in-protein-371.jpg",
    products: [
      { name: "Milk", price: "₹35/kg" },
      { name: "Curd", price: "₹45/kg" },
      { name: "Paneer", price: "₹30/kg" },
      { name: "Fresh Cream", price: "₹30/kg" },
      { name: "Cheese", price: "₹30/kg" },
      { name: "Icecreams", price: "₹30/kg" },
      { name: "Butter", price: "₹30/kg" },
      { name: "Yogurt", price: "₹30/kg" },
      { name: "Ghee", price: "₹25/kg" }
    ],
    phone: "9991112233",
    link: "Fresh_daily.html"
  },
  
];

function displaySuppliers() {
  const areaFilter = document.getElementById("areaFilter").value;
  const categoryFilter = document.getElementById("categoryFilter").value;
  const list = document.getElementById("supplierList");
  list.innerHTML = "";

  const filtered = suppliers.filter(supplier =>
    (areaFilter === "all" || supplier.area === areaFilter) &&
    (categoryFilter === "all" || supplier.categories.includes(categoryFilter))
  );

  filtered.forEach(supplier => {
    const productsHTML = supplier.products.map(
      p => `<li>${p.name} – ${p.price}</li>`
    ).join("");

    const imageHTML = `
      <a href="${supplier.link}">
        <img src="${supplier.image}" class="card-img-top" alt="${supplier.name}">
      </a>
    `;

    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        ${imageHTML}
        <div class="card-body">
          <h5 class="card-title">${supplier.name}</h5>
          <ul class="list-unstyled small mb-3">${productsHTML}</ul>
          <b><p>Contact: ${supplier.phone}</p></b>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

document.getElementById("areaFilter").addEventListener("change", displaySuppliers);
document.getElementById("categoryFilter").addEventListener("change", displaySuppliers);
displaySuppliers();