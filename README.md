# House Rules Mahjong

A simplified version of mahjong that we (well, my family) plays at home. House rules, just the way we were taught as beginners.

Powered by a Node.js server (probably locally hosted). Played on web browsers - one for each player - and designed for mobile. Supports 2-4 human players.

## Basic Ruleset

A short section with information more specific to this ruleset. Assumes some knowledge of how a game of mahjong usually plays (eg turn order, drawing & discarding tiles, interrupting with melds, declaring *Game*).

### Tiles

- 3 suites (dots, bamboos, characters), each containing 4 copies of every number from 1-9
- Winds (north, south, east, west), 4 copies each
- Dragons (red, green, white), 4 copies each

### Melds

- *Chī*: 3 sequential numbers of the same suite
	- Can only reveal a *Chī* with a tile discarded by the player before you
	- Can instead use anyone's discarded tile while declaring *Game*
- *Pèng*: 3 of the same tile
	- Can reveal a *Pèng* using anyone's discarded tile
- *Gàng*: 4 of the same tile
	- Revealed once formed, using either your own drawn tile or anyone's discarded tile, then *Bǔ*
- *Eyes*: 2 of the same tile
	- Can only reveal *Eyes* using anyone's discarded tile while declaring *Game*

Declaring *Game* requires 4 non-*Eyes* and 1 *Eyes*.

### Action Priority

*Chī* < *Pèng* < *Gàng* < *Game*. When multiple players are trying to interrupt with the same action, priority goes to the player whose turn will come soonest.

### Feature Exclusions

- Prevailing & player winds
- Bonus flower/season/animal tiles
- Point scoring system
- Additional *Game* prerequisites
- Complex melds / winning hands
- Wildcard tiles

## Notes

I may wish to implement some stuff like bonus and wildcard tiles in the future, as a way to customise each game's setup. But just from typing up this readme, listing out some of the rules, and considering all the technologies and challenges involved in making the "base" game, this is already looking to be a daunting undertaking
