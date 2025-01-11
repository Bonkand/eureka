window.onload = function() {
  const texts = [    
        "Hey, Ya!",
        "now you can't unsee it!",
        "Another one bites the dust",
        "Encountered a shiny Pokèmon!",
      	"How are you? Actually nvm idrc",
        "TODO: add funny comment",
        "As seen on TV!",
        "Awesome!",
        "May contain nuts!",
        "One of a kind!",
        "Not on Steam!",
        "Oh man!",
        "Pixels!",
        "Now with difficulty!",
        "Enhanced!",
        "90% bug free!",
        "Absolutely no memes!",
        "Ask your doctor!",
        "GOTY!",
        "Supercalifragilisticexpialidocious!",
        "Yes, sir!",
        "Try it!",
        "Call your mother!",
        "Ultimate edition!",
        "Freaky!",
        "Water proof!",
        "Uninflammable!",
        "Whoa, Dude!",
        "All inclusive!",
        "Tell your friends!",
        "Full of stars!",
        "Scientific!",
        "Not as cool as Draco!",
        "Never dig down!",
        "Take frequent breaks!",
        "Not linear!",
        "Seecret Friday update!",
        "Reference implementation!",
        "Peter Griffin!",
        "Do not distribute!",
        "Cogito ergo sum!",
        "4815162342 lines of code!",
        "Supercalifragilisticexpialidocious!",
        "Woo, facepunch!",
      	"Hotter than the sun!",
      	"Almost as hot as you",
       	"Fuck iPhones",
      	"Don't stop me now!",
      	"Tip your waiter!",
      	"Pinacolada!",
        "Very fun!",
        "12345 is a bad password!",
        "password is a bad password!",
      	"Nobita",
        "...lives in a pineapple under the sea!...",
        "...!",
        "Bees, bees, bees, bees!",
        "Haha, LOL!",
        "Finally with ladders!",
        "21st night of Sep",
        "Wrapped in a mystery!",
        "Welcome to your Doom!",
        "Stay a while, stay forever!",
        "Stay a while and listen!",
        "Treatment for your rash!",
        "Information wants to be free!",
        "\"Almost never\" means shit",
        "Lots of truthiness!",
        "The creeper is a spy!",
        "Turing complete!",
        "It's groundbreaking!",
        "Let the Hunger Games begin!",
        "The sky is the limit!",
      	"What's the chance of this?",
        "Bread is pain!",
        "Read more books!",
        "This is my true form!",
        "Made by Jeb!",
        "Has an ending!",
        "Finally complete!",
        "Feature packed!",
        "Stop, hammertime!",
        "Does a barrel roll!",
        "Meeting expectations!",
        "PC gaming since 1873!",
        "Déjà vu!",
        "Déjà vu!",
        "Put on wax take off wax",
        "Rocky Dad!",
        "Got your nose!",
        "Let the HUNGER GAMES begin!",
        "Let the games begin!",
        "There's an achievement at the end",
        "Afraid of the big, black bat!",
        "See you next Friday or so!",
        "Every road leads to Rome!",
        "Who put it there?",
        "You can't explain that!",
        "if not ok then return end",
        "Plz reply to my Tweet!",
        "Woah.",
        "One day, my work will finally be quoted!",
        "Now with additional stuff!",
        "Extra things!",
        "Strange, but not a stranger!",
        "Don't be reasonable online!",
        "Any computer is a laptop",
      	"Any laptop is a computer",
        "Do it all, everything!",
        "doot doot",
        "Falling with style!",
        "Rule #1: it's never my fault",
        "Not to be played while driving",
        "You're going too fast!",
        "Levels matter!",
        "TH 11 in CoC",
        "All rumors are true!",
        "I need more context.",
        "Ahhhhhh!",
        "Don't worry, be happy!",
        "Water bottle!",
        "What's the question?",
        "Plant a tree!",
        "Look mum, I'm famous!",
        "It came from space.",
        "Wash your hands!",
        "Soap and water!",
        "Support local businesses!",
        "Stay home and play games!",
        "Stay safe!",
        "Stay strong!",    
        "Don’t touch your face!",
        "Support elderly relatives!",
      	"Help your friends!",
        "Prepare, but don’t hoard!",
        "Aww man!",
        "Contains simulated goats!",
        "Home-made!",
        "thers a c4t on ,y keyb.ard!~",
        "My jee key is broken, jamers",
        "Get to the coppah!",
        "Board game version available!",
        "Who let the frogs out?",
        "Nooooooooooooo!",
        "Flower forest TM perfume",
        "Hat Fridays!",
        "Technoblade never dies!",
        "You are valid!",
        "I'm glad you're here!",
        "You are welcome here!",
        "This sand is sus",
        "Sniff Sniff...",
        "Place hanging sign here",
        "Stay alive!",
        "Welcome Dude!",
        "Also try Terraria!",
        "Hello Mr. Stalker",
        "Bro clicked the link",
        "Lorem ipsum dolor",
        "Good night",
        "Blud shouldn't be here",
        "Curious, are we?",
        "Wrong website dummy",
        "I've been waiting for you",
        "Unexpected stop, huh?",
        "Is this a dead end?",
        "This is not a coincidence",
        "Pizza, Pasta, Mamma mia",
        "Ciao!",
        "Mario is italian",
        "Fuck electric cars",
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
        "I might (am) be stupid",
        ];

         const randomIndex = Math.floor(Math.random() * texts.length);

  // Get the title element
        const titleElement = document.querySelector('.title2');

        // Get the current month
        const currentMonth = new Date().getMonth();

        // Determine the emoji based on the month
        let emoji;
        switch (currentMonth) {
            case 0:  // January
                emoji = '🎆';
                break;
            case 1:  // February
                emoji = '❤️';
                break;
            case 2:  // March
                emoji = '🍀';
                break;
            case 3:  // April
                emoji = '🐰';
                break;
            case 4:  // May
                emoji = '🌸';
                break;
            case 5:  // June
                emoji = '☀️';
                break;
            case 6:  // July
                emoji = '🏖️';
                break;
            case 7:  // August
                emoji = '🍉';
                break;
            case 8:  // September
                emoji = '🍂';
                break;
            case 9:  // October
                emoji = '🎃';
                break;
            case 10: // November
                emoji = '🥧';
                break;
            case 11: // December
                emoji = '🎄';
                break;
            default:
                emoji = '❓'; // Unknown month
        }

        // Update the title with the new emoji
        titleElement.textContent = ` ${emoji}`;
  
    document.getElementById("description idk").innerText = texts[randomIndex];
};
