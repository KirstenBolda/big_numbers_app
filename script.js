var bigNums = [
    'One Million = 1,000,000',
    'Population of the United States = 328,200,000',
    'Miles to the Sun = 94,385,000',
    'Area of the Pacific Ocean = 63,800,000 sq.miles',
    'Number of Days in an average lifespan = 27,375',
    'Number of Seconds in an average lifetime = 22,075,000',
    'Population of Planet Earth = 7,594,000,000 people',
    'Circumference of the Earth = 24,901 mi',
    'Number of Words in the English Language = 470,000',
    'Number of stars are in the Milky Way galaxy = 100,000,000,000 to 400,000,000,000',
    'Molecules in a teaspoon of water = 200,000,000,000,000,000,000,000',
    'Neurons in the human brain = 100,000,000,000',
    'Average number of taste buds on a human tongue = 10,000',
    'How many more dollars the United States spends than it takes in every year = $ 3,700,000,000,000 ',
    'Number of pixels on an iPhone X = 2,740,500 ',
    'Number of millions in a trillion = 1,000,000',
    'Number of billions in a trillion = 1000',
    'Number of words in Leo Tolstoy\'s War and Peace = 587,287 words',
    'How much Michael Jackson paid for the rights to the entire Beatles catalog = $47,000,000',
    'Number of hours typical person will spend at their job in a lifetime = 90,000',
    'The age of planet Earth = 4,543,000,000 years',
    'Number of miles to Mars = 88,168,000',
    'The largest number JavaScript can reliably represent (2 to the power of 53) = 9,007,199,254,740,992 ',
    'One Billion = 1,000,000,000',
    'One Trillion = 1,000,000,000,000',
    'One Quadrillion = 1,000,000,000,000'
]

function newNum() {
    var randomNumber = Math.floor(Math.random() * (bigNums.length));
    document.getElementById('quoteDisplay').innerHTML = bigNums[randomNumber];
}


    


