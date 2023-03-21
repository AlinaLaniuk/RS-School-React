import { Component } from 'react';
import { InputState } from '../../../types';

class FileUploader extends Component<unknown, InputState> {
  constructor(props: unknown) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;
    return (
      <label className="file-uploader-label" htmlFor="file-uploader-input">
        Add picture with cute cat:
        <input
          className="file-uploader-input"
          id="file-uploader-input"
          type="file"
          value={value}
          placeholder="fff"
        />
      </label>
    );
  }
}

export default FileUploader;
