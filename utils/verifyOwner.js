const verifyOwner = (userId, pokemonOwnerId) => {
  if (userId === pokemonOwnerId) {
    return true;
  } else {
    return false;
  }
};

module.exports = verifyOwner;