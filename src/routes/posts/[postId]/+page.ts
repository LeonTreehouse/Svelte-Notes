
// @ts-ignore
export const load = ({ params, etch}) => {

    const fetchPost = async (id: number) => {
        const res = await fetch(`/api/posts/${id}`)
        const data = await res.json()
        return data
    }

    return {
        post: fetchPost(params.postId)
    }
}