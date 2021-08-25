import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeText = event => {
    this.setState({comment: event.target.value})
  }

  changeLike = Id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachCommentList => {
        if (Id === eachCommentList.id) {
          return {...eachCommentList, liked: !eachCommentList.liked}
        }
        return eachCommentList
      }),
    }))
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      liked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = commentId => {
    const {commentList} = this.state
    const filterComment = commentList.filter(
      eachFilter => commentId !== eachFilter.id,
    )
    this.setState({commentList: filterComment})
  }

  render() {
    const {commentList, name, comment} = this.state
    const count = commentList.length
    return (
      <div className="main-container">
        <div className="comments-container">
          <div className="bottom-container">
            <h1 className="comment-heading">Comments</h1>
            <form className="form-control" onSubmit={this.onSubmitComment}>
              <p className="label">Say Something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                className="input-name"
                placeholder="Your Name"
                id="ib"
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="45"
                className="text"
                value={comment}
                placeholder="Your Comment"
                onChange={this.onChangeText}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="comment-box-show">
          <div className="num">{count}</div>
          <p>Comments</p>
        </div>
        <ul className="comment-list">
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              commentsList={each}
              changeLike={this.changeLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
