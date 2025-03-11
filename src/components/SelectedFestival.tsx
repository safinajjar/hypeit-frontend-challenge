import { FC } from 'react';
import { Button, Image, Modal, Space, Stack, Text } from '@mantine/core';
import { FestivalType } from 'src/api';
import { formatDate } from 'src/helpers/formatter';

type SelectedFestivalProps = {
  festival: FestivalType;
  onClose: () => void;
};

export const SelectedFestival: FC<SelectedFestivalProps> = ({
  festival,
  onClose,
}) => {
  return (
    <Modal
      size="lg"
      title={festival.name}
      opened={!!festival}
      onClose={() => onClose}
    >
      <Stack gap="md">
        <Image src={festival.image} radius="md" alt={festival.name || ''} />
        <Text size="sm">
          {formatDate(festival.start || '')} - {formatDate(festival.end || '')}
        </Text>
        <Text fw={500}>
          {festival.location?.city}, {festival.location?.country}
        </Text>
        <Space />
        <Text>{festival.info}</Text>
        <Space />
        <Text fw={500}>Artists:</Text>
        <Text size="sm">
          {festival.artists?.map((artist) => artist.name).join(', ')}
        </Text>
        <Button variant="light" color="blue" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Modal>
  );
};
