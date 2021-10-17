import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function QuickStartView() {
  return (
    <Page title="Quick Start">
      <ReadMdFile content={content} />
    </Page>
  );
}
