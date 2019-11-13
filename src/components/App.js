import React from 'react';
import { connect } from "react-redux";
import { toggleCards} from "../actions";
import {getGenres, getMostPopularMovies, pickGenre} from "../thunks";
import Card from './Card';
import { getImageUrl } from '../config';

class App extends React.Component {
    componentDidMount() {
        this.props.ongetMostPopularMovies();
        this.props.ongetMostPopularGenres();
    }

  render() {
      return (
        <div className="container">
            <div>
                { this.props.mostPopularGenres.map((genre) => (
                    <div className="genre"
                         key={genre.id}
                         name={genre.name}
                         onClick={() => {this.props.onpickGenres(genre.id)}}
                    > {genre.name} </div>
                ))}
            </div>
            <header>
              <button
                  style={{ display: 'block', margin: '0 auto' }}
                  onClick={() => this.props.onToggleCards(!this.props.showCards)}
              >
                Hide movies
              </button>
            </header>
            {this.props.showCards
                ? (
                    <div className="cards">
                        {this.props.mostPopularMovies.map((card) => (
                            <Card key={card.original_title}
                                backgroundImage={getImageUrl(card.backdrop_path)}
                                date={card.release_date}
                                rating={card.vote_average}
                                votes={card.vote_count}
                                description={card.overview}
                                title={card.original_title}
                            />
                        ))}
                    </div>
                )
                : null
                }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
    showCards: state.componentState.showCards,
    mostPopularMovies: state.cards.mostPopular,
    mostPopularGenres: state.genresCards.showGenres,
});
const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  ongetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  ongetMostPopularGenres: () => dispatch(getGenres()),
  onpickGenres: (id) => dispatch(pickGenre(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);