import Emoji from 'components/Emoji';
import Header from 'components/Header';
import IconText from 'components/IconText';
import Head from 'next/head';
import Image from 'next/image';
import { ReactFragment } from 'react';

export default function Home() {
  return (
    <div className="">
      <>
        <Head>
          <title>Jacob Medure for Notion</title>
        </Head>
      </>
      <Header />
      <main className="container space-y-6 py-16 px-4 w-full text-neutral-900 overflow-visible">
        <div className="flex-block w-full">
          <p className="text-[4em]">
            <Emoji label="hand wave" symbol="👋" />
          </p>
          <h1 className="tracking-tight">Jacob for Notion</h1>
        </div>
        <div className="flex-col columns col-span-2 py-2 space-y-6">
          <div className="flex space-x-4">
            <IconText src="users.svg" alt="users icon" text="Who" />
            <p className="w-full">Jacob (Jake) Medure</p>
          </div>
          <div className="flex space-x-4 items-start">
            <IconText src="text_left.svg" alt="textleft" text="Tagline" />
            <p className="w-full">A designer that can code</p>
          </div>
          <div className="flex space-x-4">
            <IconText src="text_left.svg" alt="textleft" text="Experience" />
            <p className="w-full">5+ years</p>
          </div>
          <div className="flex space-x-4 items-start">
            <IconText src="at.svg" alt="at symbol" text="Contact" />
            <p className="w-full">
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="mailto:jacob.medure@gmail.com"
              >
                jacob.medure@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <IconText src="link.svg" alt="link symbol" text="Recent work" />
            <p className="w-full">
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="https://jacobs.blue"
              >
                jacobs.blue
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <IconText src="link.svg" alt="link symbol" text="Old portfolio" />
            <p className="w-full">
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="https://design.jacobs.blue"
              >
                design.jacobs.blue
              </a>
            </p>
          </div>
          <div className="flex space-x-4 items-start">
            <IconText src="link.svg" alt="link symbol" text="LinkedIn" />
            <p className="w-full">
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="https://www.linkedin.com/in/jacob-medure/"
              >
                linkedin.com/in/jacob-medure/
              </a>
            </p>
          </div>
        </div>
        <div className="p-[.05em] rounded-2xl w-full bg-neutral-100"></div>
        <div className="flex space-x-4 items-start">
          <div className="p-3 mt-1 rounded-full overflow-clip drop-shadow-sm relative">
            <Image src="/jake.jpg" alt="jake" fill="fit" />
          </div>
          <div className="w-full flex-block space-y-2 pt-1">
            <div className="flex space-x-2 items-center">
              <p>
                <b>Jake</b>
              </p>
              <p className="text-[#9A9A97] small">5 hours ago</p>
            </div>
            <p>
              I spun this site up over the weekend when I heard Notion was
              hiring and specifically looking for product designers that could
              refine designs in the front end. I hope this is an adequate
              display. I used{' '}
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="https://nextjs.org"
              >
                Next.js
              </a>{' '}
              +{' '}
              <a
                className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
                href="https://tailwindcss.com"
              >
                Tailwind
              </a>
              . Thanks for stopping by!
            </p>
          </div>
        </div>
        <div className="p-[.05em] rounded-2xl w-full bg-neutral-100"></div>
        <h2>I&#39;m Jacob (or Jake)</h2>
        <p>
          I&#39;m a mid-level Product Designer leading end-to-end shopping
          experiences within the app, at{' '}
          <a
            className="text-blue-500 underline decoration-blue-400 hover:text-blue-700"
            href="https://zip.co"
          >
            Zip
          </a>
          . I &#39;m currently based in Brooklyn, NY. My dream is to &apos;make
          it&apos; as a professional musician but while that&#39;s cooking I
          have been enjoying the 5+ year journey design has simultaneously taken
          me on.
        </p>
        <div className="space-y-2">
          <p>Some things I believe in...</p>
          <ul className="list-disc list-inside indent-2">
            <li>first principles</li>
            <li>trying my best</li>
            <li>being a forever student</li>
            <li>discipline &gt; motivation</li>
            <li className="">joy and curiosity as creative fuel</li>
          </ul>
        </div>
        <p>
          Let&#39;s dive deeper into about <b>what I&#39;m up to</b>,{' '}
          <b>where I&#39;ve been</b>, and <b>where I&#39;m hoping to go</b>.
        </p>
        <div>
          <div className="flex items-center space-x-2 pb-2">
            <Emoji label="blue" symbol="📘" />
            <h3 className="text-lg py-2 font-semibold">
              Past, Present, and Future Jake
            </h3>
          </div>
          <div className="flex flex-row row-span-1 space-x-4 overflow-x-auto z-10 overflow-visible w-full">
            {/* FIRST column below */}
            <div className="p-2 rounded-lg bg-[#F6FAFC] space-y-2 relative w-full min-w-[80%] sm:w-[320px] sm:min-w-[320px]">
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
                    <a
                      href="https://zip.co"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
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
                    <a
                      href="https://jacobs.blue"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
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
                    <a
                      href="https://g.co/kgs/dHQueu"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
                      Musashi
                    </a>
                    ,{' '}
                    <a
                      href="https://www.google.com/search?q=the+timeless+way+of+building+book&ei=Qun0Y97uHLOi5NoPyM6CoAg&oq=the+timeless+way+obook&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgkIABAHEB4Q8QQyBggAEAcQHjIJCAAQBxAeEPEEMgUIABCGAzIFCAAQhgM6CwgAEAcQHhDxBBAKOgcIABCABBAKOgsILhCABBDHARCvAToECC4QQzoICC4QgAQQsQM6BAgAEEM6BQguEIAEOgUIABCxAzoHCAAQDRCABDoLCAAQCBAHEB4Q8QQ6CAgAEAgQBxAeOgkIABAeEA8Q8QQ6BggAEAgQHjoJCAAQCBAeEPEEOgsIABAeEA0QDxDxBDoLCAAQCBAeEA0Q8QRKBAhBGABQAFj_EWCHHGgAcAF4AIABxQGIAcsMkgEEMTUuM5gBAKABAcABAQ&sclient=gws-wiz-serp"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
                      The Timeless way of Building
                    </a>
                    , and now some articles about{' '}
                    <a
                      href="https://www.smithsonianmag.com/innovation/douglas-engelbart-invented-future-180967498/"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
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
                    <a
                      href="https://www.oliverburkeman.com/dailyish"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
                      dailyish
                    </a>
                  </h4>
                </div>
              </div>
              <p className=" text-[#7DA3C2] p-1">+ New</p>
            </div>
            {/* SECOND column below */}
            <div className="p-2 rounded-lg bg-[#F8FAF7] space-y-2 relative w-full flex-block min-w-[80%] sm:w-[320px] sm:min-w-[320px] h-full">
              <div className="flex space-x-2 w-full items-center">
                <p className="font-semibold small px-1 rounded-md text-[#23372A] bg-[#DEECDC]">
                  Previously
                </p>
                <p className="small text-[#7FA087]">4</p>
              </div>
              <div className="space-y-1">
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="📱" />
                  </p>
                  <h4 className="text-base font-medium">
                    Lead end-to-end product solutions for an Internal Agency @{' '}
                    <a
                      href="https://www.spectrum.com"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
                      Charter Communications
                    </a>
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="🫶" />
                  </p>
                  <h4 className="text-base font-medium">
                    Helped Charities Raise more @{' '}
                    <a
                      href="https://charitybuzz.com"
                      className="underline text-neutral-600 hover:text-neutral-900 transition decoration-neutral-400 hover:decoration-[#37353] cursor-pointer"
                    >
                      Charitybuzz
                    </a>
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="💻" />
                  </p>
                  <h4 className="text-base font-medium">
                    Ran my own freelance design business.
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="🎓" />
                  </p>
                  <h4 className="text-base font-medium">
                    Graduated from St. John’s University
                  </h4>
                </div>
              </div>
              <p className="text-[#7FA087] p1">+ New</p>
            </div>
            {/* THIRD COLUMN */}
            <div className="p-2 rounded-lg bg-[#FAF9FD] space-y-2 relative w-full h-full flex-block min-w-[80%] sm:w-[320px] sm:min-w-[320px] flex-col">
              <div className="flex space-x-2 w-full items-center">
                <p className="font-semibold small px-1 rounded-md text-[#3D2551] bg-[#E6DEED]">
                  In the near future
                </p>
                <p className="small text-[#A183BF]">4</p>
              </div>
              <div className="space-y-1">
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="🤺" />
                  </p>
                  <h4 className="text-base font-medium">
                    Lead other designers and/or refine my current leadership
                    skills
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="☕" />
                  </p>
                  <h4 className="text-base font-medium">
                    Work on an exciting product with kind and collaborative
                    people
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="✍" />
                  </p>
                  <h4 className="text-base font-medium">
                    Work at an organization that is aligned with my personal
                    ethos’
                  </h4>
                </div>
                <div className="flex rounded-md space-x-2 bg-white w-full p-2 border border-[#EBEDEA]">
                  <p>
                    <Emoji symbol="💪" />
                  </p>
                  <h4 className="text-base font-medium">
                    Challenge myself and others to be 1% better then we were
                    yesterday
                  </h4>
                </div>
              </div>
              <p className="text-[#A183BF] p1">+ New</p>
            </div>
          </div>
        </div>
        <div className="pt-6 space-y-4">
          <h2>About you</h2>
          <p>
            I know a lot about Notion as a product but would love to learn more
            about the people working there and the problems you all are working
            through! It would mean a lot to me if you would email me with your
            best answers to these questions.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-1">
              <div className="p-3 relative">
                <Image src="arrow_right.svg" alt="arrow right" fill="cover" />
              </div>
              <p>
                What are your top 1-3 challenges you face over the next 6-12
                months that design can be leveraged to solve? As an
                organization? Department? Team?
              </p>
            </div>
            <div className="flex items-start space-x-1">
              <div className="p-3 relative">
                <Image src="arrow_right.svg" alt="arrow right" fill="cover" />
              </div>
              <p>
                What do you need from a new team member in order to successfully
                work through these challenges?
              </p>
            </div>
            <div className="flex items-start space-x-1">
              <div className="p-3 relative">
                <Image src="arrow_right.svg" alt="arrow right" fill="cover" />
              </div>
              <p>
                What’s your team structure like? How many designers? Who are
                your main stakeholders?
              </p>
            </div>
            <div className="flex items-start space-x-1">
              <div className="p-3 relative">
                <Image src="arrow_right.svg" alt="arrow right" fill="cover" />
              </div>
              <p>
                How do you make space for collabortion and bonding in a
                remote-first culture?
              </p>
            </div>
            <div className="flex items-start space-x-1">
              <div className="p-3 relative">
                <Image src="arrow_right.svg" alt="arrow right" fill="cover" />
              </div>
              <p>
                How important is Design and/or Design Thinking at Notion? Is
                there C-Suite interest, involvement, advocation?
              </p>
            </div>
          </div>
        </div>
        <p>Thank you for your time and consideration!</p>
        <div className="w-full block sm:w-auto sm:flex sm:items-center sm:space-x-4 sm:space-y-0 space-y-2">
          <a
            href="mailto:jacobmedure.com"
            className="flex justify-center w-full bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white py-2 align-middle text-center rounded-md"
          >
            Email Jake
          </a>
          <a
            href="jmedure_resume.pdf"
            className="flex justify-center w-full border-[1.5px] hover:bg-blue-500 hover:text-white cursor-pointer transition border-blue-500 text-blue-500 py-2 align-middle text-center rounded-md"
          >
            Download Jake&#39;s Resume
          </a>
        </div>
        <p className="text-neutral-400 justify-center text-center text-sm w-full py-4 font-mono">
          Designed and Developed by Jacob Medure 02.21.23
        </p>
      </main>
    </div>
  );
}
