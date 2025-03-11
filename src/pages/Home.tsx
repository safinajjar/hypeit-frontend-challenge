import React from 'react';
import { Button, Stack, Text, Title } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack className="content" justify="center">
        <Title order={1} mb="lg">
          {t('HEADLINE')}
        </Title>
        <Stack gap="sm" align="center">
          <Text>{t('GREETING')}</Text>
          <Text>
            <Trans
              i18nKey="INFO"
              components={{
                a: (
                  <a
                    href="https://github.com/hypeIT-GmbH/hypeit-frontend-challenge/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </Text>
          <Button variant="subtle">
            <Link to="/festivals">{t('GO_TO_TASK')}</Link>
          </Button>
        </Stack>
      </Stack>
    </>
  );
};
