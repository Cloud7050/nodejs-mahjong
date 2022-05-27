- Complete Host API, db
- Waiting room create initial page
- Join waiting room or reject (invite validation, player status validation eg already in)
- Waiting room UI
- Connection via Socket.io
- Waiting room player management
- Waiting room two-sided start validation

---

- Rotate device confirmation
- Enter game room
- Display invite code in-game
- Polishing for players to create, join, **rejoin**, be in simultaneous games. Player cap

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

---

### Other Ideas

- Themed colour coding for player numbers, tile outlines for last ownership
