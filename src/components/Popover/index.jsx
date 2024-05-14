import * as RxPopover from "@radix-ui/react-popover";
import { forwardRef } from "react";
import styles from "./popover.module.css";

const Popover = RxPopover.Root;
const PopoverTrigger = RxPopover.Trigger;

const PopoverContent = forwardRef(
  ({ align = "center", sideOffset = 4, ...props }, ref) => (
    <RxPopover.Portal>
      <RxPopover.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={styles.popoverContent}
        {...props}
      />
    </RxPopover.Portal>
  )
);
PopoverContent.displayName = RxPopover.Content.displayName;

const PopoverHeader = (props) => (
  <div className={styles.popoverHeader} {...props} />
);

const PopoverTitle = (props) => (
  <h4 className={styles.popoverContentTitle} {...props} />
);

const PopoverSubtitle = (props) => (
  <p className={styles.popoverContentSubtitle} {...props} />
);

export {
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverTitle,
  PopoverSubtitle,
};
