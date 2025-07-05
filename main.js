async function fetchCount() {
  const res = await fetch('/functions/demote');
  const data = await res.json();
  document.getElementById('count').innerText = data.count;
}

async function demoteMiguel() {
  const res = await fetch('/functions/demote', { method: 'POST' });
  const data = await res.json();
  document.getElementById('count').innerText = data.count;
}

// Poll every 2 seconds for live updates
setInterval(fetchCount, 2000);

// On page load
fetchCount(); 