import React from "react"
import {Switch, Route} from "react-router-dom"
import Movie from "./components/Results/Movie/Movie"
import TVShow from "./components/Results/TVShow/TVShow"
import Results from "./components/Results/Results"
import Search from "./components/Search"
import Error from "./components/Shared/Error/Error"

export default (
    <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path ="/results" component = {Results} />
        <Route exact path ="/results/tvshow/:userInput" component = {TVShow} />
        <Route exact path ="/results/movie/:userInput" component = {Movie} />
        <Route path ="/" component ={Error} />
    </Switch>
)