import {TCommentFooterTextProps} from "./types";

import styles from "./CommentFooterText.module.scss";

function CommentFooterText({text}: TCommentFooterTextProps) {
    return <p className={styles.text}>{text}</p>;
}

export {CommentFooterText};
