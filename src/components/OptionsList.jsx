import List from "@mui/material/List";

import PropTypes from "prop-types";
import OptionDisplay from "./OptionDisplay";

export default function OptionsList({ currentOptions, categoryName }) {
    return (
        <List>
            {currentOptions.map((o, index) => (
                <OptionDisplay
                    key={index}
                    name={o.name}
                    imageSrc={o.img}
                    category={categoryName}
                />
            ))}
        </List>
    );
}

OptionsList.propTypes = {
    currentOptions: PropTypes.array,
};
