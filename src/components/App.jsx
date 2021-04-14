import React, { Component } from 'react';

import imagesApi from '../servicesApi/images-api';

import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

import styles from './App.module.scss';

// //================Loaders===============================
import ImageGrid from './Loader/LoaderFromGH';
// //======================================================
// //=================icons for modal window================
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';
// //=======================================================

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,

    error: null,
    modalURL: '',
    scrollScr: false,
    enterError: false,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImage();
    }
  }

  addImages = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      error: null,
    });
  };

  fetchImage = () => {
    const { searchQuery, currentPage, showModal } = this.state;
    this.setState({ isLoading: true });

    if (searchQuery.length <= 2) {
      this.setState({ isLoading: false });
      return;
    }

    imagesApi
      .fetchImages({ searchQuery, currentPage })
      .then(hits =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      // .catch(error => this.setState({ error }))
      .catch(() => {
        this.handelToggleModal();
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handelToggleModal = () => {
    console.log('use toggle modal');
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  }; //- переключатель модального окна

  getModalImage = largeImageURL => {
    const { modalURL } = this.state;
    console.log(`modalURL`, modalURL);
    // this.setState({ modalURL: largeImageURL }.modalurl);
    this.setState({ modalURL: largeImageURL });
    this.handelToogleModal();
  };

  render() {
    const {
      showModal,
      images,
      isLoading,
      searchQuery,
      modalURL,
      error,
    } = this.state;
    return (
      <div className={styles.App}>
        <Container>
          <h1>Hello HW 03-image</h1>
        </Container>
        <Searchbar onSubmit={this.addImages} />
        <Container>
          {isLoading && <ImageGrid />}
          {images.length > 0 ? (
            <>
              <ImageGallery
                images={images}
                title={searchQuery}
                onClick={this.handelToggleModal}
              >
                {/* <Modal modalURL={modalURL} onClose={this.getModalImage}>
                <img src={modalURL} alt="" />
              </Modal> */}
              </ImageGallery>
              {showModal && (
                <Modal modalURL={modalURL} onClick={this.handelToggleModal}>
                  <IconButton onClick={this.handelToggleModal}>
                    <HighlightOffOutlinedIcon />
                  </IconButton>
                  <img src={modalURL} alt="" />
                </Modal>
              )}
              {/* <Modal
                modalURL={modalURL}
                // onClose={this.getModalImage}
                onClick={this.handelToggleModal}
              >
                <img src={modalURL} alt="" />
              </Modal> */}
            </>
          ) : (
            <p className={styles.introText}>
              Here you will receive images after searching...
            </p>
          )}
          {images.length === 0 && searchQuery.length > 0 && (
            <Modal
              onClick={this.handelToggleModal}
              onClose={this.handelToggleModal}
            >
              }
              <button
                type="button"
                // onClick={({ showModal }) => ({ showModal: !showModal })}
                onClose={this.handelToggleModal}
              >
                XXX CLOSE XXX
              </button>
              <p className={styles.errorText}>
                oooooopppppsss it looks there is nothing to show
              </p>
            </Modal>
          )}
          {/* {images.length === 0 && searchQuery.length > 0 && (
            <p>oooooopppppsss it looks there is nothing to show</p>
          )} */}
        </Container>
        <Container>
          {images.length > 0 && (
            <Button onClick={this.fetchImage} isLoading={isLoading} />
          )}
        </Container>
        ================================================================================
        ================================================================================
      </div>
    );
  }
}

export default App;
