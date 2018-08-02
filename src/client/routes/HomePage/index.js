import React from 'react';

import { fetchBlocks, fetchHomeTxs } from 'Actions';
import Blocks from './Blocks';
import Txs from './Txs';

class Home extends React.Component {
  componentDidMount() {
    window.store.dispatch(fetchBlocks());
    window.store.dispatch(fetchHomeTxs());
  }

  render() {
    return (
      <div className="HomePage container">
        <div className="row">
          <div className="col-6">
            <h4 className="p-3 m-0">LAST BLOCKS</h4>
            <Blocks/>
          </div>
          <div className="col-6">
            <h4 className="p-3 m-0">LAST TRANSACTIONS</h4>
            <Txs/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
