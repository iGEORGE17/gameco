import { FormGroup, Input, Label } from "reactstrap";
import "../App.css";

export const TextInput = ({ onChange }) => {
  return (
    <FormGroup>
      <Label for="searchname">Name</Label>
      <Input
        id="searchInput"
        name="searchInput"
        placeholder="Search..."
        type="text"
        onChange={onChange}
      />
    </FormGroup>
  );
};

export const SortInput = ({onChange}) => {
  return (
    <FormGroup>
      <Label for="exampleSelect">Sort By</Label>
      <Input id="exampleSelect" name="select" type="select" onChange={onChange}>
        <option value=""></option>
        <option value="Release Date">Release Date</option>
        <option value="Rating">Rating</option>
      </Input>
    </FormGroup>
  );
};
