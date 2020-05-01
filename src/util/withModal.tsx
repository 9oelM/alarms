import React, { FC } from "react";
import { Modal } from "react-native";

export function withModal<T>(Component: FC<T>): FC<T> {
  return (props: T) => (
    <Modal animated={true}>
      <Component {...props} />
    </Modal>
  );
}
