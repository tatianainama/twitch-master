import styles from "./hero.module.css";
import imageAPI from "./../imageAPI";
import { TalentTree } from "./TalentTree";
import { Aghanim } from "./Aghanim";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverTitle,
} from "./../../Popover";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Chevron } from "./../../Icons";

export const Summary = ({ hero }) => {
  const abilities = hero.abilities.filter((ability) => {
    if (ability.granted_by_scepter) return hero.has_scepter;
    if (ability.granted_by_shard) return hero.has_shard;
    return true;
  });
  return (
    <Collapsible.Root className={styles.summaryContainer} defaultOpen={false}>
      <div className={styles.summaryHeader}>
        <div className={styles.summaryHeaderPortrait}>
          <img src={imageAPI.hero.portrait(hero.n)} />
        </div>
        <div className={styles.summaryHeaderHero}>
          <h2>{hero.player}</h2>
          <p>
            Lvl <strong>{hero.level}</strong> {hero.name}
          </p>
        </div>
        <TalentTree data={hero.talent_tree.entries} />
        <Aghanim
          scepter={hero.has_scepter}
          shard={hero.has_shard}
          abilities={hero.abilities}
        />
        <Collapsible.Trigger className={styles.summaryHeroAbilitiesToggle}>
          <Chevron size={24} />
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content>
        <div className={styles.abilities}>
          <div className={styles.abilitiesList}>
            {abilities.map((_) => (
              <Ability data={_} key={_.n} />
            ))}
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export const Ability = ({ data }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img
          src={imageAPI.hero.ability(data.n)}
          style={{ width: `3rem`, height: `3rem`, objectFit: "cover" }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>{data.name}</PopoverTitle>
        <p>{data.tooltip.description}</p>
        <ul>
          {data.properties.map((property, key) => (
            <li key={key}>
              <strong>{property.name}</strong>{" "}
              <span>{property.value.join(" / ")}</span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
