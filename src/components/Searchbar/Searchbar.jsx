import { Component } from 'react';
import styles from './stylesSearchbar.module.scss';

class Searchbar extends Component {
  state = {
    image: '',
  };

  handelChange = ev => {
    this.setState({ image: ev.currentTarget.value });
  };

  handelSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handelChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
