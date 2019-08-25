import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById, clearHeroes } from '../actions'
import { Button } from 'reactstrap'

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="main-container">
                  <div className="stats-container">
                    <div className="hero-name">{hero.name}</div>
                    <div className="hero-stats">Strength: {hero.strength}</div>
                    <div className="hero-stats">Speed: {hero.speed}</div>
                    <div className="hero-stats">Intelligence: {hero.intelligence}</div>
                  </div>
                  <div
                    className="right-button"
                    onClick={() => this.props.removeCharacterById(hero.id)} 
                    >
                    -
                  </div>
								</div>
              </li>							
            );
          })}
        </ul>
        {
          this.props.heroes.length > 0 ?
            <Button
              color="warning"
              className="mt-3 clear-button"
              onClick={() => this.props.clearHeroes()}
            > Clear all
            </Button>
            :
              <div></div>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(
  mapStateToProps, { removeCharacterById, clearHeroes }) (HeroList);
