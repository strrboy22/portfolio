import type { Profile } from './profile.types';

export const Data: Profile = {
  name: "Rafael V. Caparic",
  profileInfo: {
    age: 21,
    address: "Manila, Philippines"
  },
  educationalInfo: {
    school: "Universidad De Manila",
    degree: "BS Information Technology",
    certs: ["certs", "certs"]
  },
  socials: {
    github: "https://github.com/strrboy22",
    linkedIn: "https://google.com",
    email: "rafaelcaparic@gmail.com"
  },
  projects: [
    {
      projectName: "udms",
      description: "...",
      stacks: ["java", "spring boot"],
      mediaPath: "/images/preview.png",
      mediaType: "image",
      role: "backend dev",
      year: "2024",
      status: false,
      type: "web application",
      links:"https://github.com/strrboy22/udms"
    },
    {
      projectName: "ttae",
      description: "...",
      stacks: ["java", "spring boot"],
      mediaPath: "/images/preview.png",
      mediaType: "image",
      role: "backend dev",
      year: "2024",
      status: false,
      type: "web application",
      links:"https://github.com/strrboy22/udms"
    }
  ]
};
