import Card from "../Card";
import Button from "../Button";
import { Play } from "../Icons";
import useStreamingList from "../../hooks/useStreamingList";
import useCasted from "../../hooks/useCasted";
import { DotaInfo } from "./DotaInfo";
import styles from "./live.module.css";
import { castStream } from "../../api";

export function Live() {
  const { streaming } = useStreamingList();
  const { setCasting } = useCasted();

  return (
    <section className={styles.liveSection}>
      <DotaInfo />

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
              />
            )
          )}
        </ul>
      )}
    </section>
  );
}
