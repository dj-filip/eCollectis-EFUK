import { IconButton } from '@mui/material';
import { Edit, DeleteOutlined, PrintOutlined, VisibilityOutlined } from '@mui/icons-material';

const IconBtn = ({ type, href, onClick  }) => {

  return (
    <IconButton href={href} onClick={onClick}>
      {type == "edit" ? <Edit />
      : type == "delete" ? <DeleteOutlined />
      : type == "print" ? <PrintOutlined /> 
      : type == "view" ? <VisibilityOutlined /> 
      : ""}
    </IconButton>
  )
}

export default IconBtn;