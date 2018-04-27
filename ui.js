'use strict'

const {h, Component, Text} = require('ink')
const PropTypes = require('prop-types')
const Image = require('ink-image');

class UI extends Component {
	render({name}) {
		return (
			<div>
				<Image preserveAspectRatio src='assets/Airplane.png' width='100px'/>
				<br/>
				<Text green>
					I love {name}
				</Text>
			</div>
		)
	}
}

UI.propTypes = {
	name: PropTypes.string
}

UI.defaultProps = {
	name: 'Ink'
}

module.exports = UI
