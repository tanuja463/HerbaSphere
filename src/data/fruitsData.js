const fruitsData = [

{
id: 1,
name: "Mango",
category: "fruits",
description: "Mango is a tropical fruit widely known as the King of Fruits. It is sweet, juicy, and rich in nutrients. Mangoes grow mainly in warm climates and are very popular in countries like India, Thailand, and the Philippines. They are eaten fresh or used in juices, desserts, pickles, and smoothies. Mangoes are also valued for their health benefits and natural sweetness.",
medicinalUses: "Boosts immunity and improves digestion.",
homeRemedies: "Mango pulp improves skin glow.",
benefits: [
"Rich in Vitamin A and Vitamin C.",
"Improves digestion because of enzymes.",
"Helps boost the immune system.",
"Supports eye health.",
"Provides natural energy."
],
condition: ["immunity","digestion","eyes","energy"],
image: "https://www.biovie.fr/img/cms/histoire-origine-mangue.png"
},

{
id: 2,
name: "Banana",
category: "fruits",
description: "Banana is one of the most widely consumed fruits in the world. It grows in tropical regions and is known for its soft texture and sweet taste. Bananas are rich in potassium and provide instant energy to the body. They can be eaten raw, added to smoothies, or used in desserts and baking. Because of their nutritional value, bananas are a staple food in many diets.",
medicinalUses: "Good for heart health and digestion.",
homeRemedies: "Banana with honey relieves cough.",
benefits: [
"Excellent source of potassium.",
"Provides quick energy.",
"Supports heart health.",
"Helps regulate blood pressure.",
"Improves digestion."
],
condition: ["heart","digestion","energy"],
image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920-1024x683.jpg"
},

{
id: 3,
name: "Apple",
category: "fruits",
description: "Apple is a nutritious fruit known for its crisp texture and sweet taste. It is widely grown in temperate regions. Apples are commonly eaten raw and used in juices, pies, and desserts.",
medicinalUses: "Helps maintain heart health.",
homeRemedies: "Apple with honey helps sore throat.",
benefits: [
"Rich in fiber.",
"Improves digestion.",
"Supports heart health.",
"Helps control weight.",
"Boosts immunity."
],
condition: ["heart","digestion","immunity"],
image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg"
},

{
id: 4,
name: "Orange",
category: "fruits",
description: "Orange is a citrus fruit known for its refreshing taste and high vitamin C content. It is widely used in juices and salads.",
medicinalUses: "Strengthens immune system.",
homeRemedies: "Orange juice helps relieve fatigue.",
benefits: [
"High in Vitamin C.",
"Boosts immunity.",
"Improves skin health.",
"Supports heart health.",
"Hydrates the body."
],
condition: ["immunity","skin","heart"],
image: "https://tiimg.tistatic.com/fp/1/006/433/natural-fresh-orange-fruits-494.jpg"
},

{
id: 5,
name: "Pineapple",
category: "fruits",
description: "Pineapple is a tropical fruit known for its tangy sweetness. It contains bromelain enzyme which aids digestion.",
medicinalUses: "Reduces inflammation.",
homeRemedies: "Pineapple juice helps digestion.",
benefits: [
"Rich in antioxidants.",
"Aids digestion.",
"Supports immunity.",
"Reduces inflammation.",
"Promotes healthy skin."
],
condition: ["digestion","immunity","skin"],
image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"
},

{
id: 6,
name: "Papaya",
category: "fruits",
description: "Papaya is a soft tropical fruit rich in enzymes and vitamins. It helps digestion and improves gut health.",
medicinalUses: "Good for digestion.",
homeRemedies: "Papaya improves bowel movement.",
benefits: [
"Rich in Vitamin C.",
"Improves digestion.",
"Supports immunity.",
"Promotes healthy skin.",
"Reduces inflammation."
],
condition: ["digestion","immunity","skin"],
image: "https://upload.wikimedia.org/wikipedia/commons/0/09/Papaya_-_longitudinal_section.jpg"
},

{
id: 7,
name: "Grapes",
category: "fruits",
description: "Grapes are small juicy fruits that grow in bunches. They are used for eating fresh, making juice, and producing wine.",
medicinalUses: "Improves heart health.",
homeRemedies: "Grape juice helps fatigue.",
benefits: [
"Rich in antioxidants.",
"Supports heart health.",
"Boosts immunity.",
"Improves skin.",
"Good for hydration."
],
condition: ["heart","immunity","skin"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVRCJcuxM78pEIQEZFKs0dqqzmsVFk27UBg&s"
},

{
id: 8,
name: "Strawberry",
category: "fruits",
description: "Strawberries are bright red fruits known for their sweet taste and aroma. They are widely used in desserts and smoothies.",
medicinalUses: "Improves skin health.",
homeRemedies: "Strawberry mask improves skin glow.",
benefits: [
"Rich in antioxidants.",
"Boosts immunity.",
"Improves heart health.",
"Supports skin health.",
"Low in calories."
],
condition: ["skin","immunity","heart"],
image: "https://im.pluckk.in/unsafe/1920x0/uploads/30300-2.png"
},

{
id: 9,
name: "Watermelon",
category: "fruits",
description: "Watermelon is a refreshing fruit with high water content. It is widely consumed during summer.",
medicinalUses: "Prevents dehydration.",
homeRemedies: "Watermelon juice cools the body.",
benefits: [
"High water content.",
"Prevents dehydration.",
"Supports heart health.",
"Improves skin.",
"Rich in antioxidants."
],
condition: ["heart","skin","energy"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCR2eBUKsjuLAl0oqz7YvkZJFU1C3znejG4g&s"
},

{
id: 10,
name: "Pomegranate",
category: "fruits",
description: "Pomegranate is a fruit known for its red seeds and antioxidant properties.",
medicinalUses: "Improves blood circulation.",
homeRemedies: "Pomegranate juice increases hemoglobin.",
benefits: [
"Rich in antioxidants.",
"Improves heart health.",
"Increases hemoglobin.",
"Boosts immunity.",
"Supports digestion."
],
condition: ["heart","immunity","digestion"],
image: "https://shegrowsveg.com/wp-content/uploads/bis-images/27529/Cover-Pomegranate-_DSF2437-copy-1-scaled-1-536x360-f50_50.jpg"
},

{
id: 11,
name: "Guava",
category: "fruits",
description: "Guava is a tropical fruit rich in fiber and vitamin C. It is widely grown in India.",
medicinalUses: "Good for digestion.",
homeRemedies: "Guava leaves help treat diarrhea.",
benefits: [
"Rich in Vitamin C.",
"Improves digestion.",
"Boosts immunity.",
"Supports heart health.",
"Helps control blood sugar."
],
condition: ["digestion","immunity","heart"],
image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg"
},

{
id: 12,
name: "Kiwi",
category: "fruits",
description: "Kiwi is a small fruit with brown skin and bright green flesh. It has a sweet and tangy taste.",
medicinalUses: "Supports immune health.",
homeRemedies: "Kiwi improves digestion.",
benefits: [
"High in Vitamin C.",
"Improves digestion.",
"Supports heart health.",
"Boosts immunity.",
"Promotes skin health."
],
condition: ["immunity","digestion","skin"],
image: "https://i.ndtvimg.com/i/2015-10/kiwi-fruit_625x350_81445871711.jpg"
},

{
id: 13,
name: "Cherry",
category: "fruits",
description: "Cherries are small round fruits known for their sweet and slightly sour flavor.",
medicinalUses: "Reduces inflammation.",
homeRemedies: "Cherry juice improves sleep.",
benefits: [
"Rich in antioxidants.",
"Improves sleep.",
"Supports heart health.",
"Reduces inflammation.",
"Boosts immunity."
],
condition: ["heart","immunity","skin"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRW_ebEwFZWpmRFBwFCfXPKXbtOsbekRagwg&s"
},

{
id: 14,
name: "Peach",
category: "fruits",
description: "Peach is a juicy fruit with soft fuzzy skin and sweet taste.",
medicinalUses: "Supports skin health.",
homeRemedies: "Peach improves digestion.",
benefits: [
"Rich in vitamins.",
"Improves digestion.",
"Supports skin health.",
"Boosts immunity.",
"Low in calories."
],
condition: ["skin","digestion","immunity"],
image: "https://draxe.com/wp-content/uploads/2016/08/DrAxePeachThumbnail.jpg"
},

{
id: 15,
name: "Pear",
category: "fruits",
description: "Pear is a sweet fruit with a soft texture and high fiber content.",
medicinalUses: "Supports digestive health.",
homeRemedies: "Pear juice helps sore throat.",
benefits: [
"High in fiber.",
"Improves digestion.",
"Supports heart health.",
"Boosts immunity.",
"Helps hydration."
],
condition: ["digestion","heart","immunity"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiVU-OeaZ6Xg-qlgsk0KxPAJ4uURAVi5pUQ&s"
},

{
id: 16,
name: "Plum",
category: "fruits",
description: "Plums are small fruits with smooth skin and sweet-tart taste.",
medicinalUses: "Improves digestion.",
homeRemedies: "Plum helps relieve constipation.",
benefits: [
"Rich in antioxidants.",
"Improves digestion.",
"Supports heart health.",
"Boosts immunity.",
"Promotes skin health."
],
condition: ["digestion","heart","skin"],
image: "https://m.media-amazon.com/images/I/91FS9nT6g2L._AC_UF1000,1000_QL80_.jpg"
},

{
id: 17,
name: "Lemon",
category: "fruits",
description: "Lemon is a citrus fruit known for its sour taste and medicinal benefits.",
medicinalUses: "Improves immunity.",
homeRemedies: "Lemon water detoxifies the body.",
benefits: [
"High in Vitamin C.",
"Boosts immunity.",
"Improves digestion.",
"Supports skin health.",
"Detoxifies the body."
],
condition: ["immunity","digestion","skin"],
image: "https://www.godigit.com/content/dam/godigit/directportal/en/health-benefits-of-eating-lemons.jpg"
},

{
id: 18,
name: "Lychee",
category: "fruits",
description: "Lychee is a tropical fruit known for its sweet juicy flesh.",
medicinalUses: "Improves immunity.",
homeRemedies: "Lychee juice refreshes the body.",
benefits: [
"Rich in Vitamin C.",
"Boosts immunity.",
"Improves digestion.",
"Supports heart health.",
"Hydrates the body."
],
condition: ["immunity","digestion","heart"],
image: "https://www.popsci.com/wp-content/uploads/2022/01/05/lychee-scaled.jpg?quality=85&w=2048"
},

{
id: 19,
name: "Dragon Fruit",
category: "fruits",
description: "Dragon fruit is an exotic fruit with bright pink skin and white flesh.",
medicinalUses: "Improves gut health.",
homeRemedies: "Dragon fruit improves digestion.",
benefits: [
"Rich in antioxidants.",
"Supports digestion.",
"Boosts immunity.",
"Improves skin health.",
"Low in calories."
],
condition: ["digestion","immunity","skin"],
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7mOWS20qCN7LnUFU-rTdVR4gCfUOs06WFA&s"
},

{
id: 20,
name: "Jackfruit",
category: "fruits",
description: "Jackfruit is the largest tree-borne fruit and widely grown in tropical regions.",
medicinalUses: "Improves digestion.",
homeRemedies: "Jackfruit boosts energy.",
benefits: [
"Rich in fiber.",
"Boosts energy.",
"Supports heart health.",
"Improves digestion.",
"Strengthens immunity."
],
condition: ["energy","digestion","immunity"],
image: "https://assets.clevelandclinic.org/transform/83980869-7c2c-4978-9458-91168f785166/eatJackfruit-823672534-770x533-1_jpg"
}

];

export default fruitsData;