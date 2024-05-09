import * as React from "react";
import * as RxDialog from "@radix-ui/react-dialog";
import styles from "./dialog.module.css";
import { Cancel } from "./../Icons/";

const Dialog = RxDialog.Root;

const DialogTrigger = RxDialog.Trigger;

const DialogContent = ({ children }) => (
  <RxDialog.Portal>
    <RxDialog.Overlay className={styles.dialogOverlay} />
    <RxDialog.Content className={styles.dialogContent}>
      <RxDialog.Close>
        <Cancel size={20} />
      </RxDialog.Close>
      <div>{children}</div>
    </RxDialog.Content>
  </RxDialog.Portal>
);

export { Dialog, DialogTrigger, DialogContent };
