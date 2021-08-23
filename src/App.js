import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import fetchOKR from './actions/Action.ts';
import OkrListComponent from './components/OkrListComponent.tsx';
import { filterOKRs } from './utils/utils';
import loader from './assets/loader.gif';

class OkrApp extends PureComponent {
  constructor (props) {
    super(props);
    this.state = { okrList: [], okrCategories: [], filteredOkrlist: [] };
  }

  changeCategory = event => {
    const { okrList, okrCategories } = this.state;

    if (!okrCategories.includes(event.target.value)) {
      this.setState({ filteredOkrlist: okrList });
    } else {
      this.setState({
        filteredOkrlist: filterOKRs(okrList, event.target.value),
      });
    }
  };

  renderHeader = okrCategories => {
    return (
      <React.Fragment>
        <div className='header'>
          <header>
            <h3>OKR List</h3>
          </header>
          <select onChange={this.changeCategory} defaultValue={'all'}>
            <option key='all' value={'all'}>
              All
            </option>
            {(okrCategories || []).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </React.Fragment>
    );
  };

  renderLoader = () => <img src={loader} alt='' className='loader' />;

  static getDerivedStateFromProps (props, state) {
    if (
      props.okrList.length !== state.okrList.length ||
      props.okrCategories.length !== state.okrCategories.length
    ) {
      return {
        okrList: props.okrList,
        okrCategories: props.okrCategories,
        filteredOkrlist: props.okrList,
      };
    }
    return state;
  }

  componentDidMount () {
    this.props.fetchOKR();
  }

  render () {
    const { filteredOkrlist, okrCategories } = this.state;
    return (
      <React.Fragment>
        {filteredOkrlist.length > 0 ? (
          <div className='pageLayout'>
            {this.renderHeader(okrCategories)}
            <OkrListComponent okrList={filteredOkrlist} />
          </div>
        ) : (
          this.renderLoader()
        )}
      </React.Fragment>
    );
  }
}

OkrApp.propTypes = {
  okrList: PropTypes.array,
  okrCategories: PropTypes.array,
};

function mapStateToProps (state) {
  return {
    okrList: state.okrList.responseArray || [],
    okrCategories: state.okrList.categories || [],
  };
}

export default connect(mapStateToProps, { fetchOKR })(OkrApp);
