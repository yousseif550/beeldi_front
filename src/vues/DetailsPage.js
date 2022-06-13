import '../App.css';
import { useParams } from "react-router-dom";
import React, { useState, useEffect, Fragment } from 'react';
import firebase from "firebase/app"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

export default function DetailsPage(props) {
  const params = useParams()
  console.log(params)
  
  const [ equipments, setEquipment] = useState([]);
  const [ checkpoints, setCheckpoints] = useState([]);

  function getUserData() {
    let ref = firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      setEquipment({ equipments: [state.Equipments] })
      setCheckpoints({ checkpoints: [state.Checkpoints] })
     
    console.log('SS',state)
    }); 
  };
  
  useEffect(() => {
    getUserData();
  },[])


  console.log('RENDER',Object.entries(equipments))


  console.log('checkpoints',Object.entries(checkpoints))
  console.log('equipments', equipments.equipments)
  let Obj = Object.entries(equipments.equipments || {})
  console.log('OBJ', Obj)
  let ObjCheck = Object.entries(checkpoints.checkpoints || {})
  console.log('ObjCheck', ObjCheck)
    return (

      <div className="App-header">
        
      <Container >
        <Row >
          <Col>
            {Obj.map((([key, value]) => 
                Object.entries(value).map((item, id) => {
                        // console.log('itid',item[0], params.id);
                        if (item[0] === params.id) {
                          return (
                            <div >
                            <h1>Equipment</h1>
                            <Card border="danger" style={{ width: '38rem'}}>
                                <Card.Img variant="top" src={item[1].photo} alt="IMG"/>
                                <Card.Body>
                                    <Card.Title style={{ fontSize: 12,fontWeight: "bold"}}>NAME : {item[1].name}</Card.Title>
                                    <Card.Text style={{ fontSize: 12}}> Domaine : {item[1].domain}</Card.Text>
                                    <Card.Text style={{ fontSize: 12}}> Nb default : {item[1].nbFaults}</Card.Text>
  
                                </Card.Body>
                            </Card>
    
                        </div>
                        )
                      }
                    }
                )
            ))}
          </Col>
        <Col>
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                
                <h1>Point à contrôler</h1>
                {ObjCheck.map((([key, value]) => 
                      Object.entries(value).map((item, id) => {
                              console.log('itid',item, params.id);
                              if (item[1].equipmentKey === params.id) {
                                return (
                                    
                                  <div className="p-3">
                                    
                                  <Card border="danger" style={{ width: '38rem'}} >

                                      {item[1].photo ? <Card.Img variant="top" src={item[1].photo} alt="IMG" class="w-25 p-3"/> : <div> </div>}
                                      <Card.Body>
                                          <Card.Title style={{ fontSize: 12,fontWeight: "bold"}}>{item[1].name}</Card.Title>
                                          {item[1].fault ? <Card.Text style={{ fontSize: 12}}> Défaut : {item[1].fault}</Card.Text> : <div> </div>}
                                          {item[1].recommandation ? <Card.Text style={{ fontSize: 12}}> Préconisation : {item[1].recommandation}</Card.Text> : <div> </div>}
                                      </Card.Body>
                                  </Card>
          
                              </div>
                              )
                            }
                          }
                      )
                  ))}
              </Col>
            ))}
            </Row>
           </Col>
          </Row>
      </Container>

      </div>

    );
}
