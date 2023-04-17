import {CommentFooterText} from "./core";

import {TCommentFooterProps} from "./types";

import styles from "./CommentFooter.module.scss";

function CommentFooter({text}: TCommentFooterProps) {
    return (
        <div className={styles.wrapper}>
            <CommentFooterText text={text} />
        </div>
    );
}

export {CommentFooter};
