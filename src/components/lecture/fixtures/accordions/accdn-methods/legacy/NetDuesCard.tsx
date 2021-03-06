import { useAppSelector, useAppDispatch } from "../../../../../../app/hooks";
import {
  selectParties,
  netCorrespondingDues,
} from "../../../../../../features/lectures/lecturesSlice";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { Accordions } from "../../types";
import { IBank } from "../../../../../../domain/types";
import ChoosePlayer from "../../dialogs/ChoosePartyDialog";
import CardButton from "../../../../../ui/CardButton";
import { findOwedandOweingBanks } from "../../../../../../helpers/filters";
import { deCamelize } from "../../../../../../helpers/parsers";
import { colors } from "../../../../../../config/colorPalette";
import { netAmount } from "../../../../../../helpers/utils";

const NetDuesCard: React.FunctionComponent<{
  selected: any;
  accordionExpanded: Accordions;
  setAccordionExpanded: (v: Accordions) => void;
}> = ({ selected, accordionExpanded, setAccordionExpanded }) => {
  const dispatch = useAppDispatch();
  const method = "Net Dues";
  const parties = useAppSelector(selectParties);
  let partiesArray: IBank[] = [];
  for (const key in parties) {
    partiesArray = [...partiesArray, parties[key]];
  }
  const selectedParties = findOwedandOweingBanks(selected, partiesArray);
  const [selectedValueTo, setSelectedValueParty] = useState<IBank | null>(
    null
  );
  const [openTo, setOpenTo] = useState(false);
  const [selectedValueAmount, setSelectedValueAmount] = useState<string>("");

  const handleClickOpenTo = () => {
    setOpenTo(true);
  };
  const handleCloseTo = () => {
    setOpenTo(false);
  };

  function onClickNetDues() {
    dispatch(netCorrespondingDues({ p1: selected, p2: selectedValueTo }));
  }

  useEffect(() => {
    if (selectedValueTo) {
      const selectedAmount = netAmount(selectedValueTo, selected);
      if (selectedAmount) {
        setSelectedValueAmount(selectedAmount);
      }
    }
  }, [selectedValueTo]);
  return (
    <Box>
      <ChoosePlayer
        setSelectedValueParty={setSelectedValueParty}
        open={openTo}
        onClose={handleCloseTo}
        selectedBankers={selectedParties}
        method={method}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <CardButton
            variant="contained"
            onClick={handleClickOpenTo}
            sx={{ width: "130px", marginBottom: "5px" }}
          >
            Net Dues Of
          </CardButton>
          <Typography
            variant="h6"
            sx={{ color: colors.accordionTextColor, paddingLeft: "7px" }}
          >
            Dues After Net:
          </Typography>
          {/* <CardButton onClick={onClickNetDues}>Net Dues</CardButton> */}
        </div>
        <div
          style={{
            alignSelf: "flex-end",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ margin: 0.75 }}>
            {selectedValueTo ? `${deCamelize(selectedValueTo.id)}` : ` `}
          </Typography>
          <Typography sx={{ margin: 0.75 }}>
            {selectedValueAmount ? `${selectedValueAmount}` : `...`}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <CardButton
          variant="contained"
          disabled={!selectedValueTo}
          onClick={onClickNetDues}
        >
          Ok
        </CardButton>
      </div>
    </Box>
  );
};

export default NetDuesCard;
