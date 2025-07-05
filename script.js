const scores = {
  Rachel: 0,
  Monica: 0,
  Phoebe: 0,
  Ross: 0,
  Chandler: 0,
  Joey: 0
};

// Show question
function showQuestion(num) {
  const allQuestions = document.querySelectorAll('.question');
  allQuestions.forEach(q => q.classList.remove('active'));
  const target = document.getElementById(`q${num}`);
  if (target) target.classList.add('active');
}

// Next button logic
function next(num) {
  const selected = document.querySelector(`input[name="q${num}"]:checked`);
  if (!selected) {
    alert("Please select an option to proceed.");
    return;
  }

  scores[selected.value]++;
  const label = selected.closest("label");
  label.classList.add("selected-flash");

  setTimeout(() => {
    label.classList.remove("selected-flash");
    showQuestion(num + 1);
  }, 300);
}

// Back button logic
function goBack(num) {
  showQuestion(num - 1);
}

// Auto-slide on answer
[1, 2, 3, 4, 5].forEach(num => {
  const radios = document.querySelectorAll(`input[name="q${num}"]`);
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const selected = e.target;
      const label = selected.closest("label");
      label.classList.add("selected-flash");
      scores[selected.value]++;
      setTimeout(() => {
        label.classList.remove("selected-flash");
        showQuestion(num + 1);
      }, 300);
    });
  });
});

// Submit quiz and send to Google Apps Script
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;

  const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  // Send data to Google Apps Script proxy
  fetch('https://script.google.com/macros/s/AKfycbyDFjpkDxEiGydHLuTqGVJ9NwJ6B3i4wc0eLqV5cvrR1y1UPKWKGUH_4O75f2aiAJPS/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      result: highest
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      console.log("✅ Successfully sent to Beehiiv via Apps Script");
    } else {
      console.error("❌ Beehiiv API error:", data.error);
    }
  })
  .catch(err => {
    console.error("❌ Fetch failed:", err);
  });

  const character = {
    Rachel: `🛍️ You’re RACHEL GREEN!<br>Stylish, ambitious, and full of heart.<br>You care deeply about your people (even if you're a little dramatic sometimes).<br>You grow through every season — and look great while doing it.`,
    Monica: `🧽 You’re MONICA GELLER!<br>Organized, competitive and fiercely loyal.<br>You're the mom of the group, the planner of all things,<br>and you give 100% — especially when cleaning.`,
    Phoebe: `🎸 You’re PHOEBE BUFFAY!<br>You’re the definition of quirky and cool.<br>A true free spirit, you tell it like it is, trust your gut,<br>and radiate weird-but-wonderful energy wherever you go.`,
    Ross: `📚 You’re ROSS GELLER!<br>Smart, emotional, and a bit misunderstood.<br>You have big opinions and even bigger feelings. (Also… dinosaurs.)<br>Sometimes chaotic, always committed.`,
    Chandler: `🎭 You’re CHANDLER BING!<br>Sarcastic on the outside, soft on the inside.<br>You hide your heart behind humor — but people know you're one of the most loyal and lovable friends they’ve got.`,
    Joey: `🍕 You’re JOEY TRIBBIANI!<br>Friendly, flirty, and always down for a snack.<br>You have natural charm, big golden-retriever energy,<br>and know how to light up a room. How you doin’?`
  };

  document.getElementById("quizForm").style.display = "none";
  document.getElementById("character").innerHTML = character[highest];
  document.getElementById("character").classList.add("active");
});
