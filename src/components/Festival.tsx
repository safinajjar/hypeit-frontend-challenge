import React from 'react';
import { Button, Card, Image, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { formatDate } from 'src/helpers/formatter';

export type FestivalProps = {
  name: string | null | undefined;
  date: string | null | undefined;
  location: string | null | undefined;
  imageURL: string | null | undefined;
  onFestivalSelect: () => void;
};

export const Festival: React.FC<FestivalProps> = ({
  name,
  date,
  location,
  imageURL,
  onFestivalSelect,
}) => {
  const { t } = useTranslation();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={imageURL} height={160} alt={name || ''} />
      </Card.Section>

      <Stack gap={'xs'} style={{ marginBlockStart: '1em' }}>
        <Text fw={500} size="md">
          {name}
        </Text>

        <Text size="sm">
          {formatDate(date || '')}
          {location ? `, ${location}` : ''}
        </Text>
      </Stack>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onFestivalSelect}
      >
        {t('SHOW_MORE')}
      </Button>
    </Card>
  );
};
