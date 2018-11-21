export const fakeOwner1 = {
  id: '765',
  fullName: 'Fulanito',
  profilePicture: 'https://placeimg.com/100/100/animals',
};

export const fakeOwner2 = {
  id: '321',
  fullName: 'Menganito',
  profilePicture: 'https://placeimg.com/100/100/nature',
};

export const fakeOwner3 = {
  id: '765',
  fullName: 'Zutanito',
  profilePicture: 'https://placeimg.com/100/100/people',
};

export const fakeSlot1 = {
  id: '78',
  visibility: 'foo',
  owner: fakeOwner1,
  creationDate: '2018-09-26 07:13:40',
  description: 'WannaCry',
};

export const fakeSlot2 = {
  id: '34',
  visibility: 'bar',
  owner: fakeOwner2,
  creationDate: '2018-09-26 07:13:40',
  description: 'Pro investigations',
};

export const fakeSlot3 = {
  id: '999',
  visibility: 'baz',
  owner: fakeOwner3,
  creationDate: '2018-09-26 07:13:40',
  description: 'Lore ipsum investigations',
};

export const fakeResults = [
  [fakeSlot1],
  [fakeSlot2, fakeSlot3]
];
