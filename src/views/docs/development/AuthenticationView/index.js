import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function AuthenticationView() {
  return (
    <Page title="Authentication">
      <ReadMdFile content={content} />
    </Page>
  );
}
