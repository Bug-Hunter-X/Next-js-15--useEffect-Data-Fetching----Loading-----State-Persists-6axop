```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData({ error: 'Failed to fetch data' });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (data.error) return <p>Error: {data.error}</p>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```