import { useAppSelector } from "../../../../../app/hooks";
import {
  selectBankers,
  selectTraders,
} from "../../../../../features/renaissance/renaissanceSlice";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";
import ArticlePageMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/ArticlePage";
import ArticlePageDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/ArticlePage";
import { useRouter } from "next/router";

export const texts = {
  title: `Rechange: Part 1`,
  paragraphs: [
    `Now that the bill of exchange has finally been redeemed where do we stand? As far 
        as 'Me' and Salviati are concerned the transaction is over. 'Me' has received payment 
        for goods shipped and Salviati has paid for goods received. But 'You' have negative 
        equity and Tomasso has 1 gold marc that isn't really his. The gold marc that Tomasso has 
        really belongs to 'You' and will have to pay it back somehow. So what is next for the 
        exchange bankers? Some extra background will help to understand what is next.`,
    `At the central fairs already discussed, exchange rates have been decided and published 
        in what is called the 'conto'. The conto announces what 1 gold marc (the bankers unit of 
        exchange) is worth in different currencies. In Florence, a bill for 1 gold marc drawn 
        in Lyons is worth 64 ecus. This amount is known because it is Lyons who announces how much 
        the gold marc is worth in ecus. This is known as 'quoting certain.`,
    `However, the price of ecus in gold marcs is not known and depends on the state of the market. 
        Other bankers in Lyons can bid for bills in ecus and pay the bearer in marcs. This is known as 
        'quoting moveable'. The city that quotes moveable is lower in the hierarchy than the city that 
        quotes certain. This means that 1 gold marc drawn on Lyons could be 64 ecus but the other way 
        round it could be more, say 65.5 ecus. A banker in Lyons then may buy a bill for 65.5 ecus for 
        1 gold marc. In our example, this price has already been decided. There will be a more complex 
        board where multiple exchange bankers can quote different prices.`,
    `There are two new players on the board; a new importer from Florence, Federigo and a new 
        exporter in Lyons, Piero. In this sense they are the mirror image of 'Me' and Salviati. They 
        will make a transaction that amounts to 65.5 ecus/ 1 gold marc. In Davanzati's example Piero 
        exports goods worth 65.5 ecus to Federigo and presents his bill to Tomasso receiving 1 gold 
        marc in return. Quotes and exchange rates have been added for reference.
        `,
  ],
  assignment: `Assignment: Get Piero to ship 1 gold marcs worth of goods to Federigo and redeem the 
      bill to Tomasso. Previous steps should have been completed. If they have not been 
      completed then go back to the beginning of this module. Click refresh to reset the board.`,
};

export default function RemittingBills() {
  const { me, Salviati, Federigo, Piero } = useAppSelector(selectTraders);
  const { you, Tommaso } = useAppSelector(selectBankers);

  const FlorencePlayers = [me, you, Federigo];
  const LyonsPlayers = [Salviati, Tommaso, Piero];

  const isMobile = useMediaQuery(mediaQuery);

  return isMobile ? (
    <ArticlePageMobile
      prevPath="remitting-bills"
      prevLinkTitle="Remitting Bills"
      nextPath="rechange-2"
      nextLinkTitle="Rechange: Part 2"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  ) : (
    <ArticlePageDesktop
      prevPath="remitting-bills"
      prevLinkTitle="Remitting Bills"
      nextPath="rechange-2"
      nextLinkTitle="Rechange: Part 2"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  );
}
