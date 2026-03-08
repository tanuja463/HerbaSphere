const tropicalPlantsData = [
{
id: 1,
name: "Banana Plant",
category: "tropical-plants",
condition:["energy","digestion","heart"],
image: "https://s3.amazonaws.com/YouGarden/Web/500x500/680331_3.jpg",
description:
"Banana plant is a fast-growing tropical plant widely cultivated in warm climates. It produces large green leaves and sweet bananas rich in carbohydrates, vitamins, and minerals.",
medicinalUses:
"Bananas help improve digestion, provide quick energy, and support heart health because of their potassium content.",
homeRemedies:
"Banana stem juice is consumed to support kidney health and detoxify the body.",
benefits:[
"Provides natural energy",
"Improves digestion",
"Supports heart health",
"Rich in potassium"
]
},

{
id: 2,
name: "Coconut Tree",
category: "tropical-plants",
condition:["digestion","skin","energy"],
image: "https://m.media-amazon.com/images/I/61+cd3s6D-L._AC_UF1000,1000_QL80_.jpg",
description:
"Coconut tree is a tall tropical palm known as the 'Tree of Life' because every part of the tree is useful including coconut water, oil, milk, and fiber.",
medicinalUses:
"Coconut water helps maintain hydration and electrolyte balance in the body.",
homeRemedies:
"Fresh coconut water is commonly used to prevent dehydration and heat stroke.",
benefits:[
"Keeps body hydrated",
"Improves skin health",
"Boosts immunity",
"Supports digestion"
]
},

{
id: 3,
name: "Mango Tree",
category: "tropical-plants",
condition:["immunity","eyes","digestion"],
image: "https://zamaorganics.com/cdn/shop/articles/Untitled_design_-_2025-04-01T123544.554_d8bb3296-7b8b-4bbe-b544-7f48e9036c69.jpg?v=1751348260",
description:
"Mango tree is a large tropical fruit tree famous for producing delicious mango fruits. It thrives in warm climates and is widely cultivated in tropical countries.",
medicinalUses:
"Mango fruits are rich in vitamin A and C which help boost immunity and improve eye health.",
homeRemedies:
"Boiled mango leaves water is used traditionally to help control blood sugar.",
benefits:[
"Boosts immunity",
"Improves eye health",
"Rich in antioxidants",
"Supports digestion"
]
},

{
id: 4,
name: "Papaya Plant",
category: "tropical-plants",
condition:["digestion","immunity","skin","heart"],
image: "https://growbilliontrees.com/cdn/shop/articles/papaya-tree-grow-billion-trees.jpg?v=1728391574",
description:
"Papaya is a tropical plant producing sweet orange fruits rich in enzymes and nutrients. The plant grows quickly and is widely cultivated in warm regions.",
medicinalUses:
"Papaya contains papain enzyme which improves digestion and nutrient absorption.",
homeRemedies:
"Papaya leaf juice is used traditionally to increase platelet count during dengue.",
benefits:[
"Improves digestion",
"Boosts immunity",
"Supports heart health",
"Good for skin"
]
},

{
id: 5,
name: "Pineapple Plant",
category: "tropical-plants",
condition:["immunity","digestion"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LZYBTSNmuXQqVdzhhADIlCVwdlLdPU1TmQ&s",
description:
"Pineapple is a tropical fruit plant with spiky leaves and sweet tangy fruit rich in vitamin C.",
medicinalUses:
"Contains bromelain enzyme that reduces inflammation and improves digestion.",
homeRemedies:
"Fresh pineapple juice helps relieve throat infections and digestive issues.",
benefits:[
"Boosts immunity",
"Improves digestion",
"Reduces inflammation",
"Rich in vitamin C"
]
},

{
id: 6,
name: "Guava Tree",
category: "tropical-plants",
condition:["immunity","digestion","heart"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SWRb8erANNkOuuEIPyKOgvgwaBIAT_WGcg&s",
description:
"Guava tree produces nutritious fruits rich in vitamin C and dietary fiber.",
medicinalUses:
"Guava helps strengthen immunity and improve digestive health.",
homeRemedies:
"Guava leaf tea is used to treat diarrhea and stomach infections.",
benefits:[
"Boosts immunity",
"Improves digestion",
"Supports heart health",
"Rich in antioxidants"
]
},

{
id: 7,
name: "Jackfruit Tree",
category: "tropical-plants",
condition:["energy","digestion"],
image: "https://cdn.britannica.com/98/205798-050-14E8BF26/Jackfruit-tree-fruits.jpg",
description:
"Jackfruit tree produces the largest fruit that grows on trees. It is widely used in cooking and vegetarian dishes.",
medicinalUses:
"Jackfruit is rich in fiber and supports digestive health.",
homeRemedies:
"Roasted jackfruit seeds help improve digestion and boost energy.",
benefits:[
"High in fiber",
"Provides energy",
"Improves digestion",
"Rich in vitamins"
]
},

{
id: 8,
name: "Areca Palm",
category: "tropical-plants",
condition:["energy"],
image: "https://www.padmamnursery.com/cdn/shop/files/Areca-Palm-Silver-Planter-1200x1200-4e8ff514-04de-44fc-96cd-b9d684c301dd-_1.jpg?v=1728317647",
description:
"Areca palm is a decorative tropical plant widely used indoors for beautification and air purification.",
medicinalUses:
"It helps remove toxins from indoor air.",
homeRemedies:
"Keeping areca palm indoors improves oxygen levels and air quality.",
benefits:[
"Purifies air",
"Improves oxygen levels",
"Enhances interior decoration",
"Low maintenance plant"
]
},

{
id: 9,
name: "Hibiscus",
category: "tropical-plants",
condition:["heart","skin"],
image: "https://gardenerspath.com/wp-content/uploads/2022/08/Red-Hibiscus-Growing-in-the-Garden.jpg",
description:
"Hibiscus is a tropical flowering plant known for its large colorful flowers.",
medicinalUses:
"Hibiscus tea helps lower blood pressure and improve heart health.",
homeRemedies:
"Hibiscus paste is used for hair growth and scalp nourishment.",
benefits:[
"Supports heart health",
"Improves hair growth",
"Rich in antioxidants",
"Helps control blood pressure"
]
},

{
id: 10,
name: "Aloe Vera",
category: "tropical-plants",
condition:["skin","digestion","immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmN50GDhSTrvVZbxXUMDA_NlVR-E0OoC10Zw&s",
description:
"Aloe vera is a succulent plant known for its healing gel used in skincare and medicine.",
medicinalUses:
"It heals burns, moisturizes skin, and improves digestion.",
homeRemedies:
"Applying aloe gel on burns or cuts helps in faster healing.",
benefits:[
"Heals skin wounds",
"Improves digestion",
"Boosts immunity",
"Natural moisturizer"
]
},

{
id: 11,
name: "Tamarind Tree",
category: "tropical-plants",
condition:["digestion","heart"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6xuSWZ1pHkD7X-TCFSbNR5NqYpVZ3XflgA&s",
description: "Large tropical tree producing sour tamarind pods used in cooking.",
medicinalUses: "Improves digestion and reduces constipation.",
homeRemedies: "Tamarind water helps relieve digestive problems.",
benefits:[
"Improves digestion",
"Rich in antioxidants",
"Supports heart health",
"Boosts immunity"
]
},

{
id: 12,
name: "Curry Leaf Plant",
category: "tropical-plants",
condition:["digestion","immunity","skin"],
image: "https://prabhaorganics.com/cdn/shop/articles/how-to-grow-and-care-for-curry-trees-5075352-hero-df22e1f30cb745bf820a26de04d1af5d.jpg?v=1717151660",
description: "Aromatic plant widely used in Indian cooking.",
medicinalUses: "Improves hair health and digestion.",
homeRemedies: "Curry leaves paste helps reduce hair fall.",
benefits:[
"Improves hair growth",
"Supports digestion",
"Boosts immunity",
"Rich in iron"
]
},

{
id: 13,
name: "Bamboo",
category: "tropical-plants",
condition:["digestion"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DU1CxueQtF6iEkODwc7qq1EwqKnd9_KCUg&s",
description: "Fast-growing tropical grass used in construction and food.",
medicinalUses: "Supports bone health.",
homeRemedies: "Bamboo shoots improve digestion.",
benefits:[
"Rich in fiber",
"Supports digestion",
"Strengthens bones",
"Eco-friendly plant"
]
},

{
id: 14,
name: "Breadfruit Tree",
category: "tropical-plants",
condition:["energy","digestion"],
image: "https://lalitenterprise.com/cdn/shop/files/Breadfruit_Plant.webp?v=1752563271",
description: "Tree producing large starchy fruits used as staple food.",
medicinalUses: "Provides carbohydrates for energy.",
homeRemedies: "Breadfruit helps maintain healthy digestion.",
benefits:[
"Provides energy",
"Rich in carbohydrates",
"Supports digestion",
"Nutritious food source"
]
},

{
id: 15,
name: "Dragon Fruit Plant",
category: "tropical-plants",
condition:["immunity","heart","digestion"],
image: "https://m.media-amazon.com/images/I/61KE6L3GgsL._AC_UF1000,1000_QL80_.jpg",
description: "Cactus plant producing colorful dragon fruit.",
medicinalUses: "Boosts immunity and improves digestion.",
homeRemedies: "Eating dragon fruit helps maintain gut health.",
benefits:[
"Boosts immunity",
"Improves digestion",
"Rich in antioxidants",
"Supports heart health"
]
},

{
id: 16,
name: "Lychee Tree",
category: "tropical-plants",
condition:["immunity","skin","energy"],
image: "https://cdn.mos.cms.futurecdn.net/6oBR9LkioZfxhCT8c3td4i.jpg",
description: "Tree producing sweet and juicy lychee fruits.",
medicinalUses: "Rich in vitamin C and antioxidants.",
homeRemedies: "Lychee juice helps boost immunity.",
benefits:[
"Rich in vitamin C",
"Boosts immunity",
"Supports skin health",
"Provides natural energy"
]
},

{
id: 17,
name: "Passion Fruit Plant",
category: "tropical-plants",
condition:["immunity","energy"],
image: "https://cdn.wikifarmer.com/images/detailed/2023/05/Training-and-Pruning-of-Passion-Fruit-Plant.jpg",
description: "Climbing tropical vine producing passion fruits.",
medicinalUses: "Helps reduce stress and improve sleep.",
homeRemedies: "Passion fruit juice calms nerves and improves sleep.",
benefits:[
"Reduces stress",
"Improves sleep",
"Boosts immunity",
"Rich in antioxidants"
]
},

{
id: 18,
name: "Neem Tree",
category: "tropical-plants",
condition:["skin","immunity"],
image: "https://manbhawannursery.in/cdn/shop/files/neem-plant-1000x1000.webp?v=1763267009",
description: "Medicinal tropical tree widely used in Ayurveda.",
medicinalUses: "Purifies blood and improves skin health.",
homeRemedies: "Neem leaves paste helps treat skin infections.",
benefits:[
"Purifies blood",
"Improves skin health",
"Boosts immunity",
"Natural antibacterial"
]
},

{
id: 19,
name: "Rubber Plant",
category: "tropical-plants",
condition:["energy"],
image: "https://m.media-amazon.com/images/I/71z4dJMMBmL.jpg",
description: "Popular indoor tropical plant with large glossy leaves.",
medicinalUses: "Helps improve indoor air quality.",
homeRemedies: "Keeping rubber plant indoors purifies air.",
benefits:[
"Purifies air",
"Decorative indoor plant",
"Low maintenance",
"Improves indoor environment"
]
},

{
id: 20,
name: "Betel Leaf Plant",
category: "tropical-plants",
condition:["digestion","immunity"],
image: "https://rukminim2.flixcart.com/image/480/640/kr83ukw0/plant-sapling/v/u/a/paan-plant-01-01-click-to-buy-original-imag52yhrgxse8hg.jpeg?q=90",
description: "Climbing plant with heart-shaped leaves used in traditional practices.",
medicinalUses: "Improves digestion and relieves cough.",
homeRemedies: "Betel leaves boiled in water help relieve cold and cough.",
benefits:[
"Improves digestion",
"Relieves cough",
"Boosts immunity",
"Natural antibacterial"
]
}
];

export default tropicalPlantsData;