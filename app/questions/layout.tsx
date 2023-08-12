import React from 'react'
import QuestionListStatic from '@/components/QuestionListStatic'

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200 p-2`}>
        <QuestionListStatic />
      </aside>
      <main className="flex flex-1 justfy-center">{children}</main>
    </section>
  )
}
