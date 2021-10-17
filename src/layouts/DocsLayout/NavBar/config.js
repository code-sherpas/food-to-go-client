import React from 'react';
import { PATH_DOCS } from '~/routes/paths';
import { MLabel } from '~/@material-extend';

// ----------------------------------------------------------------------

export default [
  {
    subheader: 'getting started',
    items: [
      { title: 'introduction', href: PATH_DOCS.introduction },
      { title: 'quick start', href: PATH_DOCS.started }
    ]
  },
  {
    subheader: 'theme UI',
    items: [
      { title: 'color', href: PATH_DOCS.color },
      { title: 'typography', href: PATH_DOCS.typography },
      { title: 'icon', href: PATH_DOCS.icon },
      { title: 'shadows', href: PATH_DOCS.shadows },
      { title: 'components', href: PATH_DOCS.components },
      { title: '!important', href: PATH_DOCS.important }
    ]
  },
  {
    subheader: 'development',
    items: [
      { title: 'routing', href: PATH_DOCS.routing },
      { title: 'environment variables', href: PATH_DOCS.environmentVariables },
      { title: 'state management', href: PATH_DOCS.stateManagement },
      { title: 'API calls', href: PATH_DOCS.apiCalls },
      { title: 'analytics', href: PATH_DOCS.analytics },
      { title: 'authentication', href: PATH_DOCS.authentication },
      { title: 'multi language', href: PATH_DOCS.multiLanguage },
      { title: 'form helper', href: PATH_DOCS.formHelper }
    ]
  },
  {
    subheader: 'support & changelog',
    items: [
      { title: 'support', href: PATH_DOCS.support },
      {
        title: 'changelog',
        href: PATH_DOCS.changelog,
        info: (
          <MLabel
            variant="filled"
            color="info"
            sx={{ textTransform: 'lowercase' }}
          >
            v1.1.0
          </MLabel>
        )
      }
    ]
  }
];
