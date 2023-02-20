import Emoji from 'components/Emoji';
import Header from 'components/Header';

export default function Home() {
  return (
    <div className="overflow-visible">
      <Header />
      <main className="container space-y-6 py-16 px-4 w-full border text-neutral-900 overflow-visible">
        <div className="flex-block w-full">
          <p className="text-[4em]">
            <Emoji label="hand wave" symbol="👋" />
          </p>
          <h1 className=" tracking-tight">Jacob for Notion</h1>
        </div>
        {/* <div className="w-full border space-y-2">
          <p className="button-primary py-2 align-middle text-center rounded-md w-full">
            Email Jake
          </p> */}
        {/* <p className="button-secondary py-2 align-middle text-center rounded-md w-full">
            Not right now
          </p> */}
        {/* </div> */}
        {/* <p>Too early? Let me introduce myself</p> */}
        <h2>I'm Jake</h2>
        <div className="space-y-2">
          <p>I believe in...</p>
          <ul className="list-disc list-inside indent-2">
            <li>first principles</li>
            <li>trying my best</li>
            <li>being a forever student</li>
            <li>discipline &gt; motivation</li>
            <li className="">
              joy and curiosity as the most efficient sources of creativity
            </li>
          </ul>
        </div>
        <p>
          I'm a mid-level Product Designer leading shopping Experiences at
          within the app at Zip. I'm currently based in Brooklyn, NY. My dream
          is “make it” as a professional musician but have been enjoying the 5+
          year journery design has simultaneously taken me on.
        </p>
        <p>Let's talk about that!</p>
        <div className="flex-row flex space-x-4 overflow-x-scroll overflow-visible">
          <div className="p-2 rounded-lg bg-[#F6FAFC] space-y-2 relative w-full min-w-[90%]">
            <div className="flex space-x-2 w-full items-center">
              <p className="font-semibold small px-1 rounded-md text-[#1F3245] bg-[#D6E4EE]">
                Currently
              </p>
              <p className="small text-[#7DA3C2]">6</p>
            </div>
            <div className="space-y-1">
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="💜" />
                </p>
                <h4 className="text-base font-medium">
                  Leading shopping experiences in the app at{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Zip
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="⏰" />
                </p>
                <h4 className="text-base font-medium">
                  Practicing waking up at 5:30
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="🎵" />
                </p>
                <h4 className="text-base font-medium">
                  Publishing music as{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Jacob’s Blue
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="📚" />
                </p>
                <h4 className="text-base font-medium">
                  Reading {''}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Musashi
                  </a>
                  ,{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    The Timeless way of Building
                  </a>
                  , and now some articles about{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Douglas Engelbart
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="🐣" />
                </p>
                <h4 className="text-base font-medium">
                  Using relational databases in Notion to plan for my first
                  little one!
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="💪" />
                </p>
                <h4 className="text-base font-medium">
                  Working out{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    dailyish
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-[#F6FAFC] space-y-2 relative w-full min-w-full">
            <div className="flex space-x-2 w-full items-center">
              <p className="font-semibold small px-1 rounded-md text-[#1F3245] bg-[#D6E4EE]">
                Currently
              </p>
              <p className="small text-[#7DA3C2]">6</p>
            </div>
            <div className="space-y-1">
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="💜" />
                </p>
                <h4 className="text-base font-medium">
                  Leading shopping experiences in the app at{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Zip
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="⏰" />
                </p>
                <h4 className="text-base font-medium">
                  Practicing waking up at 5:30
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="🎵" />
                </p>
                <h4 className="text-base font-medium">
                  Publishing music as{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Jacob’s Blue
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="📚" />
                </p>
                <h4 className="text-base font-medium">
                  Reading {''}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Musashi
                  </a>
                  ,{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    The Timeless way of Building
                  </a>
                  , and now some articles about{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    Douglas Engelbart
                  </a>
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="🐣" />
                </p>
                <h4 className="text-base font-medium">
                  Using relational databases in Notion to plan for my first
                  little one!
                </h4>
              </div>
              <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                <p>
                  <Emoji symbol="💪" />
                </p>
                <h4 className="text-base font-medium">
                  Working out{' '}
                  <a className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer">
                    dailyish
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
