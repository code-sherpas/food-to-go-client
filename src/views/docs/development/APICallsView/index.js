import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function APICallsView() {
  return (
    <Page title="API Calls">
      <ReadMdFile content={content} />
    </Page>
  );
}
