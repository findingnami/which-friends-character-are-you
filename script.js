const scores = {
  Rachel: 0,
  Monica: 0,
  Phoebe: 0,
  Ross: 0,
  Chandler: 0,
  Joey: 0
};

function showQuestion(num) {
  document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
  const target = document.getElementById(`q${num}`);
  if (target) target.classList.add('active');
}

function next(num) {
  const selected = document.querySelector(`input[name="q${num}"]:checked`);
  if (!selected) {
    alert("Please select an option to proceed.");
    return;
  }
  const label = selected.closest("label");
  label.classList.add("selected-flash");

  const val = selected.value;
  if (!selected.dataset.counted) {
    scores[val]++;
    selected.dataset.counted = "true";
  }

  setTimeout(() => {
    label.classList.remove("selected-flash");
    showQuestion(num + 1);
  }, 300);
}

function goBack(num) {
  showQuestion(num - 1);
}

// Auto-next on radio change
[1, 2, 3, 4, 5].forEach(num => {
  document.querySelectorAll(`input[name="q${num}"]`).forEach(radio => {
    radio.addEventListener("change", (e) => {
      const selected = e.target;
      const val = selected.value;
      const label = selected.closest("label");
      label.classList.add("selected-flash");

      if (!selected.dataset.counted) {
        scores[val]++;
        selected.dataset.counted = "true";
      }

      setTimeout(() => {
        label.classList.remove("selected-flash");
        showQuestion(num + 1);
      }, 300);
    });
  });
});

document.getElementById("quizForm").addEventListener("submit", function () {
  const name = this.name.value.trim();
  const email = this.email.value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  // Set the result into the hidden field before submit
  const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  document.getElementById("resultField").value = highest;

const character = {
    Rachel: `🛍️ You’re RACHEL GREEN!<br>Stylish, ambitious, and full of heart.<br>You care deeply about your people (even if you're a little dramatic sometimes).<br>You grow through every season — and look great while doing it.`,
    Monica: `🧽 You’re MONICA GELLER!<br>Organized, competitive and fiercely loyal.<br>You're the mom of the group, the planner of all things,<br>and you give 100% — especially when cleaning.`,
    Phoebe: `🎸 You’re PHOEBE BUFFAY!<br>You’re the definition of quirky and cool.<br>A true free spirit, you tell it like it is, trust your gut,<br>and radiate weird-but-wonderful energy wherever you go.`,
    Ross: `📚 You’re ROSS GELLER!<br>Smart, emotional, and a bit misunderstood.<br>You have big opinions and even bigger feelings. (Also… dinosaurs.)<br>Sometimes chaotic, always committed.`,
    Chandler: `🎭 You’re CHANDLER BING!<br>Sarcastic on the outside, soft on the inside.<br>You hide your heart behind humor — but people know you're one of the most loyal and lovable friends they’ve got.`,
    Joey: `🍕 You’re JOEY TRIBBIANI!<br>Friendly, flirty, and always down for a snack.<br>You have natural charm, big golden-retriever energy,<br>and know how to light up a room. How you doin’?`
  };

  document.getElementById("quizForm").style.display = "none";
  const resultEl = document.getElementById("character");
  resultEl.innerHTML = character[highest];
  resultEl.classList.add("active");
});
