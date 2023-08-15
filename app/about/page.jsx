import FooterContact from "@/components/FooterContact";
import GuideBox from "@/components/GuideBox";
import ImageFrame from "@/components/ImageFrame";
import AboutHeader from "@/components/about/AboutHeader";
import Highlights from "@/components/about/Highlights";
import AboutImgOne from "@/public/assets/images/ics-about.jpg";

const page = () => {
  return (
    <>
      <AboutHeader />
      <section id="about">
        <h2 className="text-center text-5xl">About ICS</h2>
        <h3 className="text-center mb-8 text-3xl italic font-thin">
          Building better future together
        </h3>
      </section>
      <section>
        <div className="container grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2>Our Vision</h2>
              <p>
                ICS is by far the longest, professional, independent (not
                relying on government funding) event management company in First
                Nations Australia. We are proud of our heritage which when
                coupled with our unyielding drive and determination, we
                generally achieved and obtain the highest standard of
                professional event management service.
              </p>
              <p>
                The absolute core and soul of our company is our people and
                culture. We believe that the people who make up ICS have a
                commitment to First Nations affairs both through their work life
                and experiences. Over the years, we have built the most
                experienced Indigenous Conference Management team so much so
                that since opening our doors, we have clocked up an impressive
                array of events both within Australia and internationally.
              </p>
              <p>
                ICS has organized conferences up to 6,500 delegates, festivals
                up to 70,000 over two (2) days and thousands of smaller
                conferences and events. We offer community organizations a wide
                range of services from total event management to marketing,
                offering perks and free of charge services for sourcing
                conference venues amongst others.
              </p>
              <a
                href="/conferences"
                className="text-light_blue text-lg font-semibold transition-all hover:text-[1.135rem]"
              >
                SEE UPCOMING CONFERENCES
              </a>
            </div>
            <ImageFrame
              img={AboutImgOne}
              alt="Conferences Services Australia"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 gap-3">
          <div className="bg-light_beige py-6">
            <Highlights text={"100% Indigenous-owned"} />
            <Highlights text={"Independent from any government-funding body"} />
            <Highlights
              text={"Based on principles of maintaining cultural identity"}
            />
            <Highlights
              text={"Striving for self-determination by education & private enterprise"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-2 gap-12">
          <div className="h-[500px] bg-dark_beige rounded translate-x-[0.5rem] translate-y-[0.5rem]">
            <div className="bg-[url('/assets/images/about-img.jpg')] bg-cover bg-center rounded w-full h-full translate-x-[-1rem] translate-y-[-1rem]">
            </div>
          </div>
          <div>
            <h2>Our Purpose</h2>
            <p>
              We believe education is the key to generational change and a
              brighter future, and we are deeply committed to the ongoing
              success of Indigenous independence through private enterprise and
              the fostering and nurturing of partnerships. Through developing
              partnerships with community organizations, ICS funds conferences
              without sourcing funding from government departments and
              organizations. This enables community groups the opportunity to
              stage a conference or event without 'going cup in hand' seeking
              funding. A further benefit of an ICS funded event is the freedom
              to place on the event agenda specific issues prevalent to the
              partnered organization. All ICS events are what is termed public
              interest and have deep grounding with grassroots principles.
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container grid grid-cols-2 gap-12 items-center">
          <div>
            <h2>Our Values</h2>
            <p>
              Our Koori CEO, Tom Callaghan comes from Kempsey in Dunghutti
              country of NSW. We specialize in working with NGOs and governments
              and initiated several successful events over the years. Our events
              are designed to be an information sharing platform for not only
              open and frank discussion but also based upon the principles of
              Indigenous self-determination through the sharing of positive
              information, programs and cooperation between community
              organizations and governments. Moreover, if a national association
              is not funded to run an event, we will lend our support and
              expertise to help develop the conference. Our business model is
              successful and well-proven; hence, ICS continues to save
              organization's money, time and resources. The ICS business model
              has work both nationally and internationally for many years no.
              Fundamental to this is remaining neutral and outside political
              agendas and without fear of losing funding.
            </p>
            <p>
              We do not enter into government politics, nor were wishing to
              develop a profile that will interfere or cut across any community
              group’s philosophy or beliefs. Our sole aim is to bring together
              information that can be disseminated for the better good of
              Indigenous communities. It is our plan to be recognized as a
              network sharing tools and a provider of quality conferences and
              seminars that enhances local and government organization with
              quality speakers and training programs.
            </p>
            <p>
              Our conferences are not political based rather should be seen as
              an opportunity to access information that is not readily available
              at your own level. Today, the world has become smaller with the
              invention of the internet however the internet has also managed to
              sterilised and isolate people at the same time. As such, we are of
              the belief that there is nothing more empowering and more
              efficient than for workers to have an opportunity to network and
              meet face to face to exchange ideas, valuable information and
              successful programs in place in their communities.
            </p>
          </div>
          <div className="h-[500px] bg-dark_beige rounded translate-x-[0.5rem] translate-y-[0.5rem]">
            <div className="bg-[url('/assets/images/about-img.jpg')] bg-cover bg-center rounded w-full h-full translate-x-[-1rem] translate-y-[-1rem]">
            </div>
          </div>
        </div>
        <GuideBox
          text="If you have any questions,"
          link="/contact"
          textLink="contact us"
        />
      </section>
      <FooterContact />
    </>
  );
};

export default page;
