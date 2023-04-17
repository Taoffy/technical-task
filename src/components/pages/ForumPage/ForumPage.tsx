import {useCallback, useState, useEffect} from "react";

import {ForumPageHeader} from "./core";

import {CommentsList} from "src/components/ui/CommentsList";
import {Button} from "src/components/ui/Button";

import {useAppSelector, useAppDispatch} from "src/hooks/redux";
import {forumSelectors} from "src/redux/forum/forum.selectors";
import {getComments, getAuthors} from "src/redux/forum/forum.thunks";

import styles from "./ForumPage.module.scss";

function ForumPage() {
    const dispatch = useAppDispatch();

    const groupedComments = useAppSelector(forumSelectors.groupedComments);
    const currentPageForRequest = useAppSelector(
        forumSelectors.currentPageForRequest,
    );

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = useCallback(() => {
        setIsButtonDisabled(true);

        dispatch(getComments(currentPageForRequest))
            .catch(() => {
                dispatch(getComments(currentPageForRequest));
            })
            .finally(() => {
                setIsButtonDisabled(false);
            });
    }, [dispatch, currentPageForRequest]);

    useEffect(() => {
        const authorsPromise = dispatch(getAuthors());
        const commentsPromise = dispatch(getComments(1));

        return function cleanUp() {
            authorsPromise.abort();
            commentsPromise.abort();
        };
    }, [dispatch]);

    return (
        <div className={styles.main}>
            <ForumPageHeader />
            {groupedComments["root"]?.length > 0 ? (
                <CommentsList comments={groupedComments["root"]} />
            ) : (
                <p className={styles.loading}>Loading...</p>
            )}
            {groupedComments["root"]?.length > 0 && currentPageForRequest < 4 && (
                <div className={styles.buttonWrapper}>
                    <Button
                        disabled={isButtonDisabled}
                        onClick={handleButtonClick}
                    >
                        Load more
                    </Button>
                </div>
            )}
        </div>
    );
}

export {ForumPage};
