import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

// import Bootstrap from "react-bootstrap";

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    }
  }
  search() {
    // ?i=garlic,chicken&q=adobo
    let { ingredients, dish } = this.state
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

    console.log(url)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl+url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.props.setRecipes(json.results))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render () {
    return (
      <Form inline>
        <Form.Group>
          <Form.Label>Ingredients</Form.Label>
          {' '}
          <Form.Control
            type="text"
            placeholder="garlic, chicken"
            onChange={event => this.setState({ ingredients: event.target.value})}
          />
        </Form.Group>
        {' '}
        <Form.Group>
          <Form.Label>Dish</Form.Label>
          {' '}
          <Form.Control
            type="text"
            placeholder="adobo"
            onChange={event => this.setState({ dish: event.target.value})}
          />
        </Form.Group>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    )
  }
}

export default connect(null, { setRecipes }) (SearchRecipes);