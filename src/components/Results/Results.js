import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Header from '../Shared/Header/Header'
=======
import Header from "../Shared/Header/Header";
>>>>>>> master

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

  componentWillReceiveProps() {
    if (this.props.resultsReducer.movResults.length<= 10) {
      this.setState({movStyleMore: {display: 'none'}})
      this.setState({movStyleLess: {display: 'none'}})
    } else {
      console.log('CDM: ', this.props.resultsReducer.movResults.length)
      this.setState({movStyleMore: {}})
      this.setState({movStyleLess: {}})
    }
  }

  movShowMore = () => {
      // console.log('in movShowMore')
      this.setState({movThruNum: this.state.movThruNum + 10})
      // console.log('movThruNum: ', this.state.movThruNum)
      this.setState({movLength: this.props.resultsReducer.movResults.length})
      // console.log('movLength: ', this.state.movLength)

      if (this.state.movThruNum >= this.state.movLength || this.state.movLength <= 10 ) {
        this.setState({movStyleMore: {display: 'none'}})
      } else {
        this.setState({movStyleMore: {}})
      }
  }

  movShowLess = () => {
    // console.log('in movShowMore')
    this.setState({movThruNum: this.state.movThruNum - 10})
    console.log('movThruNum: ', this.state.movThruNum)

    if (this.state.movThruNum <= 10 || this.state.movLength <= 10 ) {
      this.setState({movStyleLess: {display: 'none'}})
    } else {
      this.setState({movStyleLess: {}})
    } 
  }

<<<<<<< HEAD
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
=======
  render() {
    const { movResults, tvShowResults, image } = this.props.resultsReducer;
    let movNames = movResults.map((movie, index) => (
      <Link to={`/results/movie/${movie.name}/${movie.id}`}>
        <li key={index}>{movie.name}</li>
      </Link>
    ));
    let tvNames = tvShowResults.map((tv, index) => (
      <Link to={`/results/tvshow/${tv.name}/${tv.id}`}>
        <li key={index}>{tv.name}</li>
      </Link>
    ));
>>>>>>> master

    //movies - handle if no results
    let displayMovNames = movNames;
    if (movNames.length === 0) {
      displayMovNames = `Sorry - there were no results.`;
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
<<<<<<< HEAD
              <h3>MOVIE RESULTS</h3>
                 <div className='active'>
                  <ul>
                    {/* {displayMovNames} */}
                    {showMovNames}
                  </ul>
                </div>
                <button onClick={this.movShowMore} style={this.state.movStyleMore} >Show more . . .</button>
                <button onClick={this.movShowLess} style={this.state.movStyleLess} >Show less . . .</button>
          </div>
          <div className="tvResults">  
              <h3>TV SERIES RESULTS</h3>
                <div className='tvActive'>
                  <ul>
                    {displayTvNames}
                  </ul>
                </div>
          </div>
=======
            <h3>MOVIE RESULTS</h3>
            <ul>{displayMovNames}</ul>
          </div>
          <div className="tvResults">
            <h3>TV SERIES RESULTS</h3>
            <ul>{displayTvNames}</ul>
          </div>
        </div>
>>>>>>> master
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
