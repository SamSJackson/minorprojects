from datetime import datetime, date

class TransactionWeek:

	def __init__(self, transactions):
		self._transactions = transactions
		self._income_total, self._outgoing_total = self.get_transaction_sum()

	def _same_week(self, date2):
		first_date = self._transactions[0].date
		return first_date.isocalendar()[1] == date2.isocalendar()[1] \
				and first_date.year == date2.year

	def __str__(self):
		output = "["
		for transaction in self._transactions:
			output += str(transaction) + "|"
		output += "]"
		return output

	def __repr__(self):
		output = "["
		for transaction in self._transactions:
			output += transaction.__repr__ + ","
		output += "]"
		return output

	def get_transaction_sum(self):
		income_total, outgoing_total = 0, 0
		for transaction in self._transactions:
			if transaction.from_account:
				outgoing_total += transaction.amount
			else:
				income_total += transaction.amount
		return tuple([round(income_total, 2), round(outgoing_total, 2)])

	def add_to_week(self, transaction):
		if self._same_week(transaction.date):
			self._transactions.append(transaction)
		self._transactions_income_sum, self._transactions_outgoing_sum = self.get_transaction_sum()

	def get_first_transaction_date(self):
		return self._transactions[0].date
	def get_last_transaction_date(self):
		return self._transactions[-1].date

	@property
	def income_total(self):
		return self._income_total

	@property
	def outgoing_total(self):
		return self._outgoing_total

	@property
	def transactions(self):
		return self._transactions
	
	
	

