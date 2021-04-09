import { Component } from 'react';
// import PropTypes from 'prop-types';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';

import styles from './stylesModal.module.scss';
import { render } from '@testing-library/react';

class Modal extends Component {
  // handelCloseModal = () => {
  //   return console.log('closing Modal');
  // };
  handelCloseModal() {
    return console.log('closing Modal');
  }

  render() {
    return (
      <div className={styles.modal}>
        <h2>modal</h2>
        <IconButton onClick={this.handelCloseModal}>
          <HighlightOffOutlinedIcon />
        </IconButton>
      </div>
    );
  }
}
export default Modal;
