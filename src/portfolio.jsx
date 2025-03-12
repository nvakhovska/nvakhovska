const header = {
  homepage: "https://www.haylzrandom.co.uk",
  logo: "/images/logo/haylzpic.png",
};

const about = {
  name: "Nataliia Vakhovska",
  role: "Full-Stack / Backend Developer",

  description: `Full-Stack Developer with experience in React.js, TypeScript, Node.js, and cloud-based deployments (Azure & AWS). Skilled in API development, backend architecture, CI/CD automation, and DevOps practices. Passionate about building scalable, high-performance applications. Seeking Full-Stack or Backend Developer roles to contribute to innovative teams.`,
  social: {
    linkedin: "https://www.linkedin.com/in/nvakhovska",
    github: "https://github.com/nvakhovska",
  },
  cvFile: "files/vakhovska-cv.pdf",
};

const projects = [
  {
    name: "PeTODO",
    description:
      "PeTODO is a task management web application built using React, Node.js, and MongoDB. It allows users to create, manage, and organize tasks, with features like assigning tasks to specific users, sorting tasks by priority and due date, and tracking task statuses. The app includes JWT authentication for secure login and signup, and uses custom API endpoints for task operations. It supports dynamic task creation with optional fields such as due date, tags, and user assignments. Deployed on a production server.",
    stack: ["JavaScript", "React.js", "Node.js", "MongoDB", "JWT", "Axios", "Material UI"],
    sourceCode: "https://github.com/nvakhovska/peTODO-web",
    livePreview: "https://your-production-server.com",
    image: "/images/projects/petodo.png",
  },
  {
    name: "PeTODO API",
    description:
      "Backend API project built using Express.js, Node.js, and MongoDB for a task management application, providing functionality such as task creation, updates, and user management.",
    stack: ["JavaScript", "Express.js", "Node.js", "MongoDB"],
    sourceCode: "https://github.com/nvakhovska/peTODO",
    image: "/images/projects/petodo.png",
  },
];

const workExperience = [
  {
    name: "Career Break – Skill Development & Personal Projects",
    description:
      "During my career break, I actively expanded my expertise in Full-Stack Development, focusing on modern web technologies, cloud computing, and DevOps practices.",
    description2:
      "I built real-world projects to apply my knowledge in React.js, Next.js, Node.js, API development, and cloud deployments (Azure & AWS). I also enhanced my skills in CI/CD, Docker, and backend security best practices.",
    projectLink: "https://github.com/nvakhovska",
    logo: "/images/experience/self-learning.png",
    logoAlt: "Self-Learning Logo",
  },
  {
    name: "Full-Stack Developer | Trinetix Inc (Contractor for Big 4 Firm)",
    description:
      "As a Full-Stack Developer, I contributed to the development and maintenance of enterprise automation solutions. I worked across the stack, building backend APIs, integrating cloud services, and optimizing frontend applications.",
    description2:
      "Key contributions include designing scalable RESTful APIs, implementing CI/CD pipelines, optimizing database performance, and leading the transition of projects to new development teams. Technologies used: .NET, Node.js, React.js, PostgreSQL, Azure, AWS, Docker, and Kubernetes.",
    companyLink: "https://www.trinetix.com/",
    logo: "/images/experience/trinetix.png",
    logoAlt: "Trinetix Logo",
  },
];

const skills = [
  {
    name: "HTML5",
    logo: "/images/skills/html5.svg",
  },
  {
    name: "CSS3",
    logo: "/images/skills/css3.svg",
  },
  {
    name: "JavaScript",
    logo: "/images/skills/js.svg",
  },
  {
    name: "TypeScript",
    logo: "/images/skills/typescript.png",
  },
  {
    name: "React.js",
    logo: "/images/skills/react.svg",
  },
  {
    name: "Next.js",
    logo: "/images/skills/nextjs.png",
  },
  {
    name: "Redux",
    logo: "/images/skills/redux.svg",
  },
  {
    name: "Node.js",
    logo: "/images/skills/node.svg",
  },
  {
    name: "Express.js",
    logo: "/images/skills/express.png",
  },
  {
    name: "PostgreSQL",
    logo: "/images/skills/postgresql.svg",
  },
  {
    name: "MongoDB",
    logo: "/images/skills/mongodb.png",
  },
  {
    name: "Redis",
    logo: "/images/skills/redis.png",
  },
  {
    name: "GraphQL",
    logo: "/images/skills/graphql.png",
  },
  {
    name: "Docker",
    logo: "/images/skills/docker.png",
  },
  {
    name: "Kubernetes",
    logo: "/images/skills/kubernetes.png",
  },
  {
    name: "CI/CD (GitHub Actions, Azure DevOps)",
    logo: "/images/skills/cicd.svg",
  },
  {
    name: "Git",
    logo: "/images/skills/git.svg",
  },
  {
    name: "GitHub",
    logo: "/images/skills/github.svg",
  },
  {
    name: "Jest",
    logo: "/images/skills/jest.svg",
  },
  {
    name: "Atlassian Products (Jira, Confluence)",
    logo: "/images/skills/atlassian.svg",
  },
  {
    name: "Azure",
    logo: "/images/skills/azure.svg",
  },
  {
    name: "AWS",
    logo: "/images/skills/aws.svg",
  },
  {
    name: "Python",
    logo: "/images/skills/python.svg",
  },
  {
    name: "VS Code",
    logo: "/images/skills/vscode.svg",
  },
];

export { header, about, projects, workExperience, skills };
