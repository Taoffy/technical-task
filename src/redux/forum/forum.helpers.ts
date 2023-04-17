import {TComment, TGroupedComments} from "./types";

function getNumberOfLikes(comments: Array<TComment>) {
    const result = comments.reduce((sum, comment) => (sum += comment.likes), 0);

    return result;
}

function getNumberOfComments(comments: Array<TComment>) {
    return comments.length;
}

function groupCommentsByParent(comments: Array<TComment>) {
    const result: TGroupedComments = {};

    comments.forEach((comment) => {
        let key;

        if (comment.parent === null) {
            key = "root";
        } else {
            key = `${comment.parent}`;
        }

        result[key] ||= [];
        result[key].push(comment);
    });

    return result;
}

export {getNumberOfLikes, getNumberOfComments, groupCommentsByParent};
