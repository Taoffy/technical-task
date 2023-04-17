import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

import {
    getNumberOfComments,
    getNumberOfLikes,
    groupCommentsByParent,
} from "./forum.helpers";

const forumSelectors = {
    authors: (state: RootState) => state.forum.authors,
    comments: (state: RootState) => state.forum.comments,
    currentPageForRequest: (state: RootState) =>
        state.forum.currentPageForRequest,
    groupedComments: createSelector(
        (state: RootState) => state.forum.comments,
        groupCommentsByParent,
    ),
    likesCount: createSelector(
        (state: RootState) => state.forum.comments,
        getNumberOfLikes,
    ),
    commentsCount: createSelector(
        (state: RootState) => state.forum.comments,
        getNumberOfComments,
    ),
};

export {forumSelectors};
