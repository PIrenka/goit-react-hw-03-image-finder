import { Component } from 'react';
// import PropTypes from 'prop-types';
// import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
// import IconButton from '@material-ui/core/IconButton';

import styles from './stylesModal.module.scss';

class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handelCloseModal() {
    return console.log('closing Modal');
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.modalBackdrop}>
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
export default Modal;
//========================================================================
// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import './Modal.scss';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('Нажали ESC, нужно закрыть модалку');

//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     // console.log('Кликнули в бекдроп');

//     // console.log('currentTarget: ', event.currentTarget);
//     // console.log('target: ', event.target);

//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
//         <div className="Modal__content">{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
