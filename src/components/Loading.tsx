import { useEffect } from 'react'
import React from 'react'

export const Loading: React.FC = () => {
  useEffect(() => {
    const circle1 = document.getElementById('circle1')
    const circle2 = document.getElementById('circle2')

    const animateCircle = (circle, delay) => {
      const animation = circle.children
      animation[0].begin = `${delay}s`
      animation[1].begin = `${delay}s`
      circle.style.animationDelay = `-${delay}s`
    }

    animateCircle(circle1, 0)
    animateCircle(circle2, 0.5)
  }, [])

  return (
    <div className="bg-[rgba(0,0,0,0.9)] z-50 top-0 left-0 fixed h-screen w-screen flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
          animationPlayState: 'running',
          animationDelay: '0s',
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          id="circle1"
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#85a2b6"
          strokeWidth="2"
          style={{
            animationPlayState: 'running',
            animationDelay: '1s',
          }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
          />
        </circle>
        <circle
          id="circle2"
          cx="50"
          cy="50"
          r="0"
          fill="none"
          stroke="#bbcedd"
          strokeWidth="2"
          style={{
            animationPlayState: 'running',
            animationDelay: '0s',
          }}
        >
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1s"
            values="0;40"
            keyTimes="0;1"
            keySplines="0 0.9 0.2 1"
            calcMode="spline"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="1s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
          />
        </circle>
      </svg>
    </div>
  )
}
