import React, { useState } from 'react';
import Post from '../../components/Posts/Post';

const PostsPage = () => {
    const ANAKIN_IMAGE = 'https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg'
  const RAY_IMAGE = 'https://www.slashfilm.com/img/gallery/can-the-return-of-rey-redeem-the-sins-of-star-wars-the-rise-of-skywalker/intro-1680978833.webp'
    const [author, setAuthor] = useState([
            {
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
            content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image:RAY_IMAGE,
            date: "26 лют."
            },
            {
                name: "Rai Skywalker",
                photo: RAY_IMAGE,
                nickname: "@new__skywalker",
                content:"...?",
                image:ANAKIN_IMAGE,
                date: "26 лют."
                },
    ])
    return (
        <div className='postsPage'>
            {author.map((author, name)=>
            <Post author={author} key={name}/>
                )}
        </div>
    );
};

export default PostsPage;