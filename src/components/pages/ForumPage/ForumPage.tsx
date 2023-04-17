import {useCallback, useState} from "react";

import {ForumPageHeader} from "./core";

import {CommentsList} from "src/components/ui/CommentsList";
import {Button} from "src/components/ui/Button";

import {useAppSelector, useAppDispatch} from "src/hooks/redux";
import {forumSelectors} from "src/redux/forum/forum.selectors";
import {getComments} from "src/redux/forum/forum.thunks";

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

    return (
        <div className={styles.main}>
            <ForumPageHeader />
            {groupedComments["root"]?.length > 0 ? (
                <CommentsList comments={groupedComments["root"]} />
            ) : (
                <p className={styles.loading}>Loading...</p>
            )}
            {currentPageForRequest < 4 && (
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
