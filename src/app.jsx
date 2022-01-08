import useStreamingList from './hooks/useStreamingList';
import usePlayingOnServer from './hooks/usePlayingOnServer';

import Card from './components/Card';
import CastIcon from './components/Icons/Cast';
import ServerIcon from './components/Icons/Server';
import CancelIcon from './components/Icons/Cancel';
import Button from './components/Button';

import { castStream, playOnServer, stopPlaying, kodiIncreaseVolume, kodiDecreaseVolume } from './api';

export function App(props) {
  const { streaming, error } = useStreamingList();
  const [casting, setCasting] = usePlayingOnServer();

  return (
    <>
      <nav className="navigation card">
        <div>
          <input />
          <button>search</button>
        </div>
      </nav>
      <section id="streamingNow">
        <h2>Streaming now</h2>
        {streaming && (
          <ul>
            {streaming.map(({ user, avatar, desc, category, color }) => (
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
                    <Button onClick={() => castStream(user).then(setCasting)}>
                      <CastIcon size={24} />
                    </Button>
                    <Button onClick={() => playOnServer(user).then(setCasting)}>
                      <ServerIcon size={24} />
                    </Button>
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
            <div className="streamingHeader">
              <h3 className="streamingHeaderTitle">Casting</h3>
              <div className="streamingActions">
                <Button onClick={kodiDecreaseVolume}>-</Button>
                <Button onClick={kodiIncreaseVolume}>+</Button>
              </div>
            </div>
            {
              casting.map(({ user, port }) => (
                <Card
                  tag='li'
                  key={user}
                  title={user}
                  description={`@ port ${port}`}
                  actions={
                    <Button onClick={() => stopPlaying(user).then(setCasting)}>
                      <CancelIcon size={20} />
                    </Button>
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
