import React, { Component } from 'react'
import { MovieListSectionRenderer } from './MovieListSectionRenderer'
import { Header } from './Header'
import { Footer } from './Footer'
import { MovieDetailSection } from './MovieDetailSection'

//this needs a state taken from sectionRenderer; it will be passed to detailSection

class App extends Component {
  state = { objectIndex: 0 } //state must be high up in the parent child to be passed down

  chooseIndex = newObjectIndex => {
    console.log(newObjectIndex)
    this.setState({ objectIndex: newObjectIndex })
  }

  render() {
    return (
      <body>
        <Header />
        <main>
          <section>
            <article>
              <MovieDetailSection listItem={this.state.objectIndex} />
            </article>
          </section>
          <section>
            <article>
              <h2>Sort By</h2>
              <ul>
                <li>Alphabetical</li>
                <li>Release Order</li>
                <li>Avg. Rating</li>
                <li>Most Voted</li>
              </ul>
              <a>
                <input type="field"></input>
                <button>Enter</button>
              </a>
            </article>

            <MovieListSectionRenderer chooseIndex={this.chooseIndex} />
          </section>
        </main>
        <Footer />
      </body>
    )
  }
}

export default App
