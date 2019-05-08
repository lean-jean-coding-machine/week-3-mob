function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        buddy: formData.get('buddy'),
        mood: 30,
        treats: 1, 
        completed: {},
    };
    return user;
}
export default makeUser;