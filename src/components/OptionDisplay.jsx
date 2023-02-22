import { Box, Button } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import UserSelectionContext from "../contexts/UserSelectionContext";

export default function OptionDisplay({ name, imageSrc, category }) {
    const userSelectionContext = useContext(UserSelectionContext);

    const handleSelection = (e) => {
        const newSelection = { ...userSelectionContext };
        newSelection[category] = e.target.value;

        userSelectionContext.setUserSelections({ ...newSelection });
    };

    return (
        <Box>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="the options image" src={imageSrc} />
                    <ListItemText>
                        <Button value={imageSrc} onClick={handleSelection}>
                            {name}
                        </Button>
                    </ListItemText>
                </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
        </Box>
    );
}
