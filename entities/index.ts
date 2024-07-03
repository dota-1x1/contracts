import * as Match from './match';
import * as Player from './player';
import * as PlayerMatches from './player-matches';
import * as SpetialTypes from './spetial-types';

export const ZOD_Entity = {
  ...Match,
  ...Player,
  ...PlayerMatches,
  ...SpetialTypes,
};
