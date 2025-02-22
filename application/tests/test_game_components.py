import unittest
from application.app.game import GameSession, Player, Card, get_users
from application.app.game import CARDS_IN_DECK, SIGNS, HEARTS, SPADES, DIAMONDS, CLUBS, DEF, OFF


class SessionGameTestCase(unittest.TestCase):
    def setUp(self) -> None:
        user_data = get_users()
        self.game_session = GameSession(user_data=user_data, game_index=1)
        self.players = self.game_session.players
        players_cards = []
        for player in self.players:
            players_cards.extend(player.cards)
        self.all_cards = set(self.game_session.cards + players_cards + [self.game_session.trump])

    def test_deck(self):
        self.assertEqual(len(self.all_cards), CARDS_IN_DECK)
        self.assertTrue(all([card.val in range(6, 15) for card in self.all_cards]))
        for sign in SIGNS:
            self.assertEqual(CARDS_IN_DECK//4, len([card for card in self.all_cards if card.suit == sign]))

    def test_create_players(self):
        for test_player in self.players:
            self.assertTrue(isinstance(test_player, Player))
            self.assertEqual(len(test_player.cards), 6)

    def tearDown(self) -> None:
        del self.game_session


class CardsTestCase(unittest.TestCase):
    def setUp(self) -> None:
        user_data = get_users()
        self.game_session = GameSession(user_data=user_data, game_index=1)
        self.game_session.trump = Card(9, HEARTS, False)
        self.trump = self.game_session.trump

    def test_card_is_trump(self):
        test_card = Card(6, HEARTS, self.trump)
        self.assertTrue(test_card.is_trump)

    def test_gt_between_cards(self):
        self.assertTrue(Card(6, HEARTS, self.trump) > Card(10, SPADES, self.trump))
        self.assertTrue(Card(10, SPADES, self.trump) > Card(8, SPADES, self.trump))
        self.assertTrue(Card(13, DIAMONDS, self.trump) > Card(6, DIAMONDS, self.trump))

    def test_min_trump_card(self):
        my_card = Card(10, HEARTS, self.trump)
        test_cards = [
            Card(num, suit, self.trump)
            for num, suit in [(10, DIAMONDS), (11, HEARTS), (8, SPADES), (6, CLUBS)]
        ]
        test_cards.append(my_card)
        min_card = Card.min_trump_card(test_cards)
        self.assertEqual(min_card, my_card)

    def tearDown(self) -> None:
        del self.game_session


class PairPlayerMoveTestCase(unittest.TestCase):

    def full_the_table(self):
        for table_place, card_data in self.table.items():
            off_card, def_card = card_data.keys()
            self.table[table_place][off_card] = table_place
            self.table[table_place][def_card] = table_place

    def setUp(self) -> None:
        user_data = get_users()
        self.game_session = GameSession(user_data=user_data, game_index=1)
        self.game_session.trump = Card(9, HEARTS, False)
        self.trump = self.game_session.trump
        self.pair = self.game_session.pair
        self.table = self.pair.table

    def test_attacker_is_first_player(self):
        first_player = self.game_session.players[0]
        self.assertEqual(first_player, self.pair.attacker)

    def test_move_first_attacker(self):
        test_player = self.pair.get_current_player()
        self.assertEqual(test_player, self.pair.attacker)

    def test_move_then_defender(self):
        self.pair.table[2][OFF] = Card(10, DIAMONDS, self.trump)
        test_player = self.pair.get_current_player()
        self.assertEqual(test_player, self.pair.defender)

    def test_move_then_again_attacker(self):
        self.pair.table[2] = {OFF: Card(10, DIAMONDS, self.trump), DEF: Card(7, SPADES, self.trump)}
        test_player = self.pair.get_current_player()
        self.assertEqual(test_player, self.pair.attacker)

    def test_last_move_for_defender(self):
        self.full_the_table()
        self.table[6][DEF] = None
        test_player = self.pair.get_current_player()
        self.assertEqual(test_player, self.pair.defender)

    def tearDown(self) -> None:
        del self.game_session


class PairPlayerLeaveTestCase(unittest.TestCase):
    def setUp(self) -> None:
        user_data = get_users()
        self.game_session = GameSession(user_data=user_data, game_index=1)
        self.game_session.trump = Card(9, HEARTS, False)
        self.trump = self.game_session.trump
        self.pair = self.game_session.pair

    def test_give_cards_to_players(self):
        test_player = self.game_session.players[0]
        test_player.cards = [1, 2, 3, 4]
        self.pair.give_cards_to_players()
        self.assertEqual(len(test_player.cards), 6)

    def test_replace_players_with_loser(self):
        test_player = self.game_session.players[0]
        expected_index = -len(self.pair.pair_players)
        self.pair.replace_players()
        self.assertEqual(self.game_session.players[expected_index], test_player)

    def test_replace_with_no_losers(self):
        test_player = self.game_session.players[0]
        self.pair.leave_loser()
        expected_index = -len(self.pair.pair_players)
        self.pair.replace_players()
        self.assertEqual(self.game_session.players[expected_index], test_player)

    def tearDown(self) -> None:
        del self.game_session


class PlayerAttackerDefenderTestCase(unittest.TestCase):
    def setUp(self):
        user_data = get_users()
        self.game_session = GameSession(user_data=user_data, game_index=1)
        self.pair = self.game_session.pair
        self.first_player = self.game_session.players[0]
        self.pair.attacker = self.first_player
