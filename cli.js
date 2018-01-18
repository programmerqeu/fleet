#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const Ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ flyer [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ flyer
	  I love Ink
	  $ flyer --name=ponies
	  I love ponies
`);


class flyer {

	constructor () {

	}


}

render(h(Ui, cli.flags));
