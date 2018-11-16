#!/usr/bin/env node

const { prompt } = require('inquirer');
const terminalImage = require('terminal-image');

const showPicture = async () => console.log(await terminalImage.file(__dirname + '/roland.jpg'));
const showMore = () => console.log('Github: https://github.com/I2olanD');
const showContact = () => console.log('coming soon!');
const rolandWork = () => console.log('Joblocal');
const risotto = () => console.log('You will have to wait in line!');

async function main() {
  const choice = await prompt({
    type: 'list',
    name: 'roland',
    message: 'What do you want to know about Roland?',
    choices: [
      {
        name: 'Show me a picture!',
        value: 'showPicture',
      },
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
        name: 'What can I do if I want to try Roland\'s infamous Risotto?',
        value: 'risotto',
      },
    ],
  });
  const { roland } = choice;

  switch (roland) {
    case 'showPicture':
      showPicture();
      break;
    case 'showMore':
      showMore();
      break;
    case 'showContactInfo':
      showContact();
      break;
    case 'rolandWork':
      rolandWork();
    case 'risotto':
      risotto();
    default:
      break;
  }
}

main();
