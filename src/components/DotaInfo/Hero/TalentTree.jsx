import { Popover, PopoverContent, PopoverTrigger } from "../../Popover";
import styles from "./hero.module.css";

export const TalentTree = ({ data }) => {
  console.log(data);
  return (
    <Popover>
      <PopoverTrigger>
        <Tree data={data} />
      </PopoverTrigger>
      <PopoverContent>
        <div className={styles.talentTreeContent}>
          {data.map(([left, right], key) => (
            <div key={key} className={styles.talentTreeBranch}>
              <Leaf {...left} />
              <Leaf {...right} />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
const Leaf = ({ name, picked }) => (
  <div data-picked={picked} className={styles.talentTreeBranchLeaf}>
    {name}
  </div>
);

const Tree = ({ data }) => {
  const pickedTiers = data.map((val, idx) => (val[0].picked || val[1].picked) ? idx : 0);
  const highestPickedLevel = Math.max(...pickedTiers);
  const emptyColor = "#32314D";
  const filledColor = "#1DBEFD";
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="leaf-4-right">
        <path
          d="M26.8656 10.2128C28.5677 8.85106 28.9933 5.95744 28.9933 4.68085C25.9294 6.04255 23.4613 10.0709 22.6103 11.9149C23.3195 11.9149 25.1635 11.5745 26.8656 10.2128Z"
          fill={data[3][1].picked ? filledColor : emptyColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4288 12.5307L23.131 11.6797L22.9407 11.2991L21.2385 12.1501L21.4288 12.5307Z"
          fill={data[3][1].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-4-left">
        <path
          d="M14.0996 10.2128C12.3975 8.85106 11.9719 5.95744 11.9719 4.68085C15.0358 6.04255 17.5038 10.0709 18.3549 11.9149C17.6457 11.9149 15.8017 11.5745 14.0996 10.2128Z"
          fill={data[3][0].picked ? filledColor : emptyColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5363 12.5307L17.8342 11.6797L18.0245 11.2991L19.7266 12.1501L19.5363 12.5307Z"
          fill={data[3][0].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-3-right">
        <path
          d="M30.4579 17.1107C32.3254 15.9865 33.1305 13.1747 33.2996 11.9094C30.0824 12.8532 27.1024 16.5192 26.0146 18.2342C26.7176 18.3281 28.5904 18.2349 30.4579 17.1107Z"
          fill={data[2][1].picked ? filledColor : emptyColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4026 18.2128H27.076V17.5319H23.1671L20.9082 19.3068L21.3288 19.8422L23.4026 18.2128Z"
          fill={data[2][1].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-3-left">
        <path
          d="M10.1329 17.1107C8.26544 15.9865 7.46036 13.1747 7.29126 11.9094C10.5085 12.8532 13.4884 16.5192 14.5762 18.2342C13.8733 18.3281 12.0004 18.2349 10.1329 17.1107Z"
          fill={data[2][0].picked ? filledColor : emptyColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7731 18.2128H14.0998V17.5319H18.0086L20.2675 19.3068L19.8469 19.8422L17.7731 18.2128Z"
          fill={data[2][0].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-2-right">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.6587 24.8936H28.7007V24.4681H23.5299L20.9231 26.2059L21.1591 26.56L23.6587 24.8936Z"
          fill={data[1][1].picked ? filledColor : emptyColor}
        />
        <path
          d="M32.2676 24.3171C34.2641 23.4423 35.4241 20.7575 35.7545 19.5244C32.4426 20.0467 29.016 23.299 27.7167 24.8599C28.4017 25.0434 30.271 25.1919 32.2676 24.3171Z"
          fill={data[1][1].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-2-left">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.014 24.8936H11.9721V24.4681H17.1429L19.7497 26.2059L19.5136 26.56L17.014 24.8936Z"
          fill={data[1][0].picked ? filledColor : emptyColor}
        />
        <path
          d="M8.22496 24.3171C6.2284 23.4423 5.06844 20.7575 4.73804 19.5244C8.0499 20.0467 11.4765 23.299 12.7758 24.8599C12.0908 25.0434 10.2215 25.1919 8.22496 24.3171Z"
          fill={data[1][0].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-1-right">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.2434 32.1276H26.1475V31.7021H23.0941L20.9082 33.4509L21.174 33.7831L23.2434 32.1276Z"
          fill={data[0][1].picked ? filledColor : emptyColor}
        />
        <path
          d="M29.7423 32.3245C31.8539 31.7836 33.4321 29.3212 33.9572 28.1576C30.6044 28.1384 26.6978 30.7949 25.1635 32.1255C25.8099 32.4173 27.6307 32.8655 29.7423 32.3245Z"
          fill={data[0][1].picked ? filledColor : emptyColor}
        />
      </g>
      <g id="leaf-1-left">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.4292 32.1276H14.5251V31.7021H17.5785L19.7644 33.4509L19.4986 33.7831L17.4292 32.1276Z"
          fill={data[0][0].picked ? filledColor : emptyColor}
        />
        <path
          d="M10.7501 32.3245C8.63846 31.7836 7.06029 29.3212 6.53516 28.1576C9.8879 28.1384 13.7946 30.7949 15.3288 32.1255C14.6824 32.4173 12.8616 32.8655 10.7501 32.3245Z"
          fill={data[0][0].picked ? filledColor : emptyColor}
        />
      </g>
      <circle cx="20.4827" cy="20" r="19.5" stroke="#32314D" />
      <rect
        x="19.2061"
        y="11.0638"
        width="2.55319"
        height="28.9362"
        rx="1"
        fill={highestPickedLevel >= 4 ? filledColor : emptyColor}
      />
      <rect
        x="19.2061"
        y="17.8723"
        width="2.55319"
        height="22.1277"
        rx="1"
        fill={highestPickedLevel >= 3 ? filledColor : emptyColor}
      />
      <rect
        x="19.2061"
        y="25.5319"
        width="2.55319"
        height="14.4681"
        rx="1"
        fill={highestPickedLevel >= 2 ? filledColor : emptyColor}
      />
      <rect
        x="19.2061"
        y="32.3405"
        width="2.55319"
        height="7.65958"
        rx="1"
        fill={highestPickedLevel >= 1 ? filledColor : emptyColor}
      />
    </svg>
  );
};
