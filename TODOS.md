- Basic server/client setup with React start page
- Initial start page UI
- Next.js routing from start to game page via button
- Browser UUID generation, storage & connection via Socket.io
- Game creation with generated code, display code in-game, server recognise ongoing game's code & players
- Server data persistence per code
- Polishing for players to create, join, **rejoin**, be in simultaneous games. Player cap
- Player naming! Two-sided validation

---

- Starting game state upon game creation on server side
- UI based on game state on client side
- Create & host pixel art assets
- UI for dice, turn text, instruction text, action buttons, hand & picked up tiles, melds etc

---

- Server starting dice roll, turn logic & tracking as part of game state. Validation of incoming API requests (ignore if bad, logging)
- Client permit actions based on game state
- Client emit actions, server broadcast actions, clients' display update
- Win, lose, draw detection
- Alpha test!

---

- Hand rearrangement & animations for everyone
- Animations when transitioning game states, eg discard or draw
- Polishing
- Beta test!
