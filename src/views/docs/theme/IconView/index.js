import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function IconView() {
  return (
    <Page title="Icon">
      <ReadMdFile content={content} />
    </Page>
  );
}
