import Table from 'react-bootstrap/Table';
import './CommonTable.css'
import TableItem from './TableItem';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CommonTable = () => {
  const [products, setProducts] = useState([]);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => setProducts(json))
      .catch((error) => {
        setError(error);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  if(error){
    return <div> Oups, You don`t have an internet access</div>
  } else return (<>
  <Navbar className="bg-body-tertiary justify-content-end searchNavbar">
        <Form inline onSubmit={handleFormSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <div className='commonTable'>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of Product</th>
              <th>Count</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => <TableItem product={product} key={product.id} />)
              : products.map((product) => <TableItem product={product} key={product.id} />)}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CommonTable;