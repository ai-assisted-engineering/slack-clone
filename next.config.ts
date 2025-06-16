import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "slack-clone";

const nextConfig: NextConfig = {
  //output: "export",
  ...(isGithubPages && {
    basePath: "/" + repoName,
    assetPrefix: "/" + repoName + "/",
  }),
  /* config options here */
};

export default nextConfig;
