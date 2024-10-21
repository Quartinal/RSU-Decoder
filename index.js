function hashChallengeCode(challengeCode) {
    let hash = 5381;
    for (let i = 0; i < challengeCode.length; i++) {
      hash = (hash * 33) ^ challengeCode.charCodeAt(i);
    }
    return hash.toString(36).toUpperCase().padStart(8, '0');
}