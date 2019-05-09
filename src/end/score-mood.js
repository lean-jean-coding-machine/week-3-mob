function scoreMood(mood) {
    if(mood < 26) {
        return 'sad';
    } else if(mood < 76) {
        return 'average';
    } else {
        return 'happy';
    }
}

export default scoreMood;