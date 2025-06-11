import PostBody from "@/ui/components/PostBody/PostBody";

export default function MeuPost() {
  return (
    <>
      <PostBody
        post={{
          id: "2",
          title: "Git History Commands",
          description: "A guide to using Git history commands effectively.",
          picture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0W2BwBTWbCDBdhPwoDHRq8B99C7RjYR7iw&s",
          slug: "git-history-commands",
          content: (
            <>
              <p>
                Git is a powerful version control system that allows developers
                to track changes in their codebase. Understanding how to
                navigate and utilize Git history commands is essential for
                effective collaboration and project management. In this post, we
                will explore some of the most useful Git history commands that
                can help you manage your projects more efficiently.
              </p>
            </>
          ),
        }}
      />
    </>
  );
}
