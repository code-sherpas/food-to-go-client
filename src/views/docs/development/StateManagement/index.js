import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function StateManagementView() {
  return (
    <Page title="State Management">
      <ReadMdFile content={content} />
    </Page>
  );
}
