"use client"
import { url } from 'inspector';
import React, { useEffect, useState } from 'react';

const Logo = () => {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('https://fusionexpeditions.onrender.com/api/logo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const imageData = result.data.image;
        setLogo({
         url:imageData.url,
          alt: imageData.alt || 'Logo',
          width: imageData.width,
          height: imageData.height,
        });
      } catch (err) {
        setError('Failed to fetch logo');
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  if (loading) return <div>Loading logo...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex justify-center">
      <img
        src={logo.url}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-auto"
      />
    </div>
  );
};

export default Logo;
