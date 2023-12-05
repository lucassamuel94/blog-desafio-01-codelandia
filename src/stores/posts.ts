import { original, produce } from 'immer'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { PostType } from '../@types/post'
import { initialPosts } from '../data/initial-posts'


type PostStoreProps = {
  posts: Array<PostType>,
  searchTerm: string,
  handleSearchTerm: (search: string | undefined) => void
  handleFavorite: (post: PostType) => void
}

export const usePostsStore = create(
  persist<PostStoreProps>(
    (set) => (
      {
        posts: [...initialPosts],
        searchTerm: '',
        handleSearchTerm: (search) => {
          set(() => ({searchTerm: search}))
        },
        handleFavorite: (post: PostType) =>
          set(
            produce((state: PostStoreProps) => {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              const index = original(state.posts)!.findIndex(
                (e) => e.id === post.id
              )
  
              if (index > -1) {
                state.posts[index].isFavorite = !state.posts[index].isFavorite
              }
            })
          ),
      } 
    ),
    {
      name: 'posts-storage',
      storage: createJSONStorage(() => localStorage)
    }
  ),
)