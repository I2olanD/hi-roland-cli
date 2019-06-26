#!/usr/bin/env node

const { prompt } = require('inquirer');

const showMore = () => console.log('Github: https://github.com/I2olanD');
const showContact = () => console.log('Mail: rolandolah@icloud.com || LinkedIn: https://www.linkedin.com/in/roland-olah-709550169');
const rolandWork = () => console.log('Joblocal: https://www.joblocal.de');
const risotto = () => console.log('You will have to wait in line!');

async function main() {
  const choice = await prompt({
    type: 'list',
    name: 'roland',
    message: 'What do you want to know about Roland?',
    choices: [
      {
        name: 'Tell me more about Roland!',
        value: 'showMore',
      },
      {
        name: 'How can i contact Roland?!',
        value: 'showContactInfo',
      },
      {
        name: 'Where does Roland work?',
        value: 'rolandWork',
      },
      {
        name: 'What can I do if I want to try Roland\'s famous Risotto?',
        value: 'risotto',
      },
    ],
  });
  const { roland } = choice;

  switch (roland) {
    case 'showMore':
      showMore();
      break;
    case 'showContactInfo':
      showContact();
      break;
    case 'rolandWork':
      rolandWork();
      break;
    case 'risotto':
      risotto();
      break;
    default:
      break;
  }
}

main();
