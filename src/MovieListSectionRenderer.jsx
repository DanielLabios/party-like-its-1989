import React, { Component } from 'react'
//pass along onclick results through render so it goes in app

class MovieListSection extends Component {
  render() {
    return (
      <div
        index={this.props.index}
        onClick={() => this.props.chooseIndex(`${this.props.index}`)}
      >
        <a>
          <img
            src={
              'https://image.tmdb.org/t/p/w342' + `${this.props.poster_path}`
            }
            alt="movie poster"
            height="130"
            width="130"
          ></img>
        </a>
        <h2>{this.props.title}</h2>
        <h3>{this.props.release_date}</h3>

        <ul>
          <li>{this.props.vote_average}/10</li>
          <li>{this.props.vote_count}</li>
        </ul>
      </div>
    )
  }
}

export class MovieListSectionRenderer extends Component {
  state = []

  async componentDidMount() {
    let response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=e19b7466f5c9e4dc138471da7d62486e'
    )
    let apiJSON = await response.json()
    this.setState(apiJSON)
  }

  render() {
    if (this.state.length === 0) {
      return 'loading...'
    }

    return (
      <article>
        {this.state.results.map((movie, index) => (
          <MovieListSection
            chooseIndex={this.props.chooseIndex}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            overview={movie.overview}
            index={index}
          />
        ))}
      </article>
    )
  }
}
