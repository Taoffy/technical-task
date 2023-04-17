import {TCommentHeaderTextProps} from "./types";

import styles from "./CommentHeaderText.module.scss";

function CommentHeaderText({name, time}: TCommentHeaderTextProps) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.name}>{name}</span>
            <span className={styles.time}>{time}</span>
        </div>
    );
}

export {CommentHeaderText};
