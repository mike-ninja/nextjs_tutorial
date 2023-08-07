import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const HomeAbout = () => {
  return (
    <section>
      <div className="container">
        <h2>About ICS</h2>
        <h3>Indigenous Conference Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
            <Link href="/about" className="btn">
              Find Out More
            </Link>
          </div>
          <div>
            <ul>
              <li className="flex items-center">
                <BiSolidRightArrow />
                <span className="pl-2">
                  Engaging
                </span>
              </li>
              <li className="flex items-center">
                <BiSolidRightArrow />
                <span className="pl-2">
                  Cultural
                </span>
              </li>
              <li className="flex items-center">
                <BiSolidRightArrow />
                <span className="pl-2">
                  Working with all the local communities whereever and however
                  possible
                </span>
              </li>
              <li className="flex items-center">
                <BiSolidRightArrow />
                <span className="pl-2">
                  Understanding the community, the needs of both client and the
                  target audience
                </span>
              </li>
              <li className="flex items-center">
                <BiSolidRightArrow />
                <span className="pl-2">
                  Able to work with both Government & Community Organisations
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
