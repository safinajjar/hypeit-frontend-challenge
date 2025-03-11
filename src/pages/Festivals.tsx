import { ChangeEvent, useState } from 'react';
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
import useFestivalFilter from 'src/hooks/useFestivalFilter';

export const Festivals: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: festivals, isLoading, error } = useQueryFestivals({});
  const filteredFestivals = useFestivalFilter(festivals, search);

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

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
        value={search}
        onChange={handleOnSearchChange}
      />

      <Space h="lg" />

      <Grid>
        {filteredFestivals?.map((festival: FestivalType) => (
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
