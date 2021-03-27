import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="saerch-bar ui segment">
        <form
          className="ui form"
          onSubmit={(e) => {
            this.props.handleSubmit(e, this.state.term);
          }}
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search. . ."
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
