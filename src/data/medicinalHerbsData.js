const medicinalHerbsData = [
{
id: 1,
name: "Ashwagandha",
description:
"Ashwagandha (Withania somnifera) is a powerful adaptogenic herb widely used in Ayurvedic medicine. It helps the body cope with stress and promotes overall wellness. The roots and leaves of the plant are used to make herbal supplements that improve physical and mental health.",
medicinalUses:
"Helps reduce stress and anxiety, improves brain function, boosts energy levels, strengthens the immune system, and may support hormonal balance.",
homeRemedies:
"Ashwagandha powder mixed with warm milk and honey is commonly consumed before bedtime to reduce stress and improve sleep quality.",
benefits: [
"Reduces stress and anxiety",
"Improves sleep quality",
"Boosts immunity",
"Enhances memory and focus",
"Increases physical strength"
],
condition:["immunity","energy"],
image:"https://m.media-amazon.com/images/I/71ApXmUR5iL.jpg"
},

{
id: 2,
name: "Tulsi",
description:
"Tulsi, also known as Holy Basil, is one of the most sacred herbs in India and is commonly grown in households. It has powerful antibacterial, antiviral, and antifungal properties. Tulsi leaves are widely used in Ayurvedic remedies.",
medicinalUses:
"Improves respiratory health, boosts immunity, relieves cough and cold, and helps fight infections.",
homeRemedies:
"Tulsi tea made with fresh leaves, ginger, and honey is commonly used to treat cough, cold, and sore throat.",
benefits: [
"Boosts immunity",
"Relieves cough and cold",
"Improves respiratory health",
"Acts as natural detoxifier",
"Reduces stress"
],
condition:["immunity"],
image:"https://www.trustbasket.com/cdn/shop/articles/Tulsi.jpg?v=1687508866"
},

{
id: 3,
name: "Neem",
description:
"Neem is a powerful medicinal plant known for its strong antibacterial and antifungal properties. Almost every part of the neem tree including leaves, bark, and seeds has medicinal value.",
medicinalUses:
"Used to treat skin infections, purify blood, improve oral health, and control acne and dandruff.",
homeRemedies:
"Neem leaves boiled in water can be used to wash skin infections or added to bath water to treat itching and rashes.",
benefits:[
"Purifies blood",
"Improves skin health",
"Fights infections",
"Controls acne",
"Supports oral hygiene"
],
condition:["skin","immunity"],
image:"https://c.ndtvimg.com/2025-05/7586puls_neem-_625x300_20_May_25.jpg"
},

{
id:4,
name:"Aloe Vera",
description:
"Aloe Vera is a succulent plant known for its soothing gel found inside its leaves. It is widely used in skincare, medicine, and cosmetics due to its healing and moisturizing properties.",
medicinalUses:
"Heals burns, treats skin irritation, improves digestion, and supports wound healing.",
homeRemedies:
"Fresh aloe vera gel applied directly on the skin helps soothe sunburns and moisturizes dry skin.",
benefits:[
"Heals burns and wounds",
"Improves skin hydration",
"Supports digestion",
"Reduces acne",
"Promotes hair growth"
],
condition:["skin","digestion"],
image:"https://cdn11.bigcommerce.com/s-dwdwr5marw/product_images/uploaded_images/aloe-vera-blog.jpg"
},

{
id:5,
name:"Turmeric",
description:
"Turmeric is a golden-yellow spice widely used in Indian cooking and traditional medicine. It contains curcumin, a compound known for strong anti-inflammatory and antioxidant properties.",
medicinalUses:
"Reduces inflammation, boosts immunity, improves digestion, and supports joint health.",
homeRemedies:
"Turmeric milk (Golden milk) is commonly consumed at night to treat cold, cough, and body pain.",
benefits:[
"Powerful anti-inflammatory",
"Boosts immunity",
"Supports joint health",
"Improves digestion",
"Promotes skin health"
],
condition:["immunity","digestion","skin"],
image:"https://hospitalityinsights.ehl.edu/hs-fs/hubfs/EHL-Passugg_Blog_Kurkuma_Titelbild_001.jpg"
},

{
id:6,
name:"Ginger",
description:
"Ginger is a widely used medicinal root known for its strong flavor and healing properties. It has been used in traditional medicine for centuries.",
medicinalUses:
"Helps relieve nausea, improves digestion, reduces inflammation, and treats sore throat.",
homeRemedies:
"Ginger tea made with honey and lemon is commonly used to treat cold and throat infections.",
benefits:[
"Improves digestion",
"Relieves nausea",
"Reduces inflammation",
"Boosts immunity",
"Soothes sore throat"
],
condition:["digestion","immunity"],
image:"https://www.tastingtable.com/img/gallery/12-varieties-of-culinary-ginger-explained/l-intro-1673555215.jpg"
},

{
id:7,
name:"Garlic",
description:
"Garlic is a powerful medicinal bulb used worldwide for its strong flavor and numerous health benefits.",
medicinalUses:
"Supports heart health, lowers blood pressure, and helps fight infections.",
homeRemedies:
"Eating raw garlic cloves in the morning helps reduce cholesterol levels.",
benefits:[
"Supports heart health",
"Lowers blood pressure",
"Boosts immunity",
"Fights infections",
"Improves circulation"
],
condition:["heart","immunity"],
image:"https://connect.healthkart.com/wp-content/uploads/2016/12/Banner-2021-05-05T174631.491.jpg"
},

{
id:8,
name:"Giloy",
description:
"Giloy (Tinospora cordifolia) is a climbing shrub widely used in Ayurveda for boosting immunity.",
medicinalUses:
"Treats fever, improves immunity, detoxifies the body, and supports digestion.",
homeRemedies:
"Giloy juice mixed with honey is consumed daily to strengthen immunity.",
benefits:[
"Boosts immunity",
"Treats fever",
"Detoxifies body",
"Improves digestion",
"Supports liver health"
],
condition:["immunity","digestion"],
image:"https://blog.fnp.com/wp-content/uploads/2021/04/Tinospora_cordifolia_fruits-1.jpg"
},

{
id:9,
name:"Brahmi",
description:
"Brahmi is a traditional Ayurvedic herb known for enhancing memory and brain function.",
medicinalUses:
"Improves concentration, reduces anxiety, and supports brain health.",
homeRemedies:
"Brahmi juice or powder mixed with water is taken daily to improve memory.",
benefits:[
"Enhances memory",
"Improves concentration",
"Reduces stress",
"Supports brain health",
"Improves learning ability"
],
condition:["energy"],
image:"https://www.hugaplant.com/cdn/shop/products/MAIN_139d635e-9069-4ff0-8c09-a1427135ceb4.png"
},

{
id:10,
name:"Shatavari",
description:
"Shatavari is a medicinal herb mainly used for women's health in Ayurveda.",
medicinalUses:
"Balances hormones, improves fertility, and supports reproductive health.",
homeRemedies:
"Shatavari powder mixed with milk is consumed for hormonal balance.",
benefits:[
"Supports women's health",
"Balances hormones",
"Improves fertility",
"Boosts immunity",
"Enhances vitality"
],
condition:["immunity","energy"],
image:"https://www.ayurvedawoman.com/cdn/shop/articles/Shatavari_queen_of_herbs.jpg"
},

{
id:11,
name:"Peppermint",
description:
"Peppermint is a refreshing herb known for its cooling effect and digestive benefits.",
medicinalUses:
"Relieves headaches, improves digestion, and reduces nausea.",
homeRemedies:
"Peppermint tea helps relieve stomach pain and indigestion.",
benefits:[
"Improves digestion",
"Relieves headaches",
"Freshens breath",
"Reduces nausea",
"Cooling effect"
],
condition:["digestion"],
image:"https://www.luxmiestates.in/cdn/shop/articles/peppermint_tea_b2cf0c57-308b-4240-9104-c7a09fe43a92.jpg"
},

{
id:12,
name:"Echinacea",
description:
"Echinacea is a popular medicinal herb used to strengthen the immune system.",
medicinalUses:
"Helps prevent colds, reduces infection severity, and boosts immunity.",
homeRemedies:
"Echinacea tea is consumed during flu season to prevent illness.",
benefits:[
"Boosts immunity",
"Fights infections",
"Reduces cold symptoms",
"Supports respiratory health",
"Speeds recovery"
],
condition:["immunity"],
image:"https://www.tnnursery.net/cdn/shop/files/Echinacea_Plant_For_Sale.jpg"
},

{
id:13,
name:"Chamomile",
description:
"Chamomile is a gentle herb widely used in herbal teas for relaxation and sleep.",
medicinalUses:
"Reduces anxiety, improves sleep quality, and soothes digestive issues.",
homeRemedies:
"Chamomile tea before bedtime helps treat insomnia.",
benefits:[
"Promotes sleep",
"Reduces anxiety",
"Improves digestion",
"Calms nerves",
"Supports skin health"
],
condition:["digestion","skin"],
image:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/03/benefits_chamomile_tea_1296x728_header-1024x575.jpg"
},

{
id:14,
name:"Lavender",
condition:["skin","energy"],
description:
"Lavender is a fragrant herb known for its calming aroma and therapeutic uses.",
medicinalUses:
"Relieves stress, improves sleep, and reduces headaches.",
homeRemedies:
"Lavender oil applied to temples helps relieve headaches and stress.",
benefits:[
"Relieves stress",
"Improves sleep",
"Reduces headaches",
"Calms nerves",
"Improves skin health"
],
image:"https://5.imimg.com/data5/SELLER/Default/2024/1/377284529/JY/SR/WC/160006415/lavender-essential-oil.jpg"
},

{
id:15,
name:"Licorice",
condition:["digestion","immunity"],
description:
"Licorice root is a sweet medicinal herb commonly used in traditional medicine.",
medicinalUses:
"Soothes sore throat, improves digestion, and supports respiratory health.",
homeRemedies:
"Licorice tea helps treat cough and throat irritation.",
benefits:[
"Soothes sore throat",
"Improves digestion",
"Supports respiratory health",
"Reduces inflammation",
"Boosts immunity"
],
image:"https://gardenplannerwebsites.azureedge.net/blog/growing-licorice-harvested-roots-2x.jpg"
},

{
id:16,
name:"Moringa",
condition:["energy","immunity","heart"],
description:
"Moringa is known as the 'Miracle Tree' because of its rich nutritional and medicinal benefits.",
medicinalUses:
"Improves energy levels, boosts immunity, and supports heart health.",
homeRemedies:
"Moringa powder added to smoothies provides daily nutrition.",
benefits:[
"Rich in nutrients",
"Boosts energy",
"Improves immunity",
"Supports heart health",
"Improves digestion"
],
image:"https://nutricraft.co.uk/cdn/shop/articles/shutterstock_2556461873_294097b8-f59a-466a-8431-b4c9fe4810cb_1200x800.jpg"
},

{
id:17,
name:"Arjuna",
condition:["heart"],
description:
"Arjuna tree bark is widely used in Ayurveda for treating heart-related conditions.",
medicinalUses:
"Strengthens heart muscles and improves cardiovascular health.",
homeRemedies:
"Arjuna bark powder mixed with warm water supports heart health.",
benefits:[
"Strengthens heart",
"Improves circulation",
"Lowers blood pressure",
"Supports cardiovascular health",
"Improves stamina"
],
image:"https://m.media-amazon.com/images/I/61onSakJa+L._AC_UF1000,1000_QL80_.jpg"
},

{
id:18,
name:"Amla",
condition:["immunity","skin","eyes"],
description:
"Amla, also known as Indian gooseberry, is extremely rich in Vitamin C and antioxidants.",
medicinalUses:
"Boosts immunity, improves digestion, and promotes hair growth.",
homeRemedies:
"Amla juice consumed daily strengthens immunity.",
benefits:[
"Rich in Vitamin C",
"Boosts immunity",
"Improves hair health",
"Supports digestion",
"Improves skin glow"
],
image:"https://png.pngtree.com/thumb_back/fh260/background/20251012/pngtree-fresh-amla-indian-gooseberry-whole-and-halved-with-leaf-image_19526439.webp"
},

{
id:19,
name:"Calendula",
condition:["skin"],
description:
"Calendula is a flowering plant known for its skin-healing properties.",
medicinalUses:
"Heals wounds, treats skin irritation, and reduces inflammation.",
homeRemedies:
"Calendula ointment applied to cuts helps speed healing.",
benefits:[
"Heals wounds",
"Soothes skin irritation",
"Reduces inflammation",
"Supports skin repair",
"Natural antiseptic"
],
image:"https://m.media-amazon.com/images/I/61Oagd71NUL._AC_UF1000,1000_QL80_.jpg"
},

{
id:20,
name:"Holy Basil",
condition:["immunity","digestion"],
description:
"Holy Basil is an adaptogenic herb used in traditional medicine for overall wellness.",
medicinalUses:
"Improves immunity, reduces stress, and supports respiratory health.",
homeRemedies:
"Holy basil tea helps treat cough and breathing problems.",
benefits:[
"Boosts immunity",
"Reduces stress",
"Supports respiratory health",
"Improves digestion",
"Promotes overall wellness"
],
image:"https://newchapter.com/cdn/shop/articles/cb0e1f027cfe03436b5fd12824aee186_9eba74a1-1944-4052-9808-5af86ad4e9a2.jpg"
}
];

export default medicinalHerbsData;