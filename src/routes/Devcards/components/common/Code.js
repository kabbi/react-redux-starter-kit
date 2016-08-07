import React, { Component, PropTypes } from 'react';
import AceEditor from 'react-ace';

import 'brace/theme/chrome';
import 'brace/mode/javascript';
import 'brace/mode/json';

import { randomId } from 'utils/random';

import classes from './Code.scss';

class Code extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    mode: PropTypes.string,
  };

  static defaultProps = {
    mode: 'javascript',
  };

  componentWillMount() {
    this.id = randomId();
  }

  render() {
    const { code, mode } = this.props;
    return (
      <AceEditor
        readOnly
        name={this.id}
        mode={mode}
        value={code}
        showGutter={false}
        showPrintMargin={false}
        highlightActiveLine={false}
        className={classes.aceNoSelect}
        theme="chrome"
        width="100%"
        tabSize={2}
        minLines={1} maxLines={Infinity}
        editorProps={{
          $blockScrolling: true,
        }}
      />
    );
  }
}

export default Code;
