import {createAsyncThunk} from "@reduxjs/toolkit";

import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import getCommentsRequest from "src/api/comments/getCommentsRequest";

const getAuthors = createAsyncThunk(
    "forum/getAuthors",
    async (_, {rejectWithValue}) => {
        try {
            const data = await getAuthorsRequest();

            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

const getComments = createAsyncThunk(
    "forum/getComments",
    async (page: number, {rejectWithValue}) => {
        try {
            const data = await getCommentsRequest(page);

            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

export {getAuthors, getComments};
