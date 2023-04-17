import {PayloadAction, createSlice} from "@reduxjs/toolkit";

import {foruminitialState} from "./forum.initialState";

import {getAuthors, getComments} from "./forum.thunks";

import {TAuthor, TGetComments} from "./types";

const forumSlice = createSlice({
    name: "forum",
    initialState: foruminitialState,
    reducers: {
        setAuthors(state, action) {
            state.authors = action.payload.authors;
        },

        setComments(state, action) {
            state.comments = action.payload.comments;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getAuthors.fulfilled,
            (state, action: PayloadAction<TAuthor[]>) => {
                state.authors = action.payload;
            },
        );

        builder.addCase(
            getComments.fulfilled,
            (state, action: PayloadAction<TGetComments>) => {
                state.comments = [...state.comments, ...action.payload.data];
                state.currentPageForRequest += 1;
            },
        );
    },
});

export default forumSlice.reducer;
