import React, { useState } from 'react';
import Page from '~/components/Page';
import { PATH_APP } from '~/routes/paths';
import {
  UploadAvatar,
  UploadMultiFile,
  UploadSingleFile
} from '~/components/Upload';
import HeaderDashboard from '~/components/HeaderDashboard';
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

function UploadView() {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  return (
    <Page title="Extra Components | Upload" className={classes.root}>
      <Container maxWidth="lg">
        <HeaderDashboard
          heading="Upload"
          links={[
            { name: 'Dashboard', href: PATH_APP.root },
            { name: 'Upload' }
          ]}
          moreLink="https://react-dropzone.js.org/#section-basic-example"
        />

        <Card className={classes.margin}>
          <CardHeader title="Upload MultiFile" />
          <CardContent>
            <UploadMultiFile value={files} onChange={setFiles} />
          </CardContent>
        </Card>

        <Card className={classes.margin}>
          <CardHeader title="Upload Single File" />
          <CardContent>
            <UploadSingleFile value={file} onChange={setFile} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Upload Avatar" />
          <CardContent>
            <UploadAvatar value={photoURL} onChange={setPhotoURL} />
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
}

export default UploadView;
