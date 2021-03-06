import { connect } from 'react-redux';
import { increment, doubleAsync } from '../modules/counter';

import Counter from 'components/Counter';

const mapDispatchtoProps = {
  onIncrement: () => increment(1),
  onDoubleAsync: doubleAsync,
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Counter);
