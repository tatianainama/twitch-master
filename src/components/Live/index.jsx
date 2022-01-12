import Card from "../Card";
import CastIcon from "../Icons/Cast";
import Button from "../Button";
import CancelIcon from "../Icons/Cancel";

import useStreamingList from "../../hooks/useStreamingList";
import useCasted from "../../hooks/useCasted";

import styles from "./live.module.css";
import { castStream, stopPlaying } from "../../api";

export function Live() {
  const { streaming } = useStreamingList();
  const { casted, setCasted } = useCasted();
  return (
    <>
      <section>
        <h2>Streaming now</h2>
        {streaming && (
          <ul className={styles.cardGroup}>
            {streaming.map(({ user_name, avatar, title, game_name, color }) => (
              <Card
                tag="li"
                key={user_name}
                color={color}
                media={avatar}
                title={user_name}
                category={game_name}
                description={title}
                actions={
                  <Button onClick={() => castStream(user_name).then(setCasted)}>
                    <CastIcon size={24} />
                  </Button>
                }
              />
            ))}
          </ul>
        )}
      </section>
      {casted && (
        <section>
          <h2>Casted now</h2>
          <ul>
            {
              <Card
                tag="li"
                key={casted.user_name}
                color={casted.color}
                media={casted.avatar}
                title={casted.user_name}
                category={casted.game_name}
                description={casted.title}
                actions={
                  <Button onClick={() => stopPlaying().then(setCasted(null))}>
                    <CancelIcon size={20} />
                  </Button>
                }
              />
            }
          </ul>
        </section>
      )}
    </>
  );
}
