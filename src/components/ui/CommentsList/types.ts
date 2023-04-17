import {TComment} from "src/redux/forum/types";

export type TCommentsListProps = {
    comments: Array<TComment>;
    isNestedList?: boolean;
};
