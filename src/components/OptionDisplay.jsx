import { Box, Button, FormControl, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
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
        <Grid item xs={2} >

            <IconButton value={imageSrc} name={name} onClick={handleSelection}>
                {name}<span> <Avatar src={imageSrc} /></span>
            </IconButton>






        </Grid>

    );
}