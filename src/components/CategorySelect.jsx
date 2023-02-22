import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { useContext, useState } from "react";
import { CATEGORIES } from '../data'
import UserSelectionContext from "../contexts/UserSelectionContext";
import OptionsContext from "../contexts/OptionsContext";
import AvailableOptions from "../data";

const categoryNames = [...CATEGORIES];

export default function CategorySelect() {
    const optionsContext = useContext(OptionsContext);
    const userSelectionContext = useContext(UserSelectionContext);

    const [selectedCategory, setSelectedCategory] = useState(
        categoryNames[0].toLowerCase()
    );

    const handleCategorySelectChange = (event) => {
        const newCategory = event.target.value.toLowerCase();

        setSelectedCategory(newCategory);

        userSelectionContext.setUserSelections({
            ...userSelectionContext,
            currentCategoryName: newCategory,
        });
        optionsContext.setOptions({
            value: AvailableOptions[newCategory],
            currentCategory: newCategory,
        });
    };

    return (
        <Box sx={{ flexGrow: 1, minWidth: 120 }}>
            <FormControl fullWidth >
                <InputLabel >Categories</InputLabel>
                <Select
                    autoWidth
                    value={selectedCategory}
                    defaultValue={selectedCategory}
                    label="Categories"
                    onChange={handleCategorySelectChange}
                >
                    {categoryNames.map((category, index) => (
                        <MenuItem key={index} value={category.toLowerCase()}>
                            {category.toLocaleUpperCase()}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Box>
    );
}
