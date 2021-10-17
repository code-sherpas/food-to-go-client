import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function TypopgrahyView() {
  return (
    <Page title="Typopgrahy">
      <ReadMdFile content={content} />
    </Page>
  );
}
