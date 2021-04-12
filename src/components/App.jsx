import { Component } from 'react';

import styles from './App.module.scss';

import Modal from './Modal';
//=================icons for modal window================
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from '@material-ui/core/IconButton';
//=======================================================

import imagesApi from '../servicesApi/images-api';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import ArticleList from './ImageGallery';
import Container from './Container';

//================Loaders===============================
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import ImageGrid from './Loader/LoaderFromGH';
import Loader from 'react-loader-spinner';
//======================================================

class App extends Component {
  state = { showModal: false, articles: [], isLoading: false, images: [] };

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ isLoading: true });
    imagesApi
      .fetchImages()
      .then(images => this.setState({ images: images, isLoading: false }))
      .catch(err => console.log(err));
    // axios
    //   .get('http://localhost:3004/posts')
    //   // .then(res => console.log('res: ', res))
    //   .then(res => console.log('res.data: ', res.data));

    // axios
    //   .get('https://hn.algolia.com/api/v1/search?query=react')
    //   .then(response =>
    //     this.setState({ articles: response.data.hits, isLoading: false }),
    //   );
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
    const { showModal, articles, images, isLoading } = this.state;

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
          <>
            <Loader
              type="ThreeDots"
              color="#f5dbee"
              height={80}
              width={80}
              timeout={1000} //
            />
            <Modal>
              <>
                <h1>modal</h1>
                <IconButton onClick={this.handelToggleModal}>
                  <HighlightOffOutlinedIcon />
                </IconButton>
                <h2>the title of the modal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, qui.
                </p>
                <button type="button" onClick={this.handelToggleModal}>
                  close
                </button>
              </>
            </Modal>
          </>
        )}
        <Searchbar />

        <Container>
          {isLoading && <ImageGrid />}
          <ImageGallery images={images} />
          {/* {isLoading && <p>Loading...</p>} */}
          {/* {articles.length > 0 ? <ArticleList articles={articles} /> : null} */}
        </Container>
      </div>
    );
  }
}

export default App;
