import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../app/hooks";
import {
  selectBankers,
  selectTraders,
  drawBill,
} from "../../../../../../../../features/renaissance/renaissanceSlice";
import { useState } from "react";
import { Stack, Button, Select, Text, useMantineTheme } from "@mantine/core";
import { cityColor } from "../utils/city-color";

const DrawBill: React.FunctionComponent<{
  selected: any;
}> = ({ selected }) => {
  const dispatch = useAppDispatch();
  const theme = useMantineTheme();

  const { me, Salviati, Federigo, Piero } = useAppSelector(selectTraders);
  const { you, Tommaso } = useAppSelector(selectBankers);

  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedValuePlayer, setSelectedValuePlayer] = useState(null);

  const bankersArray = [you, Tommaso, Salviati, me, Federigo, Piero];

  const selectedBankers = bankersArray
    .filter((t) => {
      if (selectedBill) {
        return (
          (selected.id !== t.id &&
            selected.city === t.city &&
            selectedBill.dueFrom === t.id) ||
          (selected.id !== t.id &&
            selected.city === t.city &&
            t.type === "banker")
        );
      } else {
        return (
          selected.id !== t.id &&
          selected.city === t.city &&
          t.type === "banker"
        );
      }
    })
    .map((t) => {
      return { value: t.id, label: t.id };
    });

  const bills = selected.assets
    .filter((asset) => asset.paid !== true)
    .map((b) => {
      return {
        value: b,
        label: `${b.amount}: Due From ${b.dueFrom}, ${b.city}`,
      };
    });

  const onClickDrawBill = () => {
    dispatch(
      drawBill({
        payee: selected,
        drawee: bankersArray.find((t) => t.id === selectedValuePlayer),
        bill: selectedBill,
      })
    );
    setSelectedValuePlayer(null);
    setSelectedBill(null);
  };

  return (
    <Stack>
      {selected.assets.length > 0 ? (
        <>
          <Select
            size="xs"
            label={
              <Text size="xs" weight="bold" color={cityColor(selected, 9)}>
                Bill To Redeem
              </Text>
            }
            placeholder="Select Bill To Redeem"
            value={selectedBill}
            onChange={(val) => setSelectedBill(val)}
            data={bills}
          />
          <Select
            size="xs"
            label={
              <Text size="xs" weight="bold" color={cityColor(selected, 9)}>
                Draw Bill On
              </Text>
            }
            placeholder="Local Exchange Banker, or Merchant If in Same City"
            value={selectedValuePlayer}
            onChange={(val) => setSelectedValuePlayer(val)}
            data={selectedBankers}
          />

          <Button
            variant="filled"
            color={`${cityColor(selected)}`}
            disabled={!selectedValuePlayer || !selectedBill}
            onClick={onClickDrawBill}
          >
            Draw Bill
          </Button>
        </>
      ) : (
        <Text>There are no bills to draw</Text>
      )}
    </Stack>
  );
};

export default DrawBill;
