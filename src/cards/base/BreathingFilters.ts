import {IProjectCard} from '../IProjectCard';
import {Tags} from '../Tags';
import {Card} from '../Card';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {Game} from '../../Game';
import {CardName} from '../../CardName';
import {CardRequirements} from '../CardRequirements';
import {GlobalParameter} from '../../GlobalParameter';

export class BreathingFilters extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.BREATHING_FILTERS,
      tags: [Tags.SCIENCE],
      cost: 11,

      metadata: {
        description: 'Requires 7% oxygen.',
        cardNumber: '114',
        requirements: CardRequirements.builder((b) => b.oxygen(7)),
        victoryPoints: 2,
      },
    });
  }
  public canPlay(player: Player, game: Game): boolean {
    return game.checkMinRequirements(player, GlobalParameter.OXYGEN, 7);
  }
  public play() {
    return undefined;
  }
  public getVictoryPoints() {
    return 2;
  }
}
