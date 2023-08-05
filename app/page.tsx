import Link from "next/link";
import TestStart from "@/components/TestStart/TestStart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <nav className="space-x-4">
          <Link
            href="/"
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            診断アプリ
          </Link>
        </nav>
       <TestStart />
      </div>
    </main>
  );
}
