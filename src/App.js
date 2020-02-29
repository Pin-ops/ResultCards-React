import React, { Component } from 'react'
import ResultCard from './ResultCard/ResultCard'

class App extends Component {

  state = {
    results : [
    {name:"Pinar",topic:"JS", score:"91"},
    {name:"Hilmi",topic:"React", score:"92"},
    {name:"Atike",topic:"HTML", score:"93"},
    {name:"Numeric",topic:"CSS", score:"94"},
  ]
  }

  render()
  {

    let resultsOutput= this.state.results.map((item,i)=>
    <ResultCard
        key={i}
        name={item.name}
        topic={item.topic}
        score={item.score}

    />)

    return (
      <div>
          {resultsOutput}
      </div>
    )
  }
}
export default App



// <ResultCard
// name={this.state.results[0].name}
// topic={this.state.results[0].topic}
// score={this.state.results[0].score}
//  />