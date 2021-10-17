import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function IntroductionView() {
  return (
    <Page title="Introduction">
      <ReadMdFile content={content} />
    </Page>
  );
}
