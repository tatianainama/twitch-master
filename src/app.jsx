import useStreamingList from './hooks/useStreamingList';
import usePlayingOnServer from './hooks/usePlayingOnServer';

import Card from './components/Card';
import CastIcon from './components/Icons/Cast';
import ServerIcon from './components/Icons/Server';
import CancelIcon from './components/Icons/Cancel';
import Search from './components/Search';

import { castStream, playOnServer, stopPlaying } from './api';

export function App(props) {
  const { streaming, error } = useStreamingList();
  const [casting, setCasting] = usePlayingOnServer();

  return (
    <>
      <nav className="navigation card">
        <Search />
      </nav>
      <section>
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
                actions={
                  <>
                    <button onClick={() => castStream(user)}>
                      <CastIcon size={24} />
                    </button>
                    <button onClick={() => playOnServer(user).then(setCasting)}>
                      <ServerIcon size={24} />
                    </button>
                  </>
                }
              />
            ))}
          </ul>
        )}
      </section>
      {
        casting.length > 0 && (
          <section>
            <h3>Casting</h3>
            {
              casting.map(({user, port}) => (
                <Card
                  tag='li'
                  key={user}
                  title={user}
                  description={`@ port ${port}`}
                  actions={
                    <button onClick={() => stopPlaying(user).then(setCasting)}>
                      <CancelIcon size={15} />
                    </button>
                  }
                />
              ))
            }
          </section>
        )
      }
    </>
  )
}
