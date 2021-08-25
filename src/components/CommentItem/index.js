import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentsList, changeLike, deleteComment} = props
  const {id, name, comment, liked} = commentsList
  const initial = name[0]

  const onClickLike = () => {
    changeLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  const likeImage = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-container">
      <div className="name-container">
        <div className="blue round">{initial.toUpperCase()}</div>
        <div className="name-comment">
          <div className="time">
            <h1 className="name">{name}</h1>
            <p className="show-time">{formatDistanceToNow(new Date())} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-container">
        <button className="like-button" type="button" onClick={onClickLike}>
          <img src={likeImage} alt="like" className="like-image" />
          {liked ? (
            <p className="blue-like">Like</p>
          ) : (
            <p className="like">Like</p>
          )}
        </button>
        <button
          className="delete-button"
          onClick={onClickDelete}
          testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="line-1" />
    </li>
  )
}

export default CommentItem
