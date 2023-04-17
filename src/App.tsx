import {useEffect} from "react";

import {ForumPage} from "./components/pages/ForumPage";

import {getAuthors, getComments} from "./redux/forum/forum.thunks";
import {useAppDispatch} from "./hooks/redux";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authorsPromise = dispatch(getAuthors());
        const commentsPromise = dispatch(getComments(1));

        return function cleanUp() {
            authorsPromise.abort();
            commentsPromise.abort();
        };
    }, [dispatch]);

    return <ForumPage />;
}

export default App;
