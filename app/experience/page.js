import TabView from "@components/TabView/TabView";
import React from "react";

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

import path from "path";
import fs from "fs";

export default async function page() {
  const getMarkdown = (filename) => {
    const fullPath = path.join("mdx", `${filename}.md`);
    const fileContent = fs.readFileSync(fullPath);
    const { content } = matter(fileContent);
    return content;
  };

  const works = [
    {
      id: "work_1",
      label: "College of the Marshall Islands",
      body: getMarkdown("work_1"),
    },
    {
      id: "work_2",
      label: "Governance Commission for GOCCs",
      body: getMarkdown("work_2"),
    },
    {
      id: "work_3",
      label: "Amadeus Marketing Philippines",
      body: getMarkdown("work_3"),
    },
    {
      id: "work_4",
      label: "Entertainment Gateway Group",
      body: getMarkdown("work_4"),
    },
  ];

  return (
    <>
      <main className="relative overflow-hidden">
        <div className="container px-4 md:mx-auto py-32 text-slate-400">
          <div className="w-full text-lg">
            <h1 className="text-5xl mb-12 text-white">Work Experience</h1>
            <TabView items={works} header="Employment History"></TabView>
          </div>
        </div>
      </main>
    </>
  );
}
