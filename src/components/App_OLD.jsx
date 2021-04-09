import { Component } from 'react';

import Modal from './Modal';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';

import './App.scss';

class App extends Component {
  state = {
    showModal: false,
  };

  handelCloseModal = () => {
    console.log('close modal by clicking');
  };

  render() {
    return (
      <div className="App">
        <Modal>
          <>
            <h2>modal</h2>
            <IconButton onClick={this.handelCloseModal}>
              <HighlightOffOutlinedIcon />
            </IconButton>
            <h2>the title of the modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              qui.
            </p>
            <button type="button" onClick={this.handelCloseModal}>
              close
            </button>
          </>
        </Modal>
      </div>
    );
  }
}

export default App;
