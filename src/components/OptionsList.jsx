
import Divider from "@mui/material/Divider";

import PropTypes from "prop-types";
import OptionDisplay from "./OptionDisplay";
import { Stack } from "@mui/system";
import { Box, Grid } from "@mui/material";

export default function OptionsList({ currentOptions, categoryName }) {
    return (
        <Box>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {currentOptions.map((o, index) => (
                    <OptionDisplay
                        key={index}
                        name={o.name}
                        imageSrc={o.img}
                        category={categoryName}
                    />
                ))}
            </Grid>
        </Box>

    );
}

OptionsList.propTypes = {
    currentOptions: PropTypes.array,
    categoryName: PropTypes.string,
};
