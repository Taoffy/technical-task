import {Heart} from "src/components/ui/icons";

import {TCommentHeaderLikesProps} from "./types";

import styles from "./CommentHeaderLikes.module.scss";

function CommentHeaderLikes({likesCount}: TCommentHeaderLikesProps) {
    return (
        <div className={styles.wrapper}>
            <Heart className={styles.icon} />
            <span className={styles.likesCount}>{likesCount}</span>
        </div>
    );
}

export {CommentHeaderLikes};
