import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Grid,
  LoadingOverlay,
  Space,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { Fragment } from 'react/jsx-runtime';
import { FestivalType, useQueryFestivals } from 'src/api';
import { Festival } from 'src/components/Festival';

export const Festivals: React.FC = () => {
  const { data: festivals, isLoading, error } = useQueryFestivals({});

  if (isLoading) {
    return <LoadingOverlay visible />;
  }

  if (error) {
    return (
      <Stack>
        <Text>Error loading Festivals</Text>
      </Stack>
    );
  }

  return (
    <Container style={{ marginBlock: '3em' }}>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        placeholder="Search festival by name"
      />

      <Space h="lg" />

      <Grid>
        {festivals?.map((festival: FestivalType) => (
          <Fragment key={festival.id}>
            <Grid.Col span={4}>
              <Festival
                name={festival.name}
                date={festival.start}
                location={festival.location?.city}
                imageURL={festival.image}
              />
            </Grid.Col>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};
