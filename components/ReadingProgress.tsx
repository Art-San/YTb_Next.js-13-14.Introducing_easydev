'use client'
import { Progress } from 'antd'
import useReadingProgress from '@/hooks/useReadingProgress'

const ReadingProgress = () => {
  const percentage = useReadingProgress()

  return (
    <div className="fixed w-full top-[53px]">
      <Progress percent={percentage} showInfo={false} strokeColor="#7b87f0" />
    </div>
  )
}

export default ReadingProgress

// 'use client'
// import { Progress } from 'antd'
// import { useState, useEffect } from 'react'

// const ReadingProgress = () => {
//   const [percentage, setPercentage] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop
//       const docHeight = document.documentElement.offsetHeight
//       const winHeight = window.innerHeight
//       const scrolled = (scrollTop / (docHeight - winHeight)) * 100
//       setPercentage(scrolled)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className="fixed w-full top-[53px]">
//       <Progress percent={percentage} showInfo={false} strokeColor="#7b87f0" />
//     </div>
//   )
// }

// export default ReadingProgress
