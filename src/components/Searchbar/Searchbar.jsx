import { Component } from 'react';
import styles from './stylesSearchbar.module.scss';

class Searchbar extends Component {
  state = {
    searchQuery: '', //- задаем изначально пустое значения поиска
    image: [],
  };

  handelChange = ev => {
    // const { searchQuery } = this.state;
    // console.log('searchQuery before: ', { searchQuery });
    this.setState({ searchQuery: ev.currentTarget.value });
    // console.log('searchQuery after changing input: ', {
    //   searchQuery: ev.currentTarget.value,
    // });
  }; // для отлавливания изменений при вводе слова в инпуте. реагирует на каждое событие клавиши (ev - объект), отлавливает и цель на чем произошло всплытие (ev.currentTarget - <ivent ...> - в нем как атрибут уже видно само значение), и ввыводит само только значение (ev.currentTarget.value) после ввода - тут уже само слово из введенных ранее значений нажатых клавиш.
  // и как результат это все записывается в стейт как значение ключа searchQuery.

  handelSubmit = ev => {
    // const { searchQuery } = this.state;

    ev.preventDefault(); //- чтоб не перезагружалась страница при сабмите
    this.props.onSubmit(this.state.searchQuery); //- тут нахордится значения запроса (query) из метода кторой передаеться как прор - addImages(это и есть onSubmit), и потом мы его используем для рендера картинок по данному запросу (54мин 6-го видео)
    // this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' }); // - это для того чтоб обновить строку ввода для след. запроса. так после ввода слова, оно очистится, и так как в атрибутах инпута стоит онФокус, после поиска мы можем сразу набирать новое слово и оно уже будет писаться в инпут
  }; //- для добавления картинок по запросу

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
            value={this.state.searchQuery}
            onChange={this.handelChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
