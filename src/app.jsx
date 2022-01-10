import useStreamingList from './hooks/useStreamingList';
import useCasting from './hooks/useCasting';

import Card from './components/Card';
import CastIcon from './components/Icons/Cast';
import Button from './components/Button';
import CancelIcon from './components/Icons/Cancel';

import { castStream, stopPlaying } from './api';

export function App(props) {
  const { streaming, setStreaming } = useStreamingList();
  const { casting, setCasting } = useCasting();

  return (
    <>
      <nav className="navigation card">
        <div>
          <input />
          <button>search</button>
        </div>
      </nav>
      <section>
        <h2>Streaming now</h2>
        {streaming && (
          <ul>
            {streaming.map(({ user_name, avatar, title, game_name, color }) => (
              <Card
                tag='li'
                key={user_name}
                color={color}
                media={avatar}
                title={user_name}
                category={game_name}
                description={title}
                actions={
                  <Button onClick={() => castStream(user_name).then(setCasting)}>
                    <CastIcon size={24} />
                  </Button>
                }
              />
            ))}
          </ul>
        )}
      </section>
      {casting && (
        <section>
          <h2>Casted now</h2>
          <ul>
            {(
              <Card
                tag='li'
                key={casting.user_name}
                color={casting.color}
                media={casting.avatar}
                title={casting.user_name}
                category={casting.game_name || "VOD"}
                description={casting.title}
                actions={
                  <Button onClick={() => stopPlaying().then(setCasting)}>
                    <CancelIcon size={20} />
                  </Button>
                }
              />
            )}
          </ul>
        </section>
      )
      }
    </>
  )
}
