import React from 'react';
import { Button, Image, Modal, Space, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FestivalType } from 'src/api';
import { formatDate } from 'src/helpers/formatter';

type SelectedFestivalProps = {
  festival: FestivalType;
  onClose: () => void;
};

export const SelectedFestivalModal: React.FC<SelectedFestivalProps> = ({
  festival,
  onClose,
}) => {
  const { t } = useTranslation();
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
          {festival.location?.city || t('CITY_NOT_AVAILABLE')},{' '}
          {festival.location?.country || t('COUNTRY_NOT_AVAILABLE')}
        </Text>
        <Space />
        <Text>{festival.info}</Text>
        <Space />
        <Text fw={500}>{t('ARTISTS')}:</Text>
        <Text size="sm">
          {festival.artists?.map((artist) => artist.name).join(', ')}
        </Text>
        <Button variant="light" color="blue" onClick={onClose}>
          {t('CLOSE')}
        </Button>
      </Stack>
    </Modal>
  );
};
