import { Box, Button, Container, Link, List, ListItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../core/store/hooks';
import { addAction, deleteAction, getActionsList, machineActionSelector } from './store/machineActionsSlice';
import { Action } from './models';
import { PATH } from '../../core/constants/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const MachineActions = () => {
  const [value, setValue] = useState<string>('');
  const [list, setList] = useState<Array<Action>>([]);

  const { t } = useTranslation();

  const selectedMachineActions = useAppSelector(machineActionSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setList(selectedMachineActions);
  }, [selectedMachineActions]);

  const addMachineAction = () => {
    const newMachineAction = {
      actionId: uuidv4(),
      title: value,
    };
    dispatch(addAction(newMachineAction));
    dispatch(getActionsList(list));
    setValue('');
  };

  const deleteMachineAction = () => {
    dispatch(deleteAction());
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <LanguageSwitcher />
        <h1>{t('QUEUE.TITLE')}</h1>
        <Box
          sx={{
            minWidth: '40%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button data-testid="add-action-btn" variant="contained" onClick={addMachineAction}>
            {t('QUEUE.ENQUEUE')}
          </Button>
          <Button data-testid="delete-action-btn" variant="contained" onClick={deleteMachineAction}>
            {t('QUEUE.DEQUEUE')}
          </Button>
        </Box>
        <TextField
          fullWidth
          inputProps={{ 'data-testId': 'action-input' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label={t('QUEUE.ADD_ACTION')}
          variant="outlined"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <List data-testId="action-list">
            {list.map((item) => {
              return <ListItem key={item.actionId}>{item.title}</ListItem>;
            })}
          </List>
        </Box>
        <Link data-testId="link-event-page" underline="hover" href={PATH.EVENTS_PAGE}>
          {t('QUEUE.GO_TO_EVENTS')}
        </Link>
      </Box>
    </Container>
  );
};

export default MachineActions;
