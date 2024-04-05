import { IconButton } from '@mui/material';
import { Edit, DeleteOutlined, PrintOutlined, VisibilityOutlined, ArrowDropDownOutlined, ArrowDropUpOutlined } from '@mui/icons-material';

const IconBtn = ({ type, href, onClick, sx  }) => {

  return (
    <IconButton href={href} onClick={onClick} sx={sx}>
      {type == "edit" ? <Edit />
      : type == "delete" ? <DeleteOutlined />
      : type == "print" ? <PrintOutlined /> 
      : type == "view" ? <VisibilityOutlined /> 
      : type == "drop-down" ? <ArrowDropDownOutlined sx={{ fill: "#3AD1E8"}}/>
      : type == "drop-up" ? <ArrowDropUpOutlined sx={{ fill: "#3AD1E8"}}/>
      : ""}
    </IconButton>
  )
}

export default IconBtn;