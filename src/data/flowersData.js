const flowersData = [
{
id: 1,
name: "Rose",
category: "flowers",
condition:["skin","digestion"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPaOIM58bafsB_KzFVdZXQSjWFjfadHomUg&s",
description: "Rose is one of the most popular and beautiful flowers known for its pleasant fragrance and soft petals. It is widely used in perfumes, cosmetics, and decorations.",
medicinalUses: "Rose petals are rich in antioxidants and vitamin C. They help improve skin health and reduce stress.",
homeRemedies: "Rose water can be applied to the face to cool the skin and reduce irritation.",
benefits:[
"Improves skin glow",
"Reduces stress",
"Supports digestion",
"Rich in antioxidants"
]
},

{
id: 2,
name: "Jasmine",
category: "flowers",
condition:["energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfN93K3dfZVXrK-UVz2mkTgZr2PYCvd4vYA&s",
description: "Jasmine is a fragrant white flower commonly used in perfumes and religious ceremonies.",
medicinalUses: "Helps reduce anxiety and improves mood.",
homeRemedies: "Jasmine tea helps improve sleep and relaxation.",
benefits:[
"Reduces anxiety",
"Improves sleep",
"Boosts mood",
"Natural relaxant"
]
},

{
id: 3,
name: "Lotus",
category: "flowers",
condition:["heart","digestion","energy"],
image: "https://hips.hearstapps.com/hmg-prod/images/water-lilies-lake-france-royalty-free-image-1699382596.jpg?crop=0.662xw:1.00xh;0.170xw,0&resize=1200:*",
description: "Lotus is a sacred aquatic flower found in ponds and lakes.",
medicinalUses: "Supports heart health and improves blood circulation.",
homeRemedies: "Lotus seeds are eaten to improve digestion.",
benefits:[
"Improves heart health",
"Supports digestion",
"Boosts energy",
"Rich in nutrients"
]
},

{
id: 4,
name: "Hibiscus",
category: "flowers",
condition:["heart","immunity"],
image: "https://www.saharanpurnursery.in/cdn/shop/files/1_22de627a-485d-4e10-a677-b12b46a24883_700x700.jpg?v=1718611145",
description: "Hibiscus is a bright tropical flower known for its medicinal properties.",
medicinalUses: "Helps lower blood pressure and cholesterol.",
homeRemedies: "Hibiscus tea boosts immunity.",
benefits:[
"Lowers blood pressure",
"Improves heart health",
"Boosts immunity",
"Rich in antioxidants"
]
},

{
id: 5,
name: "Sunflower",
category: "flowers",
condition:["heart","energy","immunity"],
image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
description: "Sunflower is a tall plant with large yellow flowers that follow the sun.",
medicinalUses: "Seeds are rich in vitamins and minerals.",
homeRemedies: "Eating sunflower seeds boosts energy.",
benefits:[
"Improves heart health",
"Boosts energy",
"Rich in vitamin E",
"Supports immunity"
]
},

{
id: 6,
name: "Marigold",
category: "flowers",
condition:["skin","immunity"],
image: "https://organicbazar.net/cdn/shop/products/3-marigold-copy-2.jpg?v=1694169141",
description: "Marigold is a bright orange flower widely used in festivals and decorations.",
medicinalUses: "Helps heal wounds and skin infections.",
homeRemedies: "Marigold paste can reduce skin inflammation.",
benefits:[
"Heals wounds",
"Improves skin health",
"Reduces inflammation",
"Antibacterial properties"
]
},

{
id: 7,
name: "Lily",
category: "flowers",
condition:["skin","energy"],
image: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/04/lily.jpg",
description: "Lily is an elegant and fragrant flower commonly used in gardens.",
medicinalUses: "Traditionally used to calm the mind.",
homeRemedies: "Lily extracts soothe skin irritation.",
benefits:[
"Calms the mind",
"Improves skin health",
"Reduces stress",
"Natural fragrance"
]
},

{
id: 8,
name: "Tulip",
category: "flowers",
condition:["skin"],
image: "https://5.imimg.com/data5/SELLER/Default/2021/9/BE/RY/II/136886790/tulip-bulbs-500x500-500x500.jpg",
description: "Tulip is a colorful cup-shaped flower grown widely in gardens.",
medicinalUses: "Contains compounds that nourish skin.",
homeRemedies: "Tulip petals are used in natural skincare.",
benefits:[
"Improves skin health",
"Natural antioxidant",
"Decorative beauty",
"Supports relaxation"
]
},

{
id: 9,
name: "Orchid",
category: "flowers",
condition:["skin","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJoiwqp9R2IYoW4BNETYdjBHiK56Qpgtfog&s",
description: "Orchid is an exotic flower known for its unique shape and beauty.",
medicinalUses: "Helps support vitality and skin care.",
homeRemedies: "Orchid extracts are used in herbal skincare.",
benefits:[
"Improves skin health",
"Boosts vitality",
"Rich in antioxidants",
"Decorative flower"
]
},

{
id: 10,
name: "Daisy",
category: "flowers",
condition:["digestion","immunity"],
image: "https://m.media-amazon.com/images/I/519SKC3FpVL._AC_UF1000,1000_QL80_.jpg",
description: "Daisy is a small white flower with a yellow center.",
medicinalUses: "Used for minor wound healing.",
homeRemedies: "Daisy tea supports digestion.",
benefits:[
"Heals minor wounds",
"Supports digestion",
"Anti-inflammatory",
"Boosts immunity"
]
},

{
id: 11,
name: "Lavender",
category: "flowers",
condition:["energy"],
image: "https://m.media-amazon.com/images/I/81euKzQpXjL._AC_UF1000,1000_QL80_.jpg",
description: "Lavender is a purple fragrant flower widely used in aromatherapy.",
medicinalUses: "Reduces anxiety and stress.",
homeRemedies: "Lavender oil improves sleep quality.",
benefits:[
"Improves sleep",
"Reduces stress",
"Natural relaxant",
"Relieves headaches"
]
},

{
id: 12,
name: "Chrysanthemum",
category: "flowers",
condition:["eyes","immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT_bxz5FavyO7bUxpaQd3ASHdrWbdLX5T-Q&s",
description: "Chrysanthemum is a colorful layered flower used in teas.",
medicinalUses: "Improves eye health.",
homeRemedies: "Chrysanthemum tea cools the body.",
benefits:[
"Improves vision",
"Cools the body",
"Boosts immunity",
"Anti-inflammatory"
]
},

{
id: 13,
name: "Bougainvillea",
category: "flowers",
condition:["immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tWtZjutJtjiRwfyQSEFA62ESy-RRXvCNNQ&s",
description: "Bougainvillea is a climbing plant with bright colorful flowers.",
medicinalUses: "Supports respiratory health.",
homeRemedies: "Bougainvillea extract helps reduce cough.",
benefits:[
"Improves respiratory health",
"Boosts immunity",
"Natural medicinal plant",
"Decorative plant"
]
},

{
id: 14,
name: "Periwinkle",
category: "flowers",
condition:["immunity"],
image: "https://images.ctfassets.net/3s5io6mnxfqz/7sIUyT70U5kVVYdXXuRGMV/ffca9d887aa33b98c160ed219ad1b8ef/AdobeStock_50780000_2.jpeg?w=1920",
description: "Periwinkle is a small flowering plant with medicinal importance.",
medicinalUses: "Used in medicines for certain diseases.",
homeRemedies: "Leaves used in herbal preparations.",
benefits:[
"Medicinal value",
"Supports traditional medicine",
"Improves health",
"Natural herb"
]
},

{
id: 15,
name: "Zinnia",
category: "flowers",
condition:["immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5W-0GshbCUAhand3Ng0IO10UmhHRcagKDg&s",
description: "Zinnia is a bright garden flower that attracts butterflies.",
medicinalUses: "Used in traditional herbal remedies.",
homeRemedies: "Zinnia extracts support immune health.",
benefits:[
"Boosts immunity",
"Garden beauty",
"Natural remedy",
"Attracts pollinators"
]
},

{
id: 16,
name: "Petunia",
category: "flowers",
condition:["energy"],
image: "https://upjau.in/wp-content/uploads/2025/09/petunia-blue.jpg",
description: "Petunia is a colorful trumpet-shaped flower grown in gardens.",
medicinalUses: "Has calming herbal properties.",
homeRemedies: "Petunia extracts used in herbal medicine.",
benefits:[
"Calming effect",
"Decorative plant",
"Supports relaxation",
"Natural remedy"
]
},

{
id: 17,
name: "Camellia",
category: "flowers",
condition:["skin","heart","immunity"],
image: "https://www.bhg.com/thmb/xk_Zc3x5MDlbzs-6j4PZsLDcwQU=/1659x0/filters:no_upscale():strip_icc()/pink-camellias-5702caae6a6e4e1d8dc86bcd8e949be2.jpg",
description: "Camellia is an evergreen flowering plant rich in antioxidants.",
medicinalUses: "Protects the body from cell damage.",
homeRemedies: "Camellia oil improves skin glow.",
benefits:[
"Improves skin",
"Rich in antioxidants",
"Supports heart health",
"Boosts immunity"
]
},

{
id: 18,
name: "Geranium",
category: "flowers",
condition:["skin","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSOi3JaZB7DjmifUeB4ghZwuLvPym3kCZVQ&s",
description: "Geranium is a fragrant plant used in perfumes and oils.",
medicinalUses: "Improves skin health and reduces stress.",
homeRemedies: "Geranium oil used for relaxation.",
benefits:[
"Improves skin",
"Reduces stress",
"Balances hormones",
"Natural fragrance"
]
},

{
id: 19,
name: "Bluebell",
category: "flowers",
condition:["immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbT65QI7AFapUgFsX-zTxdCDYOMYUJOCCFtA&s",
description: "Bluebell is a bell-shaped blue flower found in forests.",
medicinalUses: "Traditionally used in herbal medicine.",
homeRemedies: "Used for respiratory support.",
benefits:[
"Supports respiratory health",
"Natural herb",
"Traditional medicine",
"Garden beauty"
]
},

{
id: 20,
name: "Magnolia",
category: "flowers",
condition:["energy"],
image: "https://cdn.britannica.com/20/127020-050-0BBEF3ED/Magnolia.jpg",
description: "Magnolia is a large fragrant flower known for medicinal bark extracts.",
medicinalUses: "Helps reduce stress and inflammation.",
homeRemedies: "Magnolia bark improves sleep.",
benefits:[
"Reduces anxiety",
"Improves sleep",
"Anti-inflammatory",
"Boosts relaxation"
]
}
];

export default flowersData;