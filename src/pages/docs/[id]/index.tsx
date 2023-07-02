import * as fs from "fs";

import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";

import matter from "gray-matter";
import remarkGfm from "remark-gfm";

import { MDXLayout } from "src/components/layouts";

interface DocumentPageProps {
  meta: { title: string; description: string; style?: React.CSSProperties };
  source: MDXRemoteSerializeResult;
}

export default function DocumentPage({ meta, source }: DocumentPageProps) {
  return (
    <>
      <NextSeo title={`${meta.title} | 한울`} description={meta.description} />
      <MDXLayout style={meta.style} {...source} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  try {
    const docs = fs.readdirSync("public/docs");
    const paths = docs.map((id) => ({ params: { id: id.replace(".md", "") } }));

    return { paths, fallback: false };
  } catch (error) {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<object, { id: string }> = async ({ params }) => {
  try {
    if (!params) throw new Error("파라미터를 찾을 수 없어요");

    const document = fs.readFileSync(`public/docs/${params.id}.md`, "utf-8");
    const { data, content } = matter(document);
    const mdxSource = await serialize(content, { mdxOptions: { remarkPlugins: [remarkGfm] } });

    return { props: { source: mdxSource, meta: data } };
  } catch (error) {
    return { props: {} };
  }
};
