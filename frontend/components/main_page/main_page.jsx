import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import Modal from 'react-modal';
import ChannelFormContainer from './channels/channel_form_container';
import ChannelPageContainer from './channels/channel_page_container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    componentDidUpdate(newProps) {
        if (this.props.match.params.channelId !== newProps.match.params.channelId) {
            this.props.fetchChannels();
        }
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    logoutUser() {
        this.props.logoutUser().this(() => this.props.history.push('/login'))
    }

    render() {
        const channels = this.props.channels;

        return (
            <div>
                <div className='header'>
                    <h2>Hello {this.props.currentUser.full_name}!</h2>
                    <div className='logout-button-container' onClick={this.logoutUser}>
                        <i className='fas fa-sign-out-alt'></i>
                        <span className='logout-button-hover-text'>Logout</span>
                    </div>
                </div>
                <div className='channel-container'>
                    <ul className='channel-list'>
                        {channels.map((channel) => (
                            <li
                                className={'channel-links'}
                                key={channel.id}
                                onClick={() => this.props.history.push(`/channels/${channel.id}`)}
                            >
                                # {channel.name}
                            </li>
                        ))}
                        <div className='channel-form-container'>
                            <li className='channel-form-container-button-text' onClick={this.toggleModal}>
                                <span className='channel-form-container-button'>Create a new channel</span>
                            </li>

                            <Modal
                                className='channel-form-modal'
                                isOpen={this.state.showModal}
                                onRequestClose={this.toggleModal}
                                ariaHideApp={false}
                                style={{
                                    content: {
                                        position: 'absolute',
                                        top: '20%',
                                        bottom: '20%'

                                    },
                                    overlay: {
                                        position: 'fixed',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        zIndex: '50'
                                    }
                                }}
                            >
                                <ChannelFormContainer closeModal={this.toggleModal} />
                            </Modal>
                        </div>
                    </ul>
                    <div>
                        <ProtectedRoute path='/channels/:channelId' component={ChannelPageContainer} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage