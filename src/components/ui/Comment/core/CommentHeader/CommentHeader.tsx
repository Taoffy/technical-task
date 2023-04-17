import {
    CommentHeaderAvatar,
    CommentHeaderLikes,
    CommentHeaderText,
} from "./core";

import {TCommentHeaderProps} from "./types";

import styles from "./CommentHeader.module.scss";

function CommentHeader({imgUrl, name, time, likesCount}: TCommentHeaderProps) {
    return (
        <div className={styles.wrapper}>
            <CommentHeaderAvatar imgUrl={imgUrl} />
            <CommentHeaderText name={name} time={time} />
            <CommentHeaderLikes likesCount={likesCount} />
        </div>
    );
}

export {CommentHeader};
