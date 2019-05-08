function scoreQuest(user, choice, quest) {
    user.mood += choice.mood;
    user.treats += choice.treats;
    user.completed[quest.id] = true;
    return user;
}

export default scoreQuest;