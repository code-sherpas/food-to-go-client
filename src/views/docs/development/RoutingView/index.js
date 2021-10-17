import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function RoutingView() {
  return (
    <Page title="Routing">
      <ReadMdFile content={content} />
    </Page>
  );
}
