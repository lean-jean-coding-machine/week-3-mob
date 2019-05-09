function createQuestLink(quest) {
    //creating anchor link
    const link = document.createElement('a');
    link.classList.add('quest');

    //creating search parameters, making url link
    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = '../quest/quest.html?' + searchParams.toString();

    //adding the quest title
    link.textContent = quest.title;
    //returning the data
    return link;
}

export default createQuestLink;