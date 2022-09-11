import React from "react";
import type { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.scss";

const IndexPage = () => {
  return (
    <main className="main">
      <section className="main__heading">
        <StaticImage
          className="main__heading-title-img"
          alt="Blue Haven logo"
          src={"../images/blue_haven_white.png"}
          objectFit="contain"
        />

        <h1>Astrology Purpose Overview & Breakthrough Coaching</h1>
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
              It is without doubt that we all wish to aim towards the sky with
              our ambitions, but for many people, it represents an unreachable
              point. What if your breakthrough coaching experiences help you see
              how easily reachable your goals are?
            </p>
            <p>
              We help you align with your higher self - a concept known to many
              spiritual practitioners - so that you can stop reliving your
              memories of the past, and live powerfully in the present moment.
            </p>
          </div>

          <div className="how-why__item">
            <h3>Finding Your Purpose</h3>
            <p>
              Astrology was followed and practiced for millennia. If it helped
              predict wars, global diseases, deaths of kings and empires, why
              wouldn't it be able to guide you at least slightly towards your
              life's purpose?
            </p>
            <p>
              Our astrology purpose reports show you just how much you have
              going on in your life, as well as what your past experiences might
              indicate.
            </p>
          </div>
        </div>

        <div className="who__container">
          <div className="who__stefan">
            <div className="who__picture"></div>

            <h3>Stefan</h3>

            <p>
              An astrologer with a great eye for detail. Providing meaningful
              and contextual outputs, Stefan is a web developer with experience
              in content writing and digital marketing, giving him an advantage
              in written expression, which he now also uses in the astrology
              world. All of his natal chart readings are performed by following
              the renowned Placidus house system, the default of 99% of
              astrology applications out there, as well as his own intuition.
              All clients are therefore guaranteed a detailed, personalized
              astrology overview that follows the divine messages of the sky
              above us and the infinite universe around and within us.
            </p>

            <p>
              Stefan's purpose is to help familiarize and steer others towards
              their life's mission, giving each client full support and care
              throughout the process. It was this partnership with Kine that
              enabled him to get his feet in the water in the professional
              astrology realm. His astrology overview services include short or
              long detailed forms, are wide, and available for anyone with at
              least basic astrology knowledge. Therefore, Stefan's astrology
              services are split into:
            </p>
            <ul>
              <li>
                <strong>Short Natal Chart reading - 1-2 pages</strong>
              </li>
              <li>
                <strong>Long Natal Chart reading - 3-4 pages</strong>
              </li>
              <li>
                <strong>Personal Monthly overview</strong>
              </li>
              <li>
                <strong>
                  “What's Ahead For Me” report, including a special 3-card Tarot
                  reading
                </strong>
              </li>
            </ul>
          </div>
          <div className="who__kine">
            <div className="who__picture"></div>

            <h3>Kine</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dolor perferendis animi quam voluptatem rerum explicabo sequi! Id
              minus perspiciatis facere placeat obcaecati distinctio ipsa,
              repellat, eos totam molestiae alias! Beatae quasi odio corporis
              adipisci eos, quas, illo illum, ea autem provident maiores cum
              laudantium numquam doloremque recusandae? Reprehenderit
              exercitationem aspernatur sit nihil, eos voluptatem repudiandae
              quam odit tempora sint veniam laborum ab dolore. Suscipit natus
              magnam, dolorem doloribus repellendus esse amet voluptas
              architecto harum eligendi iusto voluptatem in? Non eveniet quasi
              modi deserunt, culpa suscipit commodi repudiandae dolores odio
              libero. Debitis quod voluptate quidem placeat sed. Deleniti, ut
              facere.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis iste quae beatae facere minima, similique, cupiditate
              velit veritatis expedita unde hic quisquam eum! Ad consequatur
              quae rerum ullam suscipit repellat tenetur facilis laudantium
              perspiciatis quasi quidem, minima facere soluta consectetur modi
              at tempore excepturi illo repellendus error cumque deserunt! A
              unde mollitia natus, dolorem nam quam iusto nulla debitis enim
              aliquid vero quo sequi beatae placeat ducimus voluptatum
              praesentium earum ipsum. Ut autem accusamus officia provident
              velit adipisci quos nemo qui, a, possimus dolorem!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Blue Haven</title>;
