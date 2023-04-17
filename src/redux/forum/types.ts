export type TComment = {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: null | number;
    likes: number;
};

export type TAuthor = {
    id: number;
    name: string;
    avatar: string;
};

export type TInitialState = {
    authors: Array<TAuthor>;
    comments: Array<TComment>;
    currentPageForRequest: number;
};

export type TGroupedComments = {
    [N: string]: Array<TComment>;
};

export type TGetComments = {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: Array<TComment>;
};
