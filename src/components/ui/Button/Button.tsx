import {TButtonProps} from "./types";

import styles from "./Button.module.scss";

function Button({
    type = "button",
    disabled = false,
    onClick,
    children,
}: TButtonProps) {
    return (
        <button
            className={styles.button}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export {Button};
