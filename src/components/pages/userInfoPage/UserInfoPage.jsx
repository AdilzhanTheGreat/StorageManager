import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profileImage from '../images/prof.jpg';


const UserInfoPage = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => setUser(json))
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Oups, something went wrong!</div>;
  }
  return (
    <>
    <Container>
      <Row>
        <Col sm={6}><img style={{width : "200px"}} src={profileImage} alt="Profile"/></Col>
        <Col sm={4}>
            <p>
                Name: {user.name}
            </p>
            <p>
                Username: {user.username}
            </p>
            <p>
                Email: {user.email}
            </p>
            <p>
                Phone: {user.phone}
            </p>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default UserInfoPage