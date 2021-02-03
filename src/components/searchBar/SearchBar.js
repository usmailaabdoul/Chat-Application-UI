import React from 'react';
import { connect } from 'react-redux';
import { Search } from 'react-bootstrap-icons';

import './SearchBar.css'

export const SearchBar = (props) => {
  const {value, onChange, placeholder} = props;

  return (
    <div className="mainSearchBar">
      <Search style={{marginRight: '10px'}} size={18} color="#bbb" />
      <input className="mainSearchBar__input" type="text" onChange={(e) => onChange(e.target.value)} value={value} placeholder={placeholder} />
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
