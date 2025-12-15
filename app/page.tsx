import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-10">
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
            <Image
              className="object-cover"
              src="/kyla.png"
              alt="Headshot"
              fill
              priority
            />
          </div>
          <h1 className="text-3xl font-bold">Kyla Ma</h1>
        </div>
        <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p>
            Hi! My name is Kyla, and I am a second-year Computer Science major
            at UCSD!
            <br />I am also a CSES Developer for Runway Avenue. In my free time,
            I like to:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2">
            <li>Sing 🎤</li>
            <li>Play instruments 🎸</li>
            <li>Cook 🍳👩‍🍳</li>
            <li>Workout 🏋️‍♀️</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
