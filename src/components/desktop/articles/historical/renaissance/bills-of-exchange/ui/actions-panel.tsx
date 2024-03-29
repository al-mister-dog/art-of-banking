import { useState } from "react";
import { Text, Center, Stack, useMantineTheme, Select } from "@mantine/core";

import ActionForms from "./action-forms";
import { cityColor } from "./utils/city-color";

const actionData = {
  me: [
    { value: "export", label: "Export" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  Piero: [
    { value: "export", label: "Export" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  Federigo: [
    { value: "import", label: "Import" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  Salviati: [
    { value: "import", label: "Import" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  you: [
    { value: "remitBill", label: "Remit Bill" },
    { value: "drawBill", label: "Draw Bill" },
  ],
  Tommaso: [
    { value: "remitBill", label: "Remit Bill" },
    { value: "drawBill", label: "Draw Bill" },
  ],
};
export default function ActionsPanel({ player }) {
  const [action, setAction] = useState<string | null>(null);

  return (
    <Stack spacing="xl">
      <Select
        size="xs"
        label={
          <Text size="xs" weight="bold" color={cityColor(player, 9)}>
            Actions
          </Text>
        }
        placeholder="Choose an Action"
        value={action}
        onChange={setAction}
        data={actionData[player.id]}
      />

      {action && <ActionForms action={action} player={player} />}
    </Stack>
  );
}
