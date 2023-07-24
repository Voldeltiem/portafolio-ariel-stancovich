import React from "react";
import Card from "react-bootstrap/Card";
import desafio1 from "../assets/img/desafio 3.png"

function Projects() {
  
  return (
    <div className="project">
      <div>
      <Card className="card-project" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={desafio1} />
        <Card.Body>
          <Card.Title>Iguana Page</Card.Title>
          <Card.Text>
            Proyecto realizado en desafio Latam
          </Card.Text>
          
        </Card.Body>
      </Card>
      
      </div>
      <div>
      <Card className="card-project" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={desafio1} />
        <Card.Body>
          <Card.Title>Iguana Page</Card.Title>
          <Card.Text>
            Proyecto realizado en desafio Latam
          </Card.Text>
          <Card.Link href="../Projects/desafio 3/index.html" target="_blank">Ir al Proyecto</Card.Link>
        </Card.Body>
      </Card>
      
      </div>
      <div>
      <Card className="card-project" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={desafio1} />
        <Card.Body>
          <Card.Title>Iguana Page</Card.Title>
          <Card.Text>
            Proyecto realizado en desafio Latam
          </Card.Text>
          <Card.Link href="../Projects/desafio 3/index.html" target="_blank">Ir al Proyecto</Card.Link>
        </Card.Body>
      </Card>
      
      </div>
      <div>
      <Card className="card-project" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={desafio1} />
        <Card.Body>
          <Card.Title>Iguana Page</Card.Title>
          <Card.Text>
            Proyecto realizado en desafio Latam
          </Card.Text>
          <Card.Link href=".../Projects/desafio 3/index.html" target="_blank">Ir al Proyecto</Card.Link>
        </Card.Body>
      </Card>
      
      </div>
    </div>
  );
}

export default Projects;
