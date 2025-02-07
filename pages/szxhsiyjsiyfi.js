import Image from "next/image";
import ImageLoader from "../utils/imageLoader";
import Head from "next/head";
import SEO from "../components/SEO";

export default function Something(props) {
  const resources = [
    {
      title: "What is Developer Advocacy",
      description: "The curriculum for the DXTraining program",
      link: "https://www.freecodecamp.org/news/what-the-heck-is-a-developer-advocate-87ab4faccfc4",
      day: "18th",
      month: "January",
    },
    {
      title: "Who is a Developer Experience Advocate?",
      description: "The curriculum for the DXTraining program",
      link: "#",
      day: "12th",
      month: "April",
    },
    {
      title: "What is Developer Advocacy",
      description: "The curriculum for the DXTraining program",
      link: "https://developerrelations.com/what-is-developer-relations",
      day: "20th",
      month: "June",
    },
    {
      title: "The case for more advocates in Startups",
      description: "The curriculum for the DXTraining program",
      link: "/curriculum",
      day: "22nd",
      month: "July",
    },
    {
      title: "The journey to becoming a Developer Advocate",
      description: "The curriculum for the DXTraining program",
      link: "/curriculum",
      day: "24th",
      month: "Oct",
    },
  ];
  return (
    <>
      <SEO
        url={`${props.url}/resources`}
        openGraphType="website"
        schemaType="article"
        title="Resources"
        description="Resources to help you level-up your developer advocacy skills and experience"
        image="https://res.cloudinary.com/kennyy/image/upload/v1662135847/resources_dmsd7l.webp"
      />

      <section className="relative py-20 2xl:py-40 bg-dxt-bg-primary overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="mb-14 text-center">
            <h2 className="mt-8 text-5xl font-bold font-heading text-white font-nunito">
              Resource centre
            </h2>
          </div>
          <div className="flex flex-wrap -m-6">
            {resources.map((resource, index) => {
              return (
                <div key={index} className="relative w-full lg:w-1/3 p-6">
                  <div className="relative z-10 bg-dxt-accents-1 rounded-lg">
                    <div className="relative mb-8 h-52">
                      <Image
                        alt="resource"
                        loader={ImageLoader}
                        width={940}
                        height={450}
                        className="w-full h-full rounded-lg object-cover object-top"
                        src="/kennyy/image/upload/v1659266188/reso_sffkfk.jpg"
                      />

                      <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                        <p className="text-xl font-bold">{resource.day}</p>
                        <p className="text-xs uppercase text-gray-300">
                          {resource.month}
                        </p>
                      </div>
                    </div>
                    <div className="px-14 pb-10">
                      <a
                        className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400"
                        href={resource.link}
                      >
                        {resource.title}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export const getServerSideProps = (context) => {
  return {
    props: {
      url: context?.req?.headers?.host,
    },
  };
};
