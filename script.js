const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you and If someone asked me if I still love you, of course I do so much..\n\nYou're the only one I ever wanted to share everything with. Do you know what it feels like to be forced to let go, even when every part of me still wants to stay by your side?\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nDo you want to know what it's like pretending to be okay without you? I'm not that strong.... You really think I was joking all this time? I cry every time something reminds me of YOU.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

