import { PostType } from "../@types/post"
import { usePostsStore } from "../stores/posts"
import { IconHeart } from "./icons/icon-heart"
import { IconHeartActive } from "./icons/icon-heart-active"

export const Post = ({ post }: { post: PostType }) => {
  const { handleFavorite } = usePostsStore()

  return (
    <div className="py-8 px-6 md:p-10 rounded-lg border-2 border-dark-30 hover:border-brand">
      <div className="flex items-center justify-between">
        <span className="text-sm text-brand">{post.date}</span>

        {post.isFavorite &&
          <button onClick={() => handleFavorite(post)}>
            <IconHeartActive className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        }

        {post.isFavorite === false &&
          <button onClick={() => handleFavorite(post)}>
            <IconHeart className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        }
      </div>

      <div className="mt-5 space-y-4">
        <h2 className="text-xl lg:text-2xl">{post.title}</h2>
        <p className="text-dark-50 text-sm md:text-base lg:text-xl">{post.description}</p>
      </div>
    </div>
  )
}