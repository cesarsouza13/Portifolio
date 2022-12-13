

import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {Route, Routes, useParams} from 'react-router-dom'
import PostModelo from '../../components/PostModelo';
import posts from '../../json/posts.json';
import  './Post.css'
import NaoEncontrada from '../NaoEncontrada';
import PaginaPadrao from '../../components/PaginaPadrao';


export default function Post() {

    const param = useParams();
    const post = posts.find((post)=>{
        return post.id === Number(param.id);
    })

    if(!post){
        return <NaoEncontrada></NaoEncontrada>
    }
  return (
    <Routes>
        <Route path='*' element={<PaginaPadrao/>}>
            <Route index element={
                <PostModelo fotoCapa={`../../../public/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                </PostModelo>
                }/>
        </Route>
    </Routes>
   
  )
}
