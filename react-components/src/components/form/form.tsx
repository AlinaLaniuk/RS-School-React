import { Component } from 'react';
import Checkbox from './inputs/checkbox';
import DateInput from './inputs/dateInput';
import FileUploader from './inputs/fileUploader';
import Select from './inputs/select';
import Switcher from './inputs/switcher';
import TextInput from './inputs/textInput';

class Form extends Component<unknown> {
  constructor(props: unknown) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <TextInput />
        <DateInput />
        <Switcher />
        <Select />
        <Checkbox />
        <FileUploader />
      </form>
    );
  }
}

export default Form;
