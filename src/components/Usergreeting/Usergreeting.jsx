import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'

const Usergreeting = () => {
  return (
    <div>Welcome Back !
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="/american.svg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Usergreeting