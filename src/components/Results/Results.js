import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header"

class Results extends Component {
  constructor(props) {
    super(props);
      this.underMovShowMoreButton = React.createRef();
      this.underTvShowMoreButton = React.createRef();
    this.state = {
      currentStart: 0,
      currentEnd: 0,
      movLength: 0,
      movThruNum: 10,
      movStyleMore: {},
      movStyleLess: {},
      tvLength: 0,
      tvThruNum: 10,
      tvStyleMore: {},
      tvStyleLess: {},
      tvStyle: {},
    };
  }
  
 componentDidUpdate(prevProps) {
    if (prevProps.resultsReducer !== this.props.resultsReducer) {
      this.setState({movLength: this.props.resultsReducer.movResults.length})
      this.setState({tvLength: this.props.resultsReducer.tvShowResults.length})
    }
  }

  movShowMore = () => {
    this.setState({movThruNum: this.state.movThruNum + 10});
    this.scrollIntoView_movBtnShowMore();
  }
  
  movShowLess = () => {
    this.setState({movThruNum: this.state.movThruNum - 10})
    this.scrollIntoView_movBtnShowMore();
  }

  scrollIntoView_movBtnShowMore = () => {
    setTimeout(() => {
      this.underMovShowMoreButton.current.scrollIntoView({block: 'end', behavior: 'smooth'});
    }, 75);
  }

  tvShowMore = () => {
    this.setState({tvThruNum: this.state.tvThruNum + 10});
    this.scrollIntoView_tvBtnShowMore();
  }
  
  tvShowLess = () => {
    this.setState({tvThruNum: this.state.tvThruNum - 10});
    this.scrollIntoView_tvBtnShowMore();
  }

  scrollIntoView_tvBtnShowMore = () => {
    setTimeout(() => {
      this.underTvShowMoreButton.current.scrollIntoView({block: 'end', behavior: 'smooth'});
    }, 75);
  }


  render () {

  const{ movResults, tvShowResults} = this.props.resultsReducer;

  let movNames = movResults.map((movie, index) => <Link to={`/results/movie/${movie.name}/${movie.id}`}><li id={`mov${index}`} key={index}>{movie.name}</li></Link> );

  let tvNames = tvShowResults.map((tv, index) => <Link to={`/results/tvshow/${tv.name}/${tv.id}`}><li id={`tv${index}`} key={index}>{tv.name}</li></Link> )
  
  let showMovNames = movNames.slice(0, this.state.movThruNum); 
  let showTvNames = tvNames.slice(0, this.state.tvThruNum);

    //movies - handle if no results
    let displayMovNames = movNames;
    if (movNames.length === 0) {
      showMovNames = `Sorry - there were no results.`;
    }

    //movies - handle if no results
    let displayTvNames = tvNames;
    if (tvNames.length === 0) {
      showTvNames = `Sorry - there were no results.`;
    }

    return (
      <div className="background">
        <div className="header" />
        <Header />
        <div className="results">
          <div className="movResults">
              <h3>MOVIE RESULTS</h3>
                 <div className='movActive'>
                  <ul>
                    {/* {displayMovNames} */}
                    {showMovNames}
                  </ul>
                </div>
                <div className='movButtons'>
                {movResults.length > 10 && ((this.state.movThruNum + 10) < (this.state.movLength+9)) ? 
                <div id='movShowMore'>
                  <button id='movShowMoreBtn' onClick={this.movShowMore} style={this.state.movStyleMore}>Show more . . .</button>
                </div> : null}
                  <div id='underMovShowMoreButton' ref={this.underMovShowMoreButton}></div>
                {this.state.movThruNum > 11 ?
                <div>
                  <button onClick={this.movShowLess} style={this.state.movStyleLess} >Show less . . .</button>
                </div> : null}
                </div>
          </div>
          <div className="tvResults">  
              <h3>TV SERIES RESULTS</h3>
                <div className='tvActive'>
                  <ul>
                    {/* {displayTvNames} */}
                    {showTvNames}
                  </ul>
                </div>
                <div className='tvButtons'>
                {tvShowResults.length > 10 && ((this.state.tvThruNum + 10) < (this.state.tvLength + 9)) ? 
                <div id='tvShowMore'>
                  <button id='tvShowMoreBtn' onClick={this.tvShowMore} style={this.state.tvStyleMore}>Show more . . .</button>
                </div> : null}
                  <div id='underTvShowMoreButton' ref={this.underTvShowMoreButton}></div>
                {this.state.tvThruNum > 11 ?
                <div>
                  <button onClick={this.tvShowLess} style={this.state.tvStyleLess} >Show less . . .</button>
                </div> : null}
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
