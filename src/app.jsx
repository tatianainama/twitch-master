import { useState, useEffect } from 'preact/hooks';
import { getStreaming } from './api';

import Card from './components/Card';
import { ChipColors } from './components/Chip';
import CastIcon from './components/Icons/Cast';
import ServerIcon from './components/Icons/Server';

import { castStream, playOnServer } from './api';

const categorize = (data) => [...(new Set(data.map(data => data.category)))].reduce((map, cat, index) => ({ ...map, [cat]: ChipColors[index]}), {})

export function App(props) {
  const [streaming, setStreaming] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStreaming()
      .then(result => {
        const colors = categorize(result);
        const data = result.map(s => ({...s, color: colors[s.category]}));
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
              actions={<Actions user={user} />}
            />
          ))}
        </ul>
      )}
    </>
  )
}

const Actions = ({ user }) => (
  <>
    <button onClick={() => castStream(user)}>
      <CastIcon size={24} />
    </button>
    <button onClick={() => playOnServer(user)}>
      <ServerIcon size={24} />
    </button>
  </>
)