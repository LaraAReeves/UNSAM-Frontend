import { Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Nav() {
  const navigate = useNavigate()

  return (
    <Typography> <a onClick={() => navigate("/welcome")}>HOLIS</a> </Typography>
  )
}