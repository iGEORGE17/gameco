import { useState } from "react";
import { Form, FormGroup, Input, Button, Label, Container } from "reactstrap";
import '../App.css'

const FilterForm = () => {
    const [values, setValues] = useState();


    // const handleChange(e) => {

    // }

    const onSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <Container>
      <h1 id="formTitle">Filter Results</h1>
      <hr />
      <Form inline onSubmit={onSubmit}>
        <FormGroup>
            <Label for="searchname">Name</Label>
          <Input
            id="searchInput"
            name=""
            placeholder="search name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            {
               
            }
          </Input>
        </FormGroup>
        <Button type="submit" id="clearBtn">Clear</Button>
      </Form>
    </Container>
  );
};

export default FilterForm;
