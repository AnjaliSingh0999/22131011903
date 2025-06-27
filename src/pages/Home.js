import { useState, useEffect } from 'react';
import { logEvent } from "../LoggingMiddleware/logger";

import ShortenerForm from '../components/ShortenerForm';
import StatsPage from '../components/StatsPage';
import LogsViewer from '../components/LogsViewer';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    logEvent("info", "Home Page Loaded");
  }, []);

  const handleShorten = (newEntries) => {
    const now = new Date();
    const updated = newEntries.map(entry => {
      const minutes = parseInt(entry.validity) || 30;
      const expires = new Date(now.getTime() + minutes * 60000).toISOString();
      return {
        ...entry,
        shortcode: entry.shortcode || Math.random().toString(36).substr(2, 6),
        expires,
        created: now.toISOString(),
        clicks: []
      };
    });
    setData(prev => [...prev, ...updated]);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <ShortenerForm onShorten={handleShorten} />
      <StatsPage data={data} />
      <LogsViewer />
    </div>
  );
}

export default Home;
