'use strict'

const {h, Component, Text} = require('ink')
const PropTypes = require('prop-types')
const Image = require('ink-image');
const readYaml = require('read-yaml');

class UI extends Component {
	render({config}) {
		let data = readYaml.sync('tests/fixtures/concourse.yml')
		return (
			<div>
				<Image preserveAspectRatio src='assets/Airplane.png' width='100px'/>
				<br/>

				<Text green>
					I am looking for: {config}
				</Text>
				{data}
			</div>
		)
	}
}

UI.propTypes = {
	config: PropTypes.string
}

UI.defaultProps = {
	config: 'concourse.yml'
}

module.exports = UI
