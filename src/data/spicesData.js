const spicesData = [
{
id: 1,
name: "Turmeric",
category: "spices",
condition:["immunity","skin","heart"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gnRGqGL3rQQ1u7vviV5oJXwgMjmclgWvmA&s",
description: "Turmeric is a bright yellow spice widely used in Indian cooking and traditional medicine. It comes from the root of the Curcuma longa plant and has powerful healing properties.",
medicinalUses: "Contains curcumin which reduces inflammation and boosts immunity.",
homeRemedies: "Turmeric milk is commonly used to treat cold and cough.",
benefits: [
"Boosts immunity",
"Reduces inflammation",
"Improves skin health",
"Supports joint health"
]
},

{
id: 2,
name: "Black Pepper",
category: "spices",
condition:["digestion","immunity"],
image: "https://assets.clevelandclinic.org/transform/65ddb397-7835-4b21-b30b-d123be3cb5c8/blackPepper-185067429-770x533-1_jpg",
description: "Black pepper is known as the 'King of Spices'. It has a strong pungent flavor and is widely used in cooking around the world.",
medicinalUses: "Improves digestion and enhances nutrient absorption.",
homeRemedies: "Pepper tea with honey relieves sore throat.",
benefits: [
"Improves digestion",
"Boosts metabolism",
"Supports respiratory health",
"Enhances nutrient absorption"
]
},

{
id: 3,
name: "Cumin",
category: "spices",
condition:["digestion","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpyPGYr4M9nE__jAgh3_uvI7FWh-cEKbBgw&s",
description: "Cumin seeds are aromatic spices commonly used in curries, soups, and spice blends.",
medicinalUses: "Supports digestion and improves metabolism.",
homeRemedies: "Cumin water is consumed to reduce bloating.",
benefits: [
"Improves digestion",
"Boosts metabolism",
"Rich in iron",
"Supports weight management"
]
},

{
id: 4,
name: "Coriander Seeds",
category: "spices",
condition:["digestion","heart"],
image: "https://cdn.britannica.com/95/205795-050-EF644B7F/Bowl-cilantro-leaves-coriander-fruits-Coriandrum-sativum.jpg",
description: "Coriander seeds have a mild citrus flavor and are commonly used in Indian and Asian cuisines.",
medicinalUses: "Helps control blood sugar and improves digestion.",
homeRemedies: "Coriander seed water detoxifies the body.",
benefits: [
"Controls blood sugar",
"Improves digestion",
"Rich in antioxidants",
"Supports heart health"
]
},

{
id: 5,
name: "Cardamom",
category: "spices",
condition:["digestion","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozZfjn2ZfB6rG7WVwc9Vh7Ud1EXQK40JbjA&s",
description: "Cardamom is a fragrant spice known for its sweet aroma and is commonly used in tea, desserts, and curries.",
medicinalUses: "Improves digestion and freshens breath.",
homeRemedies: "Cardamom tea reduces acidity and bloating.",
benefits: [
"Improves digestion",
"Freshens breath",
"Boosts metabolism",
"Supports respiratory health"
]
},

{
id: 6,
name: "Cloves",
category: "spices",
condition:["immunity","digestion"],
image: "https://media.post.rvohealth.io/wp-content/uploads/2020/01/cloves-on-wooden-spoon-800x728.jpg",
description: "Cloves are aromatic flower buds used as spice and medicine for centuries.",
medicinalUses: "Has antibacterial properties and relieves toothache.",
homeRemedies: "Clove oil is applied to reduce tooth pain.",
benefits: [
"Relieves tooth pain",
"Boosts immunity",
"Improves digestion",
"Reduces inflammation"
]
},

{
id: 7,
name: "Cinnamon",
category: "spices",
condition:["heart","energy"],
image: "https://cdn.britannica.com/07/123107-050-1520881F/bark-Cinnamomum-cassia-plant-spice.jpg",
description: "Cinnamon is a sweet and woody spice obtained from the bark of cinnamon trees.",
medicinalUses: "Helps regulate blood sugar levels.",
homeRemedies: "Cinnamon tea supports weight management.",
benefits: [
"Controls blood sugar",
"Boosts metabolism",
"Improves heart health",
"Rich in antioxidants"
]
},

{
id: 8,
name: "Nutmeg",
category: "spices",
condition:["digestion","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVlbltE-ivySAjLOQ1gthWXTyRVKYViFjTg&s",
description: "Nutmeg is a warm flavored spice used in desserts and traditional medicines.",
medicinalUses: "Improves sleep and digestion.",
homeRemedies: "Nutmeg milk helps reduce stress.",
benefits: [
"Improves sleep",
"Relieves stress",
"Supports digestion",
"Boosts immunity"
]
},

{
id: 9,
name: "Fenugreek",
category: "spices",
condition:["digestion","heart"],
image: "https://hips.hearstapps.com/hmg-prod/images/fenugreek-feature-1676488089.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
description: "Fenugreek seeds are slightly bitter and commonly used in Indian cooking.",
medicinalUses: "Helps control diabetes and cholesterol levels.",
homeRemedies: "Fenugreek soaked water improves digestion.",
benefits: [
"Controls blood sugar",
"Improves digestion",
"Boosts metabolism",
"Supports heart health"
]
},

{
id: 10,
name: "Mustard Seeds",
category: "spices",
condition:["digestion","heart"],
image: "https://sharmaglobletrade.com/wp-content/uploads/2024/08/Mustard-Seeds.jpg",
description: "Mustard seeds are tiny seeds used for tempering dishes and adding flavor.",
medicinalUses: "Improves digestion and circulation.",
homeRemedies: "Mustard oil massage relieves joint pain.",
benefits: [
"Improves digestion",
"Supports heart health",
"Reduces inflammation",
"Boosts metabolism"
]
},

{
id: 11,
name: "Fennel Seeds",
category: "spices",
condition:["digestion","eyes"],
image: "https://images.apollo247.in/pd-cms/cms/2025-08/AdobeStock_171185102_Preview.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
description: "Fennel seeds are sweet flavored seeds often eaten after meals for digestion.",
medicinalUses: "Relieves gas and bloating.",
homeRemedies: "Fennel water improves digestion.",
benefits: [
"Improves digestion",
"Relieves bloating",
"Supports eye health",
"Boosts metabolism"
]
},

{
id: 12,
name: "Star Anise",
category: "spices",
condition:["immunity","digestion"],
image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/star-anise-732x549-thumbnail.jpg",
description: "Star anise is a star shaped spice with strong licorice flavor.",
medicinalUses: "Boosts immunity and supports respiratory health.",
homeRemedies: "Star anise tea helps relieve flu symptoms.",
benefits: [
"Boosts immunity",
"Supports respiratory health",
"Improves digestion",
"Rich in antioxidants"
]
},

{
id: 13,
name: "Bay Leaf",
category: "spices",
condition:["digestion","heart"],
image: "https://images.apollo247.in/pd-cms/cms/2025-07/AdobeStock_493529929.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
description: "Bay leaves are aromatic leaves used in soups, rice dishes, and curries.",
medicinalUses: "Supports digestion and reduces stress.",
homeRemedies: "Bay leaf tea helps relax the body.",
benefits: [
"Improves digestion",
"Relieves stress",
"Boosts immunity",
"Supports heart health"
]
},

{
id: 14,
name: "Paprika",
category: "spices",
condition:["eyes","immunity"],
image: "https://www.allrecipes.com/thmb/JAZLyL8u4aMJKlIBGzG5QbECocY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-paprika-4x3-59c394d4747846c1b39f0eb7bc0323cd.jpg",
description: "Paprika is a mild red spice made from dried peppers.",
medicinalUses: "Rich in antioxidants and vitamins.",
homeRemedies: "Paprika supports immune health.",
benefits: [
"Boosts immunity",
"Rich in vitamin A",
"Supports eye health",
"Improves metabolism"
]
},

{
id: 15,
name: "Saffron",
category: "spices",
condition:["skin","energy"],
image: "https://media.post.rvohealth.io/wp-content/uploads/2020/11/saffron-732x549-thumbnail-732x549.jpg",
description: "Saffron is one of the most expensive spices in the world derived from flower stigmas.",
medicinalUses: "Improves mood and skin health.",
homeRemedies: "Saffron milk improves complexion.",
benefits: [
"Improves mood",
"Boosts skin glow",
"Supports brain health",
"Rich in antioxidants"
]
},

{
id: 16,
name: "Ginger Powder",
category: "spices",
condition:["digestion","immunity"],
image: "https://m.media-amazon.com/images/I/613gdZIEm2L._AC_UF894,1000_QL80_.jpg",
description: "Ginger powder is made from dried ginger root and used in cooking and herbal medicine.",
medicinalUses: "Relieves nausea and improves digestion.",
homeRemedies: "Ginger tea cures cold and sore throat.",
benefits: [
"Improves digestion",
"Relieves nausea",
"Boosts immunity",
"Reduces inflammation"
]
},

{
id: 17,
name: "Garlic Powder",
category: "spices",
condition:["heart","immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9SgDin8pjbddYuhfPLOOwuM6iiXfrjiitQ&s",
description: "Garlic powder is made from dried garlic cloves and used as seasoning.",
medicinalUses: "Supports heart health and reduces cholesterol.",
homeRemedies: "Garlic consumption helps reduce blood pressure.",
benefits: [
"Supports heart health",
"Boosts immunity",
"Reduces cholesterol",
"Improves circulation"
]
},

{
id: 18,
name: "Red Chili Powder",
category: "spices",
condition:["energy","immunity"],
image: "https://cdn.shopaccino.com/refresh/articles/shutterstock277819244-825558_l.jpg?v=591",
description: "Red chili powder is made from dried red chilies and adds heat to dishes.",
medicinalUses: "Boosts metabolism and improves circulation.",
homeRemedies: "Small amounts improve digestion.",
benefits: [
"Boosts metabolism",
"Improves circulation",
"Rich in vitamin C",
"Supports immunity"
]
},

{
id: 19,
name: "Ajwain (Carom Seeds)",
category: "spices",
condition:["digestion"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TZFis5vXTcgFFWbuv_K4GksqvPBLimNB7Q&s",
description: "Ajwain seeds have a strong aroma and are commonly used in Indian cooking.",
medicinalUses: "Relieves stomach pain and indigestion.",
homeRemedies: "Ajwain water helps treat gas and bloating.",
benefits: [
"Improves digestion",
"Relieves stomach pain",
"Boosts metabolism",
"Supports gut health"
]
},

{
id: 20,
name: "Tamarind Powder",
category: "spices",
condition:["digestion","heart"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0Wg08lBqV0xfRzRu3wm6K4CT-bAYwl0t8A&s",
description: "Tamarind powder is made from dried tamarind pulp and used to add sour flavor to dishes.",
medicinalUses: "Improves digestion and reduces constipation.",
homeRemedies: "Tamarind water helps detoxify the body.",
benefits: [
"Improves digestion",
"Rich in antioxidants",
"Supports heart health",
"Boosts immunity"
]
}
];

export default spicesData;