var Comments = (props) => (
  <div className="commentViewer">
    {props.comments.map(comment => (<CommentEntry state={props.state} key={comment.id} text={comment.textDisplay}/>)
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Comments.propTypes = {
  comment: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Comments = Comments;
