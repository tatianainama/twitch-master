import { useState, useEffect } from 'preact/hooks';
import { getStreaming } from './api';

import Card from './components/Card';

export function App(props) {
  const [streaming, setStreaming] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getStreaming()
      .then(result => setStreaming(result))
      .catch(error => setError(error));
  }, [])
  
  return (
    <>
      <nav className="navigation card">
        <div>
          <input />
          <button>search</button>
        </div>
      </nav>
      <h2>Streaming now</h2>
      {streaming && (
        <ul>
          {streaming.high.map(stream => (
            <Card tag='li' key={stream.user} media={stream.avatar}>
              <h4>{stream.user}</h4>
              <p>{stream.desc}</p>
            </Card>
          ))}
        </ul>
      )}
    </>
  )
}
