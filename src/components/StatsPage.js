function StatsPage({ data }) {
  const getCountdown = (expiry) => {
    const diff = new Date(expiry) - new Date();
    if (diff <= 0) return "Expired";
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return `${mins}m ${secs}s left`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {data.map((entry, i) => (
        <div key={i} style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          borderLeft: '5px solid #1976d2'
        }}>
          <p><strong>Original:</strong> {entry.url}</p>
          <p><strong>Short:</strong> <a href={`/${entry.shortcode}`} target="_blank" rel="noreferrer">{window.location.origin}/{entry.shortcode}</a></p>
          <p><strong>Expires:</strong> {new Date(entry.expires).toLocaleString()} ({getCountdown(entry.expires)})</p>
          <p><strong>Clicks:</strong> {entry.clicks.length}</p>
          <ul>
            {entry.clicks.map((c, j) => <li key={j}>{c.time} | {c.source || 'Direct'} | {c.location}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StatsPage;
