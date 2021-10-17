import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function ChangelogView() {
  return (
    <Page title="Changelog">
      <ReadMdFile content={content} />
    </Page>
  );
}
