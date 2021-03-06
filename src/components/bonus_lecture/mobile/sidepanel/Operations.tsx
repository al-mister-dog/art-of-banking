import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import ExportCard from "./operations-cards/ExportCard";
import ImportCard from "./operations-cards/ImportCard";
import DrawBillCard from "./operations-cards/DrawBillCard";
import RemitBillCard from "./operations-cards/RemitBillCard";
import { colors } from "../../../../config/colorPalette";

interface Accordions {
  export: boolean;
  import: boolean;
  drawBill: boolean;
  remitBill: boolean;
}

const Operations: React.FunctionComponent<{ selected: any }> = ({
  selected,
}) => {
  const [accordionExpanded, setAccordionExpanded] = useState<Accordions>({
    export: false,
    import: false,
    drawBill: false,
    remitBill: false,
  });

  function toggleAccordion(key: keyof Accordions) {
    const bool = accordionExpanded[key];
    setAccordionExpanded({ ...accordionExpanded, [key]: !bool });
  }
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {selected.type === "exporter" && (
        <Accordion expanded={accordionExpanded.export} sx={{background: "#62120E", color: colors.paper}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: colors.paper}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleAccordion("export")}
          >
            <Typography>Export</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: 0.5, paddingRight: 1 }}>
            <ExportCard
              selected={selected}
              accordionExpanded={accordionExpanded}
              setAccordionExpanded={setAccordionExpanded}
            />
          </AccordionDetails>
        </Accordion>
      )}
      {selected.type === "importer" && (
        <Accordion expanded={accordionExpanded.import} sx={{background: "#62120E", color: colors.paper}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: colors.paper}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleAccordion("import")}
          >
            <Typography>Import</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ImportCard
              selected={selected}
              accordionExpanded={accordionExpanded}
              setAccordionExpanded={setAccordionExpanded}
            />
          </AccordionDetails>
        </Accordion>
      )}
      <Accordion expanded={accordionExpanded.drawBill} sx={{background: "#62120E", color: colors.paper}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: colors.paper}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => toggleAccordion("drawBill")}
        >
          <Typography>Draw Bill</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DrawBillCard
            selected={selected}
            accordionExpanded={accordionExpanded}
            setAccordionExpanded={setAccordionExpanded}
          />
          
        </AccordionDetails>
      </Accordion>
      {selected.type === "banker" && (
        <Accordion expanded={accordionExpanded.remitBill} sx={{background: "#62120E", color: colors.paper}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: colors.paper}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={() => toggleAccordion("remitBill")}
          >
            <Typography>Remit Bill</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RemitBillCard
              selected={selected}
              accordionExpanded={accordionExpanded}
              setAccordionExpanded={setAccordionExpanded}
            />
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

export default Operations;
