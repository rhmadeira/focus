import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ItemTabForm } from "./ItemTabForm";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const fields = [
  "Identificação",
  "Contato",
  "Endereço",
  "Responsável",
  "Contabilidade",
  "Tokens",
  "Documentos Fiscais",
];

export default function TabForm() {
  const [tab, setTab] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleChangeTab}>
          {fields.map((field, index) => (
            <Tab key={field} label={field} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      <ItemTabForm value={tab} index={0}>
        Item One
      </ItemTabForm>
      <ItemTabForm value={tab} index={1}>
        Item Two
      </ItemTabForm>
      <ItemTabForm value={tab} index={2}>
        Item Three
      </ItemTabForm>
      <ItemTabForm value={tab} index={3}>
        Item One
      </ItemTabForm>
      <ItemTabForm value={tab} index={4}>
        Item Two
      </ItemTabForm>
      <ItemTabForm value={tab} index={5}>
        Item Three
      </ItemTabForm>
      <ItemTabForm value={tab} index={6}>
        Item Two
      </ItemTabForm>
      <ItemTabForm value={tab} index={7}>
        Item Three
      </ItemTabForm>
    </Box>
  );
}
