import useDotaInfo from "../../hooks/useDotaInfo";
import { Dialog, DialogContent, DialogTrigger } from "./../Dialog";
import { Hero } from "./Hero";
import Button from "./../Button";
import { Notepad } from "../Icons";
export const DotaInfo = ({ user }) => {
  const { dotaInfo } = useDotaInfo(user);
  if (!dotaInfo) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Notepad />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DotaInfoType info={dotaInfo} />
      </DialogContent>
    </Dialog>
  );
};

const DotaInfoType = ({ info }) => {
  switch (info.type) {
    case "multiple": {
      return (
        <div>
          {info.data.map((hero) => (
            <Hero data={hero} key={hero.name} />
          ))}
        </div>
      );
    }
    case "single": {
      return <div>single</div>;
    }
    default: {
      return <div>unsupported type {info.type}</div>;
    }
  }
};
