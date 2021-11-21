import { useState, useEffect } from 'preact/hooks';
import { getStreaming } from './api';

import Card from './components/Card';
import { ChipColors } from './components/Chip';

const categorize = (data) => [...(new Set(data.map(data => data.category)))].reduce((map, cat, index) => ({ ...map, [cat]: ChipColors[index]}), {})

export function App(props) {
  const [streaming, setStreaming] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getStreaming()
      .then(result => {
        const colors = categorize(result);
        const data = result.map(s => ({...s, color: colors[s.category]}));
        console.log(data);
        setStreaming(data)
      })
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
          {streaming.map(({user, avatar, desc, category, color}) => (
            <Card
              tag='li'
              key={user}
              color={color}
              media={avatar}
              title={user}
              category={category}
              description={desc}
            />
          ))}
        </ul>
      )}
    </>
  )
}
