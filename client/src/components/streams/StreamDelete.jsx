import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	actions = (
		<>
			<button
				onClick={() =>
					this.props.deleteStream(this.props.match.params.id)
				}
				className='ui button negative'
			>
				Delete
			</button>
			<Link to='/' className='ui button'>
				Cancel
			</Link>
		</>
	);
	n;

	render() {
		return (
			<Modal
				title='Delete Stream'
				content={
					this.props.stream
						? `Are you sure you want to delete the stream: ${this.props.stream.title}?`
						: 'Are you sure you want to delete this stream?'
				}
				actions={this.actions}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
	StreamDelete
);
