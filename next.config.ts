import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "slack-clone";

const nextConfig: NextConfig = {
   ...(isGithubPages && {
    output: "export",
    basePath: "/" + repoName,
  }),
};

export default nextConfig;
