'use strict';

var chalk = require('chalk');
var version = require('../package.json').version;
var title =
  '\n    ' + chalk.red('________                      ') + chalk.yellow('       ______               ') +
  '\n    ' + chalk.red('___  __ )_____ ______________') + chalk.yellow(' ____  ____  /_____ ________ ') +
  '\n    ' + chalk.red('__  __  |  __ `/_  __ \\_  __ `') + chalk.yellow('/  / / /_  /_  __ `/_  ___/ ') +
  '\n    ' + chalk.red('_  /_/ // /_/ /_  / / /  /_/ /') + chalk.yellow('/ /_/ /_  / / /_/ /_  /     ') +
  '\n    ' + chalk.red('/_____/ \\__,_/ /_/ /_/_\\__, /') + chalk.yellow(' \\__,_/ /_/  \\__,_/ /_/      ') +
  '\n    ' + chalk.yellow('----------------------') + chalk.red('/____/-----------------------') +
  '\n    ' + pad(version, 8) + '                      ' + chalk.bgBlack('Light & Fast purposed') +
  '\n\n';

function pad (str, nb) {
  return str.length >= nb ? str.substr(0, nb) : str + Array(nb - str.length + 1).join(' ');
}

module.exports = title;
