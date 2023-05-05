import React from "react";
import { UserCardImage } from "@/components/user-card";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-5 bg-white'>
      <h1 className='text-xl text-red-700'>Welcome</h1>
      <div className='w-80'>
        <UserCardImage
          job='Designer'
          name='Lara'
          stats={[
            {
              label: "followers",
              value: "300k",
            },
            {
              label: "follows",
              value: "187",
            },
            {
              label: "posts",
              value: "1.6K",
            },
          ]}
          avatar='https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg'
          image='https://picsum.photos/seed/picsum/200/300'
        />
      </div>
    </div>
  );
}
