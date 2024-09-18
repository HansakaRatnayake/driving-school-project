import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

function TrainingForm() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
    const {
        target: { value },
    } = event;
    setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
    };
  return (
    <div>
        <DialogTitle>Add New Training</DialogTitle>
            <DialogContent>
            <div className="flex w-full">
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Training Name"
                    fullWidth
                    variant="outlined"
                />
            </div>

            <div className="flex w-full justify-between gap-2">
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="Price"
                    name="Price"
                    label="Training Price"
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="deuartion"
                    name="duration"
                    label="Training Duration"
                    variant="outlined"

                />
           </div>
           <div className="flex w-full">
                <FormControl sx={{ width: '100%' }}
                margin="dense"
                >
                
                    <InputLabel id="demo-multiple-chip-label">Select Trainers</InputLabel>
                    <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
           </div>
           <div className="flex w-full">
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="description"
                    name="description"
                    label="Description Here"
                    fullWidth
                    variant="outlined"
                    multiline
                    maxRows={6}
                />
            </div>

            <div className="flex w-full">
            <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="image"
                    name="image"
                    fullWidth
                    variant="outlined"
                    type='file'
                />
            </div>


            </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
    </div>
  )
}

export default TrainingForm;