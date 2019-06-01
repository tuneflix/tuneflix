import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header"

class Results extends Component {
  constructor(props) {
    super(props);
      this.underShowMoreButton = React.createRef();
    this.state = {
      currentStart: 0,
      currentEnd: 0,
      movLength: 0,
      movThruNum: 10,
      movStyleMore: {},
      movStyleLess: {},
      tvStyle: {},
    };
  }

  componentDidMount() {
    console.log('CDM')
    console.log('movThruNum CDM: ', this.state.movThruNum);
    console.log('movLength CDM: ', this.state.movLength);
  }
  
  componentWillReceiveProps() {
    this.setState({movLength: this.props.resultsReducer.movResults.length})
    //this.props.resultsReducer
  }

  focusMovShowMoreBtn () {
    // this.movShowMoreBtn.current.focus();
    // document.getElementById('showMovMore').focus();
  }

  movShowMore = () => {
    this.setState({movThruNum: this.state.movThruNum + 10});
    console.log('movThruNum MORE: ', this.state.movThruNum);
    console.log('movLength: ', this.state.movLength);
    this.scrollIntoView_movBtnShowMore();
  }

  // scrollToMyRef = () => window.scrollTo(0, (this.myRef.current.offsetTop-60)) 

  scrollIntoView_movBtnShowMore = () => {
    setTimeout(() => {
      this.underShowMoreButton.current.scrollIntoView({block: 'end', behavior: 'smooth'});
    }, 50);
  }

  movShowLess = () => {
    this.setState({movThruNum: this.state.movThruNum - 10})
    console.log('movThruNum LESS: ', this.state.movThruNum);
    this.scrollIntoView_movBtnShowMore();
  }

  render () {

  const{ movResults, tvShowResults, image} = this.props.resultsReducer;

  let movNames = movResults.map((movie, index) => <Link to={`/results/movie/${movie.name}/${movie.id}`}><li id={`mov${index}`} key={index}>{movie.name}</li></Link> );

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
                {movResults.length > 10 && ((this.state.movThruNum + 10) < this.state.movLength) ? 
                <div id='movShowMore'>
                  <button id='movShowMoreBtn' onClick={this.movShowMore} style={this.state.movStyleMore}>Show more . . .</button>
                </div> : null}
                  <div id='underShowMoreButton' ref={this.underShowMoreButton}></div>
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
