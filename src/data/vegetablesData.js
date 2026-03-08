const vegetablesData = [

{
id: 1,
name: "Carrot",
image: "https://www.groworganic.com/cdn/shop/articles/Carrots5.png?v=1751040285",
description: "Carrot is a nutritious root vegetable known for its bright orange color and sweet taste. It is rich in beta-carotene which converts into Vitamin A in the body. Carrots are commonly eaten raw, cooked, or as juice.",
medicinalUses: "Improves eyesight, boosts immunity, supports skin health.",
homeRemedies: "Carrot juice improves digestion and skin glow.",
benefits: [
"Improves eye health",
"Boosts immunity",
"Promotes healthy skin",
"Supports digestion",
"Rich in antioxidants"
],
condition: ["eyes","immunity","skin"]
},

{
id: 2,
name: "Spinach",
image: "https://www.gettystewart.com/wp-content/uploads/2014/01/spinach-fresh-in-bowl-sq.jpg",
description: "Spinach is a leafy green vegetable packed with iron, vitamins, and antioxidants. It is widely used in salads, soups, and curries. Spinach helps improve blood health and strengthens bones.",
medicinalUses: "Prevents anemia, strengthens bones.",
homeRemedies: "Spinach soup boosts energy levels.",
benefits: [
"Rich in iron",
"Improves blood circulation",
"Strengthens bones",
"Boosts immunity",
"Supports heart health"
],
condition: ["immunity","heart","energy"]
},

{
id: 3,
name: "Tomato",
image: "https://m.media-amazon.com/images/I/71n-1hOLDWL._AC_UF1000,1000_QL80_.jpg",
description: "Tomato is a juicy vegetable rich in Vitamin C and lycopene. It is commonly used in salads, sauces, and curries. Tomatoes help protect the body from diseases and improve skin health.",
medicinalUses: "Supports heart health, improves skin.",
homeRemedies: "Tomato juice helps detoxify the body.",
benefits: [
"Rich in Vitamin C",
"Improves skin glow",
"Supports heart health",
"Detoxifies the body",
"Boosts immunity"
],
condition: ["heart","skin","immunity"]
},

{
id: 4,
name: "Potato",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SGXapA0RdXqRhwMAg5I9_j8P3z8Pj00c7Q&s",
description: "Potato is one of the most commonly consumed vegetables worldwide. It is rich in carbohydrates and provides energy. Potatoes are used in many dishes like fries, curries, and mashed foods.",
medicinalUses: "Provides energy, aids digestion.",
homeRemedies: "Raw potato reduces skin irritation.",
benefits: [
"Provides quick energy",
"Supports digestion",
"Contains Vitamin C",
"Helps skin irritation",
"Rich in potassium"
],
condition: ["energy","digestion","skin"]
},

{
id: 5,
name: "Cabbage",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVCxfWXNU_KN29hWdVkSPoqAGiBc4p9-p5g&s",
description: "Cabbage is a leafy vegetable rich in fiber and Vitamin K. It is widely used in salads and stir-fried dishes. It supports digestive health and helps reduce inflammation.",
medicinalUses: "Improves digestion, reduces inflammation.",
homeRemedies: "Cabbage juice helps treat ulcers.",
benefits: [
"Improves digestion",
"Rich in fiber",
"Supports heart health",
"Reduces inflammation",
"Boosts immunity"
],
condition: ["digestion","heart","immunity"]
},

{
id: 6,
name: "Broccoli",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fQmFDQgKEfyAKXANkiQOszZcgXLqLyhDWA&s",
description: "Broccoli is a green vegetable known for its high nutritional value. It contains vitamins, minerals, and antioxidants that support overall health.",
medicinalUses: "Boosts immunity, supports heart health.",
homeRemedies: "Steamed broccoli helps detox the body.",
benefits: [
"Rich in antioxidants",
"Supports heart health",
"Boosts immunity",
"Improves digestion",
"Helps detoxification"
],
condition: ["immunity","heart","digestion"]
},

{
id: 7,
name: "Cauliflower",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlL6V3xIdpNmVupEzC9SEY3gw58fFv22z1g&s",
description: "Cauliflower is a low-calorie vegetable rich in fiber and Vitamin C. It is commonly used in curries, soups, and roasted dishes.",
medicinalUses: "Supports digestion, promotes weight loss.",
homeRemedies: "Cauliflower soup aids digestion.",
benefits: [
"Supports digestion",
"Low in calories",
"Boosts immunity",
"Rich in Vitamin C",
"Helps weight management"
],
condition: ["digestion","immunity","energy"]
},

{
id: 8,
name: "Onion",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWZwAg_zpIZGi179P3pFwQGdYE5vpgcclUg&s",
description: "Onion is a bulb vegetable widely used in cooking. It contains antioxidants that help improve heart health and immunity.",
medicinalUses: "Improves heart health, fights infections.",
homeRemedies: "Onion juice helps relieve cough.",
benefits: [
"Supports heart health",
"Boosts immunity",
"Contains antioxidants",
"Improves digestion",
"Fights infections"
],
condition: ["heart","immunity","digestion"]
},

{
id: 9,
name: "Garlic",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvVhqTgkVFugKTDISRq4WaL0tHKjd7lzdNg&s",
description: "Garlic is a powerful medicinal bulb used in cooking and natural remedies. It helps improve immunity and cardiovascular health.",
medicinalUses: "Boosts immunity, reduces blood pressure.",
homeRemedies: "Raw garlic improves heart health.",
benefits: [
"Reduces blood pressure",
"Boosts immunity",
"Improves heart health",
"Fights infections",
"Improves digestion"
],
condition: ["immunity","heart","digestion"]
},

{
id: 10,
name: "Beetroot",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVf2lRil5-xf22PwlBfU3my0x_vI60fsayQ&s",
description: "Beetroot is a root vegetable rich in iron and nitrates. It supports blood circulation and increases stamina.",
medicinalUses: "Improves blood flow, boosts stamina.",
homeRemedies: "Beetroot juice increases hemoglobin.",
benefits: [
"Improves blood circulation",
"Boosts stamina",
"Increases hemoglobin",
"Supports heart health",
"Detoxifies the body"
],
condition: ["heart","energy","immunity"]
},

{
id: 11,
name: "Brinjal",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1rM1X0aULTAvz_Q7HYUbCd2fIgl9jMFRhA&s",
description: "Brinjal, also known as eggplant, is rich in fiber and antioxidants. It supports digestive health and reduces cholesterol.",
medicinalUses: "Supports digestion, reduces cholesterol.",
homeRemedies: "Brinjal curry improves gut health.",
benefits: [
"Rich in fiber",
"Improves digestion",
"Supports heart health",
"Controls cholesterol",
"Contains antioxidants"
],
condition: ["digestion","heart","immunity"]
},

{
id: 12,
name: "Capsicum",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXT3A5WiySniB5BHHp6xeysf29bBYPKIfbg&s",
description: "Capsicum is a colorful vegetable rich in Vitamin C and antioxidants. It is commonly used in salads and stir-fries.",
medicinalUses: "Boosts immunity, improves skin health.",
homeRemedies: "Capsicum salad supports digestion.",
benefits: [
"Rich in Vitamin C",
"Improves skin health",
"Boosts immunity",
"Supports digestion",
"Contains antioxidants"
],
condition: ["immunity","skin","digestion"]
},

{
id: 13,
name: "Radish",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZeA5UJRmWnmv9jz11z5k8vfBPBeC4FVwDA&s",
description: "Radish is a root vegetable known for its detoxifying properties.",
medicinalUses: "Improves digestion, detoxifies liver.",
homeRemedies: "Radish juice helps relieve constipation.",
benefits: ["Detoxifies liver","Improves digestion","Rich in fiber","Boosts immunity","Supports gut health"],
condition: ["digestion","immunity","skin"]
},

{
id: 14,
name: "Pumpkin",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTUj77TosLATbxSKf0OhDQ45lctl4AuQZ1w&s",
description: "Pumpkin is rich in Vitamin A and antioxidants that support eye health.",
medicinalUses: "Supports eye health, boosts immunity.",
homeRemedies: "Pumpkin soup strengthens immunity.",
benefits: ["Improves eyesight","Boosts immunity","Supports digestion","Rich in antioxidants","Promotes skin health"],
condition: ["eyes","immunity","skin"]
},

{
id: 15,
name: "Peas",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6efJ1Cnd8tzlapA-5TFp747Jri-jbdcsvIA&s",
description: "Peas are small green legumes rich in protein and fiber.",
medicinalUses: "Supports muscle growth, aids digestion.",
homeRemedies: "Boiled peas improve gut health.",
benefits: ["High in protein","Supports muscle growth","Improves digestion","Boosts energy","Rich in vitamins"],
condition: ["energy","digestion","immunity"]
},

{
id: 16,
name: "Corn",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3bWADh9_dc4o6Ef_psV0oLVMJ78-XJef9g&s",
description: "Corn is a sweet grain rich in fiber and carbohydrates.",
medicinalUses: "Supports digestion, provides energy.",
homeRemedies: "Boiled corn boosts stamina.",
benefits: ["Provides energy","Supports digestion","Rich in fiber","Improves metabolism","Boosts stamina"],
condition: ["energy","digestion"]
},

{
id: 17,
name: "Cucumber",
image: "https://www.greendna.in/cdn/shop/products/cucumber_1_700x.jpg?v=1594219681",
description: "Cucumber is a hydrating vegetable with high water content.",
medicinalUses: "Improves hydration, cools the body.",
homeRemedies: "Cucumber slices reduce dark circles.",
benefits: ["Hydrates body","Improves skin health","Supports digestion","Cools body","Rich in antioxidants"],
condition: ["skin","digestion","energy"]
},

{
id: 18,
name: "Lady Finger",
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8uT8YtKKjXFbbw2q4hRP3_woHsIO9w6N8Q&s",
description: "Lady finger (okra) is rich in fiber and helps control blood sugar.",
medicinalUses: "Supports digestion, controls blood sugar.",
homeRemedies: "Okra water helps manage diabetes.",
benefits: ["Controls blood sugar","Supports digestion","Rich in fiber","Boosts immunity","Improves gut health"],
condition: ["digestion","immunity"]
},

{
id: 19,
name: "Sweet Potato",
image: "https://static.toiimg.com/thumb/msid-125095761,width-1280,height-720,imgsize-57324,resizemode-6,overlay-toi_sw,pt-32,y_pad-500/photo.jpg",
description: "Sweet potato is a nutritious root vegetable rich in beta-carotene.",
medicinalUses: "Boosts immunity, improves gut health.",
homeRemedies: "Boiled sweet potato increases energy.",
benefits: ["Boosts immunity","Improves digestion","Rich in Vitamin A","Provides energy","Supports eye health"],
condition: ["immunity","energy","eyes"]
},

{
id: 20,
name: "Bottle Gourd",
image: "https://seedvanam.com/cdn/shop/files/BottleGourd_1200x.jpg?v=1763809283",
description: "Bottle gourd is a light green vegetable rich in water and fiber.",
medicinalUses: "Improves digestion, supports heart health.",
homeRemedies: "Bottle gourd juice helps weight loss.",
benefits: ["Supports heart health","Helps weight loss","Improves digestion","Hydrates body","Detoxifies system"],
condition: ["heart","digestion","energy"]
}

];

export default vegetablesData;