import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody
        post={{
          id: "1",
          title: "Git log commands",
          description: "A guide to using Git log commands effectively.",
          picture:
            "https://miro.medium.com/v2/resize:fit:1400/0*chJm0Y3vYxkHG0m2.png",
          slug: "git-history-commands",
          content: (
            <>
              <p>
                Git is a powerful version control system that allows developers
                to track changes in their codebase. Understanding how to
                navigate and utilize Git log commands is essential for effective
                collaboration and project management. In this post, we will
                explore some of the most useful Git log commands that can help
                you manage your projects more efficiently.
              </p>
            </>
          ),
        }}
      />
    </>
  );
}
