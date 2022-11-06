import Image from 'next/image'
import { Articles, Footer } from '../components'

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
              <h3>Becoming Your Higher Self</h3>
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
                as well as what your past experiences might indicate.
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
                professional astrology realm.
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
                    <strong>
                      “What's Ahead For Me” report, including a special 3-card Tarot reading
                    </strong>
                  </p>
                </li>
              </ul>
            </div>
            <div className="who__kine">
              <div className="who__picture"></div>

              <h3>Kine</h3>

              <p>
                A Breakthrough Coach that cheers you all the way. Kine helps people resolve mental
                and emotional blockages. In her comprehensive approach we heal and release the
                anchors of the past, train the brain and the nervous system to enjoy the present
                moment and work intelligently and creatively to reach goals of the future.
              </p>

              <p>In all of Kine's Life Coaching Programs, you work on topics like:</p>

              <ul>
                <li>
                  <p>
                    Designing Life Around Your&nbsp;<strong>Values &amp; Goals</strong>&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    Making Dreams Into Reality&nbsp;<strong>Action Plan</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Tools To Boost Your Innate&nbsp;<strong>Strengths</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Communication In&nbsp;<strong>Relationships</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Level up your&nbsp;<strong>Wellness Routines</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Accessing Your&nbsp;<strong>Flow State</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Facing Fears &amp;&nbsp;<strong>Anxieties</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Tuning Into Your <strong>Purpose</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Getting What You <strong>Desire</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Living your <strong>Joy</strong>
                  </p>
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

        <Articles />
      </main>
      <Footer />
    </>
  )
}
