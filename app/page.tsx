import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components'

export default async function HomePage() {
  return (
    <>
      <main className="main">
        <section className="main__heading">
          <div className="main__heading-container">
            <Image
              className="main__heading-title-img"
              alt="Blue Haven logo"
              src={'/images/blue_haven_white.png'}
              width={1920}
              height={200}
            />

            <h1>Astrology Purpose Overview &amp; Breakthrough Coaching</h1>
          </div>
        </section>

        <section className="container">
          <h2 className="text-center">
            Tune In To Your Purpose Through Our Guidance
            <br />
            —
            <br />
            Astrology and Life Coaching
          </h2>

          <div className="how-why__container">
            <div className="how-why__item">
              <h3>Aligning With Your Higher Self</h3>
              <p>
                It is without doubt that we all wish to aim towards the sky with our ambitions, but
                for many people, it represents an unreachable point. What if your breakthrough
                coaching experiences help you see how easily reachable your goals are?
              </p>
              <p>
                We help you align with your higher self - a concept known to many spiritual
                practitioners - so that you can stop reliving your memories of the past, and live
                powerfully in the present moment.
              </p>
            </div>

            <div className="how-why__item">
              <h3>Finding Your Purpose</h3>
              <p>
                Astrology was followed and practiced for millennia. If it helped predict wars,
                global diseases, deaths of kings and empires, why wouldn't it be able to guide you
                at least slightly towards your life's purpose?
              </p>
              <p>
                Our astrology purpose reports show you just how much you have going on in your life,
                as well as what your past experiences might indicate - basically what's written in
                the stars for you.
              </p>
            </div>
          </div>

          <div className="who__container">
            <div className="who__stefan">
              <div className="who__picture"></div>

              <h3>Stefan</h3>

              <p>
                An astrologer with a great eye for detail. Providing meaningful and contextual
                outputs, Stefan is a web developer with experience in content writing and digital
                marketing, giving him an advantage in written expression, which he now also uses in
                the astrology world. All of his natal chart readings are performed by following the
                renowned Placidus house system, the default of 99% of astrology applications out
                there, as well as his own intuition. All clients are therefore guaranteed a
                detailed, personalized astrology overview that follows the divine messages of the
                sky above us and the infinite universe around and within us.
              </p>

              <p>
                Stefan's purpose is to help familiarize and steer others towards their life's
                mission, giving each client full support and care throughout the process. It was
                this partnership with Kine that enabled him to get his feet in the water in the
                professional astrology realm. His astrology services include short or long detailed
                overviews for anyone interested in astrology.
              </p>
              <p>His astrology overview services are split into:</p>
              <ul>
                <li>
                  <p>
                    <strong>Short Natal Chart reading - 1-2 pages</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Long Natal Chart reading - 3-4 pages</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Personal Monthly overview</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>“What's Ahead For Me” report, including a special Tarot reading</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Tarot reading based on any type of personal question or problem</strong>
                  </p>
                </li>
              </ul>
            </div>
            <div className="who__kine">
              <div className="who__picture"></div>

              <h3>Kine</h3>

              <p>
                A Breakthrough Coach that helps heal the root cause of the problem, while cheering
                you all the way to Your Personal Breakthroughs. Kine works directly and
                intelligently in the three crucial tenses:
              </p>

              <p>
                <u>Your Past</u>: In her comprehensive and holistic programs she helps you resolve
                the emotional blockages and old thought patterns, so you finally release the anchors
                of the past. This propels you forward at rocket speed.
              </p>

              <p>
                <u>Your Present</u>: The program rewires your brain and nervous system to calm down.
                This means you enjoy your life. It also means that you are present for yourself, the
                people you love and your purpose.
              </p>

              <p>
                <u>Your Future</u>: Through pragmatic, intelligent goal setting and implementation
                of pleasurable, focused action - you will reach your goals. Kine helps you recognize
                and enhance your talents, needs and desires. She also includes spiritual
                manifestation techniques, visualization, feng shui and other energy work to speed up
                the process.
              </p>

              <p>
                This approach can launch you into your unique zone of genius and access your genuine
                life purpose.
              </p>

              <h4>The Breakthrough - Life Coaching Programs:</h4>

              <ul>
                <li>
                  <strong>Limitless Life 7 Week Program 399 EUR</strong>
                </li>
                <li>
                  <strong>How To Decrease Stress - in a single session</strong>
                </li>
                <li>
                  <strong>From Stress Life To Zen Life - 3 months</strong>
                </li>
                <li>
                  <strong>From Social Anxiety To Confidence - 3 months</strong>
                </li>
                <li>
                  <strong>Manifest A Love Partner - 3 months</strong> (Disclosure - Kine is
                  confident her clients can manifest a love partner within this timeframe, but in
                  cases where it doesn't happen - 1 free month of weekly coaching is included after
                  this program.)
                </li>
              </ul>

              <p>
                <strong>Other programs:</strong>
              </p>

              <ul>
                <li>
                  Make Dreams Into Reality With <strong>Accountability</strong>
                </li>
                <li>
                  Level up your Wellness Routine + <strong>Lifestyle</strong>
                </li>
                <li>
                  Design Life Around Your Values + <strong>Goals</strong>
                </li>
                <li>
                  Better Communication In <strong>Relationships</strong>
                </li>
                <li>
                  Boost Your Innate <strong>Strengths</strong>
                </li>
                <li>
                  Face Trauma & <strong>Anxieties</strong>
                </li>
                <li>
                  Access Your Flow <strong>State</strong>
                </li>
                <li>
                  Showcase Your <strong>Talents</strong>
                </li>
                <li>
                  Find your <strong>Purpose</strong>
                </li>
              </ul>

              <p>
                Kine walks the way with you and supports you emotionally and pragmatically. She
                helps you understand The Astrology Overview to make the most of your life. You get a
                clearer understanding about the reasons for your challenges and how to solve them.
                Working through the challenges, emotions and inhibiting beliefs is therefore much
                easier. You level up your life each week of the Coaching Program with her.
              </p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Our Blog</h2>
          <Link href="/blog">
            <button>Click here to see our full blog</button>
          </Link>
        </section>

        <section className="container">
          <h2>Contact</h2>

          <p>
            Reach out to us at{' '}
            <Link href="mailto:hello@yourbluehaven.com">hello@yourbluehaven.com</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
