let places=[
    {
      "title": "Taj Mahal",
      "description": "A UNESCO World Heritage Site, the Taj Mahal is an ivory-white marble mausoleum built by Mughal Emperor Shah Jahan.",
      "price": "₹50 - ₹1100",
      "image":"https://images.unsplash.com/photo-1733316006504-becb91c98310?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
      "location": "Agra, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Jaipur City Palace",
      "description": "A stunning blend of Mughal and Rajasthani architecture, the palace is a historic landmark in Jaipur.",
      "price": "₹200 - ₹3000",
      "image":"https://plus.unsplash.com/premium_photo-1733514692259-a2c77d567085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      "location": "Jaipur, Rajasthan",
      "country": "India"
    },
    {
      "title": "Golden Temple",
      "description": "A sacred Sikh shrine covered in gold and surrounded by a peaceful water tank.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1733173523386-3006dec1a835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fHw%3D",
      "location": "Amritsar, Punjab",
      "country": "India"
    },
    {
      "title": "Mysore Palace",
      "description": "A grand palace with Indo-Saracenic architecture, famous for its light and sound show.",
      "price": "₹70 - ₹200",
      "image":"https://plus.unsplash.com/premium_photo-1675714692733-bc27da8f6f0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D",
      "location": "Mysore, Karnataka",
      "country": "India"
    },
    {
      "title": "Hampi",
      "description": "An ancient village with ruins of the Vijayanagar Empire and stunning landscapes.",
      "price": "₹40 - ₹600",
      "image":"https://images.unsplash.com/photo-1733317817195-36b3a6473dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fHw%3D",
      "location": "Hampi, Karnataka",
      "country": "India"
    },
    {
      "title": "Varanasi Ghats",
      "description": "The spiritual capital of India, known for its ghats, temples, and the Ganges River.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1583244685026-d8519b5e3d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D",
      "location": "Varanasi, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Ajanta and Ellora Caves",
      "description": "Ancient rock-cut caves with intricate Buddhist, Hindu, and Jain carvings.",
      "price": "₹40 - ₹600",
      "image":"https://images.unsplash.com/photo-1731617732560-32268c055254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTUzfHx8ZW58MHx8fHx8",
      "location": "Aurangabad, Maharashtra",
      "country": "India"
    },
    {
      "title": "Gateway of India",
      "description": "A historic arch monument built during the 20th century in Mumbai.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1733003538511-4a2c0a42d9c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fHw%3D",
      "location": "Mumbai, Maharashtra",
      "country": "India"
    },
    {
      "title": "Ranthambore National Park",
      "description": "A famous wildlife reserve known for Bengal tigers and diverse flora and fauna.",
      "price": "₹600 - ₹1700",
      "image":"https://images.unsplash.com/photo-1733826996743-b21ac2ddbaee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjJ8fHxlbnwwfHx8fHw%3D",
      "location": "Sawai Madhopur, Rajasthan",
      "country": "India"
    },
    {
      "title": "Meenakshi Temple",
      "description": "A stunning Dravidian-style temple dedicated to Goddess Meenakshi.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1733778567728-2941850a901c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8fHw%3D",
      "location": "Madurai, Tamil Nadu",
      "country": "India"
    },
    {
      "title": "Sundarbans National Park",
      "description": "A UNESCO-listed mangrove forest, home to the Royal Bengal Tiger.",
      "price": "₹60 - ₹400",
      "image":"https://images.unsplash.com/photo-1733422919430-1d1c015bc31f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTAxfHx8ZW58MHx8fHx8",
      "location": "West Bengal",
      "country": "India"
    },
    {
      "title": "Udaipur City Palace",
      "description": "A beautiful palace with scenic lake views, history, and museum exhibits.",
      "price": "₹300 - ₹1000",
      "image":"https://images.unsplash.com/photo-1732058824460-d89cb7b4a38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTIxfHx8ZW58MHx8fHx8",
      "location": "Udaipur, Rajasthan",
      "country": "India"
    },
    {
      "title": "Charminar",
      "description": "A historic mosque and monument known for its Indo-Islamic architecture.",
      "price": "₹25 - ₹200",
      "image":"https://images.unsplash.com/photo-1724786594231-c8bfd41c0bfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTI5fHx8ZW58MHx8fHx8",
      "location": "Hyderabad, Telangana",
      "country": "India"
    },
    {
      "title": "Kaziranga National Park",
      "description": "A sanctuary famous for one-horned rhinos and rich biodiversity.",
      "price": "₹100 - ₹2000",
      "image":"https://images.unsplash.com/photo-1724271364158-aa8baa615cf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTM3fHx8ZW58MHx8fHx8",
      "location": "Assam",
      "country": "India"
    },
    {
      "title": "Leh Ladakh",
      "description": "A high-altitude desert with mesmerizing landscapes, monasteries, and adventure activities.",
      "price": "Varies",
      "image":"https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTYzfHx8ZW58MHx8fHx8",
      "location": "Ladakh",
      "country": "India"
    },
    {
      "title": "Rishikesh",
      "description": "The yoga capital of the world, known for adventure sports and spiritual retreats.",
      "price": "Varies",
      "image":"https://images.unsplash.com/photo-1733213401352-10e83b6384e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTcwfHx8ZW58MHx8fHx8",
      "location": "Uttarakhand",
      "country": "India"
    },
    {
      "title": "Andaman & Nicobar Islands",
      "description": "Tropical paradise with white sandy beaches and marine biodiversity.",
      "price": "Varies",
      "image":"https://plus.unsplash.com/premium_photo-1675714692779-0c451bbd796a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjAwfHx8ZW58MHx8fHx8",
      "location": "Andaman & Nicobar Islands",
      "country": "India"
    },
    {
      "title": "Kanyakumari",
      "description": "The southernmost point of India, famous for its sunrise and Vivekananda Rock Memorial.",
      "price": "Varies",
      "image":"https://images.unsplash.com/photo-1732470878984-f35c1a805e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjE1fHx8ZW58MHx8fHx8",
      "location": "Tamil Nadu",
      "country": "India"
    },
    {
      "title": "Chittorgarh Fort",
      "description": "A historic fort known for Rajput valor and stunning architecture.",
      "price": "₹50 - ₹600",
      "image":"https://images.unsplash.com/photo-1733285569406-8af98e3f3bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjMxfHx8ZW58MHx8fHx8",
      "location": "Chittorgarh, Rajasthan",
      "country": "India"
    },
    {
      "title": "Jaisalmer Fort",
      "description": "A living fort made of yellow sandstone, featuring temples and havelis.",
      "price": "₹50 - ₹500",
      "image":"https://images.unsplash.com/photo-1733234976396-87cf34ae6038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjQyfHx8ZW58MHx8fHx8",
      "location": "Jaisalmer, Rajasthan",
      "country": "India"
    },
    {
      "title": "Bodh Gaya",
      "description": "A major Buddhist pilgrimage site where Lord Buddha attained enlightenment.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1733124405677-04355df59c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjczfHx8ZW58MHx8fHx8",
      "location": "Bihar",
      "country": "India"
    },
    {
      "title": "Sikkim",
      "description": "A Himalayan state known for monasteries, mountains, and adventure tourism.",
      "price": "Varies",
      "image":"https://images.unsplash.com/photo-1733227337809-6b7d33bfecd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjU3fHx8ZW58MHx8fHx8",
      "location": "Sikkim",
      "country": "India"
    },
    {
      "title": "Rameshwaram",
      "description": "A sacred pilgrimage site with the famous Ramanathaswamy Temple.",
      "price": "Free",
      "image":"https://plus.unsplash.com/premium_photo-1732569119693-05321f406646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzAwfHx8ZW58MHx8fHx8",
      "location": "Tamil Nadu",
      "country": "India"
    },
    {
      "title": "Mahabalipuram",
      "description": "A UNESCO site with rock-cut temples and shore temples.",
      "price": "₹10 - ₹600",
      "image":"https://images.unsplash.com/photo-1733031510035-3fda1ac87b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzAyfHx8ZW58MHx8fHx8",
      "location": "Tamil Nadu",
      "country": "India"
    },
    {
      "title": "Chandni Chowk",
      "description": "A vibrant market in Old Delhi known for street food and shopping.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFya2V0fGVufDB8fDB8fHww",
      "location": "Delhi",
      "country": "India"
    },
    {
      "title": "Loktak Lake",
      "description": "The largest freshwater lake in northeast India, famous for floating islands.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1731271140119-34ad9551ff10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzI2fHx8ZW58MHx8fHx8",
      "location": "Manipur",
      "country": "India"
    },
    {
      "title": "Coorg",
      "description": "A lush hill station known for coffee plantations and scenic beauty.",
      "price": "Varies",
      "image":"https://plus.unsplash.com/premium_photo-1732736766561-489c030d200b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzM1fHx8ZW58MHx8fHx8",
      "location": "Karnataka",
      "country": "India"
    },
    {
      "title": "Dal Lake",
      "description": "A beautiful lake in Srinagar with houseboats and shikara rides.",
      "price": "₹500 - ₹2000",
      "image":"https://images.unsplash.com/photo-1732704827525-4ffb9262eff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzU3fHx8ZW58MHx8fHx8",
      "location": "Srinagar, Jammu & Kashmir",
      "country": "India"
    },
    {
      "title": "Cherrapunji",
      "description": "One of the wettest places on earth, famous for waterfalls and living root bridges.",
      "price": "Free",
      "image":"https://images.unsplash.com/photo-1732660122434-775d5af17735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzgwfHx8ZW58MHx8fHx8",
      "location": "Meghalaya",
      "country": "India"
    }
  ];

  export default places;
  