// Using a loop, iterate through the languages array and console.log all of the languages.

var programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
};

function language(obj) {
  for (i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
  }
  return;
}

language(programming);
