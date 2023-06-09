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
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import {
  Event,
  machineEventAdd,
  machineEventDelete,
  machineEventSelector,
} from "./store/machineEventsSlice";
import { PATH } from "../../core/constants/navigation";
import { useTranslation } from "react-i18next";

const MachineEvents = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<Array<Event>>([]);

  const { t } = useTranslation();

  const selectedMachineEvents = useAppSelector(machineEventSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setList(selectedMachineEvents);
  }, [selectedMachineEvents]);

  const addMachineEvent = () => {
    const newMachineEvent = {
      eventId: uuidv4(),
      title: value,
    };
    dispatch(machineEventAdd(newMachineEvent));
    setValue("");
  };

  const deleteMachineEvent = () => {
    dispatch(machineEventDelete());
  };

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
        <h1>{t("STACK.STACK_TITLE")}</h1>
        <Box
          sx={{
            minWidth: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{ backgroundColor: "orange" }}
            variant="contained"
            onClick={addMachineEvent}
            data-testId="add-event-btn"
          >
            {t("STACK.PUSH")}
          </Button>
          <Button
            sx={{ backgroundColor: "orange" }}
            variant="contained"
            onClick={deleteMachineEvent}
            data-testId="delete-event-btn"
          >
            {t("STACK.POP")}
          </Button>
        </Box>
        <TextField
          fullWidth
          inputProps={{ "data-testId": "event-input" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label={t("STACK.ADD_EVENT")}
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <List data-testId="event-list">
            {list.map((item) => (
              <ListItem sx={{ color: "red" }} key={item.eventId}>
                {item.title}
              </ListItem>
            ))}
          </List>
        </Box>
        <Link
          data-testId="link-main-page"
          color="orange"
          underline="hover"
          href={PATH.MAIN_PAGE}
        >
          {t("STACK.GO_TO_MAIN_PAGE")}
        </Link>
      </Box>
    </Container>
  );
};

export default MachineEvents;
