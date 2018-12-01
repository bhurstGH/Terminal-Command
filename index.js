const terminalCommands = require('./terminal-commands');

terminalCommands.ls();

terminalCommands.touch('hello.txt');

terminalCommands.mkdir('./DirA');
terminalCommands.mkdir('./DirB');
terminalCommands.mkdir('./DirA/DirC');
