function generateLyrics() {
    const prompt = document.getElementById("prompt").value.trim();
    const outputDiv = document.getElementById("output");
  
    if (!prompt) {
      outputDiv.innerText = "Please enter the first line of your song.";
      return;
    }
  
    outputDiv.innerText = "Generating lyrics... 🎤";
  
    fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
      .then(response => response.json())
      .then(data => {
        outputDiv.innerText = data.lyrics;
      })
      .catch(err => {
        outputDiv.innerText = "Failed to generate lyrics. 😢";
        console.error(err);
      });
  }
  