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
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  Action,
  machineActionAdd,
  machineActionDelete,
  machineActionSelector,
} from "../slices/machineActions/machineActionsSlice";

const MachineActions = () => {
  const [value, setValue] = useState<string>("");

  const [list, setList] = useState<Array<Action>>([]);

  const selectedMachineActions = useAppSelector(machineActionSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setList(selectedMachineActions);
    return () => {
      console.log("component unmounting...");
    };
  }, [selectedMachineActions]);

  function addMachineAction() {
    const newMachineAction = {
      actionId: (list.length + 1).toString(),
      title: value,
    };
    dispatch(machineActionAdd(newMachineAction));
    setValue("");
  }

  function deleteMachineAction() {
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
        <Link underline="hover" href="/events">
          Go to machine events
        </Link>
      </Box>
    </Container>
  );
};

export default MachineActions;
