export default function ScreenShell({ children, className = '', bg = 'var(--color-canvas)' }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col" style={{ background: bg }}>
      <div
        className={`flex flex-1 flex-col ${className}`}
        style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {children}
      </div>
    </div>
  )
}
