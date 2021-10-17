import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function AnalyticsView() {
  return (
    <Page title="Analytics">
      <ReadMdFile content={content} />
    </Page>
  );
}
