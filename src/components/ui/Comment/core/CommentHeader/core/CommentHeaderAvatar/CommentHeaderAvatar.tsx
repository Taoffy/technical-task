import {TCommentHeaderAvatarProps} from "./types";

import styles from "./CommentHeaderAvatar.module.scss";

function CommentHeaderAvatar({imgUrl}: TCommentHeaderAvatarProps) {
    return <img className={styles.avatar} src={imgUrl} alt="Avatar" />;
}

export {CommentHeaderAvatar};
