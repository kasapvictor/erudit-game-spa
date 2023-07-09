import { IconCheck } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { $game } from 'entities/game';
import { $players } from 'entities/players';

import { GamePlayer } from 'shared/types';

export const ApplyMoveButton = () => {
  const { classes } = useStyles();

  const { turn } = useStore($game);
  const players = useStore($players);
  const currentPlayer = players[turn as GamePlayer];

  return (
    <ActionIcon className={classes.button} variant="light" disabled={!currentPlayer.moves.size}>
      <IconCheck size="1rem" stroke="0.25rem" />
    </ActionIcon>
  );
};

const useStyles = createStyles((theme) => ({
  button: {
    width: '3rem',
    height: '3rem',
    transform: 'translateY(0%)',
    transition: 'background-color .2s ease',
    backgroundColor: theme.colors.green[5],

    '&:hover': {
      backgroundColor: theme.colors.green[6],
      color: theme.white,
    },

    '&[data-disabled]': {
      backgroundColor: theme.colors.gray[7],
      borderColor: theme.colors.gray[7],
    },
  },
}));
