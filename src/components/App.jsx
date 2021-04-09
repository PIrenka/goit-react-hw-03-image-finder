import { Component } from 'react';

// import Container from './Container';

import styles from './App.module.scss';

import Modal from './Modal';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import Container from './Container';

class App extends Component {
  state = { showModal: false };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //================================================================
  //---эти два метода можно заменить одним: переключатель Модалки---
  //================================================================
  // handelOpenModal = () => {
  //   return this.setState({ showModal: true });
  // };
  // handelCloseModal = event => {
  //   console.log('close modal by clicking');
  //   console.log('event: ', event);
  //   console.log('event.target: ', event.target);
  //   console.log('event.currentTarget: ', event.currentTarget);
  //   return this.setState({ showModal: false });
  // };
  //================================================================

  //-------------переключатель Модалки------------------------------
  handelToggleModal = () => {
    const { showModal } = this.state;
    console.log('use toggle modal');
    return this.setState(({ showModal }) => {
      return { showModal: !showModal };
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={styles.App}>
        <Container>
          <>
            <h1>Hello 03-image</h1>
            <button type="button" onClick={this.handelToggleModal}>
              OPEN MODAL for img
            </button>
          </>
        </Container>

        {showModal && (
          <Modal>
            <>
              {/* <h2>modal</h2> */}
              <IconButton onClick={this.handelToggleModal}>
                <HighlightOffOutlinedIcon />
              </IconButton>
              <h2>the title of the modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                qui.
              </p>
              <button type="button" onClick={this.handelToggleModal}>
                close
              </button>
            </>
          </Modal>
        )}
        <Searchbar />
        <Container>
          <ImageGallery />
        </Container>
      </div>
    );
  }
}

export default App;
