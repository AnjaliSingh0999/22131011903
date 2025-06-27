// src/pages/Redirect.js
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirect = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem("short_links")) || [];
    const found = links.find(l => l.shortcode === shortcode);

    if (!found) {
      alert("Shortcode not found.");
      navigate('/');
      return;
    }

    found.clicks.push({
      time: new Date().toISOString(),
      source: document.referrer,
      location: "IN"
    });

    localStorage.setItem("short_links", JSON.stringify(links));
    window.location.href = found.url;
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirect;
