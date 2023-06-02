import {
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  Action,
  machineActionAdd,
  machineActionDelete,
  machineActionSelector,
} from "../slices/machineActions/machineActionsSlice";
import { EVENTS_PAGE } from "../constants/routes";

const MachineActions = () => {
  const [value, setValue] = useState<string>("");

  const [list, setList] = useState<Array<Action>>([]);

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
    dispatch(machineActionAdd(newMachineAction));
    setValue("");
  }

  const deleteMachineAction = () => {
    dispatch(machineActionDelete());
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>Machine Actions in Queue</h1>
        <Box
          sx={{
            minWidth: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={addMachineAction}>
            enqueue
          </Button>
          <Button variant="contained" onClick={deleteMachineAction}>
            dequeue
          </Button>
        </Box>
        <TextField
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Add action to queue"
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List>
            {list.map((item) => {
              return <ListItem key={item.actionId}>{item.title}</ListItem>;
            })}
          </List>
        </Box>
        <Link underline="hover" href={EVENTS_PAGE}>
          Go to machine events
        </Link>
      </Box>
    </Container>
  );
};

export default MachineActions;
