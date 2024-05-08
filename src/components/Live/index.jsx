import Card from "../Card";
import Button from "../Button";
import { Play } from "../Icons";
import useStreamingList from "../../hooks/useStreamingList";
import useCasted from "../../hooks/useCasted";
import Dota from "../Dota";

import styles from "./live.module.css";
import { castStream } from "../../api";

export function Live() {
  const { streaming } = useStreamingList();
  const { setCasting } = useCasted();
  console.log(streaming);
  return (
    <section className={styles.liveSection}>
      {streaming && (
        <ul className={styles.cardGroup}>
          {streaming.map(
            ({ user_name, user_login, avatar, title, game_name, color }) => (
              <Card
                tag="li"
                key={user_name}
                color={color}
                media={avatar}
                title={user_name}
                category={game_name}
                description={title}
                actions={
                  <>
                    <Button
                      onClick={() => castStream(user_name).then(setCasting)}
                    >
                      <Play size={24} />
                    </Button>
                  </>
                }
                footer={
                  game_name == "Dota 2" ? (
                    <summary>
                      <details>
                        <Dota user_login={user_login} />
                      </details>
                    </summary>
                  ) : (
                    <></>
                  )
                }
              />
            )
          )}
        </ul>
      )}
    </section>
  );
}
