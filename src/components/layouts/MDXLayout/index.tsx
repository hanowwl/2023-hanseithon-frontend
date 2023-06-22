import React from "react";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import type { MDXComponents } from "mdx/types";

import * as S from "./styled";

const components: MDXComponents = {
  h1: (props) => <S.Heading1 {...props} />,
  h2: (props) => <S.Heading2 {...props} />,
  h3: (props) => <S.Heading3 {...props} />,
  h4: (props) => <S.Heading4 {...props} />,
  strong: (props) => <S.Strong {...props} />,
  a: (props) => <S.A {...props} />,

  ol: (props) => <S.OrderedList {...props} />,
  ul: (props) => <S.UnorderedList {...props} />,

  table: (props) => <S.Table {...props} />,
};

export type MDXLayoutProps = MDXRemoteSerializeResult;

export const MDXLayout: React.FC<MDXLayoutProps> = ({ ...source }) => {
  return (
    <S.MDXLayoutContainer>
      <MDXRemote components={components} {...source} />
    </S.MDXLayoutContainer>
  );
};
