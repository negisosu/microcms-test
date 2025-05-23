import Image from "next/image";
import { client } from "./client";

export default async function Home() {

  const data = await client.get({
    endpoint: "posts",
    queries: {orders: '-createdAt'}
  })

  console.log(data.contents)

  return (
    <main>
      {
        data.contents.map((post) => {
          console.log(post.image.url)
          return<div key={post.id} >
            <div dangerouslySetInnerHTML={{__html: post.body}}>
          </div>
          {
          //画像を外部URLから読み込んでくる時configで許可的に感じのやつを出さなきゃいけないっぽい
          }
          <Image
          src={post.image.url}
          alt=""
          width={100}
          height={100}
          priority={true}
          />
          </div>
        })
      }
    </main>
  );
}
