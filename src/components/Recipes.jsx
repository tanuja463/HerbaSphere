import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Recipes.css";
const recipes = [

    {
        name: "Turmeric Milk",
        category: "Spices",
        image: "https://mypahadidukan.com/cdn/shop/articles/Turmeric_Milk_Benefits_1656eb68-5570-49f9-8caa-0f5d4e6b7f77.jpg?v=1772114235",
        ingredients: ["Turmeric", "Milk", "Honey"],
        process: [
            "Take a cup of milk in a pan",
            "Heat the milk on medium flame",
            "Add turmeric powder and stir",
            "Simmer for 2 minutes",
            "Add honey and drink warm"
        ],
        benefits: "Boosts immunity"
    },

    {
        name: "Ginger Tea",
        category: "Spices",
        image: "https://cdn.prod.website-files.com/622a6fe969eefa25142deced/689fa40926b5953550bbdc81_tea%20with%20ginger.png",
        ingredients: ["Ginger", "Water", "Honey"],
        process: [
            "Crush fresh ginger",
            "Boil water in a pan",
            "Add ginger into boiling water",
            "Simmer for 5 minutes",
            "Add honey and serve warm"
        ],
        benefits: "Relieves cold and cough"
    },

    {
        name: "Cinnamon Honey Drink",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_CsGP6UcnuZds_d2WxFvHyXgtVsdaKTU-Q&s",
        ingredients: ["Cinnamon", "Water", "Honey"],
        process: [
            "Take one cinnamon stick",
            "Boil water in a pan",
            "Add cinnamon stick",
            "Simmer for 5 minutes",
            "Add honey and drink"
        ],
        benefits: "Improves metabolism"
    },

    {
        name: "Cardamom Tea",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmpuLB53oQpBnwbb_usgHURTBJVVYYWJuew&s",
        ingredients: ["Cardamom", "Tea leaves", "Water"],
        process: [
            "Crush cardamom pods",
            "Boil water in pan",
            "Add tea leaves and cardamom",
            "Simmer for 4 minutes",
            "Strain and serve hot"
        ],
        benefits: "Improves digestion"
    },

    {
        name: "Clove Water",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLySRnlxyg52NoLdnNDOWlavoY8RVFXu9UuA&s",
        ingredients: ["Cloves", "Water"],
        process: [
            "Take 4 cloves",
            "Boil water in pan",
            "Add cloves to water",
            "Simmer for 5 minutes",
            "Strain and drink warm"
        ],
        benefits: "Relieves tooth pain"
    },

    {
        name: "Black Pepper Tea",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiubV8nTt7obLWm8V3azKrd-E17-rV2Y2lg&s",
        ingredients: ["Black pepper", "Water", "Honey"],
        process: [
            "Crush black pepper",
            "Boil water in pan",
            "Add pepper to water",
            "Simmer for 5 minutes",
            "Add honey and drink warm"
        ],
        benefits: "Improves immunity"
    },

    {
        name: "Fennel Water",
        category: "Spices",
        image: "https://ask-ayurveda.com/media/uploads/ckeditor/2025/07/08/how-to-make-saunf-water-for-weight-loss.png",
        ingredients: ["Fennel seeds", "Water"],
        process: [
            "Take fennel seeds",
            "Boil water in pan",
            "Add seeds to water",
            "Simmer for 5 minutes",
            "Strain and drink"
        ],
        benefits: "Good for digestion"
    },

    {
        name: "Cumin Water",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bn0j0w66-UH5m_8VH81dz1swHYNJ273WGQ&s",
        ingredients: ["Cumin seeds", "Water"],
        process: [
            "Take cumin seeds",
            "Boil water in pan",
            "Add seeds to boiling water",
            "Simmer for 5 minutes",
            "Drink warm"
        ],
        benefits: "Aids digestion"
    },

    {
        name: "Nutmeg Milk",
        category: "Spices",
        image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/06/water-1718705583.jpg",
        ingredients: ["Nutmeg", "Milk", "Honey"],
        process: [
            "Heat milk in pan",
            "Add pinch of nutmeg",
            "Stir for 1 minute",
            "Simmer briefly",
            "Add honey and drink"
        ],
        benefits: "Helps better sleep"
    },

    {
        name: "Star Anise Tea",
        category: "Spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu6uCIJelOUjh6z-5hGQdMm39G6aW-mnlPA&s",
        ingredients: ["Star anise", "Water", "Honey"],
        process: [
            "Take star anise",
            "Boil water",
            "Add star anise",
            "Simmer for 5 minutes",
            "Add honey and drink"
        ],
        benefits: "Improves digestion"
    },
    {
        name: "Almond Milk",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJzDJjA_dYfxilOJ2v-IFSw3EIQmWkZWYAg&s",
        ingredients: ["Almonds", "Water", "Honey"],
        process: [
            "Soak almonds overnight",
            "Add soaked almonds to blender",
            "Pour water and blend until smooth",
            "Strain the milk if needed",
            "Add honey and serve fresh"
        ],
        benefits: "Good for brain"
    },

    {
        name: "Cashew Smoothie",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gFxwqd6BIImPrm1C38yJGsOMmEq_9exKQg&s",
        ingredients: ["Cashews", "Milk", "Honey"],
        process: [
            "Soak cashews for 2 hours",
            "Add cashews to blender",
            "Pour milk into blender",
            "Blend until creamy texture",
            "Add honey and serve chilled"
        ],
        benefits: "Rich in healthy fats"
    },

    {
        name: "Peanut Energy Drink",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zp42B10NWKXps7q55vbGD66eM5I9g_JerQ&s",
        ingredients: ["Peanuts", "Milk", "Jaggery"],
        process: [
            "Roast peanuts lightly",
            "Add roasted peanuts to blender",
            "Pour milk into blender",
            "Add jaggery for sweetness",
            "Blend well and serve fresh"
        ],
        benefits: "High protein"
    },

    {
        name: "Pistachio Milkshake",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-3gOYNgZUcNU2NWTE88SsCH1mjDQCLN46g&s",
        ingredients: ["Pistachios", "Milk", "Sugar"],
        process: [
            "Soak pistachios for 2 hours",
            "Add pistachios to blender",
            "Pour milk into blender",
            "Add sugar for sweetness",
            "Blend well and serve chilled"
        ],
        benefits: "Rich in antioxidants"
    },

    {
        name: "Walnut Smoothie",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEqLMqWbGDtTpQaW5iMBU-EEDUoNAmA5o7Q&s",
        ingredients: ["Walnuts", "Milk", "Honey"],
        process: [
            "Soak walnuts for 1 hour",
            "Add walnuts to blender",
            "Pour milk into blender",
            "Blend until smooth",
            "Add honey and drink fresh"
        ],
        benefits: "Good for brain"
    },

    {
        name: "Hazelnut Coffee Drink",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86wJWGt9HmErdHSC5c_eldTA997OHeiLo2A&s",
        ingredients: ["Hazelnuts", "Coffee", "Milk"],
        process: [
            "Roast hazelnuts lightly",
            "Add hazelnuts to blender",
            "Pour milk and coffee",
            "Blend until smooth drink",
            "Serve warm in a cup"
        ],
        benefits: "Energy booster"
    },

    {
        name: "Almond Energy Balls",
        category: "Nuts",
        image: "https://img.taste.com.au/UF0IAyod/taste/2020/02/healthy-almond-and-date-bliss-balls-158160-2.jpg",
        ingredients: ["Almonds", "Dates", "Coconut"],
        process: [
            "Add almonds and dates to blender",
            "Blend until coarse mixture",
            "Take small portion in hand",
            "Roll into small balls",
            "Coat with coconut and serve"
        ],
        benefits: "Healthy snack"
    },

    {
        name: "Peanut Butter Smoothie",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIbrkZ1yDF2UT8KuWUhwW2w68m5YdKGACPw&s",
        ingredients: ["Peanut butter", "Milk", "Banana"],
        process: [
            "Add peanut butter to blender",
            "Slice banana and add",
            "Pour milk into blender",
            "Blend until smooth texture",
            "Serve chilled smoothie"
        ],
        benefits: "Protein rich"
    },

    {
        name: "Cashew Cream",
        category: "Nuts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdu6OQZ_HbSPpx9ncX0gS1ywdgCMqpMsrZw&s",
        ingredients: ["Cashews", "Water", "Salt"],
        process: [
            "Soak cashews for 2 hours",
            "Add cashews to blender",
            "Pour water and add salt",
            "Blend until creamy texture",
            "Use as sauce or dip"
        ],
        benefits: "Healthy fats"
    },

    {
        name: "Mixed Nut Drink",
        category: "Nuts",
        image: "https://static.toiimg.com/thumb/53806799.cms?imgsize=131873&width=800&height=800",
        ingredients: ["Almonds", "Cashews", "Milk"],
        process: [
            "Soak nuts overnight",
            "Add soaked nuts to blender",
            "Pour milk into blender",
            "Blend until smooth drink",
            "Serve chilled"
        ],
        benefits: "Boosts energy"
    },

    {
        name: "Coconut Water Drink",
        category: "Trees",
        image: "https://vaya.in/recipes/wp-content/uploads/2018/05/Coconut-Juice.jpg",
        ingredients: ["Coconut water", "Lemon"],
        process: [
            "Take fresh coconut water",
            "Pour into a glass",
            "Add few drops of lemon juice",
            "Stir gently",
            "Serve chilled"
        ],
        benefits: "Hydrates body"
    },

    {
        name: "Bael Juice",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHOyL_hNWjwSSW7CvqucxaY-5BDDst9BUrA&s",
        ingredients: ["Bael fruit", "Water", "Jaggery"],
        process: [
            "Scoop bael pulp",
            "Add pulp to bowl",
            "Mix with water",
            "Add jaggery and stir",
            "Strain and serve chilled"
        ],
        benefits: "Improves digestion"
    },

    {
        name: "Cinnamon Tea",
        category: "Trees",
        image: "https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/20221206130855-cinnamon-tea-recipe.webp?v=1670332191",
        ingredients: ["Cinnamon stick", "Water", "Honey"],
        process: [
            "Boil water in pan",
            "Add cinnamon stick",
            "Simmer for 5 minutes",
            "Strain into cup",
            "Add honey and drink warm"
        ],
        benefits: "Boosts metabolism"
    },

    {
        name: "Moringa Leaf Soup",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB589CLvHi3e3QxZJo6tEDTwns43TTaS3ZlA&s",
        ingredients: ["Moringa leaves", "Garlic", "Water"],
        process: [
            "Boil water in pan",
            "Add moringa leaves",
            "Add crushed garlic",
            "Simmer for few minutes",
            "Blend lightly and serve"
        ],
        benefits: "Rich in vitamins"
    },
    {
        name: "Neem Juice",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFYiAPUMowluOwXdv0VOOOZVLhgm4c3cLMw&s",
        ingredients: ["Neem leaves", "Water", "Honey"],
        process: "• Wash fresh neem leaves thoroughly.\n• Add leaves and water into a blender.\n• Blend until a smooth mixture forms.\n• Strain the juice using a filter.\n• Add honey and drink fresh.",
        benefits: "Purifies blood"
    },

    {
        name: "Tamarind Juice",
        category: "Trees",
        image: "https://images.healthshots.com/healthshots/en/uploads/2023/09/23111537/TAMARIND.jpg",
        ingredients: ["Tamarind pulp", "Water", "Jaggery"],
        process: "• Take tamarind pulp in a bowl.\n• Add clean water and mix well.\n• Add jaggery and stir until dissolved.\n• Strain the mixture to remove fibers.\n• Serve the juice chilled.",
        benefits: "Aids digestion"
    },

    {
        name: "Curry Leaf Rice",
        category: "Trees",
        image: "https://blessmyfoodbypayal.com/wp-content/uploads/2024/12/IMG_7497.png",
        ingredients: ["Curry leaves", "Rice", "Spices"],
        process: "• Heat oil in a pan.\n• Fry curry leaves with spices.\n• Add cooked rice into the pan.\n• Mix everything gently.\n• Serve hot with pickle.",
        benefits: "Improves hair health"
    },

    {
        name: "Mango Bark Tea",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzS-cGLTd6GUdgE6_rzSEJYAvAzHNrQhy4g&s",
        ingredients: ["Mango bark", "Water"],
        process: "• Take small pieces of mango bark.\n• Add them into boiling water.\n• Let it simmer for 5 minutes.\n• Strain the liquid into a cup.\n• Drink the tea warm.",
        benefits: "Traditional remedy"
    },

    {
        name: "Clove Tea",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb9GM04vOOqwY8eIleiMcuemiz4zf8xeEFg&s",
        ingredients: ["Cloves", "Water", "Honey"],
        process: "• Boil water in a small pot.\n• Add cloves into the boiling water.\n• Let it simmer for 5 minutes.\n• Strain the tea into a cup.\n• Add honey and drink warm.",
        benefits: "Relieves cold"
    },

    {
        name: "Sandalwood Drink",
        category: "Trees",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-O6L9u3OfZZ-tIslh0g43tYqzQx9Xv-guFQ&s",
        ingredients: ["Sandalwood powder", "Milk", "Sugar"],
        process: "• Warm the milk slightly.\n• Add sandalwood powder to the milk.\n• Stir well until mixed evenly.\n• Add sugar and mix again.\n• Serve the drink chilled.",
        benefits: "Cooling effect"
    },

    {
        name: "Fenugreek Water",
        category: "Herbs",
        image: "https://www.viralspices.com/wp-content/uploads/2025/06/Benefits-of-Soaked-Fenugreek-Seeds.jpg",
        ingredients: ["Fenugreek seeds", "Water"],
        process: "• Take 1 teaspoon fenugreek seeds.\n• Add them to a glass of water.\n• Soak the seeds overnight.\n• Strain the water in the morning.\n• Drink on an empty stomach.",
        benefits: "Controls diabetes"
    },

    {
        name: "Curry Leaf Drink",
        category: "Herbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f4WnOul2iXzLh24PyTC49kjWFrk9Als2bw&s",
        ingredients: ["Curry leaves", "Water"],
        process: "• Wash fresh curry leaves.\n• Add leaves to boiling water.\n• Let it simmer for 5 minutes.\n• Strain the liquid into a cup.\n• Drink warm.",
        benefits: "Improves hair health"
    },

    {
        name: "Giloy Herbal Drink",
        category: "Herbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRL9iDDo5kzrLh7ipZiUxzxOKZpknknKLsw&s",
        ingredients: ["Giloy stem", "Water", "Honey"],
        process: "• Wash the giloy stem properly.\n• Cut the stem into small pieces.\n• Boil water in a pot.\n• Add giloy pieces and simmer for 5 minutes.\n• Strain the drink, add honey and serve warm.",
        benefits: "Boosts immunity"
    },

    {
        name: "Coriander Seed Water",
        category: "Herbs",
        image: "https://t3.ftcdn.net/jpg/01/85/38/50/360_F_185385097_Kcjmq9JCBJyJTA3gEHn0qrFi8cIs5hGG.jpg",
        ingredients: ["Coriander seeds", "Water"],
        process: "• Take 1 teaspoon coriander seeds.\n• Add them to a glass of water.\n• Soak overnight.\n• Strain the water in the morning.\n• Drink on empty stomach.",
        benefits: "Controls sugar levels"
    },

    {
        name: "Brahmi Herbal Drink",
        category: "Herbs",
        image: "https://m.media-amazon.com/images/I/51qNHigTt6L._AC_UF1000,1000_QL80_.jpg",
        ingredients: ["Brahmi leaves", "Water", "Honey"],
        process: "• Wash fresh brahmi leaves.\n• Boil water in a pot.\n• Add brahmi leaves to the water.\n• Simmer for 5 minutes and strain.\n• Add honey and drink warm.",
        benefits: "Improves memory"
    },

    {
        name: "Hibiscus Herbal Drink",
        category: "Herbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqbUmGcC3z8UAEKq9hr9NWOfYsNbO5vz5Vw&s",
        ingredients: ["Hibiscus petals", "Water", "Honey"],
        process: "• Wash hibiscus petals.\n• Boil water in a pan.\n• Add petals and simmer 5 minutes.\n• Strain the drink.\n• Add honey and serve.",
        benefits: "Supports heart health"
    },

    {
        name: "Licorice Root Tea",
        category: "Herbs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOAO26OiiJwP0r7093JfpSU3jduPPrTkgnA&s",
        ingredients: ["Licorice root", "Water"],
        process: "• Take small pieces of licorice root.\n• Add to boiling water.\n• Simmer for 5 minutes.\n• Strain the tea.\n• Drink warm.",
        benefits: "Soothes throat"
    },

    {
        name: "Ajwain Herbal Water",
        category: "Herbs",
        image: "https://img.siterank.app/topic/ajwain-water-weight-loss-meal.png",
        ingredients: ["Ajwain seeds", "Water"],
        process: "• Take 1 teaspoon ajwain seeds.\n• Add seeds to a glass of water.\n• Boil the water for 5 minutes.\n• Strain the mixture into a cup.\n• Drink warm.",
        benefits: "Relieves stomach problems"
    },

    /* ================= FRUITS ================= */

    {
        name: "Apple Cinnamon Tea",
        category: "Fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3XPml6KlqOJk8VIUVlOpcJ6KB_yDkKUCZA&s",
        ingredients: ["Apple", "Cinnamon", "Water"],
        process: "• Slice the apple into small pieces.\n• Add apple slices to boiling water.\n• Add a cinnamon stick.\n• Simmer for 5 minutes.\n• Strain and serve warm.",
        benefits: "Boosts immunity"
    },

    {
        name: "Banana Smoothie",
        category: "Fruits",
        image: "https://hannahmageerd.com/wp-content/uploads/2024/04/Hannah-Vanilla-banana-smoothie-IG-08.jpg",
        ingredients: ["Banana", "Milk", "Honey"],
        process: "• Peel the banana.\n• Add banana into a blender.\n• Pour milk into the blender.\n• Add honey for sweetness.\n• Blend until smooth and serve.",
        benefits: "Energy drink"
    },

    {
        name: "Mango Lassi",
        category: "Fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSlQ45vH_JReiUTNXyYvVMwW6Lb5G05fLRA&s",
        ingredients: ["Mango", "Curd", "Sugar"],
        process: "• Peel and chop ripe mango.\n• Add mango pieces into a blender.\n• Add curd and sugar.\n• Blend until creamy.\n• Serve chilled.",
        benefits: "Cooling drink"
    },

    {
        name: "Orange Detox",
        category: "Fruits",
        image: "https://vaya.in/recipes/wp-content/uploads/2019/06/detox-drink-2.jpg",
        ingredients: ["Orange", "Mint", "Water"],
        process: "• Peel the orange.\n• Extract fresh orange juice.\n• Add mint leaves to the juice.\n• Pour some water and mix.\n• Serve chilled.",
        benefits: "Vitamin C rich"
    },

    {
        name: "Pineapple Drink",
        category: "Fruits",
        image: "https://tiimg.tistatic.com/fp/1/007/677/fresh-tasty-hygienically-packed-fresh-pineapple-juice--627.jpg",
        ingredients: ["Pineapple", "Water", "Honey"],
        process: "• Peel and chop pineapple.\n• Add pineapple pieces into blender.\n• Add some water.\n• Blend and strain the juice.\n• Add honey and serve.",
        benefits: "Improves digestion"
    },

    {
        name: "Papaya Smoothie",
        category: "Fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKrbWV3JuUJZMVJwCZCPCmge7R85uL2QA3Q&s",
        ingredients: ["Papaya", "Milk"],
        process: "• Peel the papaya.\n• Remove the seeds.\n• Cut papaya into small pieces.\n• Add papaya and milk to blender.\n• Blend until smooth.",
        benefits: "Good for digestion"
    },

    {
        name: "Watermelon Juice",
        category: "Fruits",
        image: "https://sreerajlassibar.com/wp-content/uploads/2024/09/Watermelon-Juice.png",
        ingredients: ["Watermelon"],
        process: "• Cut watermelon into cubes.\n• Remove the seeds.\n• Add cubes into blender.\n• Blend until smooth.\n• Serve chilled.",
        benefits: "Hydration"
    },

    {
        name: "Strawberry Shake",
        category: "Fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsE0ZFSnR7hPnDx3WiKvmJzHIuzOxzaxKViw&s",
        ingredients: ["Strawberry", "Milk"],
        process: "• Wash fresh strawberries.\n• Remove the green tops.\n• Add strawberries into blender.\n• Add milk.\n• Blend and serve chilled.",
        benefits: "Rich antioxidants"
    },

    {
        name: "Pomegranate Juice",
        category: "Fruits",
        image: "https://extremewellnesssupply.com/cdn/shop/articles/7121e0bc570a942863e578951e9bba41_880x.jpg?v=1676283072",
        ingredients: ["Pomegranate"],
        process: "• Cut the pomegranate.\n• Remove the seeds.\n• Add seeds into blender.\n• Blend and strain juice.\n• Serve fresh.",
        benefits: "Boosts hemoglobin"
    },

    {
        name: "Guava Juice",
        category: "Fruits",
        image: "https://kissanshopee.com/storage/seohelpers/guava-juice-2.jpg",
        ingredients: ["Guava", "Water"],
        process: "• Wash the guava.\n• Cut into small pieces.\n• Add guava and water to blender.\n• Blend until smooth.\n• Strain and serve.",
        benefits: "Rich fiber"
    },

    {
        name: "Lemon Honey Drink",
        category: "Fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoWsdAxUbayB7yWbXAvj5E2xhCH0CHSe9rQ&s",
        ingredients: ["Lemon", "Honey", "Water"],
        process: "• Squeeze fresh lemon juice.\n• Add juice to a glass of water.\n• Add honey.\n• Stir well.\n• Drink fresh.",
        benefits: "Detox drink"
    },

    /* ================= VEGETABLES ================= */

    {
        name: "Carrot Juice",
        category: "Vegetables",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/10/carrot-juice-732x549-thumbnail-732x549.jpg",
        ingredients: ["Carrot", "Water"],
        process: "• Wash the carrots.\n• Peel the outer skin.\n• Cut into small pieces.\n• Blend with water.\n• Strain and serve.",
        benefits: "Good for eyes"
    },

    {
        name: "Beetroot Juice",
        category: "Vegetables",
        image: "https://images.healthshots.com/healthshots/en/uploads/2025/01/13111057/beetroot-recipes-2-1.jpg",
        ingredients: ["Beetroot", "Water"],
        process: "• Wash the beetroot.\n• Peel the outer skin.\n• Cut into cubes.\n• Blend with water.\n• Strain and serve.",
        benefits: "Improves blood flow"
    },

    {
        name: "Tomato Soup",
        category: "Vegetables",
        image: "https://cheerfulcook.com/wp-content/uploads/2020/08/tomato-soup-Cheerful-Cook-fi-2.jpg",
        ingredients: ["Tomato", "Salt", "Pepper"],
        process: "• Wash the tomatoes.\n• Boil them for 5 minutes.\n• Blend into smooth puree.\n• Add salt and pepper.\n• Serve hot.",
        benefits: "Rich antioxidants"
    },

    {
        name: "Spinach Smoothie",
        category: "Vegetables",
        image: "https://joyfoodsunshine.com/wp-content/uploads/2023/03/spinach-smoothie-recipe-1x1-1.jpg",
        ingredients: ["Spinach", "Apple"],
        process: "• Wash spinach leaves.\n• Cut the apple into pieces.\n• Add both into blender.\n• Blend until smooth.\n• Serve fresh.",
        benefits: "Iron rich"
    },

    {
        name: "Cucumber Juice",
        category: "Vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExpE9-8J2s_nZs9eoC5FXo8JWVrjaXnq7iw&s",
        ingredients: ["Cucumber", "Water"],
        process: "• Wash the cucumber.\n• Peel the skin.\n• Cut into slices.\n• Blend with water.\n• Serve chilled.",
        benefits: "Hydrating"
    },

    {
        name: "Bottle Gourd Juice",
        category: "Vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Z_Uh_HorzmyCsJ0Tfokji5D7rb4sRI0hPA&s",
        ingredients: ["Bottle gourd"],
        process: "• Wash the bottle gourd.\n• Peel the outer skin.\n• Cut into small pieces.\n• Blend with a little water.\n• Strain and serve fresh.",
        benefits: "Weight loss"
    },

    {
        name: "Pumpkin Soup",
        category: "Vegetables",
        image: "https://thecookingfoodie.com/wp-content/uploads/2025/09/Pumpkin-soup-with-coconut-milk.jpg",
        ingredients: ["Pumpkin"],
        process: "• Wash and peel the pumpkin.\n• Cut pumpkin into small cubes.\n• Boil the pumpkin pieces.\n• Blend until smooth.\n• Serve hot as soup.",
        benefits: "Vitamin A"
    },

    {
        name: "Cabbage Soup",
        category: "Vegetables",
        image: "https://thefitchen.com/wp-content/uploads/2018/07/Instant-Pot-Cabbage-Soup-5.jpg",
        ingredients: ["Cabbage"],
        process: "• Wash the cabbage thoroughly.\n• Chop into small pieces.\n• Add to boiling water.\n• Cook for 5–10 minutes.\n• Serve warm as soup.",
        benefits: "Weight loss"
    },

    {
        name: "Broccoli Soup",
        category: "Vegetables",
        image: "https://cookingformysoul.com/wp-content/uploads/2025/10/featured-cream-broccoli-soup-min.jpg",
        ingredients: ["Broccoli"],
        process: "• Wash broccoli florets.\n• Cut into small pieces.\n• Boil broccoli in water.\n• Blend until smooth.\n• Serve hot.",
        benefits: "Rich antioxidants"
    },

    {
        name: "Radish Juice",
        category: "Vegetables",
        image: "https://m.media-amazon.com/images/I/414O7Suiw9L._AC_UF1000,1000_QL80_.jpg",
        ingredients: ["Radish"],
        process: "• Wash the radish well.\n• Peel the outer skin.\n• Cut into slices.\n• Add to blender.\n• Blend and serve fresh.",
        benefits: "Liver detox"
    },

    {
        name: "Onion Soup",
        category: "Vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PpFLCn3ljtVlHaBeUo6-7ns19ZPY_kxQ7Q&s",
        ingredients: ["Onion"],
        process: "• Peel the onion.\n• Chop into small pieces.\n• Cook onion in water.\n• Blend into smooth soup.\n• Serve hot.",
        benefits: "Heart health"
    },

    {
        name: "Sweet Potato Mash",
        category: "Vegetables",
        image: "https://www.flavcity.com/wp-content/uploads/2019/10/sweet-potato-mash-1.jpg",
        ingredients: ["Sweet potato"],
        process: "• Wash the sweet potato.\n• Peel the skin.\n• Cut into chunks.\n• Boil until soft.\n• Mash and serve.",
        benefits: "Energy"
    },

    {
        name: "Green Pea Soup",
        category: "Vegetables",
        image: "https://theclevermeal.com/wp-content/uploads/2023/06/green-pea-soup_1.jpg",
        ingredients: ["Green peas"],
        process: "• Wash the green peas.\n• Add peas to boiling water.\n• Cook until soft.\n• Blend to make smooth soup.\n• Serve warm.",
        benefits: "Protein rich"
    },

    {
        name: "Corn Soup",
        category: "Vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikopsGuEzvliPkTlVIb_XLNCYZJqb2gYZIg&s",
        ingredients: ["Corn"],
        process: "• Remove corn kernels.\n• Wash the kernels.\n• Boil in water.\n• Blend into smooth soup.\n• Serve hot.",
        benefits: "Energy"
    },

    {
        name: "Zucchini Soup",
        category: "Vegetables",
        image: "https://theplantbasedschool.com/wp-content/uploads/2023/05/Zucchini-soup-1.jpg",
        ingredients: ["Zucchini"],
        process: "• Wash the zucchini.\n• Cut into slices.\n• Add to boiling water.\n• Cook until soft.\n• Blend and serve warm.",
        benefits: "Low calories"
    },
];

