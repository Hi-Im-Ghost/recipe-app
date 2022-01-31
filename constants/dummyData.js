import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: "Maria",
        method: "Peel shrimp and place skin, heads, and tails into a large saucepan. Fill pan with water and bring to a boil. Reduce heat to low and let simmer, about 45 minutes.\n" +
            "\n" +
            "Combine tomatoes and 1/2 the parsley in a blender; puree until smooth.\n" +
            "\n" +
            "Heat olive oil in a separate pan over medium heat. Add onion, bell pepper, and chile pepper; cook and stir until softened, about 5 minutes. Add garlic; cook until fragrant but not browned, 1 to 2 minutes.\n" +
            "\n" +
            "Pour pureed tomato mixture into the pan with the peppers. Add water, tomato paste, oregano, salt, and black pepper. Stir well; add paprika. Let sauce simmer on low to medium heat until juices have reduced.\n" +
            "\n" +
            "Strain shrimp shells from the water. Bring water back to a boil and add spaghetti. Cook spaghetti, stirring occasionally, until tender yet firm to the bite, about 12 minutes. Reserve 1 cup of the cooking water and drain the rest.\n" +
            "\n" +
            "In the meantime, add shrimp to the tomato sauce. Add the reserved water, stir well, and cook until shrimp is pink, about 3 minutes. Plate spaghetti and spoon the sauce on top; garnish with the remaining parsley.",
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: "Mandy",
        method: "To begin, blend all satay spice mix ingredients together in a food processor until it achieves the consistency of a smooth, fine paste. Set 3 tbsp of the spice mix aside for making the peanut sauce\n" +
            "\n" +
            "Place the rest of the spice mix into a container with the chicken pieces and leave to marinade in the fridge for at least 4 hours, or preferably overnight\n" +
            "\n" +
            "To make the peanut sauce for the satay, add all the ingredients (including the reserved 3 tbsp of spice paste) to a medium-sized saucepan. Place over a medium heat and bring to boil, stirring every now and then to prevent it sticking to the bottom. Reduce the heat to low and simmer for 5 minutes until the sauce thickens. Set aside\n" +
            "\n" +
            "Soak the skewers in water for 10 minutes. Skewer the chicken pieces onto skewers so that there are 6 pieces per skewer\n" +
            "\n" +
            "To cook the skewers, you can use a flat-top griddle plate, a grill preheated to high or a barbecue. Turn the skewers frequently to char each side for around 5 minutes or until the chicken is cooked through\n" +
            "\n" +
            "Serve with the peanut sauce and freshly cut cucumber and red onion",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: "Jessie",
        method: "Boil water in a pot.\n" +
            "\n" +
            "Place chicken meat in boiling water for 30 minutes or until fully cooked. Set aside chicken meat to cool.\n" +
            "\n" +
            "Place prawns into same boiling water for 5 minutes or until cooked. Set aside prawns to cool.\n" +
            "\n" +
            "Pour Sarawak laksa paste into the same boiling water and let it simmer for 30-45 minutes.\n" +
            "\n" +
            "Shred the chicken meat  and peel prawns while waiting for laksa broth to simmer.\n" +
            "\n" +
            "Then, beat eggs in a bowl and fry into thin sheets in a hot skillet. When egg is cooled, slice into thin strips.\n" +
            "\n" +
            "Use boiling water, scald the beansprouts for 3 minutes and remove from water.\n" +
            "\n" +
            "Repeat step 7 for rice vermicelli. Repeat steps if necessary for large amount of rice vermicelli & beansprout.\n" +
            "\n" +
            "Remove excess oil from laksa broth by using an oil sieve.\n" +
            "\n" +
            "Then, add coconut milk (or evaporated milk) into Sarawak laksa soup base and let simmer for another 10 minutes under low heat.\n" +
            "\n" +
            "Add salt or seasoning to taste.",
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: "Ali Baba",
        method: "Put the coconut milk, ginger, lemongrass, rice and a pinch of salt in a large saucepan. Add 400ml/14fl oz water, stir and cook over a medium heat for 10–15 minutes, or until the rice is cooked and all the liquid has been absorbed.\n" +
            "\n" +
            "To make the sambal, heat the oil in a frying pan and sweat the onion and garlic for 5–7 minutes, until soft. Add the shrimp paste, chilli paste and most of the soaked anchovies and stir. Add the sugar and a pinch of salt and pour in the tamarind water. Simmer until it reduces to a thick paste. Set aside.\n" +
            "\n" +
            "Meanwhile, to prepare the garnish, boil the eggs in water for 7–10 minutes; the yolks should be firm. When they are cool enough to handle, peel off the shells and cut the eggs in half. Preheat the oil in a deep-fat fryer to 180C. (CAUTION: hot oil can be dangerous. Do not leave unattended.) Deep-fry the dried white anchovies for 3 minutes, or until crispy. Toast the peanuts in a dry frying pan.\n" +
            "\n" +
            "Pick the lemongrass out of the rice and discard. Put the rice in a small bowl and press down until it is compacted. Upturn the rice in the middle of the pandan leaf. Arrange the egg, peanuts, cucumber and remaining anchovies around the rice and scatter over the crispy anchovies.",
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ]
    },
    {
        id: 5,
        name: "Roast Chicken",
        image: images.roast_chicken,
        duration: "2 hours",
        serving: 6,
        isBookmark: true,
        category: "Local",
        author: "Mary Bery",
        method: "Preheat the oven to 200C/180C Fan/Gas 6.\n" +
            "\n" +
            "Mix the butter, garlic, ginger, tarragon and lemon zest in a small bowl; season with salt and pepper.\n" +
            "\n" +
            "Loosen the skin of the chicken breast by gently pushing your fingers between the skin and the meat, taking care not to break the skin. Using your hand, spread the butter under the skin in an even layer.\n" +
            "\n" +
            "Transfer the chicken to a roasting tin and scatter the onions around it. Rub a little oil over the skin and legs, and season.\n" +
            "\n" +
            "Roast for about 1½ hours, or until the chicken is cooked. The chicken is cooked through when the juices run clear with no trace of pink when the thickest part of the leg, between the drumstick and the thigh, is pierced with a skewer. Transfer to a board to rest. Remove the onions to a hot serving bowl.\n" +
            "\n" +
            "To make the gravy, sprinkle the flour over the fat in the roasting tin and whisk until combined. Pour in the wine and stock and whisk over a medium heat until thickened and smooth. Whisk in the redcurrant jelly, Worcestershire sauce and gravy browning, if using. Pour through a sieve into a jug, stir in the tarragon and season with salt and pepper.\n" +
            "\n" +
            "Carve the chicken and serve with the onions and gravy.",
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Free range oven ready chicken",
                quantity: "2 kg"
            },
            {
                id: 2,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "2"
            },
            {
                id: 3,
                icon: icons.oil,
                description: "Vegetable oil",
                quantity: "1-2 tbsp"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic clove",
                quantity: "1"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },
            {
                id: 7,
                icon: icons.butter,
                description: "Softened butter",
                quantity: "50 g"
            },
            {
                id: 8,
                icon: icons.ginger,
                description: "Root ginger",
                quantity: "1 tsp"
            },
            {
                id: 9,
                icon: icons.tarragon,
                description: "Fresh tarragon",
                quantity: "1 tbsp"
            },
            {
                id: 10,
                icon: icons.gravy,
                description: "Gravy",
                quantity: "1"
            },
        ]
    },
    {
        id: 6,
        name: "Grilled sweet potatoes",
        image: images.sweet_potatoes,
        duration: "30 mins",
        serving: 4,
        isBookmark: true,
        category: "Local",
        author: "Elise Bauer",
        method: "Preheat the oven to 200C/180C Fan/Gas 6.\n" +
            "\n" +
            "Mix the butter, garlic, ginger, tarragon and lemon zest in a small bowl; season with salt and pepper.\n" +
            "\n" +
            "Loosen the skin of the chicken breast by gently pushing your fingers between the skin and the meat, taking care not to break the skin. Using your hand, spread the butter under the skin in an even layer.\n" +
            "\n" +
            "Transfer the chicken to a roasting tin and scatter the onions around it. Rub a little oil over the skin and legs, and season.\n" +
            "\n" +
            "Roast for about 1½ hours, or until the chicken is cooked. The chicken is cooked through when the juices run clear with no trace of pink when the thickest part of the leg, between the drumstick and the thigh, is pierced with a skewer. Transfer to a board to rest. Remove the onions to a hot serving bowl.\n" +
            "\n" +
            "To make the gravy, sprinkle the flour over the fat in the roasting tin and whisk until combined. Pour in the wine and stock and whisk over a medium heat until thickened and smooth. Whisk in the redcurrant jelly, Worcestershire sauce and gravy browning, if using. Pour through a sieve into a jug, stir in the tarragon and season with salt and pepper.\n" +
            "\n" +
            "Carve the chicken and serve with the onions and gravy.",
        ingredients: [
            {
                id: 1,
                icon: icons.potato,
                description: "Sweet potatoes",
                quantity: "2"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Extra virgin olive oil",
                quantity: "3-4 tbsp"
            },
            {
                id: 3,
                icon: icons.salt,
                description: "Kosher salt",
                quantity: "¼ tbsp"
            },
            {
                id: 4,
                icon: icons.cilantro,
                description: "Fresh cilantro",
                quantity: "¼ cup"
            },
            {
                id: 5,
                icon: icons.lemon,
                description: "Lime zest",
                quantity: "1"
            },
            {
                id: 6,
                icon: icons.lime_juice,
                description: "Fresh lime juice",
                quantity: "2 tbsp"
            },
            {
                id: 7,
                icon: icons.oil,
                description: "Extra virgin olive oil",
                quantity: "¼ cup"
            },
        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}
