'use client'

import { useEffect, useState } from 'react'

export default function TextOverlay() {
  const [visible, setVisible] = useState(false)
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    'أنا لو اتحفظت غلط...',
    'هتأكسد وهبقى وحشة',
    'وهتعب معدتك جداً',
    'فاحفظني بشكل صح',
    'علشان مبقاش سامة ليك!',
  ]

  useEffect(() => {
    setTimeout(() => setVisible(true), 2000)

    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '600px',
        zIndex: 10,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.75)',
          padding: '25px 35px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 215, 0, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <p
          key={currentText}
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#FFE135',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            animation: 'fadeIn 0.8s ease-in-out',
            minHeight: '40px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          {texts[currentText]}
        </p>
      </div>

      <div
        style={{
          marginTop: '20px',
          background: 'rgba(255, 255, 255, 0.15)',
          padding: '15px 25px',
          borderRadius: '15px',
          backdropFilter: 'blur(5px)',
        }}
      >
        <p
          style={{
            fontSize: '16px',
            color: '#ffffff',
            margin: 0,
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          💡 <strong>نصيحة:</strong> احفظ الموز في درجة حرارة الغرفة بعيداً عن الشمس
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
