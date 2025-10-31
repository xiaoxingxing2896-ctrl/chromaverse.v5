document.addEventListener("click", async e => {
  if (e.target.id === "send-code") {
    const email = document.getElementById("register-email").value;
    const res = await fetch("https://your-worker-url.workers.dev/api/send-code", { method: "POST", body: JSON.stringify({ email }) });
    const msg = await res.json(); alert(msg.message);
  }
});
