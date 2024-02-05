// // Настрочил GPT окно нормально закрываться
// 'use client'
// import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
// import { useRouter } from 'next/navigation'

// export default function Modal({
//   children,
//   onClose
// }: {
//   children: React.ReactNode
//   onClose?: () => void
// }) {
//   const overlay = useRef<HTMLDivElement | null>(null)
//   const wrapper = useRef<HTMLDivElement | null>(null)
//   const router = useRouter()

//   const onDismiss = useCallback(() => {
//     if (onClose) onClose()
//     else router.back()
//   }, [router, onClose])

//   const onClick: MouseEventHandler = useCallback(
//     (e) => {
//       if (
//         e.currentTarget === overlay.current ||
//         e.currentTarget === wrapper.current
//       ) {
//         onDismiss()
//       }
//     },
//     [onDismiss, overlay, wrapper]
//   )

//   const onKeyDown = useCallback(
//     (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onDismiss()
//     },
//     [onDismiss]
//   )

//   useEffect(() => {
//     document.addEventListener('keydown', onKeyDown)
//     return () => document.removeEventListener('keydown', onKeyDown)
//   }, [onKeyDown])

//   return (
//     <div
//       className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50"
//       ref={overlay}
//       onClick={onClick}
//     >
//       <div
//         ref={wrapper}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12"
//       >
//         {children}
//       </div>
//     </div>
//   )
// }

'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      console.log('eeeeee', e.target)
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onkeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener('keydown', onkeyDown)
    return () => document.removeEventListener('keydown', onkeyDown)
  }, [onkeyDown])

  return (
    <div
      className=" fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50"
      ref={overlay}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-[30%] sm:w-10/12 md:w-8/12"
      >
        {children}
      </div>
    </div>
  )
}
