async function fetchCount() {
  const res = await fetch('/.netlify/functions/demote');
  const data = await res.json();
  document.getElementById('count').innerText = data.count;
}

async function demoteMiguel() {
  const res = await fetch('/.netlify/functions/demote', { method: 'POST' });
  const data = await res.json();
  document.getElementById('count').innerText = data.count;
}

// Poll every 300ms for near real-time updates
setInterval(fetchCount, 300);

// On page load
fetchCount(); 