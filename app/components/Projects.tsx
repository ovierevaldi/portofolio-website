import Link from "next/link";

const projectDataList: ProjectsDataProp[] = [
  {
    "title": "Melon Editor",
    "description": "A web-based video game editor and integrated development environment (IDE) compatible with the MelonJS Game Engine.",
    "link": "https://editor.melongaming.com/",
    "link_alias": "Visit"
  },
  {
    "title": "Melon Editor Marketplace",
    "description": "Explore and purchase assets like 2D add-ons, templates, and audio files to enhance your games.",
    "link": "https://editor.melongaming.com/marketplace/",
    "link_alias": "Visit"
  },
  {
    "title": "Melon Editor Membership",
    "description": "Register for an account to start using the Melon Editor and unlock its features.",
    "link": "https://editor.melongaming.com/membership/",
    "link_alias": "Visit"
  },
  {
    "title": "Melon Editor Documentations",
    "description": "Access comprehensive guides and tutorials to help you use the Melon Editor and MelonJS Game Engine.",
    "link": "https://editor.melongaming.com/tutorial/",
    "link_alias": "Visit"
  },
  {
    "title": "Melon Gaming Website",
    "description": "Learn more about Melon Gaming, the company behind the Melon Editor, and their mobile and web gaming services.",
    "link": "https://melongaming.com/",
    "link_alias": "Visit"
  },
  {
    title: 'Quote Generator',
    description: 'Simple Website to generate quote to level up your day',
    link: 'https://quote-generator-bice-psi.vercel.app/',
    link_alias: 'Visit'
  }
]

type ProjectsDataProp = {
    title: string,
    description: string,
    link: string,
    link_alias: string
};

const Projects = () => {
  return (
    <table>
        <thead>
          <tr className="border border-black">
            <th className="py-4 border border-black">
              <p className="text-xl font-bold">Name</p>
            </th>
            <th>
              <p className="text-xl font-bold px-4">Link(s)</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            projectDataList.map((projectData, index) => 
              <tr key={index} className="border border-black">
                <td className="text-center py-4">
                  <p className="font-bold text-xl">{projectData.title}</p>
                  <p className="max-w-[600px]">{projectData.description}</p>
                </td>
                <td className="text-center border border-black">
                  <a className="link" href={projectData.link} target="_blank" rel="noopener noreferrer">
                    {projectData.link_alias}
                  </a>
                </td>
              </tr>
            )
          }
        </tbody>
    </table>
  )
}

export default Projects