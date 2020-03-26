import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from '../../app/landing-page';
import Home from '../../app/header';
import ReactGA from 'react-ga';
import $ from 'jquery';
import PortfolioPage from '../../app/portofolio-page';
import Resume from '../../app/resume';

class Router extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          resumeData: {}
        };
    
        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);
    
      }
    
      getResumeData(){
        $.ajax({
          url:'/resumeData.json',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({resumeData: data});
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
            alert(err);
          }
        });
      }
    
      componentDidMount(){
        this.getResumeData();
      }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home data={this.state.resumeData.main}/>
                    </Route>
                <Route path="/portfolio">
                  <PortfolioPage/>
                </Route>
                <Route path="/aboutMe" component={AboutMe}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
         
        );
    }
}
export default Router;