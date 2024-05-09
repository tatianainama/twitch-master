import { Summary } from "./Summary";
import { Inventory } from "./Inventory";

export const Hero = ({ data }) => {
  return (
    <div>
      <Summary hero={data} />
      <Inventory hero={data} />
    </div>
  );
};
