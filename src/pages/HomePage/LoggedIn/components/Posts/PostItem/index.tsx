import PostImage from '../../../../../../core/media/sample-post-image.png'
import ComputerScience from '../../../../../../core/media/icons/spaces/computer-science.png'
import { useHistory } from 'react-router-dom'
import { FaRegCommentAlt } from '@react-icons/all-files/fa/FaRegCommentAlt'
import { FaShare } from '@react-icons/all-files/fa/FaShare'
import { IconButton, Button } from '@mui/material'
import { useState, useEffect } from 'react'
import { useStyles } from './style'

interface Props {
  voteVisible: boolean
  votesNo?: string
  space: string
  poster: string
  postTime: string
  postTitle: string
  postText?: string
  images?: Array<string>
  commentsNo: number
}

const PostItem = (props: Props): JSX.Element => {
  const { voteVisible, votesNo, space, poster, postTime, postTitle, postText, images, commentsNo } = props
  const history = useHistory()
  const classes = useStyles()
  const [voteStatus, setVoteStatus] = useState('')
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    if (images != undefined && images.length != 0) {
      setCurrentImage(1)
    }

  }, [])
  const handleUpvote = () => {
    if (voteStatus != 'upvoted') setVoteStatus('upvoted')
    else setVoteStatus('')
  }
  const handleDownvote = () => {
    if (voteStatus != 'downvoted') setVoteStatus('downvoted')
    else setVoteStatus('')
  }
  return (
    <div className={classes['post-item']}>
      <div className='left-col'>
        <IconButton className='upvote-button' onClick={handleUpvote}>
          <i className={`fas fa-arrow-up upvote-icon ${voteStatus == 'upvoted' ? 'active' : ''}`} />
        </IconButton>
        <div className='number-of-votes'>{!voteVisible ? 'VOTE' : votesNo}</div>
        <IconButton className='downvote-button' onClick={handleDownvote}>
          <i className={`fas fa-arrow-down downvote-icon ${voteStatus == 'downvoted' ? 'active' : ''}`} />
        </IconButton>
      </div>
      <div className='content'>
        <div className='post-details'>
          <div className='space-icon-container'>
            <img src={ComputerScience} className='space-icon' />
          </div>
          <div className='space-name'>
            <a href={document.location.origin.concat(`/${space}`)}>{space}</a>
          </div>
          <div className='interpunct'>&nbsp;·&nbsp;</div>
          <div className='posted-by'>
            Posted by{' '}
            <a href={document.location.origin.concat(`/${poster}`)}>{poster}</a>
            &nbsp;
          </div>
          <div className='post-time'>{postTime}</div>
        </div>
        <div className='post-title'>{postTitle}</div>
        {
          (postText != '' && postText != undefined) || (currentImage != 0) ?
            <div className='post-content'>
              {
                postText != '' && postText != undefined ?
                  <div className='post-text'>{postText}</div>
                  :
                  <></>
              }
              {
                currentImage != 0 ?
                  <div className='image-container'>
                    {/* <img src={images[currentImage]} /> */}
                    <img src={PostImage} />
                  </div>
                  :
                  <></>
              }
            </div>
            :
            <></>
        }
        <div className='bottom-section'>
          <div className='comments'>
            <FaRegCommentAlt className='comment-icon' />
            <div className='number-of-comments'>
              {commentsNo == 0
                ? 'Comment'
                : commentsNo == 1
                  ? '1 Comment'
                  : `${commentsNo} Comments`}
            </div>
          </div>
          <div className='share'>
            <FaShare className='fa-share' />
            <div className='share-text'>Share</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
