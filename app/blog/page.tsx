import { PostList } from '../_components/PostList';
import { Links } from '../_components/Links';

export default function Page(){
    const posts = [
        {
            id: 1,
            slug:'post1',
            title: 'Post 1',
        },
        {
            id: 2,
            slug: 'post2',
            title: 'Post 2',
        },
        {
            id: 3,
            slug: 'post3',
            title: 'Post 3',
        },
    ]

    return (
        <>
        <Links />
        <PostList posts={posts}/>
        </>
    )
}