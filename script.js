window.onload = function() {
  const texts = [    
        "Forza Cosenza",
        "Fernando è sempre capodanno...",
        "Ciao mamma sono famoso",
        "Mi piace la...",
      	"Fernando ti amo",
        "Sei una torta ai fiori di Shangai (ahi-ahi-ahi-ahi-ahi-ahi)",
        "Mi sono innamorato ma di tuo marito",
        "Ma che caldo, Fernando, Fernando",
        "Bum, bu-rum-bu-rum, bum, bu-rum, bu-rum, bum",
        "Fernando, ma non sei Ronaldo",
        "Fernando io non volevo un santo, voglio te",
        "Forza Catanzaro",
        "Forza Crotone",
        "Forza Brescia",
        "Forza Napoli",
        "Koop dai facci un gol",
        "60mln persi dalla Juve",
        "Forza Reggina unico grande amore",
        "Viva i cold play",
        "Sta ascoltando la noia",
        "Bel sito, no?",
        "Ho perso la play aiuto",
        "Voglio diventare un cantante!",
        "Panchinaro #1",
        "Evviva El Primo",
        "Ooo",
        "Annalisa potevi venire a capodanno!!",
        "Fidanzato",
        "Amo le 12enni",
        "Forse gay",
        "Birillo sei mio",
        "Aaron sei mio",
        "Yildiz che giocatore",
        "Rosa que linda eres...",
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
                emoji = '🇱🇻';
                break;
            case 1:  // February
                emoji = '🌹';
                break;
            case 2:  // March
                emoji = '🔞';
                break;
            case 3:  // April
                emoji = '🐇';
                break;
            case 4:  // May
                emoji = '🌹';
                break;
            case 5:  // June
                emoji = '🚸';
                break;
            case 6:  // July
                emoji = '🏟️';
                break;
            case 7:  // August
                emoji = '🏖️';
                break;
            case 8:  // September
                emoji = '🎶';
                break;
            case 9:  // October
                emoji = '🧡';
                break;
            case 10: // November
                emoji = '🔞';
                break;
            case 11: // December
                emoji = '🧔‍♂️';
                break;
            default:
                emoji = '❓'; // Unknown month
        }

        // Update the title with the new emoji
        titleElement.textContent = ` ${emoji}`;
  
    document.getElementById("description idk").innerText = texts[randomIndex];
};
