import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row, ListGroup, Button } from 'react-bootstrap'

// <Col xs={12}>
//   <ListGroup>
//   {this.props.ewoks.map((ewok, index) => {
//       return (
//           <ListGroup.Item key={index}>
//           <h4>
//             <span className='ewok-name'>{ewok.name}</span> - <small className='ewok-age'>{ewok.age} years old</small>
//           </h4>
//             <span className='ewok-enjoys'>{ewok.enjoys}</span>
//           </ListGroup.Item>
//       )
//   })}
//   </ListGroup>
// </Col>
export default class Ewoks extends Component {
    render () {
        return (
            <div>
            <div className="button">
                <Button href='/newewok'>Make a new Ewok profile</Button>
            </div>
                <Container>
                    <Row>
                        {this.props.ewoks.map((ewok, index) => {
                            return (
                                <div className="card" style={{width: "25%"}}>
                                <img className="card-img-top" src={ewok.img} alt="Card face" />
                                <div className="card-body">
                                <h5 className="card-title">{ewok.name}</h5>
                                <h6 className="card-age">{ewok.age}</h6>
                                <p className="card-text">{ewok.enjoys}</p>
                                </div>
                                </div>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
