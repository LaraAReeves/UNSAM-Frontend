import { Button, ButtonProps } from "@mui/material"

export const ProfileButton = (props: ButtonProps) => {
  return <Button
    variant="contained"
    sx={
      {
        color: 'white',
        width: { xs: '90%', sm: '50%', md:'25%' }
      }}
    {...props}
  />
}