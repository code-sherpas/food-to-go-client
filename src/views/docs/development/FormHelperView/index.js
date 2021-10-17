import React from 'react';
import Page from '~/components/Page';
import ReadMdFile from '~/components/ReadMdFile';
import content from './content.md';

// ----------------------------------------------------------------------

export default function FormHelperView() {
  return (
    <Page title="Form Helper">
      <ReadMdFile content={content} />
    </Page>
  );
}
