from transaction import Transaction
from datetime import date

class TransactionWeek:
	def __init__(self, transaction_list):
		self._transaction_list = transaction_list

	def month_total(self):
		income_total = 0
		outcome_total = 0
		for transaction in self._transaction_list:
			if (transaction.is_from_account):
				outcome_total += transaction.amount
			else:
				income_total += transaction.amount
		return tuple([round(income_total, 2), round(outcome_total, 2)])