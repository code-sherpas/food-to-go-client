import Page from '~/components/Page';
import React, { useState } from 'react';
import { PATH_APP } from '~/routes/paths';
import HeaderDashboard from '~/components/HeaderDashboard';
import { QuillEditor, DraftEditor } from '~/components/Editor';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardHeader, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(3)
  }
}));

// ----------------------------------------------------------------------

function EditorView() {
  const classes = useStyles();
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <Page title="Extra Components | Editor" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Editor"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Editor' }
          ]}
          moreLink={[
            'https://github.com/zenoamaro/react-quill',
            'https://jpuri.github.io/react-draft-wysiwyg'
          ]}
        />

        <Card className={classes.margin}>
          <CardHeader title="Quill Simple Editor" />
          <CardContent>
            <QuillEditor
              simple
              id="simple-editor"
              value={text1}
              onChange={value => setText1(value)}
            />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Quill Simple Editor" />
          <CardContent>
            <QuillEditor
              id="full-editor"
              value={text2}
              onChange={value => setText2(value)}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Draft Editor" />
          <CardContent>
            <DraftEditor />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default EditorView;
