import {CommentHeader, CommentFooter} from "./core";

import {useAppSelector} from "src/hooks/redux";
import {forumSelectors} from "src/redux/forum/forum.selectors";

import {CommentsList} from "../CommentsList";

import {determineCommentTime} from "src/utils";

import {TCommentProps} from "./types";

import styles from "./Comment.module.scss";

function Comment({imgUrl, name, time, likesCount, text, id}: TCommentProps) {
    const groupedComments = useAppSelector(forumSelectors.groupedComments);

    const childComments = groupedComments[id];

    const determinatedTime = determineCommentTime(time);

    return (
        <>
            <div className={styles.wrapper}>
                <CommentHeader
                    imgUrl={imgUrl}
                    name={name}
                    time={determinatedTime}
                    likesCount={likesCount}
                />
                <CommentFooter text={text} />
            </div>
            {childComments?.length > 0 && (
                <CommentsList comments={childComments} isNestedList />
            )}
        </>
    );
}

export {Comment};
