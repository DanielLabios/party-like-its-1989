import React, { Component } from 'react'
class MovieDetailSectionRenderer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
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
        <h3>{this.props.release_date}</h3>

        <ul>
          <li>{this.props.vote_average}/10</li>
          <li>{this.props.vote_count}</li>
        </ul>
        <p>{this.props.overview}</p>
      </div>
    )
  }
}

export class MovieDetailSection extends Component {
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

    const listItem = `${this.props.listItem}`

    return (
      <article>
        {this.state.results
          .filter((movie, index) => index == listItem)
          .map(movie => (
            <MovieDetailSectionRenderer
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              overview={movie.overview}
            />
          ))}
      </article>
    )
  }
}
