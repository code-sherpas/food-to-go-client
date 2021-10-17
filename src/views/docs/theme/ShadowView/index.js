import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function ShadowView() {
  return (
    <Page title="Shadow">
      <ReadMdFile content={content} />
    </Page>
  );
}
