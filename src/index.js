#!/usr/bin/env node

const { prompt } = require('inquirer');
const terminalImage = require('terminal-image');

const showPicture = async () => console.log(await terminalImage.file('roland.jpg'));
const showMore = () => console.log('Github: https://github.com/I2olanD');
const showContact = () => console.log('coming soon!');

prompt(
  {
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
      }
    ],
  },
).then(({ roland }) => {
  if (roland === 'showPicture') {
    showPicture();
  }

  switch(roland) {
    case 'showPicture':
      showPicture()
      break;
    case 'showMore':
      showMore()
      break;
    case 'showContactInfo':
      showContact()
      break;
    default:
      break;
  }
});
