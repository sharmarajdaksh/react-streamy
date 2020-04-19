import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className='ui celled list'>
					{this.props.streams.map((stream) => {
						return (
							<div className='item' key={stream.id}>
								{stream.userId === this.props.currentUserId ? (
									<div className='right floated content'>
										<Link
											to={`/streams/edit/${stream.id}`}
											className='ui button primary'
										>
											Edit
										</Link>
										<Link
											to={`/streams/delete/${stream.id}`}
											className='ui button negative'
										>
											Delete
										</Link>
									</div>
								) : null}
								<i className='large middle aligned icon camera' />
								<div className='content'>
									<Link
										to={`/streams/${stream.id}`}
										className='ui header'
									>
										{stream.title}
									</Link>
									<div className='description'>
										{stream.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{this.props.isSignedIn ? (
					<div style={{ textAlign: 'right' }}>
						<Link className='ui button primary' to='/streams/new'>
							Create Stream
						</Link>
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
