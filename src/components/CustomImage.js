'use client'

import Image from 'next/image'
import React, { memo, useState } from 'react'
import profilePic from '../../public/images/profile/home-img.jpg'


function CustomImage({src, sizes, alt}) {
    const [isLoading, setLoading] = useState(true);
    return (
      <div>
        <Image
                  src={src}
                  alt={alt}
                  layout="responsive"
                  priority
                  className={`
                  object-cover
                  group-hover:opacity-75
                  duration-700
                  ease-in-out
                  group-hover:scale-110
                  ${isLoading ? 'grayscale blur-2xl scale-110' :
                  'grayscale-0 blur-0 scale-100'}
                  `}
                  sizes={sizes}
                  onLoadingComplete={() => setLoading(false)}
             />
      </div>
    )
  }

export default memo(CustomImage);
