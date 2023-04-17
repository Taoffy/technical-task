import {useAppSelector} from "src/hooks/redux";
import {forumSelectors} from "src/redux/forum/forum.selectors";

import {memo} from "react";

import {Comment} from "../Comment";

import {TCommentsListProps} from "./types";

import styles from "./CommentsList.module.scss";

function CommentsList({comments, isNestedList = false}: TCommentsListProps) {
    const authors = useAppSelector(forumSelectors.authors);

    return (
        <div
            className={`${styles.wrapper} ${
                isNestedList && `${styles.wrapper__nested}`
            }`}
        >
            {comments.map((comment) => {
                const author = authors.find(
                    (author) => author.id === comment.author,
                );

                return (
                    <Comment
                        key={comment.id}
                        imgUrl={author!.avatar}
                        name={author!.name}
                        time={comment.created}
                        likesCount={comment.likes}
                        text={comment.text}
                        id={comment.id}
                    />
                );
            })}
        </div>
    );
}

export default memo(CommentsList);
