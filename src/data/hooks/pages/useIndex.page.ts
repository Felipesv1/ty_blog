import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
  const posts: BlogPost[] = [
    {
      id: "1",
      title: "Comando de Git para ver o histórico de commits",
      slug: "git-history-commands",
      description:
        "Aprenda a usar o comando git log para ver o histórico de commits em um repositório Git.",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0W2BwBTWbCDBdhPwoDHRq8B99C7RjYR7iw&s",
    },
    {
      id: "2",
      title: "Como usar o comando git log",
      slug: "git-log-commands",
      description:
        "Entenda como utilizar o comando git log para visualizar o histórico de commits e suas alterações.",
      picture:
        "https://miro.medium.com/v2/resize:fit:1400/0*chJm0Y3vYxkHG0m2.png",
    },
  ];

  return { posts };
}
