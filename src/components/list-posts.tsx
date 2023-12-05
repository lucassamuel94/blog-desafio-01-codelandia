import { useEffect, useState } from "react"
import { PostType } from "../@types/post"
import { usePostsStore } from "../stores/posts"
import { Post } from "./post"

export const ListPosts = () => {
  const { posts, searchTerm } = usePostsStore()
  const [currentPosts, setCurrentPosts] = useState<PostType[]>([])


  useEffect(() => {
    if (searchTerm === '') {
      setCurrentPosts(posts)
    } else if (typeof searchTerm === 'string') {
      const postsToSearch = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

      setCurrentPosts(postsToSearch)
    }
  }, [searchTerm, posts])

  return (
    <ul className="container py-12 md:py-14 lg:py-20 space-y-10">
      {
        currentPosts.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="text-center text-xl md:text-2xl font-bold text-dark-30">Nenhum resultado encontrado</p>
          </div>
        )
      }

      {
        currentPosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </ul>
  )
}