document.addEventListener("DOMContentLoaded", function () {
    let progressBar = document.getElementById("progress-bar");
    let mainContent = document.getElementById("main-content");
    let letterSection = document.getElementById("letter-section");
    let loadingScreen = document.getElementById("loading-screen");

    let progress = 0;

    let interval = setInterval(function () {
        // Ensuring a natural, smooth increase
        progress += Math.random() * 2 + 1; // Adds between 1% - 3%
        
        // Prevent overshooting
        if (progress > 100) progress = 100;

        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            progressBar.style.width = "100%"; // Ensures it visually fills up completely

            setTimeout(() => {
                loadingScreen.style.opacity = "0"; 

                setTimeout(() => {
                    loadingScreen.style.display = "none"; 
                    mainContent.style.opacity = "1";
                    mainContent.style.display = "block";
                }, 500);
            }, 500);
        }
    }, 80); // Slow enough for smooth movement

    // Continue button action
    document.getElementById("continue-btn").addEventListener("click", function () {
        mainContent.style.display = "none";
        letterSection.style.opacity = "1";
        letterSection.style.display = "block";
    });
});


const achievements = {
    "certified-survivor": {
        title: "Certified Jana Survivor 🏆",
        description: "365 days. Countless rants. Unfiltered chaos. And yet, here you are - still standing. A true warrior of the Jana Experience",
        extra: "Bonus Perk: A lifetime supply of overthinking, unexpected deep talks and chaotic energy. No refunds! 😏"
    },
    "spotify-master": {
        title: "Banger Bestie 🎵",
        description: "For your outstanding commitment to bopping, vibing, and curating the ultimate playlists alongside me. Your taste is, of course, immaculate.",
        extra: "BBs 4 life uwu"
    },
    "chat-level": {
        title: "Keyboard Warrior ⌨️",
        description: "No conversation is safe. No chat remains unread. No topic is too random. You have mastered the art of relentless typing. Technically, your keyboard deserves a vaction. Too bad it's not getting one.",
        extra: "Officially a Full-Time Jana Correspondent!"
    },
    "contract-renewal": {
        title: "Contract Renewal 📜",
        description: "After one year of service, you have been legally required to continue enduring Jana’s nonsense for an indefinite period of time.",
        extra: "You have the right to remain silent… but we both know you won’t."
    },
    "patience-master": {
        title: "Master of Patience ✨",
        description: "Many have tried, few have succeeded. You’ve navigated Jana’s overthinking labyrinth and lived to tell the tale.",
        extra: "How? No seriously, HOW?!"
    },
    "jokester": {
        title: "Jokester 😂",
        description: "If laughter is the best medicine, then you’re officially a licensed doctor. Your ability to turn even the worst days into comedy gold is unmatched.",
        extra: "99% success rate - 1% reserved for when I pretend to be mad."
    },
    "riddle-master": {
        title: "Riddle Master 🧠",
        description: "For making my neurons work overtime with riddles that range from 'Oh, that's easy' to 'Excuse me, what?!'",
        extra: "10/10 would suffer again!"
    },
    "sole-mates": {
        title: "Sole-mates 🧦",
        description: "You have been officially inducted into the Order of Cozy Footwear, where warmth and fashion reign supreme. Matching slippers are a sacred oath.",
        extra: "Leaving? Unthinkable. Your feet belong to the fluff now."
    },
    "pookie-award": {
        title: "Pookie Award 💕",
        description: "This award is given to the ultimate Pookie, the one who provides top-tier comfort, unwavering patience, and elite emotional support without hesitation.",
        extra: "The best Pookie one can hope for!"
    },
    "nocturnal-navigator": {
        title: "Nocturnal Navigator 🌙",
        description: "For the countless night-shift updates, ensuring I wake up to a full morning briefing alongside my coffee.",
        extra: "Making even the hardest mornings easier - or at least, I'm too busy to think about them."
    },
    "mind-reader": {
        title: "Mind Reader 🔮",
        description: "For inhabiting my brain like a second consciousness, finishing my sentences, and thinking my thoughts before I even realize I have them.",
        extra: "... Are you me? Am I you? Help."
    },
    "reality-check": {
        title: "Certified Brain Cell Provider 🧠",
        description: "For stepping in as my legal defense against my own worst ideas, presenting strong cases against my bad decisions, and often winning.",
        extra: "Your closing argument is always: Jana, no"
    },
    "denyflix": {
        title: "Denyflix Originals 🎬",
        description: "For outperforming every streaming algorithm in existence, always knowing exactly what I need to watch or play next. Suspiciously good.",
        extra: "Fine, fine, I admit it. You were right. AGAIN."
    },
    "attention-to-detail": {
        title: "Attention to Detail 🕵️",
        description: "For noticing even the smallest details, from missing exclamation marks to the tiniest changes in tone. The ultimate detective.",
        extra: "Nothing is safe anymore!"
    },
    "king": {
        title: "King Award 👑",
        description: "For simply being you—a legend, a masterpiece, a once-in-a-lifetime phenomenon. Thy greatness is immeasurable, thy presence? a gift.",
        extra: "Don't worry, I consider myself more than lucky!"
    }
};

// Show achievement details in modal
function showAchievement(key) {
    let modal = document.getElementById("achievement-modal");
    let modalContent = document.querySelector(".modal-content");
    
    // Set modal title, description, and extra details
    document.getElementById("achievement-title").textContent = achievements[key].title;
    
    let desc = achievements[key].description;
    let extraDesc = achievements[key].extra ? `<br><br><em>${achievements[key].extra}</em>` : ""; 

    document.getElementById("achievement-description").innerHTML = desc + extraDesc;
    
    // Get the correct image
    let achievementImage = document.getElementById("achievement-image");
    achievementImage.src = document.querySelector(`[onclick="showAchievement('${key}')"] img`).src;

    // Ensure the modal is displayed
    modal.style.display = "flex"; 
}

// Close modal
function closeModal() {
    document.getElementById("achievement-modal").style.display = "none";

    window.addEventListener("click", function (event){
        let modal = document.getElementById("achievement-modal");
        let modalContent = this.document.querySelector(".modal-content");
    });
}

function outsideClick(event) {
    let modal = document.getElementById("achievement-modal");
    let modalContent = document.querySelector(".modal-content");

    // If the user clicks on the modal background (not the content), close it
    if (event.target === modal) {
        closeModal();
        window.removeEventListener("click", outsideClick); // Remove listener to prevent multiple bindings
    }
}

// Close modal on "Escape" key press
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
        window.removeEventListener("click", outsideClick);
    }
});