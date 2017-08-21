import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input />
                <button>Search</button>
            </form>
        )
    }
};

function mapStateToProps(state) {
    return {};
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
