import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      const backend = import.meta.env.VITE_BACKEND_URL ?? "https://myquickurl.onrender.com";
      window.location.replace(`${backend}/${url}`);
    }
  }, [url]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-xl text-gray-700">Redirecting...</h1>
    </div>
  );
};

export default ShortenUrlPage;
