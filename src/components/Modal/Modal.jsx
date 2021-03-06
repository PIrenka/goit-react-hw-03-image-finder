import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './stylesModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('modal componentDidMount');
    // console.log(
    //   'modal componentDidMount -> window.addEventListener(keydown, this.handleKeyDown)',
    //   window.addEventListener('keydown', this.handleKeyDown),
    // );
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log('modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // console.log('e.code: ', e.code);

    if (e.code === 'Escape') {
      // console.log('this.props: ', this.props);
      // console.log('this.props.onClick(): ', this.props.onClick());
      this.props.onClick();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      // console.log('e.target in handleBackdrop: ', e.target);
      // console.log('e.currentTarget in handleBackdrop: ', e.currentTarget);
      // console.log(
      //   'this.props.onClick() in handlebackdrop: ',
      //   this.props.onClick,
      // );
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
        {/* <div className={styles.Overlay} onClick={this.handleBackdropClick}>
         <div className={styles.Modal}>{this.props.children}</div> */}
        <div className={styles.modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
};

export default Modal;
