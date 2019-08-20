import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSearch } from 'store/actions';

import { ReactComponent as SearchIcon } from 'assets/svgs/search.svg';

const SearchWrap = styled.form`
	position: relative;
	width: 380px;
	max-width: 80%;
	font-size: 15px;
	margin-left: auto;
	@media screen and (max-width: 640px) {
		margin: 10px auto;
	}
`;
const Input = styled.input`
	padding: 10px 14px;
	border: 1px solid #d2d2d2;
	border-radius: 5px;
	width: 100%;
	padding-right: 30px;
	font-size: 15px;
	transition: box-shadow 0.3s;
	&:focus {
		box-shadow: 0 0px 4px 2px #e5e5e5;
	}
`;
const Icon = styled.button`
	position: absolute;
	display: inline-block;
	right: 4px;
	top: 4px;
	width: 30px;
	border: 0;
	cursor: pointer;
	padding: 8px;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.5;
	}
`;

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
		this.updateSearchQuery = this.updateSearchQuery.bind(this);
		this.shouldSearch = this.shouldSearch.bind(this);
	}

	updateSearchQuery(value) {
		this.setState({
			query: value,
		});
	}

	shouldSearch(e) {
		e.preventDefault();
		this.props.setSearch(this.state.query);
	}

	render() {
		return (
			<SearchWrap onSubmit={this.shouldSearch}>
				<Input
					type="text"
					placeholder="Search titles"
					value={this.state.query}
					onChange={event =>
						this.updateSearchQuery(event.target.value)
					}
				/>
				<Icon type="submit">
					<SearchIcon />
				</Icon>
			</SearchWrap>
		);
	}
}
Search.propTypes = {
	setSearch: PropTypes.func,
};
export default connect(
	null,
	{ setSearch }
)(Search);
