#!/usr/bin/env node

'use strict'

const importJsx = require('import-jsx')
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const notifier = updateNotifier({pkg}).notify();

if (notifier.update) {
	console.log(`Update available: ${notifier.update.latest}`);
}

const {
	h,
	render
} = require('ink')
const meow = require('meow')
const Ui = importJsx('./ui')
const cli = meow(`
	Usage
		fleet -c concourse.yml
		✔  Teams configured
		✔  Pipelines setted

		fleet set-teams -c concourse.yml
		✔  Teams configured

		fleet set-pipelines -c concourse.yml
		✔  Pipelines setted

	Options
		set-teams     Setup all teams
		set-pipelines Setup all pipelines
		--config, -c  Path configuration file [Default: concourse.yml]

	Examples
		$ fleet -c concourse.yml
		$ fleet --config=/home/crazyhorse/concourse.yml

`, {
	flags: {
		config: {
			type: 'string',
			alias: 'c',
			default: 'concourse.yml'
		}
	}
});

render(h(Ui, cli.flags))
