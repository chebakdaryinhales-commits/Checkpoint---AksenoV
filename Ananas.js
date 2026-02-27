const scrabble = (chars, word) => {
    const lowerChars = chars.toLowerCase();
    const lowerWord = word.toLowerCase();
    if (lowerChars.length < lowerWord.length) {
        return false;
    }

    const charCount = {};
    for (const char of lowerChars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of lowerWord) {
    if (!charCount[char] || charCount[char] === 0) {
        return false;
    }
    
    charCount[char] -= 1;
    }

    return true;
};

export default scrabble;