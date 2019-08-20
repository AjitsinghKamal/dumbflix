import React from 'react';
import PropTypes from 'prop-types';

const Player = props => (
	<iframe
		src={`https://www.youtube-nocookie.com/embed/${props.trailerUrl}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`}
		frameBorder="0"
		style={{ width: '100%', height: '100%' }}
		allowFullScreen=""
	></iframe>
);
Player.propTypes = {
	trailerUrl: PropTypes.string,
};
export default Player;
