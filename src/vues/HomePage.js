import { database } from '../api/firebase';
import React from 'react';
import firebase from "firebase/app"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css'
import DetailsPage from './DetailsPage'

// const db = database;

export default class HomePage extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      equipments: [],
      checkpoints: [],
      search: ""
    }
  }
  componentDidMount() {
    this.getUserData();
  }

  handleSearch = (e) => {
    let value = e.target.value;
    this.setState({
        search: e.target.value
    })
  }


  getUserData = () => {
    let ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState({ equipments: [...this.state.equipments, state.Equipments] })
      this.setState({ checkpoints: [...this.state.checkpoints, state.Checkpoints] })
    });
  };


  render() {

    let Obj = Object.entries(this.state.equipments)
    return (

        <div className=" p-3 App-header">
            <h1> DASHBOARD</h1>
            <input 
              type="text"
              name="searchBar"
              id="searchBar"
              placeholder="Rechercher"
              onChange={this.handleSearch} >

              </input>
            {Obj.map((([key, value]) => 
                Object.entries(value).filter((val) => {
                  return val[1].name.toLowerCase().includes(this.state.search) || val[1].domain.toLowerCase().includes(this.state.search)
                }).map((item, id) => {
                    return (

                        <div className="p-3">
                        <Card hey= {id }border="danger" style={{ width: '38rem'}}>
                            <Card.Img variant="top" src={item[1].photo} alt="IMG" class="h-75 d-inline-block"/>
                            <Card.Body>
                                <Card.Title style={{ fontSize: 12,fontWeight: "bold"}}>Equipment : {item[1].name}</Card.Title>
                                <Card.Text style={{ fontSize: 12}}> Domaine : {item[1].domain}</Card.Text>
                                <Card.Text style={{ fontSize: 12}}> Nb default : {item[1].nbFaults}</Card.Text>

                                <Link to={{pathname: `about/${item[0]}`}}> 
                                  <button type="button" class="btn btn-danger">Voir en détails</button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </div>
                    )}
                )
            ))}
        </div>
    );
  }
}
