import useStreamingList from './hooks/useStreamingList';

import Card from './components/Card';

import CastIcon from './components/Icons/Cast';
import ServerIcon from './components/Icons/Server';

import { castStream, playOnServer } from './api';

export function App(props) {
  const { streaming, error } = useStreamingList();
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