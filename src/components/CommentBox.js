import React from 'react';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;