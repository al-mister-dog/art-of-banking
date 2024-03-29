import { Grid } from "@mantine/core";
import Card from "./card";

export default function Layout({
  FlorencePlayers,
  LyonsPlayers,
  selectPlayer,
}) {
  return (
    <>
      <Grid gutter="sm" grow>
        <Grid.Col span={1}>
          <div style={{ height: "30.5rem", overflow: "auto" }}>
            {FlorencePlayers.map((bank) => (
              <div key={bank.id} style={{ marginBottom: "10px" }}>
                <Card bank={bank} selectPlayer={selectPlayer} />
              </div>
            ))}
          </div>
        </Grid.Col>
        <Grid.Col span={1}>
          <div style={{ height: "30.5rem", overflow: "auto" }}>
            {LyonsPlayers.map((bank) => (
              <div key={bank.id} style={{ marginBottom: "10px" }}>
                <Card bank={bank} selectPlayer={selectPlayer} />
              </div>
            ))}
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}
