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
    const { searchQuery, currentPage } = this.state;
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
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handelToggleModal = () => {
    console.log('use toggle modal');
    return this.setState(({ showModal }) => {
      return { showModal: !showModal };
    });
  };

  getModalImage = largeImageURL => {
    this.setState({ modalURL: largeImageURL }.modalurl);
    this.toogleModal();
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
            <ImageGallery
              images={images}
              title={searchQuery}
              onClick={this.getModalImage}
            >
              <Modal modalURL={modalURL} onClose={this.handelToggleModal}>
                <img src={modalURL} alt="" />
              </Modal>
            </ImageGallery>
          ) : (
            <p>Here you will receive images after searching...</p>
          )}
          {images.length === 0 && searchQuery.length > 0 && (
            <p>oooooopppppsss it looks there is nothing to show</p>
          )}
        </Container>
        <Container>
          {images.length > 0 && (
            <Button onClick={this.fetchImage} isLoading={isLoading} />
          )}
        </Container>
        {/* 
        {showModal && (
          //         <>
          //           <Loader
          //             type="ThreeDots"
          //             color="#f5dbee"
          //             height={80}
          //             width={80}
          //             timeout={1000} //
          //           />
          <Modal
            onClick={this.handelToggleModal}
            onClose={this.handelToggleModal}
          >
            <>
              <h1>modal</h1>
              <IconButton onClose={this.handelToggleModal}>
                <HighlightOffOutlinedIcon />
              </IconButton>
              <p>the body of the modal</p>
              {<img src={modalURL} />}
              <button type="button" onClick={this.handelToggleModal}>
                close
              </button>
            </>
          </Modal>
        )} */}

        {/* <ImageGallery list={images} onClick={this.openModal} />
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={imageForModal} alt="" />
          </Modal>
        )}  */}
      </div>
    );
  }
}

export default App;
