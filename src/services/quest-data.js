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
    them, they're friendly!" What do you do?
    `,
    choices: [{
        id: 'pet-dog',
        description: 'PET. THOSE. DOGS.',
        result: `
        You kneel down and the puppies rush to climb all over you, reaching up to give 
        dozens of slobbery kisses to whatever area of your face they can get at. Life is 
        worth living, and you feel better than you have in months. So good, that your mood 
        improves by 25 points!
        `,
        mood: 25,
        treats: 0
    }, {
        id: 'treat-dogs',
        description: 'TREEEAAAT',
        result: ` 
        Thanking the universe for your luck, you remember that you have a TREAT in 
        your pocket. It's small, but you manage to break it in half and are nearly 
        toppled over by a wrinkly, drooly stampede. Your fingers are nibbled by tiny 
        puppy mouths and you feel warmth in your soul. So obviously your mood improves by 25
        points, and you have sacrificed the treat you carried with you.
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
        I mean, you gained 5 treats, but you also lost 50 mood points...soooooo.  
        `,
        mood: -50,
        treats: 5
    }]
};

const forest = {
    id: 'forest',
    title: 'Go to the Forest',
    image: 'frog.jpg',
    action: 'frog-croak.mp3',
    description: `
    You decide that you haven't been on a vacation in far too long, so you stick your 
    adventure buddy in a carry on, flip a coin to decide your desitination, and hop on a 
    plane to the rainforest in South America. Once you step foot in the lush, humid, 
    greenery you are STOKED and cannot WAIT to pet some rainforest creatures. You reach up 
    to push a giant leaf out of your path, and realize that the most vivid frog you have ever 
    seen is sitting on it. You have never seen a frog like this before and you aren't sure how
    to handle it. What do you do?
    `,
    choices: [{
        id: 'touch',
        description: 'TOUCH. THAT. FROG.',
        result: `
        Listen--OF COURSE you have to pet that frog, because you want to pet EVERY ANIMAL. You
        stand on your tippy-toes to get your eyes on the same level as the dazzling creature, and 
        begin to extend a single finger quivering with excitment. Your adventure buddy lets out a 
        tentative sound in protest, but you scoff at them and bring your finger ever closer--AND
        you make contact! Almost immediately your finger starts to tingle under the slimy skin
        of the frog, then it burns, then it REALLY BURNS! Uh oh, it was a POISON dart frog. You
        spend the rest of your vacation in the hospital and lose 45 mood points.
        `,
        mood: -45,
        treats: 0
    }, {
        id: 'leave-alone',
        description: 'Leave the frog alone, and move along.',
        result: ` 
        As badly as you want to pet this AWESOME FROG, a small voice in your head tells you
        it just isn't a good idea. You decide that even though you won't touch it, you still
        want to capture this epic sight; so you grab your camera, pick up your adventure buddy,
        and take a selfie of the two of you in front of the frog. While nothing can compare to 
        actual animal cuddles, you look at the photo and it makes you super happy that you 
        captured the moment and respected that frogs personal space. You get 5 mood points.
        `,
        mood: 5,
        treats: 0
    }, {
        id: 'stick',
        description: 'TOUCH. IT. WITH. A. STICK.',
        result: `
        Okay--SOOOOO, there is a voice in your head, (as well as some protest noises from your
        adventure buddy), and both are telling you that you probably shouldn't touch this animal 
        with your bare hands. BUUUUT, you really wanna be able to touch it, even at a distance.
        You find a suitable stick, stand on your tippy-toes to get a better vantage point on the
        frog, and begin to slowly bring the stick toward the frog...the anticipation is killing you.
        A second before the stick makes contact, the frog LEAPS from the leaf and disappears into
        the foliage on the forest floor. You are kind of bummed, but you notice that the tree the 
        frog was on is a fruit tree, the exact kind of fruit tree your guide book says the local 
        fruit bats feast from. YAY for local treats! You gather 15 pieces of fruit for treats to
        feed the bats.
        `,
        mood: 0,
        treats: 15
    }]
};

const farm = {
    id: 'farm',
    title: 'Go to the Farm',
    image: 'goat.jpg',
    action: 'goat-bah.mp3',
    description: `
    Your friend who owns a farm recently purchased some goats, and they invite you to visit. 
    So you throw your adventure buddy in the car and head to the farm--because--GOATS! As 
    you are pulling into the most picturesque farm, you hear a noise that sounds like hooves running.
    You stop your car and turn your head just in time to see a small reddish blur leap at your
    car! Both you and your adventure buddy let out a scream, which is quickly followed by a 
    huge metallic THUNK as the blur jumps onto the hood of your car. You open your eyes to see
    the CUTEST FUCKING GOAT IN A FUCKING SWEATER just staring at you through the windshield.
    You really don't even know what to do with yourself, on one hand the goat is acting a little
    aggressive and your car is dented; but more importantly--THIS GOAT IS SO SMALL AND CUTE AND
    DRESSED IN CLOTHES. So...what do you do?
    
    `,
    choices: [{
        id: 'wait',
        description: 'Wait it out',
        result: `
        You really don't want to do anything rash that will spook the goat, and really, you realize 
        that you have the best vantage point to soak up the cuteness that is this animal. So 
        you continue to look lovingly into the goats precious eyes as it stares you down. BIG 
        MISTAKE! The goat takes this as a challenge, and it headbutts your windshield cracking 
        it down the middle. Not even the immense cuteness of this animal could lessen the amount
        of doe you will need to drop to fix the dent in your hood and replace your windshield. You
        lose 10 mood points just as the goat rears up to headbutt your windshield again!
        `,
        mood: -10,
        treats: 0
    }, {
        id: 'treat-goat',
        description: 'TREEEAAAT',
        result: ` 
        You are frozen for a minute just staring through the windshield at this goat in a 
        sweater just standing on your car. You definitely want to pet this goat, I mean, DUH!
        But first things first, the goat is acting a little aggressive, and it is standing on
        your vehicle, so you dig in your pocket and find a treat. You figure you can get it to
        move from your car, and maybe through feeding it, get a few snuggles too! So you very
        slowly open your car door and extend your hand to show the goat the treat. The sweatered
        goat immediately LEAPS from the hood of your car to your chest and topples you over. Now the 
        goat is standing on your chest and it is fastly consuming the treat. While you may be
        flat on the ground, you realize this goat is even cuter from this vantage point. You even
        chance extending your hand to scratch the goats chin, and SUCCESS! The goat allows its
        chin to be scratched for several minutes before leaping away. As a result, your heart
        has grown several sizes and your mood improves by 5 points.
        `,
        mood: 5,
        treats: -1
    }, {
        id: 'pet-goat',
        description: 'PET. THAT. GOAT.',
        result: `
        I mean--OF COURSE YOU WANNA PET THAT GOAT! It is wearing a SWEATER and it chased down
        your car, so it must want you to pet it too, right?!?! You throw open the door to your car
        and stick out your hand to make contact with that sweet animal fur! Even though the goat
        was acting rather aggresively, it melts under the touch of your hand, and allows you to 
        pet it's WHOLE SELF. You decide a simple 'pet' is not enough and you also get onto the 
        hood of your car to nuzzle your whole body all over this creature. Your adventure buddy
        leaps out of the car to join the cuddle puddle, and the three of you are quite literally
        DROWNED in sweet furry love, which amounts to an additional 25 mood points. 
        `,
        mood: 25,
        treats: 0
    }]
};

const questArray = [park, forest, farm];

export default questArray;