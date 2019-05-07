const park = {
    id: 'park',
    title: 'Go to the Park',
    image: 'puppies.jpg',
    action: 'puppy-bark.mp3',
    description: `
    You decide to leave your house-- good job! You're hopeful that you might see something 
    that cheers you up. On your way to the park, you notice that a woman walking not one 
    but TWO English Bulldog puppies has stopped to check her phone. The puppies' faces 
    are almost unbearably cute. You can hardly see their shining little eyes beneath rolls 
    and wrinkles of soft fur. Their mouths are open in big, drooly smiles. The woman looks 
    up from her phone and notices your face, brimming with tears, and says "You can pet 
    them, they're friendly!"
    `,
    choices: [{
        id: 'pet',
        description: 'PET. THOSE. DOGS.',
        result: `
        You kneel down and the puppies rush to climb all over you, reaching up to give 
        dozens of slobbery kisses to whatever area of your face they can get at. Life is 
        worth living, and you feel better than you have in months. 
        `,
        mood: 25,
        treats: 0
    }, {
        id: 'treat',
        description: 'TREEEAAAT',
        result: ` 
        Thanking the universe for your luck, you remember that you have a TREAT in 
        your pocket. It's small, but you manage to break it in half and are nearly 
        toppled over by a wrinkly, drooly stampede. Your fingers are nibbled by tiny 
        puppy mouths and you feel warmth in your soul.  
        `,
        mood: 25,
        treats: -1
    }, {
        id: 'no-pet',
        description: 'do not??? pet dog???',
        result: `
        Before you can agree to pet what you believe to be THE cutest dogs in 
        existence, you see it-- the CUTEST DOG IN EXISTENCE. Big floppy ears, soft eyes, 
        perfect posture-- sitting next to its owner and READY for petting. 
        You decline the invitation to pet the puppies, and move towards the sweetest dog 
        you've ever seen. As you approach, however, your eyes fall upon the words 
        embroidered into the dog's vest "SERVICE ANIMAL, PLEASE DO NOT PET". 
        Your eyes swell with tears, you look back to the puppies-- to happiness itself, 
        how could you have been so careless?-- but they're gone. 
        The only solace you find is a small bag of dog treats at your feet, stained with tears.  
        `,
        mood: -50,
        treats: 5
    }]
};

const questArray = [park];

export default questArray;