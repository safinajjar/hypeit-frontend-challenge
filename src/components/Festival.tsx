import { FC } from 'react';
import { Button, Card, Group, Image, Text } from '@mantine/core';

// name, date, location, image

export type FestivalProps = {
  name: string;
  date: string;
  location: string;
  imageURL: string;
};

export const Festival: FC<FestivalProps> = ({
  name,
  date,
  location,
  imageURL,
}: FestivalProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageURL} height={160} alt={name} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Text fw={500}>{date}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {location}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        show more
      </Button>
    </Card>
  );
};
