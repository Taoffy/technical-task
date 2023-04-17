function determineCommentTime(created: string): string {
    let finalString;

    const commentDate = new Date(created);

    const timeDiff = new Date().getTime() - commentDate.getTime();

    const seconds = timeDiff / 1000,
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24;

    if (hours < 1) {
        finalString = `less than an hour ago"
        } ago`;
    } else if (days < 1) {
        finalString = `${hours.toFixed()} ${
            hours === 1 ? "hour" : "hours"
        } ago`;
    } else {
        const commentDateDay = commentDate.getDate();
        const commentDateMonth = commentDate.getMonth() + 1;
        const commentDateYear = commentDate.getFullYear();

        finalString = `${
            commentDateDay < 10 ? `0${commentDateDay}` : `${commentDateDay}`
        }.${
            commentDateMonth < 10
                ? `0${commentDateMonth}`
                : `${commentDateMonth}`
        }.${commentDateYear}, ${commentDate.toTimeString().slice(0, 8)}`;
    }

    return finalString;
}

export {determineCommentTime};
