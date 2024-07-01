import { useState } from 'react';

import './userPost.css';

const CreatePost = ({ post = [] }) => {
    return (
        <>
            {post.map((post_info, index) => (
                <div className='UserPost__mainContainer'>
                    <div className='UserPost__Content__Upper'>
                        <img src={post_info.user_icon} className='UserPost__Content__Upper__icon'></img>
                        <div className='UserPost__Content__Upper__NameTime'>
                            <h3 className='UserPost__Content__Upper__NameTime__Name'>{post_info.name}</h3>
                            <h3 className='UserPost__Content__Upper__NameTime__Time'>{post_info.time}</h3>
                        </div>
                    </div>
                    <div className='UserPost__Content__description__content'>
                        <h3 className='UserPost__Content__description__text'>
                            {post_info.description}
                        </h3>
                        <a className='UserPost__Content__description__seemore'>See more</a>
                    </div>
                    <div className='UserPost__Content__image__container'>
                        <img src={post_info.main_image} className='UserPost__Content__image'></img>
                    </div>
                    <div className='UserPost__Content__Liked__container'>
                        <img src="./../../public/images/liked.png" className='UserPost__Content__Liked'></img>
                        <h3 className='UserPost__Content__Liked__count'>{post_info.liked}K Like</h3>
                    </div>
                </div>
            ))}
        </>
    );
}

export default function UserPosts() {
    const [posts, setPosts] = useState([
        {
            user_icon: "./../../public/images/faces/person1.jpg",
            name: "Surfiya Zakir",
            time: "22 min ago",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ",
            main_image: "./../../public/images/back/space.jpg",
            liked: "30"
        }
    ]);

    return (
        <>
            <CreatePost post={posts} />
        </>
    );
}