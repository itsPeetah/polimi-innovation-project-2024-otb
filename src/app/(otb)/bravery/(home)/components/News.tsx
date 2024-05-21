import { mock_news } from "@/data/news";
import User from "@/lib/user";
import getImageSrc from "@/lib/utils/getImageSrc";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
}

export default function News({ user }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 my-4 overflow-hidden">
      <h2 className="font-bold uppercase text-sm mx-4 text-zinc-500">
        Your {user.level} news
      </h2>
      <div className="w-full flex flex-row gap-4 px-4 py-4 | overflow-auto">
        {mock_news.map((n) => {
          return (
            <NewsCard
              key={`newscard ${n.title}`}
              text={n.title}
              imgSrc={n.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

function NewsCard(props: { text: string; imgSrc: string }) {
  return (
    <div className="flex-shrink-0 rounded-xl shadow-md">
      <Image
        src={getImageSrc(props.imgSrc)}
        alt={props.text}
        className="w-[200px] h-[100px] bg-zinc-200 rounded-t-xl object-cover"
        width={200}
        height={100}
      />
      <div className="w-[200px] h-[50px] | p-2 text-sm | bg-zinc-100 rounded-b-xl">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}
