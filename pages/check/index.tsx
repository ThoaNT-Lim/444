import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
import Link from "next/link";
import axios from "axios"
export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage() {
  // console.log('posts', posts)

  const handlClick = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?&components=postal_code:534679|country:SG&key=AIzaSyAhgSNni858fzcgZ6ipBvnsfm8izTf2HxI')
      .then(res => {
      console.log(res, 'res')
      }).catch(error => {
      console.log(error)
    })
  }

  return <div>
    <button onClick={handlClick}>onClick</button>
    </div>
}


