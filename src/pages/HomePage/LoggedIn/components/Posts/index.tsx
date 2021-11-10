import PostItem from './PostItem'
import { useEffect } from 'react'

export const Posts = (): JSX.Element => {
  return (
    <div className='posts'>
      <PostItem
        voteVisible={false}
        space='s/ComputerScience'
        poster='u/MrRobot'
        postTime='9 hours ago'
        postTitle='How do I get an Internship at FAANG during senior year?'
        commentsNo={1}
      />
      <PostItem
        voteVisible={true}
        votesNo='2.4k'
        space='s/ComputerScience'
        poster='u/MrRobot'
        postTime='9 hours ago'
        postTitle='What is the world’s largest wordlist for a dictionary attack?'
        postText='I’m trying to perform SSH-bruteforcing against a corporate server whereby all conventional dictionaries (rockyou.txt, CrackStation, etc.) have failed. Can anyone suggest a bigger dictionary please?'
        commentsNo={7}
      />
      <PostItem
        voteVisible={true}
        votesNo='2.4k'
        space='s/ComputerScience'
        poster='u/MrRobot'
        postTime='9 hours ago'
        postTitle='What is the world’s largest wordlist for a dictionary attack?'
        postText='Like the title guys.'
        images={['']}
        commentsNo={24}
      />
      <PostItem
        voteVisible={true}
        votesNo='2.4k'
        space='s/ComputerScience'
        poster='u/MrRobot'
        postTime='9 hours ago'
        postTitle='What is the world’s largest wordlist for a dictionary attack?'
        postText='I’m trying to perform SSH-bruteforcing against a corporate server whereby all conventional dictionaries (rockyou.txt, CrackStation, etc.) have failed. Can anyone suggest a bigger dictionary please?'
        commentsNo={7}
      />
    </div>
  )
}
