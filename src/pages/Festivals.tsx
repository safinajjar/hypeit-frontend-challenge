import { ChangeEvent, FC, useState } from 'react';
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
import { FestivalType, useQueryFestivals } from 'src/api';
import { Festival } from 'src/components/Festival';
import { SelectedFestival } from 'src/components/SelectedFestival';
import { formatDate } from 'src/helpers/formatter';
import useFestivalFilter from 'src/hooks/useFestivalFilter';

export const Festivals: FC = () => {
  const [search, setSearch] = useState<string>('');
  const { data: festivals, isLoading, error } = useQueryFestivals({});
  const filteredFestivals = useFestivalFilter(festivals, search);
  const [selectedFestival, setSelectedFestival] = useState<FestivalType | null>(
    null
  );

  const handleOnSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnFestivalModalClose = () => {
    setSelectedFestival(null);
  };

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
          <Grid.Col
            key={festival.id}
            span={{
              base: 12,
              xs: 6,
              sm: 6,
              md: 4,
              lg: 4,
            }}
          >
            <Festival
              name={festival.name}
              date={formatDate(festival.start || '')}
              location={festival.location?.city}
              imageURL={festival.image}
              onFestivalSelect={() => setSelectedFestival(festival)}
            />
          </Grid.Col>
        ))}
      </Grid>

      {selectedFestival && (
        <SelectedFestival
          festival={selectedFestival}
          onClose={handleOnFestivalModalClose}
        />
      )}
    </Container>
  );
};
