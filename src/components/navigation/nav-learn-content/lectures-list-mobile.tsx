import { useAppSelector } from "../../../app/hooks";
import { selectActions } from "../../../features/actions/actionsSlice";
import {
  Box,
  Center,
  createStyles,
  Group,
  Tabs,
  useMantineTheme,
} from "@mantine/core";
import { lectureRoutes } from "../../../config/routes/lectureRoutes";
import { Accordion, List, Text } from "@mantine/core";
import Link from "next/link";
import { School } from "tabler-icons-react";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  listItem: {
    borderLeft: "1px solid gray",
    padding: "5px 0px 5px 20px",
    "&:hover": {
      backgroundColor: theme.colors.violet[0],
      borderLeft: "1px solid blue",
    },
  },
}));

export default function LecturesContent({ closeDrawer }) {
  return (
    <Box>
      <Box
        style={{
          border: `1px solid ${colors.muiGray}`,
          borderRadius: 5,
          boxShadow: "inset 0 5px 8px -5px rgb(0 0 0 / 5%)",
        }}
      >
        <Box mt={10}>
          <Center>
            <Group>
              <School color="purple" />
              <Text style={{ color: colors.text }} weight="bold">
                Lectures
              </Text>
            </Group>
          </Center>
        </Box>
        <Tabs mt={10} color="violet" variant="pills" defaultValue="lectures">
          <Tabs.List position="center">
            <Tabs.Tab value="lectures">
              <Link href="/lectures">Banking</Link>
            </Tabs.Tab>
            <Tabs.Tab value="finance">Finance</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="lectures" pt="xs">
            <MoneyAndBankingLectures closeDrawer={closeDrawer} />
          </Tabs.Panel>
          <Tabs.Panel value="finance" pt="xs">
            <Text>Finance Course Coming Soon...</Text>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Box>
  );
}

function MoneyAndBankingLectures({ closeDrawer }) {
  const { currentLectureId } = useAppSelector(selectActions);
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Accordion variant="filled">
      {lectureRoutes.routes.map((route) => {
        const { id, title, path, routes } = route;
        return (
          <Accordion.Item value={title} key={id}>
            <Accordion.Control>
              <Link
                href={{
                  pathname: path,
                  query: { id },
                }}
              >
                <Text size={14.2} weight={500}>
                  {title}
                </Text>
              </Link>
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {routes.map((route: any) => {
                  const { id, title, path } = route;

                  return (
                    <div key={id} onClick={closeDrawer}>
                      <List.Item
                        className={classes.listItem}
                        style={{
                          cursor: "pointer",
                          background:
                            currentLectureId === id
                              ? theme.colors.violet[1]
                              : "",
                        }}
                      >
                        <Link
                          href={{
                            pathname: `/lectures${path}`,
                            query: { path, id },
                          }}
                          as={`/lectures${path}`}
                          passHref
                        >
                          <Text size={13.9}>{title}</Text>
                        </Link>
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
