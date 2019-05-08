import questArray from './quest-data.js';
const api = {
    storage: localStorage,
    saveUser(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questArray;
    },
    getQuest(id) {
        for(let i = 0; i < questArray.length; i++) {
            const quest = questArray[i];
            if(quest.id === id) {
                return quest;
            }
        }
    }

};

export default api;