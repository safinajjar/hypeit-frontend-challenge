import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  LoadingOverlay,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useQueryFestivals } from 'src/api';

export const Festivals: React.FC = () => {
  const { data: festivals, isLoading, error } = useQueryFestivals({});

  console.log(festivals);

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
    <Container className="content" style={{ marginBlock: '3em' }}>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        placeholder="Search festival by name"
      />

      {festivals?.map((festival) => (
        
      ))}

      <h1>Hello World</h1>
    </Container>
  );
};