function Recipes() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  // For Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleShowModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      (category === "All" || recipe.category === category) &&
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const visibleRecipes = isLoggedIn ? filteredRecipes : filteredRecipes.slice(0, 3);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🌿 HerbaSphere Healthy Recipes</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search recipes..."
          className="mb-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Herbs</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Spices</option>
          <option>Nuts</option>
          <option>Trees</option>
        </Form.Select>
      </Form>

      <Row>
        {visibleRecipes.map((recipe) => (
          <Col md={4} key={recipe.name}>
            <Card className="mb-4 shadow-sm recipe-card">
              <Card.Img variant="top" src={recipe.image} height="200" alt={recipe.name} />
              <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Benefits:</strong> {recipe.benefits}</p>
                <Button variant="success" onClick={() => handleShowModal(recipe)}>
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {!isLoggedIn && (
        <div className="text-center mt-4">
          <p style={{ fontWeight: "500" }}>
            🔒 Signup or Login to see all healthy recipes
          </p>
          <Link to="/signup" className="btn btn-success me-2">Signup</Link>
          <Link to="/login" className="btn btn-outline-success">Login</Link>
        </div>
      )}

      {/* Modal */}
      {selectedRecipe && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
              className="mb-3"
            />
            <p><strong>Category:</strong> {selectedRecipe.category}</p>
            <p><strong>Benefits:</strong> {selectedRecipe.benefits}</p>

            <h5>Ingredients:</h5>
            <ul>
              {selectedRecipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <h5>Process:</h5>
            <ol>
              {Array.isArray(selectedRecipe.process)
                ? selectedRecipe.process.map((step, idx) => <li key={idx}>{step}</li>)
                : selectedRecipe.process.split("\n").map((step, idx) => (
                    <li key={idx}>{step.replace("•", "").trim()}</li>
                  ))}
            </ol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Recipes;