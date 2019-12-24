import React, { Component } from 'react';
import ShopList from "./components/ShopList"
import SearchHeader from "./components/SearchHeader"
import KeywordBox from "./components/KeywordBox"
import Banner from "../../components/Banner"

class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch}/>
        <KeywordBox text="text"/>
        <Banner dark />
        <ShopList/>
      </div>
    );
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  handleSearch = () => {
    this.props.history.push('/search')
  }
}

export default SearchResult;