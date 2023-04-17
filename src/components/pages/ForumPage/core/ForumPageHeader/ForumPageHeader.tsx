import {EmptyHeart} from "src/components/ui/icons";

import {useAppSelector} from "src/hooks/redux";
import {forumSelectors} from "src/redux/forum/forum.selectors";

import styles from "./ForumPageHeader.module.scss";

function ForumPageHeader() {
    const commentsCount = useAppSelector(forumSelectors.commentsCount);
    const likesCount = useAppSelector(forumSelectors.likesCount);

    return (
        <div className={styles.header}>
            <div className={styles.textWrapper}>
                <span className={styles.text}>{commentsCount} comments</span>
                <div className={styles.likesCountWrapper}>
                    <EmptyHeart />
                    <span className={styles.text}>{likesCount}</span>
                </div>
            </div>
            <div className={styles.divider} />
        </div>
    );
}

export {ForumPageHeader};
