import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { TagTable } from '../../components/TagTable';
import { TagForm } from '../../components/TagForm';
import { TagContextType, useTag } from '../../context/tag';

export function Home() {
  const { tags, fetchTags } = useTag() as TagContextType;

  return (
    <Container component="main">
      <Grid container spacing={2} columns={16}>
        <Grid
          item
          xs={8}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: '1px solid #999',
          }}
        >
          <TagForm fetchTags={fetchTags} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TagTable tags={tags} />
        </Grid>
      </Grid>
    </Container>
  );
}
