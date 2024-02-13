import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  // console.log('pathname', pathname)
  // console.log('searchParams', searchParams)
  useEffect(() => {
    console.log('useEffect')
    const updateScrollCompletion = () => {
      console.log('updateScrollCompletion')
      const actualPosition = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const percentage = (actualPosition / scrollHeight) * 100

      setCompletion(percentage)
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => window.removeEventListener('scroll', updateScrollCompletion) // нужна для того чтоб после раз монтировки компонента удаляла слушателя
  }, [pathname, searchParams])

  return completion
}

export default useReadingProgress

// import { useState, useEffect } from 'react'

// function useReadingProgress() {
//   const [percentage, setPercentage] = useState(0)

//   useEffect(() => {
//     console.log('useEffect')
//     const handleScroll = () => {
//       console.log('updateScrollCompletion')
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop
//       const docHeight = document.documentElement.offsetHeight
//       const winHeight = window.innerHeight
//       const scrolled = (scrollTop / (docHeight - winHeight)) * 100
//       setPercentage(scrolled)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return percentage
// }

// export default useReadingProgress
