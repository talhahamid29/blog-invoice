"use client"
import React from 'react'
import { useRouter } from 'next/router'

const SlugPage = () => {
    
    const router = useRouter()
    const {slug} = router.query

    console.log(slug)
  return (
    <div>
      
    </div>
  )
}

export default SlugPage
