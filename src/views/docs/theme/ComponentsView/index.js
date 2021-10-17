import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function ComponentsView() {
  return (
    <Page title="Components">
      <ReadMdFile content={content} />
    </Page>
  );
}
