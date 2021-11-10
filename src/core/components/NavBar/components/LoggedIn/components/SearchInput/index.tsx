import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./style";

export const SearchInput = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Paper component='form' className={classes["search-input"]}>
      <IconButton className='icon-button' type='submit' disabled>
        <SearchIcon className='search-icon'/>
      </IconButton>
      <InputBase
        className='input-base'
        placeholder='Search ...'
        spellCheck={false}
      />
    </Paper>
  );
};
