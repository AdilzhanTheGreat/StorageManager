import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './AddProduct.css'
import { Button } from 'react-bootstrap';

function AddProduct() {
  return (
    <>
      <div className='adminInput'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product count</Form.Label>
        <Form.Control type="number" placeholder="Enter count" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Product price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
      </div>
    </>
  );
}

export default AddProduct;