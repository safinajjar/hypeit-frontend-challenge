import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Container,
  Image,
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
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      ))}

      <h1>Hello World</h1>
    </Container>
  );
};
