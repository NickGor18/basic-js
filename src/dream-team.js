module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const regExp = /[a-zA-Z]{1,1}/;
  const filtered = members.filter((member) => typeof member === 'string');
  const FIRST_CHARS = filtered.map((member) => {
    const firstLetter = member.match(regExp)[0];
    return firstLetter.toUpperCase();
  });

  return FIRST_CHARS.sort().join('');;
};
