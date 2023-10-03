'use client'

import Image from 'next/image'
import React, { memo, useState } from 'react'


function CustomImage({src, className, sizes, alt , whileHover, transition}) {
    const [isLoading, setLoading] = useState(true);
    return (
      <div>
        <Image
                  src={src}
                  alt={alt}
                  layout="responsive"
                  priority
                  whileHover={whileHover}
                  transition={transition}
                  className={`${className}
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
