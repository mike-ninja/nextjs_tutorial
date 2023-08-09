import { CiCircleCheck } from "react-icons/ci";

// TODO: Make 'advantages of card' clickable with effects
// TODO: Make heading "Become a part of ICS"

const HomeCta = () => {
  const cta = [
    {
      header: "Join the Indigenous Movement",
      description: [
        "Be a part of our 100% Indigenous-owned conference services that are free from government influence.",
        "Embrace the power of First Nations culture and unity!",
      ],
    },
    {
      header: "Celebrate Cultural Identity",
      description: [
        "Join us in preserving and celebrating Indigenous cultural identity while striving for self-determination.",
        "Our heritage, paired with professional event management, sets the standard for excellence.",
      ],
    },
    {
      header: "Forge Partnerships, Not Just Events",
      description: [
        "Partner with us and fund conferences without relying on government sources.",
        "Shape the agenda and address your organization's specific needs. Let's make your event truly impactful.",
      ],
    },
    {
      header: "Empower Indigenous Independence",
      description: [
        "Support Indigenous independence through private enterprise.",
        "By working together, we can make a lasting impact on Indigenous communities' success and prosperity.",
      ],
    },
  ];

  return (
    <section className="bg-dark_beige text-white p-3 lg:py-10">
      <div className="container bg-off_white rounded-xl py-5 grid grid-cols-1 gap-3">
        {cta.map((c) => (
          <div>
            <div className="flex text-dark_brown items-center mb-1 md:mb-2 text-xl md:text-3xl">
              <CiCircleCheck className="mr-1" />
              <h3>{c.header}</h3>
            </div>
            {c.description.map((desc) => <p className="mb-1">{desc}</p>)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCta;