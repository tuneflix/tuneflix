import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from '../Shared/Header/Header'

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStart: 0,
      currentEnd: 0,
      movLength: 0,
      movThruNum: 9,
      movStyleMore: {},
      movStyleLess: {},
      tvStyle: {}
    };
  }

  movShowMore = () => {

      this.setState({movThruNum: this.state.movThruNum + 10})
      console.log('movThruNum MORE: ', this.state.movThruNum)

      var movShowButton = document.getElementById('movShowMore')
      // var movShowPosition = movShowButton.offsetTop
      movShowButton.scrollIntoView({block: 'nearest'});
      // console.log('rect: ', rect);
      // window.scrollTo(0, movShowPosition, 'smooth');
      // (500 + (this.state.movThruNum*25))
      // window.scrollBy({
      //   top: 600,
      //   left: 0,
      //   behavior: "auto"
      // });
      // window.scrollTo(top, 0);
      // this.setState({movLength: this.props.resultsReducer.movResults.length})

      // if (this.state.movThruNum >= this.state.movLength) {
      //   this.setState({movStyleMore: {display: 'none'}})
      // } else {
      //   this.setState({movStyleMore: {}})
      // }
  }

  movShowLess = () => {
    this.setState({movThruNum: this.state.movThruNum - 10})
    console.log('movThruNum LESS: ', this.state.movThruNum)

    // if (this.state.movThruNum <= 10 ) {
    //   this.setState({movStyleLess: {display: 'none'}})
    // } else {
    //   this.setState({movStyleLess: {}})
    // } 
  }

  render () {
  const{ movResults, tvShowResults, image} = this.props.resultsReducer;
  // console.log(movResults);
  // console.log(tvShowResults);

  let movNames = movResults.map((movie, index) => <Link to={`/results/movie/${movie.name}/${movie.id}`}><li key={index}>{movie.name}</li></Link> );
  // console.log('movNames: ', movNames)

  // 

  let tvNames = tvShowResults.map((tv, index) => <Link to={`/results/tvshow/${tv.name}/${tv.id}`}><li key={index}>{tv.name}</li></Link> )
  
  console.log('movNames length', movNames.length)
  let showMovNames = movNames.slice(0, this.state.movThruNum); 

    //movies - handle if no results
    let displayMovNames = movNames;
    if (movNames.length === 0) {
      // displayMovNames = `Sorry - there were no results.`;
      showMovNames = `Sorry - there were no results.`;
    }

    //movies - handle if no results
    let displayTvNames = tvNames;
    if (tvNames.length === 0) {
      displayTvNames = `Sorry - there were no results.`;
    }

    return (
      <div className="background">
        <div className="header" />
        <Header />
        <div className="results">
          <div className="movResults">
              <h3>MOVIE RESULTS</h3>
                 <div className='active'>
                  <ul>
                    {/* {displayMovNames} */}
                    {showMovNames}
                  </ul>
                </div>
                <div className='movButtons'>
                {movResults.length > 10 ? 
                <div>
                  <button id='movShowMore' onClick={this.movShowMore} style={this.state.movStyleMore} >Show more . . .</button>
                </div>
                : null}
                {this.state.movThruNum > 9 ?
                <div>
                  <button onClick={this.movShowLess} style={this.state.movStyleLess} >Show less . . .</button>
                </div> : null}
                </div>
          </div>
          <div className="tvResults">  
              <h3>TV SERIES RESULTS</h3>
                <div className='tvActive'>
                  <ul>
                    {displayTvNames}
                  </ul>
                </div>
          </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsReducer: state.resultsReducer
  };
}
export default connect(mapStateToProps)(Results);
