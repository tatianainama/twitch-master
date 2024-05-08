import * as Dialog from "@radix-ui/react-dialog";

export const DotaInfo = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Edit profile</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when done.
          </Dialog.Description>
          <Dialog.Close>Close</Dialog.Close>
          <Dialog.Close asChild>
            <button aria-label="Close">X</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
