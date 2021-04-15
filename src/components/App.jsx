import React, { Component } from 'react';

import imagesApi from '../servicesApi/images-api';

import Container from './Container';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Error from './Error';
import Delayed from './Delayed';

import styles from './App.module.scss';

// //================Loaders===============================
import ImageGrid from './Loader/LoaderFromGH';
// //======================================================
// //=================icons for modal window================
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';
// //=======================================================

class App extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,

    error: 5555555555,
    // error: null,
    modalURL: '',
    scrollScr: false,
    enterError: false,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('fetching images...');
      this.fetchImage();
    }

    //==========================for scrol=========================
    if (snapshot !== null) {
      const list = this.listRef.current;
      // console.log('snapshot: ', list.scrollHeight, snapshot);
      if (this.state.scrollScr) {
        window.scrollTo({
          top:
            document.documentElement.scrollTop + (list.scrollHeight - snapshot),
          behavior: 'smooth',
        });
      } else {
        this.setState({ scrollScr: true });
      }
    }
    //============================================================
  }

  //============================================================
  // Пример прокрутки взят из документации https://ru.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.images.length < this.state.images.length) {
      const list = this.listRef.current;
      // console.log("set snapshot: ", list.scrollHeight, list.scrollTop)
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
  //============================================================

  addImages = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      error: null,
      scrollScr: false, // - for scroll
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
      // .catch(error => this.setState({ error }))

      // .catch(() => {
      //   this.setState(({ showModal }) => ({ showModal: !showModal }));
      .catch(() => {
        this.handelErrorMessage();
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handelErrorMessage = er => {
    // const { error, images, searchQuery } = this.state;
    // if (images.length === 0 && searchQuery.length > 0) {
    //   this.setState({ error: er });
    console.log('er: ', er);
    this.handelToggleModal();
  };

  handelToggleModal = () => {
    console.log('use toggle modal');
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  }; //- переключатель модального окна

  getModalImage = largeImage => {
    this.setState({ modalURL: largeImage.largeImageURL });
    this.handelToggleModal();
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
      <div className={styles.App} ref={this.listRef}>
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
                onClick={this.getModalImage}
              ></ImageGallery>

              {showModal && (
                <Modal onClick={this.handelToggleModal}>
                  <IconButton onClick={this.handelToggleModal}>
                    <HighlightOffOutlinedIcon />
                  </IconButton>
                  <img
                    src={modalURL}
                    width="1200"
                    height="800"
                    alt={searchQuery}
                  />
                </Modal>
              )}
            </>
          ) : (
            <p className={styles.introText}>
              Here you will receive images after searching...
            </p>
          )}
          {/* ================in case of error===================== */}
          {images.length === 0 && searchQuery.length > 0 && (
            <Delayed waitBeforeShow={1500}>
              <p className={styles.errorText}>
                oooooopppppsss it looks there is nothing to show
              </p>
            </Delayed>
          )}

          {/* {images.length === 0 && searchQuery.length > 0 && (
            <Modal onClick={this.handelToggleModal}>
              <button
                type="button"
                // onClick={({ showModal }) => ({ showModal: !showModal })}
                onClick={this.handelToggleModal}
              >
                XXX CLOSE XXX
              </button>
              <p className={styles.errorText}>
                oooooopppppsss it looks there is nothing to show
              </p>
            </Modal>
          )} */}
          {/* {images.length === 0 && searchQuery.length > 0 && (
            <Modal onClick={this.handelToggleModal}>
              <IconButton onClick={this.handelToggleModal}>
                <HighlightOffOutlinedIcon />
              </IconButton>
              <Error
                error={this.handelErrorMessage}
                addText="lalalalalalallal"
              />
            </Modal>
          )} */}
        </Container>
        {/* ==================Button for LoadMore=================== */}
        <Container>
          {images.length > 0 && (
            <Button onClick={this.fetchImage} isLoading={isLoading} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
