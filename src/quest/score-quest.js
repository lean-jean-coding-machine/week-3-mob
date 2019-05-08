function scoreQuest(user, choice) {
    user.mood += choice.mood;
    user.treats += choice.treats;
    return user;
}

export default scoreQuest;