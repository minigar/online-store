import React, { FC } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  children?: React.ReactNode[] | React.ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
  style?: React.CSSProperties;
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible, style }) => {
  const rootClasses = [classes.modal];

  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      {visible === true ? (
        <div
          style={style}
          className={classes.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Modal;
