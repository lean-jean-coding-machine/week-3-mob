
function isSad(user) {
    if(user.mood <= 0) {
        return true;
    } else {
        return false;
    }
}
export default isSad;