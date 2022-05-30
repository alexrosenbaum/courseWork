 import Switch from '@mui/material/Switch';

interface SwitchProps {
  color:any;

  setColor:Function;
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches(props:SwitchProps) {
  const { color,setColor} = props;
  return (

    <div>
      <Switch onClick={() => setColor(!color) } {...label} defaultChecked />
    
    </div>
  );
}
