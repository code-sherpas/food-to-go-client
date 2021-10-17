import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function EnvironmentVariablesView() {
  return (
    <Page title="Environment Variables">
      <ReadMdFile content={content} />
    </Page>
  );
}
