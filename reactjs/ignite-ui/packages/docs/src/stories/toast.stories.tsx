import type { Meta, StoryObj } from '@storybook/react'

import { Button, Toast, ToastProps } from '@ignite-ui/react'

import { useEffect, useRef, useState } from 'react'

function TestToast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function handleButtonClick() {
    setIsOpen(false)

    window.clearTimeout(timerRef.current)

    timerRef.current = window.setTimeout(() => setIsOpen(true), 100)
  }

  return (
    <>
      <Button onClick={handleButtonClick}>Agendar</Button>

      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </>
  )
}

export default {
  title: 'Form/Toast',
  component: TestToast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 04 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
