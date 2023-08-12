import { Database } from "@/database.types"

type Questions = Database['public']['Tables']['questions']['Row']

export const fetchQuestion = async (index: number) :Promise<Questions | undefined>=> {
  const res = await fetch(
    `${process.env.url}/rest/v1/questions?&select=*`,
    {
      headers: new Headers({
        apikey: process.env.apikey as string,
      }),
      cache: 'force-cache',
    }
  )
  const questions: Questions[] = await res.json()
  return questions[index]
}