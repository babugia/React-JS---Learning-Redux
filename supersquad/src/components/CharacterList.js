import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

class CharacterList extends Component {
  render() {
		console.log('this.props', this.props)
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
              <li className="list-group-item" key={character.id}>
                <div className="main-container">
                  <div className="stats-container">
                    <div className="hero-name">{character.name}</div>
                    <div className="hero-stats">Strength: {character.strength}</div>
                    <div className="hero-stats">Speed: {character.speed}</div>
                    <div className="hero-stats">Intelligence: {character.intelligence}</div>
                  </div>
                  <div
                  className="right-button"
                    onClick={() => this.props.addCharacterById(character.id)} 
                  >
                    +
                  </div>									
								</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ addCharacterById }, dispatch)
// }

export default connect(
  mapStateToProps,
  { addCharacterById }
)(CharacterList);
