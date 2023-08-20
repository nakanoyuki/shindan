import React from 'react'
import QuestionListStatic from '@/components/QuestionListStatic'

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <main className="flex flex-1 justfy-center">{children}</main>
    </section>
  )
}
